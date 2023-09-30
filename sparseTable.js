const Max = 200005;
const ST = new Array(24).fill(null).map(() => new Array(Max));
const A = new Array(Max);

function computeST(N) {
    for (let i = 0; i < N; i++) ST[0][i] = i;
    for (let k = 1; (1 << k) < N; k++) {
        for (let i = 0; i + (1 << k) <= N; i++) {
            const x = ST[k - 1][i];
            const y = ST[k - 1][i + (1 << (k - 1))];
            ST[k][i] = A[x] <= A[y] ? x : y;
        }
    }
}

function RMQ(i, j) {
    const k = Math.log2(j - i + 1);
    const x = ST[k][i];
    const y = ST[k][j - (1 << k) + 1];

    return A[x] <= A[y] ? x : y;
}

function main() {
    const n = parseInt(readline()); 
    const q = parseInt(readline());

    for (let i = 0; i < n; i++) {
        A[i] = parseInt(readline());
    }

    computeST(n);
    let x, y;
    while (q--) {
        [x, y] = readline().split(' ').map(Number);
        if (x === y) {
            console.log(A[x - 1]);
        } else {
            console.log(A[RMQ(x - 1, y - 1)]);
        }
    }
}



main();
