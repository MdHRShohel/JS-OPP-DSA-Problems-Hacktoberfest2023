#include <bits/stdc++.h>
using namespace std;

const int N = 1e5+2;
vector<int> edges[N];
int visited[N] = {0};

void DeFS(int x)
{
    visited[x] = 1;
    cout << x <<" ";

    for(int i = 0; i < edges[x].size(); i++)
    {
        if(visited[edges[x][i]] == 0)
        {
            DeFS(edges[x][i]);
        }
    }

}

int main()
{
    int n = 4;
    int rootnode = 3;

    edges[1].push_back(2);
    edges[2].push_back(1);

    edges[1].push_back(3);
    edges[3].push_back(1);

    edges[2].push_back(4);
    edges[4].push_back(2);

    edges[5].push_back(4);
    edges[4].push_back(5);

    DeFS(rootnode);

    return 0;
}