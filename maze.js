const maze = document.getElementById("maze");

function createMaze() {
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            maze.appendChild(cell);

            if (Math.random() < 0.2) {
                cell.classList.add("wall");
            }
        }
    }
}

createMaze();
