---
layout: doc
---
# Rime 输入法使用
我这里主要是用的ibus + rime的方案。纯开源输入法，没有任何广告，并且支持自己修改

## 安装ibus-rime
```shell
sudo apt-get install ibus-rime
```

## Linux下东风破(plum)安装
东风破（plum）
```shell
# 请先安装 git 和 bash，并加入环境变量
# 请确保和 github.com 的连接稳定
cd ~
git clone https://github.com/rime/plum.git plum
# 卸载 plum 只需要删除 ~/plum 文件夹即可
```

## 雾凇拼音输入法
ubuntu 24 版本以上可以正常安装，之前的版本需要升级rime的版本
librime ≥ 1.8.5 且装有 librime-lua

ubuntu 22 直接安装会导致无法使用，打字没有任何显示，需要解决版本问题，作者还没解决，目前用的明月拼音，后续解决补上

安装完东风破安装雾凇拼音输入法
```shell
cd ~/plum
bash rime-install iDvel/rime-ice:others/recipes/full
```
