### Git相关命令

1、git config --global user.name "Your Name"  设置账号

2、git config --global user.email "email@example.com"  设置邮箱

3、git clone 远程仓库地址

4、git init 初始化本地仓库

5、git branch 查看当前分支

6、git branch -a 查看所有分支

7、git branch -r 查看远程分支

8、git pull (拉取远程分支代码 git fetch + get merge)

9、git add * 将本地仓库所有文件添加到暂存区 （*表示当前目录下所有的文件）

10、git commit -m " * " 将暂存区代码提交到git仓库 (*可以替换为提交到git仓库的一些改动内容信息）

11、git push 将git仓库代码推送到远程仓库

12、git log 查看提交日志

13、git status 查看当前分支状态

14、git checkout branch_name 切换到[branch_name]分支

15、git merge other_branch_name 当前分支合并[other_branch_name]分支的代码

16、git checkout -b "master-bug" 在当前的分支创建一个[master-bug]分支，并切换到这个新分支

17、git diff 对比工作区和暂存区的差异

16、git reset --hard HEAD^ 回退到上一个版本(^表示回退当前版本到历史版本的个数)

17、git reset --hard a1b3 回退到指定的版本（a1b3表示回退版本的前几位）

18、git reflog 查看仓库的操作历史

19、git branch -D branch_name 删除本地[branch_name]分支

20、git push origin -d remote_branch_name 删除远程[remote_branch_name]分支

21、q 退出当前git命令终端

22、git diff c1d2c3 d23421  比较c1d2c3和d23421这两个版本的差异

23、git diff c1d2c3 d23421 -- web/git-command.md  比较c1d2c3和d23421这两个版本[web/git-command.md]文件的差异


/*生成git公钥*/

1、git config --global user.name "your_name"
2、git config --global user.email "your_email@example.com"
3、ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

备注：

1、拉取分支（git pull）代码出现以下错误提示: ssh: Could not resolve hostname gitlab.git地址.com: Name or service not known  fatal: Could not read from remote repository.时，可以看一下本地host文件（目录：C:\Windows\System32\drivers\etc\hosts）是否配置正确；