import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as a,a as e,b as n,d as l,e as s,r as t}from"./app.032d2f87.js";const v={},u={href:"https://www.tslang.cn/docs/handbook/basic-types.html",target:"_blank",rel:"noopener noreferrer"},c=s(`<h2 id="基础类型" tabindex="-1"><a class="header-anchor" href="#基础类型" aria-hidden="true">#</a> 基础类型</h2><h3 id="元组tuple" tabindex="-1"><a class="header-anchor" href="#元组tuple" aria-hidden="true">#</a> 元组Tuple</h3><p>当访问一个越界的元素，会使用联合类型替代：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>x[3] = &#39;world&#39;; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, &#39;string&#39; 和 &#39;number&#39; 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个地方是TypeScript在版本更新后会报错，目前元组的定义要求<strong>顺序</strong>和<strong>长度</strong>都要符合定义。</p><h3 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h3><p>枚举的实现如下，主要原理是在javascript中a[&#39;a&#39;] = 1的返回值是1原理</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var Color;
(function (Color) {
    Color[Color[&quot;Red&quot;] = 0] = &quot;Red&quot;;
    Color[Color[&quot;Green&quot;] = 1] = &quot;Green&quot;;
    Color[Color[&quot;Blue&quot;] = 2] = &quot;Blue&quot;;
})(Color || (Color = {}));
var c = Color.Green;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="void" tabindex="-1"><a class="header-anchor" href="#void" aria-hidden="true">#</a> void</h3><p>声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null<br> 一个函数没有返回值时，你通常会见到其返回值类型是 void：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function warnUser(): void {
    console.log(&quot;This is my warning message&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="null-和-undefined" tabindex="-1"><a class="header-anchor" href="#null-和-undefined" aria-hidden="true">#</a> Null 和 Undefined</h3><p>默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。</p><h3 id="never" tabindex="-1"><a class="header-anchor" href="#never" aria-hidden="true">#</a> never</h3><p>never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error(&quot;Something failed&quot;);
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h2><h3 id="var-let-const" tabindex="-1"><a class="header-anchor" href="#var-let-const" aria-hidden="true">#</a> var, let const</h3><p>在以往的开发中，var由于奇怪的作用域问题，会导致很难理解，并且也会存在一下这个问题。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// g可以访问f内的变量，每当g调用都会访问到a这个变量，其实let也是这样子的，这并不是区别。
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
g(); // returns 11;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 正常的逻辑x不应该被外面的访问到，但是x被return了出去。因为var的作用域是基于函数的，let是基于{}的
function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f(true);  // returns &#39;10&#39;
f(false); // returns &#39;undefined&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// var 的多次声明并不会报错 let会报错
function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i &lt; matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i &lt; currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// var 的最大问题，在于异步循环的最终结果会存在问题，我们传给setTimeout的每一个函数表达式实际上都引用了相同作用域里的同一个i。
for (var i = 0; i &lt; 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i); // all 10
}
// 解决方法, 循环的函数都有自己的作用域， 或者循环定义用let
for (var i = 0; i &lt; 10; i++) {
    // capture the current state of &#39;i&#39;
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// let存在临时性死区
a++; // illegal to use &#39;a&#39; before it&#39;s declared;
let a;

a = 1 //
var a;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>const它们与let声明相似，但是就像它的名字所表达的，它们被赋值后不能再改变。 换句话说，它们拥有与 let相同的作用域规则，但是不能对它们重新赋值。<br> 除非你使用特殊的方法去避免，实际上const变量的内部状态是可修改的。 对象内的值可以被修改。</p><p>两者的使用场景遵循以下原则: 使用最小特权原则，所有变量除了你计划去修改的都应该使用const。 基本原则就是如果一个变量不需要对它写入，那么其它使用这些代码的人也不能够写入它们，并且要思考为什么会需要对这些变量重新赋值。 使用 const也可以让我们更容易的推测数据的流动。</p><h3 id="展开和解构" tabindex="-1"><a class="header-anchor" href="#展开和解构" aria-hidden="true">#</a> 展开和解构</h3><p>最大的知识点两者都是浅拷贝，如果展开是一个层级的话可以理解为深刻拷贝。其他的就是语法问题了。</p>`,28);function o(m,b){const i=t("ExternalLinkIcon");return r(),a("div",null,[e("p",null,[n("主要记录下官网手册指南上一些未更新的东西。 "),e("a",u,[n("TypeScript手册指南"),l(i)])]),c])}const x=d(v,[["render",o],["__file","index.html.vue"]]);export{x as default};
