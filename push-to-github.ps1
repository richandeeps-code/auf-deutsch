# Simple GitHub push — run from inside the auf-deutsch folder

$TOKEN = Read-Host "Paste your GitHub Personal Access Token"

Write-Host "`nResetting git..." -ForegroundColor Yellow
if (Test-Path ".git") { Remove-Item -Recurse -Force ".git" }

git init
git config user.email "ndefries@gmail.com"
git config user.name "Nathan DeFries"
git branch -M main

Write-Host "Adding files..." -ForegroundColor Yellow
git add -A
git status

Write-Host "Committing..." -ForegroundColor Yellow
git commit -m "Auf Deutsch - German learning book"

Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git remote add origin "https://${TOKEN}@github.com/ndefries/GermanLanguage.git"
git push -u origin main --force

Write-Host "`nDone! Check: https://github.com/ndefries/GermanLanguage" -ForegroundColor Green
