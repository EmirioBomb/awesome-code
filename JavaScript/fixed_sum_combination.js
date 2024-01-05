/**
 * Mathemathics:
 *      1. 求和为指定数字的所有组合
 *      2. 寻找合为定值的多个数
 *      3. 背包问题
 * 
 * @param       {Array}         nums        数组
 * @param       {Number}        row         数字组合个数
 * @param       {Array}         target      结果集合
 * @returns 
 */
var fixSum = function (nums, row, target) {
    var findNSum = function (nums, target, N, result, results) {
        if (nums.length < N || target < nums[0] * N || target > nums[-1] * N) {
            return;
        }
        if (N === 2) {
            var l = 0,
                r = nums.length - 1;
            while (l < r) {
                var s = nums[l] + nums[r];
                if (s === target) {
                    results.push(result.concat([nums[l], nums[r]]));
                    while (l < r && nums[l] === nums[l + 1]) {
                        l++;
                    }
                    while (r > l && nums[r] === nums[r - 1]) {
                        r++;
                    }
                    l++;
                    r--;
                } else if (s < target) {
                    l++;
                } else {
                    r--;
                }
            }
        } else {
            for (var i = 0; i < nums.length - N + 1; i++) {
                if (i === 0 || (i > 0 && nums[i - 1] !== nums[i])) {
                    findNSum(nums.slice(i + 1), target - nums[i], N - 1, result.concat([nums[i]]), results);
                }

            }
        }
    };
    var results = [];
    nums.sort(function (a, b) {
        return a - b;
    });
    findNSum(nums, target, row, [], results);
    return results;
};

//【调整1】需要分析的数据集合
let array = [0,1,2,3,4,5,1,2,3,4,5,6,7,8,9,10,0,1,2,3,4,5,1,2,3,4,5,6,7,8,9,10,0,1,2,3,4,5,1,2,3,4,5,6,7,8,9,10,0,1,2,3,4,5,1,2,3,4,5,6,7,8,9,10,0,1,2,3,4,5,1,2,3,4,5,6,7,8,9,10,0,1,2,3,4,5,1,2,3,4,5,6,7,8,9,10,0,1,2,3,4,5,1,2,3,4,5,6,7,8,9,10];

//【调整2】总合为 10
let total = 10;

//【调整3】最大数字个数组合
let MAX_N = 6

console.log("\n******** 当前共分析【" + array.length + "】个数字 ********\n")

// 输出匹配的数据组合
const util = require('util')
for (let index = 2; index < MAX_N; index++) {
    console.log('\n---------------------------------------\n');
    console.log("统计【" + index + "】个数之合为【" + total +"】的组合如下:");
    // console.log(fixSum(array, index, total));
    // 解决 node.js 默认可输出数组元素个数为 100的问题
    console.log(util.inspect(fixSum(array, index, total), { maxArrayLength: null }));
}