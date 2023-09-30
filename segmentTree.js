const mx = 1e5;
const seg = new Array(mx * 4).fill(0);
const lazy = new Array(mx * 4).fill(0);
const a = new Array(mx + 4).fill(0);

function build(cur, left, right) {
    if (left === right) {
        seg[cur] = a[left];
        return;
    }
    const mid = Math.floor((left + right) / 2);
    build(cur * 2, left, mid);
    build(cur * 2 + 1, mid + 1, right);
    seg[cur] = seg[cur * 2] + seg[cur * 2 + 1];
}

function pushDown(cur, left, right) {
    seg[cur] += (right + 1 - left) * lazy[cur];
    if (left !== right) {
        lazy[cur * 2] += lazy[cur];
        lazy[cur * 2 + 1] += lazy[cur];
    }
    lazy[cur] = 0;
}

function update(cur, left, right, l, r, val) {
    if (lazy[cur] !== 0) pushDown(cur, left, right);
    if (l > right || left > r) return;
    if (l <= left && r >= right) {
        lazy[cur] += val;
        pushDown(cur, left, right);
        return;
    }
    const mid = Math.floor((left + right) / 2);
    update(cur * 2, left, mid, l, r, val);
    update(cur * 2 + 1, mid + 1, right, l, r, val);
    seg[cur] = seg[cur * 2] + seg[cur * 2 + 1];
}

function query(cur, left, right, l, r) {
    if (l > right || r < left) return 0;
    if (lazy[cur] !== 0) pushDown(cur, left, right);
    if (left >= l && right <= r) return seg[cur];
    const mid = Math.floor((left + right) / 2);
    const p1 = query(cur * 2, left, mid, l, r);
    const p2 = query(cur * 2 + 1, mid + 1, right, l, r);
    return p1 + p2;
}

function main() {
    const t = parseInt(readline());
    let n, q;
    let k, x, y, val;
    let c = 1;
    while (c <= t) {
        console.log("Case", c + ":");
        const input = readline().split(' ');
        n = parseInt(input[0]);
        q = parseInt(input[1]);
        while (q--) {
            const queryInput = readline().split(' ');
            k = parseInt(queryInput[0]);
            if (k === 0) {
                x = parseInt(queryInput[1]);
                y = parseInt(queryInput[2]);
                val = parseInt(queryInput[3]);
                update(1, 1, n, x + 1, y + 1, val);
            } else {
                x = parseInt(queryInput[1]);
                y = parseInt(queryInput[2]);
                console.log(query(1, 1, n, x + 1, y + 1));
            }
        }

        c++;
        seg.fill(0);
        lazy.fill(0);
        a.fill(0);
    }
}


main();
