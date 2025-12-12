---
layout: doc
---
# Ubuntu 下使用 Windows 字体
适用于双系统或有 Windows 分区的情况，可直接使用原系统字体。

步骤 1：创建字体目录
```shell
sudo mkdir /usr/share/fonts/truetype/windows-font
```

步骤 2：拷贝 Windows 字体文件 从 C:\Windows\Fonts 拷贝所需 .ttf 或 .ttc 文件到新目录：
这里需要替换一下windows目录
```shell
sudo cp /media/xiaoshuai/Windows/Windows/Fonts/* /usr/share/fonts/truetype/windows-font
```

步骤 3：修改权限并更新缓存
```shell
sudo chmod -R 755 /usr/share/fonts/truetype/windows-font
sudo mkfontscale
sudo mkfontdir
sudo fc-cache -fv
```