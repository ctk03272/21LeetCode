/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dx = [1, 0, -1, 0];
    let dy = [0, 1, 0, -1];
    let answer = 0;
    const isVisit = Array.from(Array(m), () => Array(n).fill(false));

    class Island {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }

    class Queue {
        constructor() {
            this._arr = [];
        }

        enqueue(item) {
            this._arr.push(item);
        }

        dequeue() {
            return this._arr.shift();
        }

        isEmpty() {
            return this._arr.length == 0;
        }
    }

    let que = new Queue();
    let findArea = function () {
        let area = 1;
        while (!que.isEmpty()) {
            let now = que.dequeue();
            let x = now.x;
            let y = now.y;
            for (let i = 0; i < 4; i++) {
                let kx = x + dx[i];
                let ky = y + dy[i];
                if (0 <= kx && kx < n && 0 <= ky && ky < m && grid[ky][kx] == 1 && isVisit[ky][kx] == false) {
                    que.enqueue(new Island(kx, ky));
                    isVisit[ky][kx] = true;
                    area++;
                }
            }
        }
        return area;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1 && isVisit[i][j] == false) {
                que.enqueue(new Island(j, i));
                isVisit[i][j]=true;
                answer = Math.max(findArea(), answer);
            }
        }
    }
    return answer;
};