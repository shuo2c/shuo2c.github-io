import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as t,a as i,b as e,d as a,e as r,r as d}from"./app.1825b328.js";const c={},o=i("br",null,null,-1),v={href:"https://www.runoob.com/git/git-basic-operations.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.liaoxuefeng.com/wiki/896043488029600/",target:"_blank",rel:"noopener noreferrer"},u=i("br",null,null,-1),b=r(`<h3 id="开发常用语法" tabindex="-1"><a class="header-anchor" href="#开发常用语法" aria-hidden="true">#</a> 开发常用语法</h3><ol><li>初始化一个git项目</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//在响应的项目文件夹下运行如下命令
git init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>将现存的项目和远程仓库链接</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 删除旧的链接若存在
git remote remove [repository name]
// 添加新的地址
git remote add [repository name like origin] url
// 修改本地分支名称
git branch -M master
// 首次建立链接提交需要如下的方式
git push -u [repository name] master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>正常无意外的修改代码提交流程</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 提交工作区内的所有更改
git add .
// 或者如下仅提交指定的文件
git add [file] [file]
// 将文件推送到暂存区(必须加上m评论)
git commit -m &quot;xxx&quot;
// 提交到远程(默认当前分支)
git push  // git push [respository name] [branch name]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>当前提交需要先拉取远程代码再提交</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 拉去远程指定分支代码 
git pull === git fetch [repository name] [branch name] + git merge [repository name] [branch name]
git pull [repository name] [branch name]

// 不存在冲突, 重复3操作

// 存在冲突，解决冲突，重复3操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>拉取一个本地不存在的远程分支</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 先将分支拉取到本地代码仓库
git fetch [repository name] [branch name]
//切换到当前分支上
git checkout [branch name]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function g(h,p){const n=d("ExternalLinkIcon");return s(),t("div",null,[i("p",null,[e("如果您对Git还不够了解，请先阅读一下文章"),o,i("a",v,[e("Git菜鸟教程"),a(n)]),e(" 或者 "),i("a",m,[e("Git廖雪峰版本"),a(n)]),u,e(" 建议先学习廖雪峰的版本...")]),b])}const f=l(c,[["render",g],["__file","index.html.vue"]]);export{f as default};
