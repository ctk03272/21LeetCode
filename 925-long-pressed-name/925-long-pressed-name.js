/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let n = name.length;
    let m = typed.length;
    let nameCount = 0;

    for (let i = 0; i < m; i++) {
        if (nameCount < n && name.charAt(nameCount) == typed.charAt(i)) {
            nameCount++;
            continue;
        }
        if (i == 0 || typed.charAt(i) != typed.charAt(i - 1)) {
            return false;
        }
    }
    return nameCount == n ? true : false;    
};