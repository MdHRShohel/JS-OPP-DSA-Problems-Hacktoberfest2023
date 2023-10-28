#include<iostream>
using namespace std;
class Edge
{
public:
    int v1;
    int v2;
    int weight;
};
class Subset
{
public:
    int rank;
    int parent;
};
int find(Subset* subsets,int V)
{
    if(subsets[V].parent!=V)
        subsets[V].parent= find(subsets,subsets[V].parent);
    return subsets[V].parent;
}
void union_rank(Subset* subsets,int x,int y)
{
    if(subsets[x].rank>subsets[y].rank)
        subsets[y].parent=x;
    else   if(subsets[x].rank<subsets[y].rank)
                subsets[x].parent=y;
    else
        {
              subsets[y].parent=x;
              subsets[x].rank++;
        }
}
void boruvka(Edge* list,int V,int E)
{
    Subset* subsets=new Subset[V];
    int *cheapest = new int[V];
    for(int i=0;i<V;i++)
    {
        subsets[i].parent=i;
        subsets[i].rank=0;
        cheapest[V] = -1;
    }
    int numTrees = V;
    int MSTweight = 0;
    while (numTrees > 1)
    {
          for (int v = 0; v < V; v++)
           {
               cheapest[v] = -1;
           }
        for (int i=0; i<E; i++)
        {
            int x = find(subsets, list[i].v1);
            int y = find(subsets, list[i].v2);
            if (x!=y)
             {
               if (cheapest[x] == -1 || list[cheapest[x]].weight > list[i].weight)
                 cheapest[x] = i;

               if (cheapest[y] == -1 ||list[cheapest[y]].weight > list[i].weight)
                 cheapest[y] = i;
            }
        }
        for (int i=0; i<V; i++)
        {
            /*int x = find(subsets, list[i].v1);
            int y = find(subsets, list[i].v2);
            if (x==y)
                continue;
                              if (cheapest[x] == list[i].weight || cheapest[y] == list[i].weight) { // this checks if the given edge is the cheapest from the tree containing x or the tree containing y
        MSTweight += list[cheapest[i]].weight;
        cout<<" [ " << list[cheapest[i]].v1 << " : " << list[cheapest[i]].v2 << " ] - " << list[cheapest[i]].weight << endl;
  union_rank(subsets, x, y);
  union_rank(subsets, x, y);
} */
            if (cheapest[i] != -1)
            {
                int x = find(subsets, list[i].v1);
                int y = find(subsets, list[i].v2);

                if (x==y)
                    continue;
                MSTweight += list[cheapest[i]].weight;
                cout<<list[cheapest[i]].v1<<" "<<list[cheapest[i]].v2<<" "<<list[cheapest[i]].weight<<endl;
                cout<<" [ " << list[cheapest[i]].v1 << " : " << list[cheapest[i]].v2 << " ] - " << list[cheapest[i]].weight << endl;
                union_rank(subsets, x, y);
                numTrees--;
            }
        }
    }

    cout << "Weight of MST is "<< MSTweight<<endl;
    return;
}
int main()
{
int V, E, tempX, tempY,wt;
cin >> V >> E;
Edge* list=new Edge[E];
for(int i=0;i<E;i++)
{
    cin >> tempX >>tempY >> wt;
    list[i].v1=tempX;
    list[i].v2=tempY;
    list[i].weight=wt;
}
boruvka(list,V,E);
    return 0;
}
