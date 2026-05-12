#!/bin/bash

# 删除缓存
echo "del cache"
rm -rf ./node_modules
rm -rf ./docs/.vitepress/cache
rm -rf ./docs/.vitepress/dist

# 安装依赖
echo "npm install"
npm install

# 构建静态文件
echo "npm run docs:build"
npm run docs:build

# 拷贝到目标目录
echo "copy to /www/xsinfo"
sudo rm -rf /www/xsinfo
sudo mkdir -p /www/xsinfo
sudo cp -r ./docs/.vitepress/dist/* /www/xsinfo/
sudo chown -R www-data:www-data /www/xsinfo/

echo "done"