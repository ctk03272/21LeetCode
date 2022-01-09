/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
     let dualConnections = Array.from(Array(n), () => Array());
    for (let i = 0; i < connections.length; i++) {
        let from = connections[i][0];
        let to = connections[i][1];
        dualConnections[from].push(to);
        dualConnections[to].push(-from);
    }
    let dfs = function (dualConnections, visited, from) {
        let answer = 0;
        visited[from] = true;
        for (let to of dualConnections[from]) {
            if(!visited[Math.abs(to)]){
                answer+=dfs(dualConnections,visited,Math.abs(to));
                if(to>0){
                    answer++;
                }
            }
        }
        return answer;
    }
    return dfs(dualConnections,Array(n).fill(false),0)   
};