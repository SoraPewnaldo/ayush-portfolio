@echo off
echo ==========================================
echo Starting Ayush Portfolio Web App...
echo ==========================================
start /b cmd /c "cd backend && node server.js"
cd frontend && npm run dev
