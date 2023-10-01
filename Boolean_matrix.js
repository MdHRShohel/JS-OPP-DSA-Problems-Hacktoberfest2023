// GFG Problem: Boolean Matrix
// https://practice.geeksforgeeks.org/problems/boolean-matrix-problem-1587115620/1

// Given a boolean matrix of size RxC where each cell contains either 0 or 1, modify it such that if a matrix cell matrix[i][j] is 1 then all the cells in its ith row and jth column will become 1.

// Solution:

function booleanMatrix(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const row = new Array(n).fill(false);
    const col = new Array(m).fill(false);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 1) {
                row[i] = true;
                col[j] = true;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 1;
            }
        }
    }
}
// Example usage:
const matrix = [
    [1, 0, 0],
    [0, 0, 1],
    [0, 0, 0],
];

booleanMatrix(matrix);

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(' '));
}
