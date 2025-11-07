---

title: 6.Docker—部署Nginx
description: 6.Docker—部署Nginx
date: 2024-07-02
timeline: true
head:
  - - meta
    - name: keywords
      content: 6.Docker—部署Nginx
  - - meta
    - name: description
      content: 6.Docker—部署Nginx
  - - meta
    - name: author
      content: RobinElysia
category:
  - RobinElysia
tag:
  - Docker

---

## Docker—部署Nginx

### 搜索镜像：

```shell
docker search Nginx
# docker Hub上搜索，可以看到帮助文档
```

### 拉取镜像：

```shell
docker pull Nginx
```

### 查看镜像：

```shell
docker images
```

### 以后台运行镜像，并重命名该容器，开放外部端口9999对接80：

```shell
docker run -d --name nginx1 -p 9999:80 nginx
-d 后台运行
--name name 重命名
-p xxx:xx 端口映射（物理本机端口:docker容器端口）
端口映射概念参考路由器端口映射
```

### 查看容器运行状态：

```shell
docker ps
```

### 查看url状况（本机测试）：

```shell
curl localhost:9999
```

### 进入nginx（exec）：

```shell
docker exec -it nginx1 /bin/bash
```

### 查询nginx配置文件：

```shell
whereis nginx
```

### 进入nginx配置文件：

```shell
cd /etc/nginx
ls
nano nginx.conf
```

### 退出容器：

```shell
exit
```

### 停止容器：

```shell
docker stop 容器ID
```

#### 思考：每当我们修改配置文件都需要进入docker容器内，非常麻烦，能否不进入容器修改配置文件？

#### 答：卷技术，-v