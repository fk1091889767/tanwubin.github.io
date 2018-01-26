--- 
layout: post
title: python核心编程-快速入门
tags: 
- python
status: publish
type: post
published: false
---

- 程序输出，print语句及hello world

```
>>> print "%s is number %d" % ("python",1)
python is number 1
```
 %s表示由一个字符串来替换，%d表示由一个整型来替换。
 
```
logfile = open('./log.txt','a')
print >> logfile, 'fatal error: invalid input!'
logfile.close()
```

">>"用来重定向输出

- 程序输入和raw_input()内建函数

```
>>> user = raw_input('enter your name')
enter your namebrieftime
>>> print user
brieftime
```

- 注释

```
>>> # this is a comment
... print "hi"  # this is another comment
hi
```

有一种叫做文档字符串的特别注释。你可以在模块、类或者函数的起始添加一个字符串，起到在线文档的功能。
这个说明可以使用.__doc__（注意前后都是双_）属性，将DocString特性print打印出来。DocSting的典型用法就是help（）调用，它抓取DocString属
性，清晰的给你展示出来。

````
def sayhello():
    "this function sayhello is to print hello world to user"
    print "hello world"
print sayhello.__doc__
print "-------------------------"
help(sayhello)

the output is:
this function sayhello is to print hello world to user
-------------------------
Help on function sayhello in module __main__:

sayhello()
    this function sayhello is to print hello world to user
````

- 操作符

标准算数操作符：+ - * / // % **

标准比较操作符：< <= > >= == !=

标准逻辑操作符：and or not

- 变量和赋值

python是动态类型语言，也就是说不需要预先声明变量的类型。变量的类型和值在赋值的那一刻被初始化

- 字符串

操作符：索引操作符[],切片操作符[:],连接操作符+,重复操作符*
```
pystr = 'python'
iscool = 'is cool!'

print pystr[0]
print pystr[2:5]
print iscool[:2]
print iscool[3:]
print iscool[-1]
print iscool * 2
print pystr + ' ' + iscool

The output is:
p
tho
is
cool!
!
is cool!is cool!
python is cool!
```

- 列表和元组

1）元组是不可变的， 而列表是可变的
2）元组通常由不同的数据，而列表是相同类型的数据队列。元组表示的是结构，而列表表示的是顺序。举个例子来讲，当你想记录棋盘上一个子的坐标时，应该使用
元组，当你想记录棋盘上所有子的坐标时，应该使用列表。
把这种“文化差异”放到 C 语言来讲，列表像是数组，元组则像是 structs 结构体。
Python 采用了命名元组的方法来使含义更加明确：

```
from collections import namedtuple
Station = namedtuple("Station", "id, city, state, lat, long")
denver = Station(44, "Denver", "CO", 40, 105)

print denver.city
print denver[1]

the output is:
Denver
Denver
```

- 字典

