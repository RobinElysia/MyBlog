---

title: 3.Docker原理
description: 3.Docker原理
date: 2024-06-29
timeline: true
head:
  - - meta
    - name: keywords
      content: 3.Docker原理
  - - meta
    - name: description
      content: 3.Docker原理
  - - meta
    - name: author
      content: RobinElysia
category:
  - RobinElysia
tag:
  - Docker

---

# 

## Docker—run的原理和Docker原理

> Docker的运行原理

<img src="/assets/img/Docker/image.png" style="display: block;margin: 0 auto;" />

> Docker工作原理

Docker是一个 Client-Server 结构的系统，Docker的守护进程运行在主机上，通过Socket从客户端访问。

Docker-Server接收Docker-Client命令，从而执行。

> Docker为什么比虚拟机快

1. Docker有着比虚拟机更少的抽象层

2. Docker使用寄主机的内核，虚拟机技术使用Guest OS。可以避免启动引导导致的运行过慢

## 原理详情参考

[操作系统设计原理：文件系统实现：联合文件系统、我们需要的隔离：Cgroup与另起炉灶的NameSpace三篇文章](http://localhost:8080/tag/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1%E5%8E%9F%E7%90%86/)