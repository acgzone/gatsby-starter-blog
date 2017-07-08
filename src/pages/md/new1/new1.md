---
title: 这是第1篇新闻
draft: false
tags: [rnn, neural network, dl, ml]
category: ML
date: "2017-04-07T15:42:58Z"
cover: "cover1.png"
---

其实这是第1篇新闻。。。。。

之前翻译了[一篇介绍RNN的文章](http://magicly.me/2017/03/09/iamtrask-anyone-can-code-lstm/)，一直没看到[作者](https://twitter.com/iamtrask)写新的介绍LSTM的blog，于是我又找了其他资料学习。本文先介绍一下LSTM，然后用LSTM在金庸、古龙的人名上做了训练，可以生成新的武侠名字，如果有兴趣的，还可以多搜集点人名，用于给小孩儿取名呢，哈哈，justforfun，大家玩得开心...
之前翻译了[一篇介绍RNN的文章](http://magicly.me/2017/03/09/iamtrask-anyone-can-code-lstm/)，一直没看到[作者](https://twitter.com/iamtrask)写新的介绍LSTM的blog，于是我又找了其他资料学习。本文先介绍一下LSTM，然后用LSTM在金庸、古龙的人名上做了训练，可以生成新的武侠名字，如果有兴趣的，还可以多搜集点人名，用于给小孩儿取名呢，哈哈，justforfun，大家玩得开心...

<!-- more -->

# RNN回顾
RNN的出现是为了解决状态记忆的问题，解决方法很简单，每一个时间点t的隐藏状态h(t)不再简单地依赖于数据，还依赖于前一个时间节点t-1的隐藏状态h(t-1)。可以看出这是一种递归定义（所以循环神经网络又叫递归神经网络Recursive Neural Network），h(t-1)又依赖于h(t-2)，h(t-2)依赖于h(t-3)...所以h(t)依赖于之前每一个时间点的输入，也就是说h(t)记住了之前所有的输入。
![rnn](http://colah.github.io/posts/2015-08-Understanding-LSTMs/img/RNN-rolled.png)
上图如果按时间展开，就可以看出RNN其实也就是普通神经网络在时间上的堆叠。
![rnn-unrolled](http://colah.github.io/posts/2015-08-Understanding-LSTMs/img/RNN-unrolled.png)