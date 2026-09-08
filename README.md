# Mi Primera App completa

Este repositorio reúne la aplicación móvil y sus dos backends de aprendizaje.

## Partes del proyecto

- `MiPrimeraApp`: React Native + Expo + TypeScript.
- `mi-primera-app-backend-nest`: NestJS + TypeScript.
- `mi-primera-app-backend-fastapi`: FastAPI + Python, administrado con `uv`.
- `MiPrimeraApp.code-workspace`: workspace compartido de Visual Studio Code.

## Programas necesarios

- Git
- Visual Studio Code
- Node.js 24 y npm
- `uv` (instala y administra Python para FastAPI)
- Android Studio y un emulador, o Expo Go en un teléfono

VS Code ofrecerá instalar las extensiones recomendadas al abrir el workspace.

## Preparación inicial

### Windows: instalación automática

Después de clonar el repositorio, ejecuta desde su carpeta raíz:

```powershell
.\setup-windows.cmd
```

Este instalador agrega las extensiones recomendadas de VS Code y reconstruye las dependencias de Expo, NestJS y FastAPI. Visual Studio Code, Node.js, `uv` y Android Studio deben estar instalados previamente.

### Instalación manual

Abre PowerShell en la raíz del repositorio y ejecuta:

```powershell
cd .\MiPrimeraApp
npm ci

cd ..\mi-primera-app-backend-nest
npm ci

cd ..\mi-primera-app-backend-fastapi
uv sync
```

## Ejecutar cada parte

Puedes usar `Terminal > Run Task` en VS Code o estos comandos:

```powershell
# Aplicación móvil
cd .\MiPrimeraApp
npm run android

# Backend NestJS (http://localhost:3000)
cd .\mi-primera-app-backend-nest
npm run start:dev

# Backend FastAPI (http://localhost:8000)
cd .\mi-primera-app-backend-fastapi
uv run fastapi dev main.py --port 8000
```

## Archivos que no se comparten

`node_modules`, `.venv`, compilaciones y archivos `.env` se excluyen deliberadamente. No son el código fuente y pueden pesar cientos de megabytes. Las versiones reproducibles están definidas por `package-lock.json` y `uv.lock`.

Nunca guardes contraseñas o claves privadas en Git. Si después usamos variables de entorno, agrega solamente un archivo `.env.example` con nombres y valores de ejemplo.
