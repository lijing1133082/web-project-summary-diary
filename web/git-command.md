### Git相关命令

1、git clone 远程仓库地址

2、git init 初始化本地仓库

3、git branch 查看当前分支

4、git branch -a 查看所有分支

5、git branch -r 查看远程分支

6、git pull (拉取远程分支代码 git fetch + get merge)

7、git add * 将本地仓库所有文件添加到暂存区 （*表示当前目录下所有的文件）

8、git commit -m "*" 将暂存区代码提交到git仓库

9、git push 将git仓库代码推送到远程仓库

10、git log 查看提交日志

11、git status 查看当前分支状态

12、git checkout branch_name 切换到[branch_name]分支

13、git merge other_branch_name 当前分支合并[other_branch_name]分支的代码

14、git checkout -b "master-bug" 在当前的分支创建一个[master-bug]分支，并切换到这个新分支

15、git diff 对比工作区和暂存区的差异

16、git reset --hard HEAD^ 回退到上一个版本(^表示回退当前版本到历史版本的个数)

17、git reset --hard a1b3 回退到指定的版本（a1b3表示回退版本的前几位）

18、git reflog 查看仓库的操作历史
