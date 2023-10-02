#include <string>
#include <iostream>
#include <thread>
#include <vector>
#include<winsock.h>
#include <sys/time.h>
#include <sys/types.h>
#include <errno.h>
#include <fcntl.h>
#include <stdio.h>
#include <netdb.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <time.h>

using namespace std;

static bool port_is_open(string ip, int port){

	struct sockaddr_in addr_s;
    const char* addr = ip.c_str();
    short int fd=-1;
    fd_set fdset;
    struct timeval tv;
    int rc;
    int so_error;
    socklen_t len;
    struct timespec tstart={0,0}, tend={0,0};
    int seconds = 1;

    addr_s.sin_family = AF_INET;
    addr_s.sin_addr.s_addr = inet_addr(addr);
    addr_s.sin_port = htons(port);

    clock_gettime(CLOCK_MONOTONIC, &tstart);

    fd = socket(AF_INET, SOCK_STREAM, 0);
    fcntl(fd, F_SETFL, O_NONBLOCK); // setup non blocking socket

    // make the connection
    rc = connect(fd, (struct sockaddr *)&addr_s, sizeof(addr_s));
    if ((rc == -1) && (errno != EINPROGRESS)) {
        //fprintf(stderr, "Error: %s\n", strerror(errno));
        close(fd);
        return false;
    }
    if (rc == 0) {
        // connection has succeeded immediately
        clock_gettime(CLOCK_MONOTONIC, &tend);
        //printf("socket %s:%d connected. It took %.5f seconds\n",
        //    addr, port, (((double)tend.tv_sec + 1.0e-9*tend.tv_nsec) - ((double)tstart.tv_sec + 1.0e-9*tstart.tv_nsec)));

        close(fd);
        return true;
    } /*else {
        // connection attempt is in progress
    } */

    FD_ZERO(&fdset);
    FD_SET(fd, &fdset);
    tv.tv_sec = seconds;
    tv.tv_usec = 0;

    rc = select(fd + 1, NULL, &fdset, NULL, &tv);
    switch(rc) {
    case 1: // data to read
        len = sizeof(so_error);

        getsockopt(fd, SOL_SOCKET, SO_ERROR, &so_error, &len);

        if (so_error == 0) {
            clock_gettime(CLOCK_MONOTONIC, &tend);
            printf("socket %s:%d connected. It took %.5f seconds\n",
                addr, port, (((double)tend.tv_sec + 1.0e-9*tend.tv_nsec) - ((double)tstart.tv_sec + 1.0e-9*tstart.tv_nsec)));
            close(fd);
            return true;
        } else { // error
            //printf("socket %s:%d NOT connected: %s\n", addr, port, strerror(so_error));
        }
        break;
    case 0: //timeout
        //fprintf(stderr, "connection timeout trying to connect to %s:%d\n", addr, port);
        break;
    }

    close(fd);

	return false;
}


void task(std::string ip, int port)
{
    if (port_is_open(ip, port))
    {
        cout << ip << ":" << port << " is open\n";
    }
}

void scanIps(std::string ip_prefix, int port)
{
	std::vector<std::thread *> tasks;

    for (int i=1; i<255; i++)
    {
    	std:string ip = ip_prefix + std::to_string(i);
        tasks.push_back(new std::thread(task, ip, port));
    }
    for (int i=0; i<254; i++){
        tasks[i]->join();
        delete tasks[i];
    }
}

void scanPorts(std::string ip, int portInit, int portEnd)
{
	std::vector<std::thread *> tasks;

    for (int i = portInit; i < portEnd; i++)
    {
        tasks.push_back(new std::thread(task, ip, i));
    }
    for (int i=0; i< portEnd - portInit ; i++){
        tasks[i]->join();
        delete tasks[i];
    }
}

int main(int argc, char **argv){

    const std::string ip_prefix = "192.168.1.";
    const int port = 5999;

    scanIps(ip_prefix, port);

    scanPorts("192.168.1.139", 5950, 6020);

    return 0;
}
