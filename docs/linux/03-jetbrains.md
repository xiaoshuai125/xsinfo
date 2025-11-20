---
layout: doc
---
# Jetbrains 系列IDE在ubuntu使用
与windows 不同,ubuntu使用Jetbrains 系列IDE会有一些快捷键冲突,导致使用的时候很难受,下面就是来解决冲突问题

## 搜索快捷键Ctrl+Alt+F
按下 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> 即可触发搜索功能,但是这个被输入法给占用了,需要删除配置

一般是输入法占用了,在`设置`里找到`键盘`,然后输入法的 `首选项` 点击`快捷键`把 `ctrl+alt+f` 的删除即可

## 前进后退Ctrl+Alt+左右箭头
如果使用windows按键布局就是 按下 

<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>&lt;</kbd> 和  <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>&gt;</kbd> 

可以前进与后退

不过现在默认使用了GNOME的按键映射而不是windows,GNOME的前进后退如下:

<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>&lt;</kbd> 和  <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>&gt;</kbd>

如果想修占用可以输入下面命令可以查看
```shell
gsettings get org.gnome.desktop.wm.keybindings switch-to-workspace-left
```
```shell
gsettings get org.gnome.desktop.wm.keybindings switch-to-workspace-right
```

根据输出结果，我这里只保留设置 '&lt;Super&gt;Page_Up' 与 '&lt;Super&gt;Page_Down' 快捷键，其他两个不要，根据自己喜好设置
```shell
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-left "['<Super>Page_Up']"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-right "['<Super>Page_Down']"
```
