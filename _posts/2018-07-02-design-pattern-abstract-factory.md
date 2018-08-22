--- 
layout: post
title: 小白学设计模式：抽象工厂模式
tags: 
- 设计模式
status: publish
type: post
published: true
top: false
---

1、这个设计模式出现的背景或遇到的问题是啥？

2、这个模式背后的原理是啥，如何理解？

3、为什么用了这个模式后，软件灵活性提升了？

4、该模式的优缺点


1、背景或问题

抽象工厂模式也属于工厂模式的一种，那他在简单工厂模式基础上有什么变化呢？

简单工厂，我们每次给工厂传入参数，然后得到对应的对象，每次我们这里简单理解

为创建单个对象，但有时候我们创建的对象是有依赖关系的，比如：我们在组装电脑的时候，通常需要选择一系列的配件，比如：CPU、硬盘、内存、主板、电源、机箱等等。

也就是说，这些对象不能只是简单地创建好就行了，这些对象也是有配套关系的呢，怎么去创建

有配套关系的对象，这就是抽象工厂模式要解决的问题。&nbsp;

2、抽象工厂如何解决的

抽象工厂，故名思议，在工厂这一层进行了抽象，具体的配套关系，在实际的工厂里面实现。

这就好比是世界上出现了很多工厂，但为了生成某个标准产品，并不是随便哪几个工厂的配件都

可以使用的，需要有一些标准定义，这个标准就定义了产品的标准，具体的选型交给具体的组装公司。

打个比方：抽象工厂定义了制造电脑，那么具体实现的工厂就要定义各种配套关系，从而产生不同型号的电脑。

抽象工厂的功能是为一系列相关对象或相互依赖的对象创建一个接口，一定要注意，这个接口内的方法不是任意堆砌的，而是一系列相关或相互依赖的方法，比如上面例子中的CPU和主板，都是为了组装一台电脑的相关对象。

从某种意义上看，抽象工厂其实是一个产品系列，或者是产品簇。上面例子中的抽象工厂就可以看成是电脑簇，每个不同的装机方案，代表一种具体的电脑系列。

3、灵活性为什么提升了

抽象工厂对不同的产品组合形态进行了变化的吸收

4、优缺点

这种实现有一个麻烦，就是如果在产品簇中要新增加一种产品，比如现在要求抽象工厂除了能够创建CPU和主板外，还要能够创建内存对象，那么就需要在抽象工厂里面添加创建内存的这么一个方法。当抽象工厂一发生变化，所有的具体工厂实现都要发生变化，这非常的不灵活。

感悟：

我们逐渐找到一种感觉，我们抽象往往是针对变化、希望扩展的地方进行抽象，抽象的目的是使得变化有条不紊，有个

标准来约束这种变化。
