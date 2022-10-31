---
title: markdown语法介绍
index: true
icon: 'markdown'
---

Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。

Markdown 的目标是实现「易读易写」

### markdown代码示例
[代码示例](https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/demo.html)
### markdown增强
[代码增强](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/intro.html)


### 标题
标题能显示出文章的结构。

Markdown 支持两种标题的语法，Setext 和 atx 形式。 常用atx形式

```
# This is an H1

## This is an H2
```
Atx (推荐)形式则是在行首插入 1 到 6 个 # ，对应到标题 1 到 6 阶，例如:

- H1: # Header 1
- H2: ## Header 1
- H3: ### Header 1
- H4: #### Header 1
- H5: ##### Header 1
- H6: ###### Header 1

### Blockquotes (引言)
Markdown 使用 email 形式的块引言，如果你很熟悉如何在 email 信件中引言，你就知道怎么在 Markdown 文件中建立一个块引言，那会看起来像是你强迫断行，然后在每行的最前面加上 > :

引言 >
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,

嵌套引言 >>
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
>> This is nested blockquote.

引言的块内也可以使用其他的 Markdown 语法，包括标题、列表、代码块等:
```
> ## This is a header.
>
> 1. This is the first list item.
> 1. This is the second list item.
>
> Here’s some example code:
>
>     return shell_exec("echo $input | $markdown_script");
```
### 换行
两个空格 + table
```
这是一句话不过我要在这里[空格][空格][table]  
换行
```
这是一句话不过我要在这里  
换行


### 列表
Markdown 支持有序列表和无序列表。

无序列表使用减号作为列表标记(也可使用星号、加号):
```
- Red
- Green
- Blue
```
也可以(不建议):
```
- Red
- Green
- Blue

* Red
* Green
* Blue
```
有序列表则使用数字接着一个英文句点:
```
1.  Bird
2.  McHale
3.  Parish
```

[列表讲解地址](https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/#%E5%88%97%E8%A1%A8)
  
### 代码块
和代码相关的写作或是标签语言原始码通常会有已经排版好的代码块，通常这些块我们并不希望它以一般段落文件的方式去排版，而是照原来的样子显示，Markdown 会用 &lt;pre&gt; 和 &lt;code&gt; 标签来把代码块包起来。要在 Markdown 中建立代码块很简单，```:
```
<div class="footer">
  &copy; 2004 Foo Corporation
</div>
```

### 分隔线
你可以在一行中用三个或以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号中间插入空白。下面每种写法都可以建立分隔线:

```
---(建议) * * * *** ***** - - - ---------------------------------------
```

### 链接
Markdown 支持两种形式的链接语法: 行内和参考两种形式。

不管是哪一种，链接的文字都是用 [方括号] 来标记。

要建立一个行内形式的链接，只要在方块括号后面马上接着括号并插入网址链接即可，如果你还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可，例如:
```
This is [an example](http://example.com/ "Title") inline link. [This
link](http://example.net/) has no title attribute.
```
This is [an example](http://example.com/ "Title") inline link. [This
link](http://example.net/) has no title attribute.

如果你是要链接到同样主机的资源，你可以使用相对路径:
```
See my [About](/about/) page for details.
```
See my [About](/about/) page for details.
参考形式的链接使用另外一个方括号接在链接文字的括号后面，而在第二个方括号里面要填入用以辨识链接的标签:
```
This is [an example][id] reference-style link.
```
This is [an example][id] reference-style link.

接着，在文件的任意处，你可以把这个标签的链接内容定义出来:
```
[id]: http://example.com/ "Optional Title Here"
```
[id]: http://example.com/ "Optional Title Here"

[链接定义的形式为](https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/#%E9%93%BE%E6%8E%A5)

### 强调
Markdown 使用星号 (*) 和底线 (_) 作为标记强调字词的符号，被 * 或 _ 包围的字词会被转成用 &lt;em&gt; 标签包围，用两个 * 或 _ 包起来的话，则会被转成 &lt;strong&gt;

```
**double asterisks** (建议)

*double underscores* (建议)

__single asterisks__

_single underscores_

```
**double asterisks** (建议)

*double underscores* (建议)

__single asterisks__

_single underscores_

如果要在文字前后直接插入普通的星号或底线，你可以用反斜线:
```
\*this text is surrounded by literal asterisks\*
```
\*this text is surrounded by literal asterisks\*

### 代码
如果要标记一小段行内代码，你可以用反引号把它包起来 (`) ，例如:
```
Use the `printf()` function.
```

Use the `printf()` function.

如果要在代码内插入反引号，你可以用多个反引号来开启和结束行内代码:
```
`` There is a literal backtick (`) here. ``
```
`` There is a literal backtick (`) here. ``

### 图片
很明显地，要在纯文字应用中设计一个「自然」的语法来插入图片是有一定难度的。

Markdown 使用一种和链接很相似的语法来标记图片，同样也允许两种样式: 行内 和 参考。

行内图片的语法看起来像是:
```
![Alt text](/path/to/img.jpg)

![Alt text](/path/to/img.jpg "Optional title")
```
**到目前为止， Markdown 还没有办法指定图片的宽高，如果你需要的话，你可以使用普通的 &lt;img&gt; 标签。**

### 其他文本样式
- 删除:~~delete~~
- 段落: 段落之间空一行
- 换行符: 一行结束时输入两个空格

### 自动链接
Markdown 支持比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用尖括号包起来， Markdown 就会自动把它转成链接，链接的文字就和链接位置一样，例如:
```
<http://example.com/>
```
<http://example.com/>

### 转义字符
Markdown 可以利用反斜线来插入一些在语法中有其它意义的符号，例如: 如果你想要用星号加在文字旁边的方式来做出强调效果 (但不用 &lt;em&gt; 标签) ，你可以在星号的前面加上反斜线:
```
\*literal asterisks\*
```
\*literal asterisks\*

Markdown 支持在下面这些符号前面加上反斜线来帮助插入普通的符号:
- \ 反斜线
- ` 反引号
- * 星号
- _ 底线
- {} 大括号
- [] 方括号
- () 括号
- \# 井字号
- + 加号
- - 减号
- . 英文句点
- ! 惊叹号

### Emoji
`:emoji名称:`

Example: :smile:

你可以在 [Emoji 列表](https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/emoji/) 找到所有可用的 Emoji。

### 表格
```
|     居中      |         右对齐 | 左对齐         |
| :-----------: | -------------: | :------------- |
| 居中使用`:-:` | 右对齐使用`-:` | 左对齐使用`:-` |
|       b       |      aaaaaaaaa | aaaa           |
|       c       |           aaaa | a              |
```
|     居中      |         右对齐 | 左对齐         |
| :-----------: | -------------: | :------------- |
| 居中使用`:-:` | 右对齐使用`-:` | 左对齐使用`:-` |
|       b       |      aaaaaaaaa | aaaa           |
|       c       |           aaaa | a              |

### 高亮格式

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```


















