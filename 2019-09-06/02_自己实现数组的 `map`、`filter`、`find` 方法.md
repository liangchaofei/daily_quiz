<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 09:47:36
 * @LastEditTime: 2019-09-09 11:45:20
 * @LastEditors: Please set LastEditors
 -->
### filter
+ 过滤,filter()使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。

+  用法
```js
    let arr = [2, 4, 6, 8]
    let arr1 = arr.filter(item => item > 5)
    console.log(arr1) // [6,8]
```

+ 实现原理
```js
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
    console.log(arr2) // [6,8]
```


### map
+ 映射,map()方法返回一个新数组，数组中的元素为原始数组元素调用函数处理的后值。
+ 用法
```js
    let arr = [1,2,3];
    let arr1 = arr.map(function(item) {
        return item+1;
    });
    console.log(arr1) //[2,3,4]
```

+ 实现原理
```js
    Array.prototype.map1 = function(fn){
        let newArr = []
        for(let i =0;i<this.length;i++){
            newArr.push(fn(this[i]))
        }
        return newArr
    }
    let arr2 = arr.map1(item=>{
        return item+1;
    })
    console.log(arr2) //[2,3,4]
```


### reduce
+ reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
+ 用法
```js
    let arr = [2,4,6,8]
    let arr1 = arr.reduce((prev,curr) => {
        return prev+curr
    })
    console.log(arr1) //20
```

+ 实现原理
```js
    Array.prototype.reduce1 = function(reducer,initVal){
        for(let i = 0;i<this.length;i++){
            initVal = reducer(initVal,this[i],i,this)
        }
        return initVal
    }
    let arr2 = arr.reduce((prev,curr) => prev+curr)
    console.log(arr2) //20
```



### find
+ find() 方法返回通过测试（函数内判断）的数组的第一个元素的值
+ 用法
```js
    let arr = [1,2,3]
    let arr1 = arr.find(item => item>1)
    console.log(arr1) //2
```

+ 实现原理
```js
    Array.prototype.find1 = function(fn){
        let newArr = [];
        for(let i = 0;i<this.length;i++){
        if(fn(this[i])){
            return this[i]
        }
        }
    }
    let arr2 = arr.find1(item => item>2)
    console.log(arr2) //2
```



### some
+ 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
+ 如果没有满足条件的元素，则返回false。

+ 用法
```js
    let arr = [2,4,6,8]
    let arr1 =  arr.some(item => item>5)
    console.log(arr1) //true
```


+ 实现原理
```js
    Array.prototype.some1 = function(fn){
        for(let i =0;i<this.length;i++){
            if(fn(this[i])){
                return true;
            }
        }
        return false;
    }
    let arr2 = arr.some1(item => item>5)
    console.log(arr2) //true
```


### every
+ every方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。

+ 用法
```js
    let arr = [2,4,6,8]
    let arr1 = arr.every(item => item>5)
    console.log(arr1) //false
```


+ 实现原理
```js
    Array.prototype.every1 = function(fn){
        for(let i =0;i<this.length;i++){
            if(!fn(this[i])){
                return false;
            }
        }
        return true;
    }
    let arr2 = arr.every1(item => item>1)
    console.log(arr2) //false
```

[代码实现](https://github.com/liangchaofei/daily_quiz/blob/master/2019-09-06/02_%E8%87%AA%E5%B7%B1%E5%AE%9E%E7%8E%B0%E6%95%B0%E7%BB%84%E7%9A%84%20%60map%60%E3%80%81%60filter%60%E3%80%81%60find%60%20%E6%96%B9%E6%B3%95.js)