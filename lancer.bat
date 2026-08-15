@echo off
setlocal
cd /d "%~dp0"

where npm >nul 2>&1
if errorlevel 1 (
  echo Node.js et npm sont requis. Installez-les depuis https://nodejs.org/
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo Installation des dependances...
  call npm install
  if errorlevel 1 (
    echo L'installation a echoue.
    pause
    exit /b 1
  )
)

echo Demarrage de l'application sur http://localhost:3000
call npm run dev
