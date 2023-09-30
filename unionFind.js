let par = [];

function makeSet(v) {
    par[v] = v;
}

function find(r) {
    if (par[r] === r) return r;
    par[r] = find(par[r]);
    return par[r];
}

function union1(a, b) {
    let u = find(a);
    let v = find(b);
    if (u === v) return;
    else par[u] = v;
}

function solve() {
    let n, m;
    let input = readline().split(' ');
    n = parseInt(input[0]);
    m = parseInt(input[1]);
    
    let str;
    for (let i = 1; i <= n; i++) {
        makeSet(i);
    }

    for (let i = 0; i < m; i++) {
        input = readline().split(' ');
        str = input[0];
        let a = parseInt(input[1]);
        let b = parseInt(input[2]);
        
        if (str === "union") {
            union1(a, b);
        } else {
            if (find(a) === find(b)) {
                console.log("YES");
            } else {
                console.log("NO");
            }
        }
    }
}

// Assuming you have a function to read input lines (e.g., readline()) and print output (e.g., console.log())
// You can replace those with the appropriate I/O functions for your environment.

solve();
