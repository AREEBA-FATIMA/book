@echo off
echo Debugging Chatbot Environment...
echo --------------------------------
echo 1. Checking Python Version:
python --version
if %errorlevel% neq 0 echo ERROR: Python not found!
echo.

echo 2. Checking Installed Packages:
pip list
echo.

echo 3. Attempting to run Debug Script:
python debug_run.py
echo.
echo --------------------------------
echo If the server is running above (you see 'Uvicorn running...'), then:
echo 1. Keep this window open.
echo 2. Try the curl command in another window.
echo.
echo If it FAILED (errors above), please Copy & Paste the output to the chat.
echo.
pause
