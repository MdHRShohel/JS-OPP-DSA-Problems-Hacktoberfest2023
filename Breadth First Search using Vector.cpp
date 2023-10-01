#include <bits/stdc++.h>
using namespace std;

const int N = 1e5+2;
vector<int> nodeswithedges[N];

void BFS(int size, int node)
{
    vector<bool> visited;
    visited.resize(size, false);
    deque<int> dq;
    visited[node] = true;
    dq.push_back(node);

    while(!dq.empty())
    {
        node = dq.front();
        cout << node << " ";
        dq.pop_front();
        for(int i=0; i <nodeswithedges[node].size(); i++)
        {
            if(!visited[nodeswithedges[node][i]])
            {
                visited[nodeswithedges[node][i]] = true;
                dq.push_back(nodeswithedges[node][i]);
            }
        }
    }
}

int main()
{
    int n, rootnode; cin >> n >> rootnode;
    for(int i=0; i <n;i++)
    {
        int x,y; cin >> x >> y;
        nodeswithedges[x].push_back(y);
        nodeswithedges[y].push_back(x);
    }

    BFS(n,rootnode);

    return 0;
}