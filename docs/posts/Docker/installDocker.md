---

title: 2.安装Docker
description: 2.安装Docker
date: 2024-06-29
timeline: true
head:
  - - meta
    - name: keywords
      content: 2.安装Docker
  - - meta
    - name: description
      content: 2.安装Docker
  - - meta
    - name: author
      content: RobinElysia
category:
  - RobinElysia
tag:
  - Docker

---

<link rel="stylesheet" href="/css/font-style.css">

# 2.安装Docker

## Linux环境：

### centOS内核：
```bash
sudo uname -r
查看系统内核
```
### centOS系统版本：

```bash
sudo cat /etc/os-release
```

## 安装

### 卸载旧版Docker：

```bash
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

### 安装依赖：
```bash
sudo yum install -y yum-utils
#设置镜像仓库（需要翻墙）
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

### 更新yum软件包索引：
```bash
sudo yum makecache fast
```

### 安装最新版Docker引擎（Docker社区（ee企业版）、客户端、容器）：

```bash
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### 启动Docker：
```bash
sudo systemctl start docker

// systemctl enable docker --now 开机自启动且当前启动
sudo docker version
```

### 测试Docker Hello World：

```bash
sudo docker run hello-world
#运行后会拉取镜像
```
### 查看Hello-world镜像：
```bash
sudo docker images
```

## 配置阿里云镜像加速
[配置阿里云镜像加速](https://www.bilibili.com/video/BV1og4y1q7M4?p=7&spm_id_from=pageDriver&vd_source=dca5deabbb49f895ff5ec660b9e33dd4)

## 卸载Docker

```bash
#删除Docker
sudo yum remove docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
#删除镜像
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
# /var/lib/docker        docker的
```