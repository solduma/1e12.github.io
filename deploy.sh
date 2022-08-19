set -e

rm -rf dist

npm run build

cd dist

git config --global user.email "iljo.joseph.yoo@gmail.com"
git config --global user.name "solduma"
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:solduma/solduma.github.io.git main:gh-pages

cd -
