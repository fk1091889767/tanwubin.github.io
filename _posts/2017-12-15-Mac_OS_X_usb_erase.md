--- 
layout: post
title: Mac OS X USB格式化的两种方法
tags: 
- 计算机教程
status: publish
type: post
published: true
---
- 磁盘工具

使用磁盘工具中的擦除功能

- diskutil

````
sudo diskutil eraseDisk FAT32 usb_name MBRFormat /dev/disk2
````
其中usb_name是格式化后的卷标。

/dev/disk2是格式化的盘符

*Edit History:* 

2017-12-15:tanwubin edit & publish