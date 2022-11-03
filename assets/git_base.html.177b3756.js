import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as d,a as i,b as e,d as l,e as t,r}from"./app.6a97f222.js";const v={},c=i("br",null,null,-1),u={href:"https://www.runoob.com/git/git-basic-operations.html",target:"_blank",rel:"noopener noreferrer"},o={href:"https://www.liaoxuefeng.com/wiki/896043488029600/",target:"_blank",rel:"noopener noreferrer"},m=i("br",null,null,-1),g=t(`<h3 id="开发常用语法" tabindex="-1"><a class="header-anchor" href="#开发常用语法" aria-hidden="true">#</a> 开发常用语法</h3><ol><li>初始化一个git项目</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//在响应的项目文件夹下运行如下命令
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>拉取一个远程的分支并修改名称</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone [url] [dir name]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7"><li>根据当前分支创建一个新的分支</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch [branch name]
// 删除分支(不能在当前分支上)
git branch -D/d [branch name]
// 切换到当前分支上
git checkou [branch name]
// 创建分支并切换到该分支
git checkout -b [branch name]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>查看提交的历史记录</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// --oneline 简介版本 --graph 查看历史中什么时候出现了分支、合并 --reverse 参数来逆向显示所有日志。
git log --oneline

// git blame 命令是以列表形式显示修改记录，遇到的场景不多
git blame &lt;file&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>勿触碰的语句，可以用上面的别的方式解决</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 变基 多人协作会导致存在多条重复记录
git rebase

// reverse命令
git reverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10"><li>代码回滚</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 工作区内所有距离上一次的add内容全部丢失
git checkout --[file] 或者IDE内整体ctrl+z(建议)
// 暂存区域内的更改丢失(工作区域不受影响)
$ git reset HEAD^            # 回退所有内容到上一个版本  
$ git reset HEAD^ hello.php  # 回退 hello.php 文件的版本到上一个版本  
$ git  reset  052e           # 回退到指定版本
// 完全回滚到上一次提交(工作区域内的未add内容会保留)
git reset --hard HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11"><li>git reset 回滚后再次回滚找不到SHA1编码</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="12"><li>工作区域内容不想add, 但是想先拉取或者合并等别的分支</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 异次元的存储
git stash 
// 回归到工作目录(可能存在冲突)
git stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="13"><li>查看当前工作区文件的状态</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="14"><li>产看远程分支源信息</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remmote   // 源地址
git remove -v // 源名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="15"><li>git add . git commit -m &quot;xxx&quot; 快捷方式</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit -am &quot;xxx&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="16"><li>打tag</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 普通标签
git tag -a &quot;v1.0&quot; -m &quot;xxx&quot;
// PGP标签
git tag -s &quot;v1.0&quot; -m &quot;xxx&quot;
// 指定commit的标签
git tag -a &quot;v1.0&quot; [SHA1] -m &quot;xxx&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="17"><li>删除tag</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git tag -d [tag name]
git push [repository name] :refs/tags/[tag name]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="18"><li>删除暂存区(索引区)文件，工作区不受影响</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rm --cache [file]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上语句应该很全面了，可以应对大部分的应用场景。</p>`,38);function b(x,p){const n=r("ExternalLinkIcon");return s(),d("div",null,[i("p",null,[e("如果您对Git还不够了解，请先阅读一下文章"),c,i("a",u,[e("Git菜鸟教程"),l(n)]),e(" 或者 "),i("a",o,[e("Git廖雪峰版本"),l(n)]),m,e(" 建议先学习廖雪峰的版本...")]),g])}const f=a(v,[["render",b],["__file","git_base.html.vue"]]);export{f as default};
