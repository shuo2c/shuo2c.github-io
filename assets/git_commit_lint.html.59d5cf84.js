import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as t,e as a}from"./app.4e24359e.js";const s="/assets/bad.bee8c450.jpg",d="/assets/good.a314f413.webp",c={},n=a('<p>git 规定提交时必须要写提交信息，作为改动说明，保存在 commit 历史中，方便回溯。<br> 规范的 log 不仅有助于他人 review, 还可以有效的输出 CHANGELOG，甚至对于项目的研发质量都有很大的提升。 ，大多数同学对于 log 信息都是简单写写，没有很好的重视，甚至有些同学可能都不知道只会事儿...</p><h3 id="为什么要规范commit-message" tabindex="-1"><a class="header-anchor" href="#为什么要规范commit-message" aria-hidden="true">#</a> 为什么要规范commit message</h3><p>一直在说要规范 commit message格式，那为什么要这样做呢？ 让我们先来看一个不太规范的 commit 记录： <img src="'+s+'" alt="无提交规范"> 看完以后什么感觉，这到底更新了什么啊，写得全是update，这种 commit 信息对于想要从中获取有效信息的人来说无疑是一种致命的打击。</p><p>那我们来看一个社区里面比较流行的Angular规范的 commit 记录: <img src="'+d+`" alt="Angular的提交"> 看完是不是一目了然呢？</p><p>上图中这种规范的 commit 信息首先提供了更多的历史信息，方便快速浏览。其次，可以过滤某些 commit（比如文档改动），便于快速查找信息。</p><p>既然说到了 Angular 团队的规范是目前社区比较流行的 commit 规范，那它具体是什么呢？下面让我们来具体深入了解下吧。</p><h3 id="angular-团队的-commit-规范" tabindex="-1"><a class="header-anchor" href="#angular-团队的-commit-规范" aria-hidden="true">#</a> Angular 团队的 commit 规范</h3><p>它的 message 格式如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;
// 空一行
&lt;body&gt;
// 空一行
&lt;footer&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分别对应 Commit message 的三个部分：Header，Body 和 Footer。</p><h3 id="commit-header" tabindex="-1"><a class="header-anchor" href="#commit-header" aria-hidden="true">#</a> commit - header</h3><p>Header 部分只有一行，包括三个字段：<code>type</code>（必需）、<code>scope</code>（可选）和<code>subject</code>（必需）。</p><ul><li><p><code>type</code>: 用于说明 commit 的类型。一般有以下几种:</p><ul><li>feat: 新增的feature, 新功能点</li><li>fix: 修复的bug</li><li>docs: 仅仅修改了文档，如readme.md</li><li>style: 仅仅是对格式进行修改，如逗号、缩进、空格等。不改变代码逻辑。</li><li>refactor: 代码重构，没有新增功能或修复bug</li><li>pref: 优化相关，如提升性能、用户体验等。</li><li>test: 测试用例，包括单元测试、继承测试。</li><li>chore: 改变构建流程、或者增加依赖库、工具等。</li><li>revert: 版本回滚</li></ul></li><li><p><code>scope</code>: 用于说明 commit 影响的范围，比如: views, component, utils, test...</p></li><li><p><code>subject</code>: commit 目的的简短描述</p></li></ul><h3 id="commit-body" tabindex="-1"><a class="header-anchor" href="#commit-body" aria-hidden="true">#</a> commit - body</h3><p>对本次 commit 修改内容的具体描述, 可以分为多行。如下图:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># body: 72-character wrapped. This should answer:
# * Why was this change necessary?
# * How does it address the problem?
# * Are there any side effects?
# initial commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="commit-footer" tabindex="-1"><a class="header-anchor" href="#commit-footer" aria-hidden="true">#</a> commit - footer</h3><p>一些备注, 通常是 BREAKING CHANGE(当前代码与上一个版本不兼容) 或修复的 bug(关闭 Issue) 的链接。<br> 简单介绍完上面的规范，我们下面来说一下commit.template，也就是 git 提交信息模板</p><h3 id="git-提交信息模板" tabindex="-1"><a class="header-anchor" href="#git-提交信息模板" aria-hidden="true">#</a> git 提交信息模板</h3><p>如果你的团队对提交信息有格式要求，可以在系统上创建一个文件，并配置 git 把它作为默认的模板，这样可以更加容易地使提交信息遵循格式。</p><p>通过以下命令来配置提交信息模板:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config commit.template   [模板文件名地址]     //这个命令只能设置当前分支的提交模板
git config  ——global commit.template   [模板文件名地址]    //这个命令能设置全局的提交模板，注意global前面是两杠
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>新建 .gitmessage.txt(模板文件) 内容可以如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># headr: &lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;
# - type: feat, fix, docs, style, refactor, test, chore
# - scope: can be empty
# - subject: start with verb (such as &#39;change&#39;), 50-character line
#
# body: 72-character wrapped. This should answer:
# * Why was this change necessary?
# * How does it address the problem?
# * Are there any side effects?
#
# footer:
# - Include a link to the issue.
# - BREAKING CHANGE
#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看完上面这些，你会不会像我一样感觉配置下来挺麻烦的，配置一个适合自己和团队使用的近乎完美的 commit 规范看来也不是一件容易的事情。<br> 不过社区也为我们提供了一些辅助工具来帮助进行提交，commitizen, 后面聊。<br> 本次仅学会上面的即可。 需要直接输入<code>git commit</code>才会触发，直接<code>git commit -m &quot;xxx&quot;</code>不会触发</p>`,25),l=[n];function r(o,m){return i(),t("div",null,l)}const v=e(c,[["render",r],["__file","git_commit_lint.html.vue"]]);export{v as default};
