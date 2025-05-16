#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 构建
set -x

echo "开始构建项目"
npm run build

# 进入构建文件夹
cd dist

# 删除旧的Git仓库
rm -rf .git

echo "创建Git仓库并提交"
# 创建Git仓库并提交
git init
git add -A
git commit -m 'deploy: 自动部署到GitHub Pages'

echo "开始推送至GitHub Pages"
# 部署到GitHub Pages
git push -f https://github.com/li522021642/resume.git main:gh-pages

cd -

echo "部署完成。您的网站应该可以在 https://li522021642.github.io/resume/ 上访问" 
