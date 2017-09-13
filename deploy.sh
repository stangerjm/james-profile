#!/bin/bash

git add --all
git commit -m "Automated Deploy"
git push
gulp build-deploy-gh-pages
