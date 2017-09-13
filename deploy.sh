#!/bin/bash

git add --all
git commit -m "Automated Deploy"
git push
git build-deploy-gh-pages
