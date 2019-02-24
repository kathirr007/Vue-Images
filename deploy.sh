#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# ssh-keygen -t rsa -b 4096 -C "kathirr007@gmail.com" -f /home/travis/.ssh/id_rsa -q -P ""
# ssh-add -K /home/travis/.ssh/id_rsa.pub

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:kathirr007/Vue-Images.git master:gh-pages

cd -