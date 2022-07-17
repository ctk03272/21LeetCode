/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let ans = [];
    let strings = path.split("/").filter(a => a.length !== 0).forEach(a => {
        if (a === '.') {

        } else if (a === "..") {
            if (ans.length !== 0) {
                ans.splice(ans.length - 1, 1);
            }
        } else {
            ans.push(a);
        }
    });
    return "/" + ans.join("/")
}