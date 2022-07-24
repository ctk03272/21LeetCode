/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (strs.length == 0) {
        return [[""]];
    }
    let map = {};
    strs.forEach((str) => {
        let orderedStr = str.split('').sort().join('');
        if (map[orderedStr] === undefined) {
            let ar = [];
            ar.push(str);
            map[orderedStr] = ar;
        } else {
            map[orderedStr].push(str);
        }
    });
    return Object.values(map);    
};