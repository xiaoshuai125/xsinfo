#!/bin/bash

echo "npm install"
npm install
echo "run docs:build"
npm run docs:build
chown -R www:www ./
echo "npm run docs:preview"
ps -ef | grep "npm run docs:preview" | grep -v grep | awk '{print $2}' | xargs kill -9
# 以 www 身份后台运行，忽略挂断信号，输出重定向到日志
nohup sudo -u www npm run docs:preview > /www/wwwroot/xsinfo/preview.log 2>&1 &