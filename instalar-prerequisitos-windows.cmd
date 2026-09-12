@echo off
setlocal EnableExtensions
title Instalador de herramientas - Mi Primera App

cd /d "%~dp0"

set "WINGET=winget.exe"
where winget.exe >nul 2>nul
if errorlevel 1 (
    if exist "%LOCALAPPDATA%\Microsoft\WindowsApps\winget.exe" (
        set "WINGET=%LOCALAPPDATA%\Microsoft\WindowsApps\winget.exe"
    ) else (
        goto :missing_winget
    )
)

set "INSTALL_FAILED=0"

echo.
echo === Herramientas obligatorias ===
call :ensure_package Git.Git "Git for Windows"
call :ensure_package Microsoft.VisualStudioCode "Visual Studio Code"
call :ensure_package OpenJS.NodeJS.LTS "Node.js LTS"
call :ensure_package astral-sh.uv "uv para Python"

echo.
echo Android Studio solo es necesario para usar un emulador Android.
echo Si usaras Expo Go en un telefono, puedes omitirlo.
choice /C SN /N /M "Deseas instalar Android Studio? [S/N]: "
if errorlevel 2 goto :skip_android
call :ensure_package Google.AndroidStudio "Android Studio"

:skip_android
echo.
if "%INSTALL_FAILED%"=="1" goto :failed

echo Herramientas verificadas correctamente.
echo.
echo IMPORTANTE:
echo 1. Cierra esta terminal y abre una nueva para actualizar PATH.
echo 2. En la carpeta del repositorio ejecuta: setup-windows.cmd
echo 3. Abre: MiPrimeraApp.code-workspace
echo.
pause
exit /b 0

:ensure_package
set "PACKAGE_ID=%~1"
set "PACKAGE_NAME=%~2"
echo.
echo Comprobando %PACKAGE_NAME%...
"%WINGET%" list --id "%PACKAGE_ID%" --exact --accept-source-agreements >nul 2>nul
if not errorlevel 1 (
    echo %PACKAGE_NAME% ya esta instalado.
    exit /b 0
)

echo Instalando %PACKAGE_NAME%...
"%WINGET%" install --id "%PACKAGE_ID%" --exact --source winget --silent --disable-interactivity --accept-package-agreements --accept-source-agreements
if errorlevel 1 (
    echo ERROR: No se pudo instalar %PACKAGE_NAME%.
    set "INSTALL_FAILED=1"
) else (
    echo %PACKAGE_NAME% instalado correctamente.
)
exit /b 0

:missing_winget
echo.
echo ERROR: Esta computadora no tiene WinGet.
echo Instala App Installer desde Microsoft Store:
echo https://apps.microsoft.com/detail/9NBLGGH4NNS1
echo Despues reinicia la terminal y vuelve a ejecutar este archivo.
echo.
pause
exit /b 1

:failed
echo Algunas herramientas no pudieron instalarse.
echo Revisa los errores anteriores y vuelve a ejecutar este archivo.
echo.
pause
exit /b 1
