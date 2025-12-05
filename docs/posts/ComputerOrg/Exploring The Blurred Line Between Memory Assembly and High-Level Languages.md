---

title: 探究：内存、汇编与高级语言之间的模糊地界
description: 探究：内存、汇编与高级语言之间的模糊地界
date: 2025-12-08
timeline: true
head:
  - - meta
    - name: keywords
      content: 探究：内存、汇编与高级语言之间的模糊地界
  - - meta
    - name: description
      content: 探究：内存、汇编与高级语言之间的模糊地界
  - - meta
    - name: author
      content: RobinElysia
category:
  - RobinElysia
tag:
  - 计算机组成原理

---

<link rel="stylesheet" href="/css/font-style.css">

# 探究：内存、汇编与高级语言之间的模糊地界

## 前言
&emsp;很少会有人打着热爱的名号去研读计算机科学相关的书。但很不巧的是，每一个计算机从业者都应该好好学学计算机科学，这并非幌子，而是更深入的理解和知晓其中的实现原理，这也是我本篇文章的核心部分，即：“高级语言屏蔽了哪些我们不知道的东西？”。

&emsp;这部分我将参考《计算机组成原理》一书的第三、四章节，详细介绍高级语言是如何在内存和汇编上实现变量、函数、方法和参数传递的，除此以外还有一些关于C、Java与Python的详细深入。话不多说，直接开始！

## 内存

## 变量和常量

## 子程序

### 动态分配和静态分配

#### Java、Python的静态/动态分配

### 栈指针、帧指针和栈帧

### 函数与方法

## 参数传递：值传递与引用传递

### C取消优化编译器所导致的值传递错误

### Python的深浅拷贝

### Java clone()