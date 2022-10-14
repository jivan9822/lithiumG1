const calAvg = (nums) => {
    return nums.reduce((total, nums) => {
        return total += nums;
    }, 0) / nums.length;
}

module.exports.avgfun = calAvg;