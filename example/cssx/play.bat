@echo off
setlocal enabledelayedexpansion

:: Check if an argument was passed
set MODE=%~1

if /i "%MODE%"=="local" goto local
if /i "%MODE%"=="prod" goto prod
if /i "%MODE%"=="production" goto prod

:menu
cls
echo ============================================================
echo.
echo    ██████╗███████╗███████╗██╗  ██╗
echo   ██╔════╝██╔════╝██╔════╝╚██╗██╔╝
echo   ██║     ███████╗███████╗ ╚███╔╝ 
echo   ██║     ╚════██║╚════██║ ██╔██╗ 
echo   ╚██████╗███████║███████║██╔╝ ██╗
echo    ╚═════╝╚══════╝╚══════╝╚═╝  ╚═╝
echo.
echo                PROJECT RUNNER
echo ============================================================
echo.
echo  [1] Local Development  (next dev)
echo  [2] Production Mode    (build ^& start)
echo  [3] Exit
echo.
echo ------------------------------------------------------------
set /p choice="Enter selection: "

if "%choice%"=="1" goto local
if "%choice%"=="2" goto prod
if "%choice%"=="3" exit
goto menu

:local
echo.
echo [STATUS] Running in LOCAL mode...
call npm run dev
goto end

:prod
echo.
echo [STATUS] Running in PRODUCTION mode...
echo.
echo [1/3] Checking dependencies...
if not exist node_modules (
    echo [ACTION] node_modules missing. Installing...
    call npm install
) else (
    echo [OK] Dependencies found.
)

echo.
echo [2/3] Checking for build...
if not exist .next (
    echo [ACTION] No build found. Building now...
    call npm run build
) else (
    echo [OK] Build found.
)

echo.
echo [3/3] Launching Production Server...
call npm run start
goto end

:end
if %errorlevel% neq 0 (
    echo.
    echo [CRIT] The application encountered an error.
    pause
)