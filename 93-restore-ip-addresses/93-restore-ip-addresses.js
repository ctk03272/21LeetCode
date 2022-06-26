/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let answer = [];
    var validIp = function (input) {
        if ((input.startsWith("0") && input.length >1) || (Number(input) >= 256)) {
            return false;
        } else {
            return true;
        }
    }

    var restoreIp = function (ip, restored, count) {
        if (count > 4) {
            return;
        } else if (count == 4 && ip.length === 0) {
            answer.push(restored);
        }

        for (let i = 0; i < 3; i++) {
            if (i >= ip.length) {
                break;
            }
            var split = ip.substring(0, i + 1);
            var remain = ip.substring(i + 1);
            if (validIp(split)) {
                var add = count == 3 ? "" : ".";
                restoreIp(remain, restored + split + add, count + 1);
            }
        }
    };
    restoreIp(s, "", 0);
    return answer;
}