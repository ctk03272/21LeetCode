/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
    let ans = wall.length;
    let map = {};
    for (let i = 0; i < wall.length; i++) {
        let s = 0;
        for (let j = 0; j < wall[i].length - 1; j++) {
            s += wall[i][j];
            if (map[s] != null) {
                map[s] -= 1;
            } else {
                map[s] = wall.length - 1;
            }
                ans=Math.min(map[s],ans);
        }
    }
    return ans;
};
