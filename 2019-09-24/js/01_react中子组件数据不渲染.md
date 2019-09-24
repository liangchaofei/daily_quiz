<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 17:03:07
 * @LastEditTime: 2019-09-24 17:03:45
 * @LastEditors: Please set LastEditors
 -->
+ 第一种
```js
    componentWillReceiveProps(nextProps) {
    this.setState({
        open: nextProps.open,
        message: nextProps.message,
        vertical: nextProps.vertical,
       horizontal: nextProps.horizontal,
    });
}
```
+ 第二种
  - 子组件在接收到父组件传递过来的新的rpops，要让子组件正常更新还有一种方法，就是这些props不要存到子组件的state里面，而是在子组件的render方法里，通过 this.props.xxxx 直接访问。
