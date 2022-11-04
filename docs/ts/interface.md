---
title: interface接口
---

### 基础部分

```TS
// 可选属性和扩展属性
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {   // if(config.col)会报错，因为接口不存在该属性  (存下可选属性就没了属性检测了，不存在的属性不会报错，写错了也不会)
    newSquare.color = config.color;
  }

  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

// 可选择参数，可以传递或者不传递，但是传递的话必须是该定义的属性
let mySquare = createSquare({color: "black"});
```

```TS
// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```

### 函数类型
```ts
// 需要注意的是虽然传递的参数类型可以不一样，但是类型和长度要一致，顺序也要一致
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch:SearchFunc = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

```

### 可索引类型
```ts
// TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}

interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}

// 以上[x:number] [x:string]中x可以随便写，另外由于最上面注释的原因保持数据的一致性
// 在定义了索引为字符串类型的返回值的时候，那么也就限定了数字类型的返回值，因为数字类型的索引，最终还是会赋值到字符串类型的索引上。即a[1] = 0 其实是a['1'] =0 和 a[1] = 0 其中a['1] = 0要遵循字符串的索引返回值。 
```

### 类类型

```ts
// 正常的逻辑
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

// 类型静态部分和实例部分区别(难点)

// 首先需要注意的是不存在这种东西
interface testColor { 
    constructor(a: number) // 不存在这种东西
}

// 报错的
class a implements testColor { 
    constructor(public a:number) {
    }
}

// 所以在做类继承接口，限定构造函数的传递参数的时候，需要另一种方式

interface testColot {
  new(n:number, s:string):test
}

interface test{
  a()
}

// 其实这里就是通过参数的形式去检测new的过程中的参数
function getEntity(func: testColot, n:number, s:string):test{
  return new func(n, s)
}

class aa implements test {
  a(){}
}

getEntity(aa, 1, '1')
```

### 继承接口
```ts
// 接口可以多继承，没啥难点
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

// 多个继承
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

// 这里的<Square>就是定义一个明确的Square
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

### 混合类型

```ts
// 代码很清楚 但不明白使用场景，目前看着就是一个普通的interface定义
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

### 接口继承类
```ts
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}
// 需要注意就是这里
// 口同样会继承到类的private和protected成员。 这意味着
// 当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或
// 其子类所实现（implement）, 因为非子类和自身无法拿到state****
// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
    select() { }
}

class Location {

}
```
