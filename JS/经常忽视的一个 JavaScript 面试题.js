/**
 * 包含了变量定义提升、this指针指向、运算符优先级、原型、继承、全局变量污染、对象属性及原型属性优先级等知识
 * @returns
 */
//1.首先定义了一个叫Foo的函数
function Foo() {
  getName = function () {
    alert(1);
  };
  return this; //-->指向windows
}
// 2.之后为Foo创建了一个叫getName的静态属性存储了一个匿名函数
Foo.getName = function () {
  alert(2);
};
// 3.后为Foo的原型对象新创建了一个叫getName的匿名函数
Foo.prototype.getName = function () {
  alert(3);
};
// 4.函数变量表达式创建了一个getName的函数
var getName = function () {
  alert(4);
};
// 5.最后再声明一个叫getName函数
function getName() {
  alert(5);
}

//请写出以下输出结果：
/**
 * 思路：静态方法和静态属性就是我们无需实例化就可以调用
 */
Foo.getName(); //2

/**
 * 思路：是访问当前上文作用域内的叫getName的
 * 函数声明会被提升到作用域的最前面，即使写代码的时候是写在最后面，也还是会被提升至最前面。
 * 一是变量声明提升，二是函数表达式和函数声明的区别。
 */
getName(); //4

/**
 * 思路：先执行foo函数 然后返回值对象getName
 * 但是注意 getName 是没有 var的 就是代表全局
 * 找到外层是否含有getName变量 找到 alert4
 *
 */
Foo().getName(); //1

/**
 * 思路：windows对象getName
 * getName已经被修改为1了
 */
getName(); //1

/**
 * 思路：new (带参数列表)比new (无参数列表)高比函数调用高 === new (Foo.getName)();
 * getName已经被修改为1了
 * 疑问：
 * 当然也可能有朋友会有疑问为什么遇到()不函数调用再new呢，
 * 那是因为函数调用(17)比new有参数列表(18)优先级低
 */
new Foo.getName(); //2

/**
 * new有参数列表(18)->.成员访问(18)->()函数调用(17)
 */
new Foo().getName();

/**
 * new ((new Foo()).getName)();
 * new有参数列表(18)->new有参数列表(18)
 * 先初始化Foo的实例化对象
 * 将其原型上的getName函数作为构造函数再次new，
 * 结果为3
 */
new new Foo().getName();
