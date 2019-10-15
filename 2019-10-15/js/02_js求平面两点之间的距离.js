/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 12:46:07
 * @LastEditTime: 2019-10-15 12:48:20
 * @LastEditors: Please set LastEditors
 */
// 数据可以以数组方式存储，也可以是对象方式
let a = { x: 6, y: 0 },
    b = { x: 0, y: 8 };
function distant(a, b) {
    let dx = Number(a.x) - Number(b.x)
    let dy = Number(a.y) - Number(b.y)
    return Math.pow(dx * dx + dy * dy, .5)
}
console.log(distant(a, b))