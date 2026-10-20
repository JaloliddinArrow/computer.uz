#!/usr/bin/env bash
set -e

cd "$(dirname "$0")"

if [ -z "$1" ]; then
  echo "=================================================================="
  echo "  COMPUTER.UZ — GitHub'ga yuklash yordamchisi"
  echo "=================================================================="
  echo "Ishlatish usuli:"
  echo "  ./githubga_yuklash.sh https://github.com/USERNAME/computer.uz.git"
  echo ""
  read -p "GitHub repozitoriyangiz ssilkasini (URL) kiriting: " REPO_URL
else
  REPO_URL="$1"
fi

if [ -z "$REPO_URL" ]; then
  echo "❌ Xatolik: Repozitoriya URL manzili kiritilmadi!"
  exit 1
fi

git branch -M main

if git remote | grep -q "^origin$"; then
  git remote set-url origin "$REPO_URL"
else
  git remote add origin "$REPO_URL"
fi

echo "🚀 Loyiha $REPO_URL manziliga yuklanmoqda..."
git push -u origin main
echo "✅ Muvaffaqiyatli yuklandi!"
