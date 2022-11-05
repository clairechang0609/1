#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e
# 打包
npm run build
# 移動至到打包後的dist目錄 
cd dist
# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# 部署到 git@github.com:clairechang0609/daniel-work.git 分支為 gh-pages
git push -f git@github.com:clairechang0609/daniel-work.git main:gh-pages

cd -


