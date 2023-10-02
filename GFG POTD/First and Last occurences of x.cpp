#include<bits/stdc++.h>
using namespace std;

class Solution
{
    public:
    int firstOccurence(int a[], int n, int x){
        int low = 0, high = n-1;
        while(low <= high){
            int mid = (low+high)/2;
            if(a[mid] > x){
                high = mid-1;
            }else if(a[mid] < x){
                low = mid+1;
            }else{
                if(mid == 0) return 0;
                else{
                    if(a[mid-1] == a[mid]){
                        high = mid-1;
                    }else{
                        return mid;
                    }
                }
            }
        }
        return -1;
    }
    
    int lastOccurence(int a[], int n, int x){
        int low = 0, high = n-1;
        while(low <= high){
            int mid = (low+high)/2;
            if(a[mid] > x){
                high = mid-1;
            }else if(a[mid] < x){
                low = mid+1;
            }else{
                if(mid == n-1) return (n-1);
                else{
                    if(a[mid+1] == a[mid]){
                        low = mid+1;
                    }else{
                        return mid;
                    }
                }
            }
        }
        return -1;
    }
    
    
    
    vector<int> find(int arr[], int n , int x )
    {
        vector<int> result;
        int firstOccuerenceIndex = firstOccurence(arr, n, x);
        int lastOccuerenceIndex = lastOccurence(arr, n, x);
        
        if(firstOccuerenceIndex == -1 || lastOccuerenceIndex == -1){
            result.push_back(-1);
            result.push_back(-1);
            return result;
        }else{
            result.push_back(firstOccuerenceIndex);
            result.push_back(lastOccuerenceIndex);
            return result;
        }
        
    }
};

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n,x;
        cin>>n>>x;
        int arr[n],i;
        for(i=0;i<n;i++)
        cin>>arr[i];
        vector<int> ans;
        Solution ob;
        ans=ob.find(arr,n,x);
        cout<<ans[0]<<" "<<ans[1]<<endl;
    }
    return 0;
}
