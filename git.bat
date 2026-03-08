@echo off

REM add all changes and commit with a default message
git add .

if %errorlevel% neq 0 (
    echo Failed to add files. Exiting.
    exit /b %errorlevel%
)

git commit -m "Update files"
if %errorlevel% neq 0 (
    echo Commit failed (perhaps no changes?).
)

git push origin main
if %errorlevel% neq 0 (
    echo Push failed. Check your network or remote settings.
)
