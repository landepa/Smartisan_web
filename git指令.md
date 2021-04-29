297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo
`$ git init`
Initialized empty Git repository in E:/A0429/git-demo/.git/

297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo (master)
$ git remote add origin git@github.com:landepa/Smartisan_web.git

297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo (master)
$ git pull
Warning: Permanently added the RSA host key for IP address '192.30.255.113' to the list of known hosts.
remote: Enumerating objects: 244, done.
remote: Counting objects: 100% (244/244), done.
remote: Compressing objects: 100% (184/184), done.
remote: Total 244 (delta 83), reused 216 (delta 55), pack-reused 0
Receiving objects: 100% (244/244), 16.23 MiB | 1.83 MiB/s, done.
Resolving deltas: 100% (83/83), done.
From github.com:landepa/Smartisan_web

 * [new branch]      master     -> origin/master
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master


297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo (master)
$ git fetch origin master
Warning: Permanently added the RSA host key for IP address '192.30.255.112' to the list of known hosts.
From github.com:landepa/Smartisan_web
 * branch            master     -> FETCH_HEAD

297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo (master)
$ git pull origin master
From github.com:landepa/Smartisan_web
 * branch            master     -> FETCH_HEAD
Checking out files: 100% (201/201), done.

297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo (master)
$ git add .

297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo (master)
$ git commit "readme add"
error: pathspec 'readme add' did not match any file(s) known to git

297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo (master)
$ git commit 'readme add'
error: pathspec 'readme add' did not match any file(s) known to git

297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo (master)
$ git commit -m "readme add"
[master 9a40b86] readme add
 1 file changed, 1 insertion(+), 1 deletion(-)

297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo (master)
$ git push origin master
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 305 bytes | 305.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:landepa/Smartisan_web.git
   de127d6..9a40b86  master -> master

297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo (master)
$ git add .

297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo (master)
$ git commit -m
error: switch `m' requires a value

297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo (master)
$ git commit -m 'add readme'
[master 55766ec] add readme
 1 file changed, 1 insertion(+), 1 deletion(-)

297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo (master)
$ git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master


297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo (master)
$ git push origin
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master


297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo (master)
$ git push origin master
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 298 bytes | 298.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:landepa/Smartisan_web.git
   9a40b86..55766ec  master -> master

297956615@▒▒▒▒▒▒▒▒▒▒ MINGW64 /e/A0429/git-demo (master)
$