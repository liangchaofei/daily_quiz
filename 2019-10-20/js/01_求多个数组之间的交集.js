/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-20 09:42:11
 * @LastEditTime: 2019-10-20 09:44:34
 * @LastEditors: Please set LastEditors
 */
var a = [1, 2, 3, 5]
var b = [2, 4, 5, 1]
var c = [1, 3, 5]

function aaa(arr, ...rest){
    return arr.filter(item => rest.every(restArr => restArr.indexOf(item)>-1))
}
console.log(aaa(a,b,c))
