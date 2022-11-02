---
title: Git常用语法汇总和整理
icon: "git"
description: git知识点
---

###  Git新功能：switch、restore  
这篇文章将介绍`git restore`和`git switch`两个命令。 
想要了解为什么新增了`git restore`和`git switch`命令，需先介绍下`git checkout`命令。旧的checkout命令仍然可用

### git checkout 的负担  
- 切换分支  

  `git checkout`的功能根据上下文决定，这一点经常让新手感到疑惑。  
  `git checkout`经常用来切换本地分支，即切换HEAD指向的分支。例如，从main分支切换到develop分支。
  ```
  git checkout develop
  ```
  也可以让HEAD指针指向指定的提交，而非一个分支。此时，会进入分离分支状态（detached HEAD state）。
  ```
  git checkout 175b4f9d037d022b81dde5bdce3b2d536b1f8dcc
  ```

- 恢复文件
 
  当为`git checkout`参数添加文件时，事情开始变得奇怪起来。它会舍弃本地修改，使用分支状态替换。  
  例如，切换到dev分支后对test.txt文件做了一些修改，你可以使用当前分支最后提交中test.txt文件替换当前文件，即恢复到指定提交中的状态。
  ```
  git checkout -- test.txt
  ```
  查看`git checkout`文档，会发现该命令还有一个常被忽略的参数：
  ```
  git checkout <tree-ish> -- <pathspec>
  ```
  &lt;tree-ish&gt;代表很多不同的东西，但最常见的是代表提交哈希和分支名。默认为当前分支，但也可以是任意分支、任意提交。  
  因此，当前在dev分支，想要将test.txt文件改变为main分支的版本，可以使用以下命令：
  ```
  git checkout main -- test.txt
  ```
  总结来看，给`git checkout`命令传递分支、提交作为参数，它会把所有文件修改到指定版本状态；如果指定了文件名称，它只会修改指定文件到指定版本。

  总体来说就是干的事情儿太多了，checkout的语义化也不明确，所以新增了两个小弟来分担下。

### git checkout 的分担小弟

1. git switch

虽然上面部分已经介绍了git checkout的使用细节，但确实很容易让新手产生疑惑。git 2.23版本引入了两个新的命令：`git switch`和`git restore`,   
每个命令只做git checkout的一部分工作。git checkout仍然可以使用，但这两个命令对新手更友好。

`git switch`用来切换分支或提交。
```
git switch dev
```
使用`git checkout`时，可以传入提交，切换到 detached HEAD 状态。`git switch`默认不支持此操作，需提供-d标记：
```
git switch -d 175b4f9d037d022b81dde5bdce3b2d536b1f8dcc
```
另一点不同是，使用`git checkout`把创建、切换合并到一个命令时，使用-b标记：
```
git checkout -b new_branch
```
用`git switch`创建并切换到新分支，使用-c标记：
```
git switch -c new_branch
```

2. git restore

`git checkout`传递文件切换文件状态部分功能由`git restore`实现。使用`git restore`命令可以把文件恢复到指定状态：
```
git restore -- test.txt
```
如果指定了 path，但 restore source 中不存在，则会移除文件以达到和指定版本一致的状态。

两种方式都可以，看大家的接受程度，目前新版本的git status 可以在未add和add内得到新的git restore的语法。