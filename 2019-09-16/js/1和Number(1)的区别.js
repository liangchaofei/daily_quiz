/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 09:56:22
 * @LastEditTime: 2019-09-17 10:05:43
 * @LastEditors: Please set LastEditors
 */
var v1 = new Number(123);
    var v2 = new String('abc');
    var v3 = new Boolean(true);
    console.log(typeof v1)
    console.log(typeof v2)
    console.log(typeof v3)
    console.log(v1 === 123)
    console.log(v1 == 123)


console.log((123).toFixed === Number.prototype.toFixed)


let e2 = {
    n : 2,
    toString : function (){
        console.log('this is toString')
        return this.n
    },
    valueOf : function(){
        console.log('this is valueOf')
        return this.n*2
    }
}
console.log(e2) //  2  this is toString
console.log(+e2)  // 4 this is valueOf
console.log(''+e2) // 4 this is valueOf
console.log(String(e2)) // 2 this is toString
console.log(Number(e2)) // 4 this is valueOf
console.log(e2 == '4') // true  this is valueOf
console.log(e2 === 4) //false ===操作符不进行隐式转换


