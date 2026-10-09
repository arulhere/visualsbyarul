@echo off
set GIT_EXE=c:\Users\arulr\Downloads\Truus.co-Awwward-Website-main\mingit\cmd\git.exe
"%GIT_EXE%" init
"%GIT_EXE%" config user.name "arulhere"
"%GIT_EXE%" config user.email "byyarul@gmail.com"
"%GIT_EXE%" add -A
"%GIT_EXE%" commit -m "visualsbyarul portfolio website"
"%GIT_EXE%" branch -M main
"%GIT_EXE%" remote remove origin 2>nul
"%GIT_EXE%" remote add origin https://github.com/arulhere/visualsbyarul.git
"%GIT_EXE%" log -1 --oneline
"%GIT_EXE%" remote -v
