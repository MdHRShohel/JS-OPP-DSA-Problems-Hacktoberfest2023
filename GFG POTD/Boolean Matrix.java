class Solution
{
    void booleanMatrix(int matrix[][])
    {
        Set<Integer> row = new HashSet<>();
        Set<Integer> col = new HashSet<>();
        int n=matrix.length, m=matrix[0].length;
        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                if(matrix[i][j]==1){
                    row.add(i);
                    col.add(j);
                }
            }
        }
        for(Integer i:row){
            for(int j=0; j<m; j++){
                matrix[i][j]=1;
            }
        }
        for(Integer i:col){
            for(int j=0; j<n; j++){
                matrix[j][i]=1;
            }
        }
    }
}