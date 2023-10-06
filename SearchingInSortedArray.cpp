//Given an array arr[] sorted in ascending order of size N and an integer K. Check if K is present in the array or not.

//{ Driver Code Starts
#include <bits/stdc++.h> 
using namespace std;

// } Driver Code Ends

class Solution{
    public:
    // Function to find element in sorted array
    // arr: input array
    // N: size of array
    // K: element to be searche
    int searchInSorted(int arr[], int N, int K) 
    { 
    
       // Your code here
       int low=0,high=N-1;
     while(low<=high){
          int mid=(low+high)/2;
        if(arr[mid] == K){
           return 1;
        }
        else if(arr[mid] > K){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
     }
    return -1;
       
    }
};

//{ Driver Code Starts.

int main(void) 
{ 
    
    int t;
    cin >> t;
    while(t--){
        int n, k;
        cin >> n >> k;
        
        int arr[n];
        
        for(int i = 0;i<n;i++){
            cin >> arr[i];
        }
        
        Solution ob;
        cout << ob.searchInSorted(arr, n, k) << endl;

    }

	return 0; 
} 

// } Driver Code Ends
