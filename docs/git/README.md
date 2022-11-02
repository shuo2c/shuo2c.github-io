---
title: Git常用语法汇总和整理
icon: "git"
description: git知识点
---

如果您对Git还不够了解，请先阅读一下文章  
[Git菜鸟教程](https://www.runoob.com/git/git-basic-operations.html) 或者 [Git廖雪峰版本](https://www.liaoxuefeng.com/wiki/896043488029600/)  
建议先学习廖雪峰的版本...

### 开发常用语法

1. 初始化一个git项目
```
//在响应的项目文件夹下运行如下命令
git init
```

2. 将现存的项目和远程仓库链接
```
// 删除旧的链接若存在
git remote remove [repository name]
// 添加新的地址
git remote add [repository name like origin] url
// 修改本地分支名称
git branch -M master
// 首次建立链接提交需要如下的方式
git push -u [repository name] master
```

3. 正常无意外的修改代码提交流程
```
// 提交工作区内的所有更改
git add .
// 或者如下仅提交指定的文件
git add [file] [file]
// 将文件推送到暂存区(必须加上m评论)
git commit -m "xxx"
// 提交到远程(默认当前分支)
git push  // git push [respository name] [branch name]
```

4. 当前提交需要先拉取远程代码再提交
```
// 拉去远程指定分支代码 
git pull === git fetch [repository name] [branch name] + git merge [repository name] [branch name]
git pull [repository name] [branch name]

// 不存在冲突, 重复3操作

// 存在冲突，解决冲突，重复3操作。
```

5. 拉取一个本地不存在的远程分支
```
// 先将分支拉取到本地代码仓库
git fetch [repository name] [branch name]
//切换到当前分支上
git checkout [branch name]
```

6. 拉取一个远程的分支并修改名称
```
git clone [url] [dir name]
```

7. 根据当前分支创建一个新的分支
```
git branch [branch name]
// 删除分支(不能在当前分支上)
git branch -D/d [branch name]
// 切换到当前分支上
git checkou [branch name]
// 创建分支并切换到该分支
git checkout -b [branch name]
```

8. 查看提交的历史记录
```
// --oneline 简介版本 --graph 查看历史中什么时候出现了分支、合并 --reverse 参数来逆向显示所有日志。
git log --oneline

// git blame 命令是以列表形式显示修改记录，遇到的场景不多
git blame <file>
```

9. 勿触碰的语句，可以用上面的别的方式解决
```
// 变基 多人协作会导致存在多条重复记录
git rebase

// reverse命令
git reverse
```

10. 代码回滚
```
// 工作区内所有距离上一次的add内容全部丢失
git checkout --[file] 或者IDE内整体ctrl+z(建议)
// 暂存区域内的更改丢失(工作区域不受影响)
$ git reset HEAD^            # 回退所有内容到上一个版本  
$ git reset HEAD^ hello.php  # 回退 hello.php 文件的版本到上一个版本  
$ git  reset  052e           # 回退到指定版本
// 完全回滚到上一次提交(工作区域内的未add内容会保留)
git reset --hard HEAD
```

11. git reset 回滚后再次回滚找不到SHA1编码
```
git reflog
```

12. 工作区域内容不想add, 但是想先拉取或者合并等别的分支
```
// 异次元的存储
git stash 
// 回归到工作目录(可能存在冲突)
git stash pop
```

13. 查看当前工作区文件的状态
```
git status
```

14. 产看远程分支源信息
```
git remmote   // 源地址
git remove -v // 源名称
```

15. git add . git commit -m "xxx" 快捷方式
```
git commit -am "xxx"
```

16. 打tag
```
// 普通标签
git tag -a "v1.0" -m "xxx"
// PGP标签
git tag -s "v1.0" -m "xxx"
// 指定commit的标签
git tag -a "v1.0" [SHA1] -m "xxx"
```

17. 删除tag
```
git tag -d [tag name]
git push [repository name] :refs/tags/[tag name]
```

18. 删除暂存区(索引区)文件，工作区不受影响
```
git rm --cache [file]
```

以上语句应该很全面了，可以应对大部分的应用场景。




