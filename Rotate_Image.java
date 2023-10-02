class Solution {
public void rotate(int[][] matrix) {
    if (matrix == null || matrix.length <= 1) {
        return;
    }
    int n = matrix.length;
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (int i = 0; i < n; i++) {
        int head = 0;
        int tail = n - 1;
        while (head < tail) {
            int temp = matrix[i][head];
            matrix[i][head] = matrix[i][tail];
            matrix[i][tail] = temp;
            head++;
            tail--;
        }
    }
}
}
