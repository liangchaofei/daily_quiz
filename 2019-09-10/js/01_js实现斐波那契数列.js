/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-11 15:57:02
 * @LastEditTime: 2019-09-11 15:57:02
 * @LastEditors: your name
 */
function Fibonacci (n) {
    let arr = [1, 1]
    for (let i = 2; i < n + 1; i++) {
      arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr
}