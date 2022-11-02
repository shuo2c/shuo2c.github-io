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



