/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 *
/
// 해당 솔루션은 틀렸습니다. 수정이 필요합니다.
var canFinish = function(numCourses, prerequisites) {
    let stack=[];
    let adj=Array.from(Array(numCourses+1), ()=>Array());
    let visited=Array.from(numCourses+1).fill(0);
    let map=new Map();

    let dfs=function(start){
        visited[start]=1;
        let index=map.has(start)?map.get(start)+1:1;
        map.set(start,index)
        adj[start].forEach(a=>{
            if(!visited[a]){
                dfs(a);
            }
        });
    };

    let check=function(){
        let ans=false;
        for(let i=0;i<numCourses;i++){
            adj[i].forEach(a=>{
                if(map.has(i)?map.get(i):0>map.has(a)?map.get(a):0){
                    ans=true;
                }
            })
        }
        return ans;
    };

    for(let i=0;i<prerequisites.length;i++){
        let now=prerequisites[i][0];
        let pre=prerequisites[i][1];
        adj[now].push(pre);
    }

    for(let i=0;i<numCourses;i++){
        if(!visited[i]){
            dfs(i,null);
        }
    }
    return !check();
};

canFinish(5,[[1,4],[2,4],[3,1],[3,2]]);
