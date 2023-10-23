#include <iostream>
#include <queue>
using namespace std;

string predictPartyVictory(string senate) {
    int n = senate.size();
    queue<int> radiant, dire;

    for (int i = 0; i < n; i++) {
        if (senate[i] == 'R') radiant.push(i);
        else dire.push(i);
    }

    while (!radiant.empty() && !dire.empty()) {
        int r_index = radiant.front();
        int d_index = dire.front();

        if (r_index < d_index) {
            radiant.push(r_index + n);
        } else {
            dire.push(d_index + n);
        }

        radiant.pop();
        dire.pop();
    }

    return radiant.empty() ? "Dire" : "Radiant";
}

int main() {
    string senate = "RDD";
    string result = predictPartyVictory(senate);
    cout << "The party that will announce victory: " << result << endl;
    return 0;
}
