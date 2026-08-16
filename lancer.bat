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

echo Arret de l'ancienne instance sur le port 3000...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$processIds = (Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue).OwningProcess | Select-Object -Unique; if ($processIds) { Stop-Process -Id $processIds -Force -ErrorAction SilentlyContinue }"

echo Demarrage de LAV sur http://localhost:3000/lav.html
call npm run dev -- --open /lav.html
