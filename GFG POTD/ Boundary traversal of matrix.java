class Solution
{
    static ArrayList<Integer> boundaryTraversal(int matrix[][], int n, int m)
    {
        ArrayList<Integer> res = new ArrayList<>();
        for(int i=0; i<m; i++){
            res.add(matrix[0][i]);
        }
        for(int i=1; i<n-1; i++){
            res.add(matrix[i][m-1]);
        }
        if(n-1!=0){
            for(int i=m-1; i>=0; i--){
            res.add(matrix[n-1][i]);
            }
        }
        
        for(int i=n-2; i>0; i--){
            if(m==1) break;
            res.add(matrix[i][0]);
        }
        return res;
    }
}

