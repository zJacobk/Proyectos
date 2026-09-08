@echo off
setlocal

cd /d "%~dp0"

echo Verificando herramientas necesarias...
where code.cmd >nul 2>nul || goto :missing_code
where npm.cmd >nul 2>nul || goto :missing_node
where uv.exe >nul 2>nul || goto :missing_uv

echo.
echo Instalando extensiones recomendadas de Visual Studio Code...
call code.cmd --install-extension expo.vscode-expo-tools
call code.cmd --install-extension msjsdiag.vscode-react-native
call code.cmd --install-extension dbaeumer.vscode-eslint
call code.cmd --install-extension esbenp.prettier-vscode
call code.cmd --install-extension ms-python.python
call code.cmd --install-extension ms-python.vscode-pylance
call code.cmd --install-extension charliermarsh.ruff
call code.cmd --install-extension redhat.vscode-yaml
if errorlevel 1 goto :failed

echo.
echo Instalando dependencias de la aplicacion movil...
pushd "MiPrimeraApp"
call npm.cmd ci
if errorlevel 1 goto :failed_popd
popd

echo.
echo Instalando dependencias de NestJS...
pushd "mi-primera-app-backend-nest"
call npm.cmd ci
if errorlevel 1 goto :failed_popd
popd

echo.
echo Preparando Python y FastAPI con uv...
pushd "mi-primera-app-backend-fastapi"
call uv.exe sync
if errorlevel 1 goto :failed_popd
popd

echo.
echo Configuracion terminada correctamente.
echo Abre MiPrimeraApp.code-workspace en Visual Studio Code.
exit /b 0

:missing_code
echo ERROR: Visual Studio Code no esta instalado o code.cmd no esta en PATH.
exit /b 1

:missing_node
echo ERROR: Node.js y npm no estan instalados o npm.cmd no esta en PATH.
exit /b 1

:missing_uv
echo ERROR: uv no esta instalado o uv.exe no esta en PATH.
exit /b 1

:failed_popd
popd

:failed
echo.
echo ERROR: La configuracion no pudo terminar. Revisa el mensaje anterior.
exit /b 1
