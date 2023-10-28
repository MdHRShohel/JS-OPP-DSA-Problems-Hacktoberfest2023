// 10 1 5 8 9 10 17 17 20 24 30
//20 1 5 8 9 10 17 17 20 24 30 1 5 8 9 10 17 17 20 24 30 20 1 5 8 9 10 17 17 20 24 30 1 5 8 9 10 17 17 20 24 30
#include<iostream>
using namespace std;
#include<vector>
#include<limits.h>
#include <ctime> 
int maximum(int a, int b)
{
    
    if(a>b)
        return a;
    return b;
}
int cut_rod(vector<int> p, int length)
{    
    int i;
    int q=INT_MIN;
    if(length==0)
        return 0;
    for(i=1;i<=length;i++)
    {
        q = maximum(q,p[i-1]+cut_rod(p,length-i));
    }
    return q;
}
int main()
{
    vector<int> p;
    int i,n,price,max_profit;
    freopen("C:\\Users\\SSD\\VITc_SSD1125_Progms\\5-SSD_Sem\\CSE2021, DAA Lab(L27+L28)\\Lab4_RodCutting\\random_1000.txt", "r", stdin);
    cin>>n;
    for(i=0;i<n;i++)
    {
        cin>>price;
        p.push_back(price);
    }
    clock_t start = clock();
    max_profit = cut_rod(p,n);
    cout<<max_profit<<endl;
	clock_t end = clock();
    double elapsed = double(end - start)/CLOCKS_PER_SEC;
    cout<<"Time taken is "<<elapsed<<endl;
}



