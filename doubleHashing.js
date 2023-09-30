const p1 = 137;
const mod1 = 1e9 + 7;
const p2 = 277;
const mod2 = 1e9 + 9;

const N = 1e5 + 9;
const pw1 = new Array(N);
const pw2 = new Array(N);

function pre() {
    pw1[0] = 1;
    for (let i = 1; i < N; ++i) {
        pw1[i] = (pw1[i - 1] * p1) % mod1;
    }
    pw2[0] = 1;
    for (let i = 1; i < N; ++i) {
        pw2[i] = (pw2[i - 1] * p2) % mod2;
    }
}

function getHash(s) {
    const n = s.length;
    let hs1 = 0;
    for (let i = 0; i < n; ++i) {
        hs1 = (hs1 + s.charCodeAt(i) * pw1[i]) % mod1;
    }
    let hs2 = 0;
    for (let i = 0; i < n; ++i) {
        hs2 = (hs2 + s.charCodeAt(i) * pw2[i]) % mod2;
    }
    return [hs1, hs2];
}

function solve() {
    pre();
    const hash1 = getHash("ridhon");
    const hash2 = getHash("ridhon");
    if (hash1[0] === hash2[0] && hash1[1] === hash2[1]) {
        console.log(1);
    } else {
        console.log(0);
    }
}

solve();
