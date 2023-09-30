// BFS for cycle detection
function detectBFS(v, vis, adj) {
    vis[v] = true;

    const queue = [{ node: v, parent: -1 }];

    while (queue.length > 0) {
        const { node, parent } = queue.shift();

        for (const child of adj[node]) {
            if (!vis[child]) {
                vis[child] = true;
                queue.push({ node: child, parent: node });
            } else if (parent !== child) {
                return true;
            }
        }
    }

    return false;
}

// DFS for cycle detection
function detectDFS(v, vis, adj, par) {
    vis[v] = true;

    for (const child of adj[v]) {
        if (!vis[child]) {
            if (detectDFS(child, vis, adj, v)) return true;
        } else if (par !== child) {
            return true;
        }
    }

    return false;
}

// Cycle detection in directed graph using a stack
function cycleCheck(v, adj, vis, pathVis, stack) {
    stack.push(v);
    vis[v] = true;
    pathVis[v] = true;

    for (const child of adj[v]) {
        if (!vis[child]) {
            if (cycleCheck(child, adj, vis, pathVis, stack)) return true;
        } else if (pathVis[child]) {
            stack.push(child);
            return true;
        }
    }

    stack.pop();
    pathVis[v] = false;
    return false;
}

function solve() {
    const n = parseInt(readline());
    const m = parseInt(readline());

    const adj = new Array(n + 1).fill(null).map(() => []);

    for (let i = 0; i < m; ++i) {
        const [x, y] = readline().split(' ').map(Number);
        adj[x].push(y);
    }

    const vis = new Array(n + 1).fill(false);

    // BFS cycle detection
    let path = false;
    for (let i = 1; i <= n; ++i) {
        if (!vis[i]) {
            if (detectBFS(i, vis, adj)) {
                path = true;
                break;
            }
        }
    }

    // DFS cycle detection
    vis.fill(false);
    if (!path) {
        for (let i = 1; i <= n; ++i) {
            if (!vis[i]) {
                if (detectDFS(i, vis, adj, -1)) {
                    path = true;
                    break;
                }
            }
        }
    }

    // Directed graph cycle detection
    vis.fill(false);
    const pathVis = new Array(n + 1).fill(false);
    const stack = [];

    if (!path) {
        for (let i = 1; i <= n; ++i) {
            if (!vis[i]) {
                if (cycleCheck(i, adj, vis, pathVis, stack)) {
                    path = true;
                    break;
                }
            }
        }
    }

    const ans = [];
    if (path) {
        const tmp = stack[stack.length - 1];
        while (stack.length > 0) {
            ans.push(stack.pop());
            if (ans[ans.length - 1] === tmp && ans.length !== 1) break;
        }
        ans.reverse();
        console.log(ans.length);
        console.log(ans.join(' '));
    } else {
        console.log("IMPOSSIBLE");
    }
}
