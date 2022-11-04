---
title: TypeScript
---

主要记录下官网手册指南上一些未更新的东西。
[TypeScript手册指南](https://www.tslang.cn/docs/handbook/basic-types.html)

## 基础类型

### 元组Tuple
当访问一个越界的元素，会使用联合类型替代：
```
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型
```
这个地方是TypeScript在版本更新后会报错，目前元组的定义要求**顺序**和**长度**都要符合定义。


### 枚举

枚举的实现如下，主要原理是在javascript中a['a'] = 1的返回值是1原理
```
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
```

### void
声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null  
一个函数没有返回值时，你通常会见到其返回值类型是 void：
```
function warnUser(): void {
    console.log("This is my warning message");
}
```

### Null 和 Undefined
默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。

### never
never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
```
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

## 变量声明

### var, let const

在以往的开发中，var由于奇怪的作用域问题，会导致很难理解，并且也会存在一下这个问题。
```
// g可以访问f内的变量，每当g调用都会访问到a这个变量，其实let也是这样子的，这并不是区别。
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
g(); // returns 11;
```

```
// 正常的逻辑x不应该被外面的访问到，但是x被return了出去。因为var的作用域是基于函数的，let是基于{}的
function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f(true);  // returns '10'
f(false); // returns 'undefined'
```

```
// var 的多次声明并不会报错 let会报错
function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}
```

```
// var 的最大问题，在于异步循环的最终结果会存在问题，我们传给setTimeout的每一个函数表达式实际上都引用了相同作用域里的同一个i。
for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i); // all 10
}
// 解决方法, 循环的函数都有自己的作用域， 或者循环定义用let
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}
```

```
// let存在临时性死区
a++; // illegal to use 'a' before it's declared;
let a;

a = 1 //
var a;  
```

const它们与let声明相似，但是就像它的名字所表达的，它们被赋值后不能再改变。 换句话说，它们拥有与 let相同的作用域规则，但是不能对它们重新赋值。  
除非你使用特殊的方法去避免，实际上const变量的内部状态是可修改的。 对象内的值可以被修改。

两者的使用场景遵循以下原则: 使用最小特权原则，所有变量除了你计划去修改的都应该使用const。 基本原则就是如果一个变量不需要对它写入，那么其它使用这些代码的人也不能够写入它们，并且要思考为什么会需要对这些变量重新赋值。 使用 const也可以让我们更容易的推测数据的流动。

### 展开和解构

最大的知识点两者都是浅拷贝，如果展开是一个层级的话可以理解为深刻拷贝。其他的就是语法问题了。

