import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.032d2f87.js";const t={},p=e(`<h3 id="基础部分" tabindex="-1"><a class="header-anchor" href="#基础部分" aria-hidden="true">#</a> 基础部分</h3><div class="language-TS line-numbers-mode" data-ext="TS"><pre class="language-TS"><code>// 可选属性和扩展属性
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: &quot;white&quot;, area: 100};
  if (config.color) {   // if(config.col)会报错，因为接口不存在该属性  (存下可选属性就没了属性检测了，不存在的属性不会报错，写错了也不会)
    newSquare.color = config.color;
  }

  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

// 可选择参数，可以传递或者不传递，但是传递的话必须是该定义的属性
let mySquare = createSquare({color: &quot;black&quot;});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-TS line-numbers-mode" data-ext="TS"><pre class="language-TS"><code>// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型" aria-hidden="true">#</a> 函数类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 需要注意的是虽然传递的参数类型可以不一样，但是类型和长度要一致，顺序也要一致</span>
<span class="token keyword">interface</span> <span class="token class-name">SearchFunc</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> mySearch<span class="token operator">:</span><span class="token function-variable function">SearchFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> source<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>subString<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> result <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可索引类型" tabindex="-1"><a class="header-anchor" href="#可索引类型" aria-hidden="true">#</a> 可索引类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用&quot;100&quot;（一个string）去索引，因此两者需要保持一致。</span>

<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    breed<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!</span>
<span class="token keyword">interface</span> <span class="token class-name">NotOkay</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> Animal<span class="token punctuation">;</span>
    <span class="token punctuation">[</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> Dog<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">NumberDictionary</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>    <span class="token comment">// 可以，length是number类型</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>       <span class="token comment">// 错误，\`name\`的类型与索引类型返回值的类型不匹配</span>
<span class="token punctuation">}</span>

<span class="token comment">// 以上[x:number] [x:string]中x可以随便写，另外由于最上面注释的原因保持数据的一致性</span>
<span class="token comment">// 在定义了索引为字符串类型的返回值的时候，那么也就限定了数字类型的返回值，因为数字类型的索引，最终还是会赋值到字符串类型的索引上。即a[1] = 0 其实是a[&#39;1&#39;] =0 和 a[1] = 0 其中a[&#39;1] = 0要遵循字符串的索引返回值。 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类类型" tabindex="-1"><a class="header-anchor" href="#类类型" aria-hidden="true">#</a> 类类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 正常的逻辑</span>
<span class="token keyword">interface</span> <span class="token class-name">ClockInterface</span> <span class="token punctuation">{</span>
    currentTime<span class="token operator">:</span> Date<span class="token punctuation">;</span>
    <span class="token function">setTime</span><span class="token punctuation">(</span>d<span class="token operator">:</span> Date<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Clock</span> <span class="token keyword">implements</span> <span class="token class-name">ClockInterface</span> <span class="token punctuation">{</span>
    currentTime<span class="token operator">:</span> Date<span class="token punctuation">;</span>
    <span class="token function">setTime</span><span class="token punctuation">(</span>d<span class="token operator">:</span> Date<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>currentTime <span class="token operator">=</span> d<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>h<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> m<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 类型静态部分和实例部分区别(难点)</span>

<span class="token comment">// 首先需要注意的是不存在这种东西</span>
<span class="token keyword">interface</span> <span class="token class-name">testColor</span> <span class="token punctuation">{</span> 
    <span class="token function">constructor</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token comment">// 不存在这种东西</span>
<span class="token punctuation">}</span>

<span class="token comment">// 报错的</span>
<span class="token keyword">class</span> <span class="token class-name">a</span> <span class="token keyword">implements</span> <span class="token class-name">testColor</span> <span class="token punctuation">{</span> 
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 所以在做类继承接口，限定构造函数的传递参数的时候，需要另一种方式</span>

<span class="token keyword">interface</span> <span class="token class-name">testColot</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span><span class="token punctuation">(</span>n<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> s<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span>test
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">test</span><span class="token punctuation">{</span>
  <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 其实这里就是通过参数的形式去检测new的过程中的参数</span>
<span class="token keyword">function</span> <span class="token function">getEntity</span><span class="token punctuation">(</span>func<span class="token operator">:</span> testColot<span class="token punctuation">,</span> n<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> s<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span>test<span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">func</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">aa</span> <span class="token keyword">implements</span> <span class="token class-name">test</span> <span class="token punctuation">{</span>
  <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">getEntity</span><span class="token punctuation">(</span>aa<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承接口" tabindex="-1"><a class="header-anchor" href="#继承接口" aria-hidden="true">#</a> 继承接口</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 接口可以多继承，没啥难点</span>
<span class="token keyword">interface</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    sideLength<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> square <span class="token operator">=</span> <span class="token operator">&lt;</span>Square<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
square<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span>
square<span class="token punctuation">.</span>sideLength <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">// 多个继承</span>
<span class="token keyword">interface</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PenStroke</span> <span class="token punctuation">{</span>
    penWidth<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span><span class="token punctuation">,</span> PenStroke <span class="token punctuation">{</span>
    sideLength<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 这里的&lt;Square&gt;就是定义一个明确的Square</span>
<span class="token keyword">let</span> square <span class="token operator">=</span> <span class="token operator">&lt;</span>Square<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
square<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span>
square<span class="token punctuation">.</span>sideLength <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
square<span class="token punctuation">.</span>penWidth <span class="token operator">=</span> <span class="token number">5.0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="混合类型" tabindex="-1"><a class="header-anchor" href="#混合类型" aria-hidden="true">#</a> 混合类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 代码很清楚 但不明白使用场景，目前看着就是一个普通的interface定义</span>
<span class="token keyword">interface</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>start<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    interval<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Counter <span class="token punctuation">{</span>
    <span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token operator">&lt;</span>Counter<span class="token operator">&gt;</span><span class="token keyword">function</span> <span class="token punctuation">(</span>start<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    counter<span class="token punctuation">.</span>interval <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
    counter<span class="token punctuation">.</span><span class="token function-variable function">reset</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> counter<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">c</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span>interval <span class="token operator">=</span> <span class="token number">5.0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口继承类" tabindex="-1"><a class="header-anchor" href="#接口继承类" aria-hidden="true">#</a> 接口继承类</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Control</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> state<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SelectableControl</span> <span class="token keyword">extends</span> <span class="token class-name">Control</span> <span class="token punctuation">{</span>
    <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">Control</span> <span class="token keyword">implements</span> <span class="token class-name">SelectableControl</span> <span class="token punctuation">{</span>
    <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TextBox</span> <span class="token keyword">extends</span> <span class="token class-name">Control</span> <span class="token punctuation">{</span>
    <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 需要注意就是这里</span>
<span class="token comment">// 口同样会继承到类的private和protected成员。 这意味着</span>
<span class="token comment">// 当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或</span>
<span class="token comment">// 其子类所实现（implement）, 因为非子类和自身无法拿到state****</span>
<span class="token comment">// 错误：“Image”类型缺少“state”属性。</span>
<span class="token keyword">class</span> <span class="token class-name">Image</span> <span class="token keyword">implements</span> <span class="token class-name">SelectableControl</span> <span class="token punctuation">{</span>
    <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Location</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[p];function i(l,o){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","interface.html.vue"]]);export{d as default};
