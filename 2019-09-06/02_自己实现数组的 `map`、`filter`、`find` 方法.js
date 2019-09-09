/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 09:47:43
 * @LastEditTime: 2019-09-09 11:32:34
 * @LastEditors: Please set LastEditors
 */

// filter
// 过滤,filter()使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。

// 用法
let arr = [2, 4, 6, 8]
let arr1 = arr.filter(item => item > 5)
console.log(arr1) // [6,8]

//实现原理
Array.prototype.filter1 = function (fn) {
    let newArr = []
    console.log('this',this)
    for (let i = 0; i < this.length; i++) {
        console.log('aa',fn(this[i]))
        fn(this[i]) && newArr.push(this[i]);
    }
    return newArr;
}

let arr2 = arr.filter1(item => item > 5)
console.log(arr2)


// map
//用法
let arr = ['bob', 'grex', 'tom'];
let arr1 = arr.map(function(item) {
    return `<li>${item}</li>`;
});
console.log(arr1)

//实现原理
Array.prototype.map1 = function(fn){
    let newArr = []
    for(let i =0;i<this.length;i++){
        newArr.push(fn(this[i]))
    }
    return newArr
}
let arr2 = arr.map1(item=>{
    return `<li>${item}</li>`
})
console.log(arr2)


// reduce
//用法
let arr = [2,4,6,8]
let arr1 = arr.reduce((prev,curr) => {
    return prev+curr
})
console.log(arr1)

//实现原理
Array.prototype.reduce1 = function(reducer,initVal){
    for(let i = 0;i<this.length;i++){
        initVal = reducer(initVal,this[i],i,this)
    }
    return initVal
}
let arr2 = arr.reduce((prev,curr) => prev+curr)
console.log(arr2)



// find
// find() 方法返回通过测试（函数内判断）的数组的第一个元素的值
//用法
let arr = [1,2,3]
let arr1 = arr.find(item => item>1)
console.log(arr1) //2


//实现原理
Array.prototype.find1 = function(fn){
    let newArr = [];
    for(let i = 0;i<this.length;i++){
       if(fn(this[i])){
           return this[i]
       }
    }
}
let arr2 = arr.find1(item => item>2)
console.log(arr2)



// some
// 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
// 如果没有满足条件的元素，则返回false。

//用法
let arr = [2,4,6,8]
let arr1 =  arr.some(item => item>5)
console.log(arr1)


//实现原理
Array.prototype.some1 = function(fn){
    for(let i =0;i<this.length;i++){
        if(fn(this[i])){
            return true;
        }
    }
    return false;
}
let arr2 = arr.some1(item => item>5)
console.log(arr2)


//every
// every方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。

//用法
let arr = [2,4,6,8]
let arr1 = arr.every(item => item>5)
console.log(arr1) //false


//实现原理
Array.prototype.every1 = function(fn){
    for(let i =0;i<this.length;i++){
        if(!fn(this[i])){
            return false;
        }
    }
    return true;
}
let arr2 = arr.every1(item => item>1)
console.log(arr2)