var stoneGameII = function (arr) {
    let hash = {};
    let len = arr.length;
    if (len === 0) return 0;
    if (len === 1) return arr[0];
    for (let i = 1; i < len; i++) {
        arr[i] += arr[i - 1];
    }
    debugger;

    var dfs = function (M, i) {
        let key = M + ',' + i;
        if (key in hash) return hash[key];
        let iTake = 0;
        let res = 0;
        if (i >= len) return 0;
        for (let k = 1; k <= 2 * M && i + k <= len; k++) {
            // take k piles
            let next = dfs(Math.max(k, M), i + k);
            console.log(key, 'next', next, 'k', k, 'M', M)
            iTake = - ~~arr[i - 1] + arr[len - 1] - next;
            res = Math.max(iTake, res);
        }
        hash[key] = res;
        return res;
    }

    return dfs(1, 0);
};

stoneGameII([2, 7, 9, 4, 4])