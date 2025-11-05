#!/bin/bash

echo "npm install"
npm install
echo "run docs:build"
npm run docs:build
chown -R www:www ./
ps -ef | grep "npm run docs:preview" | grep -v grep | awk '{print $2}' | xargs kill -9
sudo -u www "npm run docs:preview &"