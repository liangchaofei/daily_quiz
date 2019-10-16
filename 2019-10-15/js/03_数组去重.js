/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 12:52:56
 * @LastEditTime: 2019-10-15 18:37:20
 * @LastEditors: Please set LastEditors
 */

 // indexOf 实现
var arr = [1,1,'1']
function unique(arr){
    var res = [];
    for(var i=0;i<arr.length;i++){
        var current = arr[i]
        if(res.indexOf(current) === -1){
            res.push(current)
        }
    }
    return res;
} 
console.log(unique(arr)) // [1,'1']

// 排序后去重

var arr1 = [1, '2',2, '1']
function unique1(arr){
    var res = [];
    var sortedArr = arr.concat().sort()
    console.log('sortedArr', sortedArr)
    var seen;
    for(var i=0;i<sortedArr.length;i++){
        if(!i || seen!== sortedArr[i])
        {
            res.push(sortedArr[i])
        }
        seen = sortedArr[i]
    
    }
    return res;
}
console.log(unique1(arr1)) // [1,'1']


var array = [1, 2, 1, 1, '1', 'a', 'a'];
function unique2(array) {
    var res = array.filter(function(item, index, array){
        console.log('asd', array.indexOf(item) === index)
        return array.indexOf(item) === index;
    })
    return res;
}
console.log(unique2(array));
