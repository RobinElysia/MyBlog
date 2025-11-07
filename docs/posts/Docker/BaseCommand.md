---

title: 4.Docker基础命令
description: 4.Docker基础命令
date: 2024-06-30
timeline: true
head:
  - - meta
    - name: keywords
      content: 4.Docker基础命令
  - - meta
    - name: description
      content: 4.Docker基础命令
  - - meta
    - name: author
      content: RobinElysia
category:
  - RobinElysia
tag:
  - Docker

---

## Docker命令

```shell
docker  version
#  显示Docker版本信息
docker  info
#  显示更详细信息
docker  命令 --help
docker --help
#  帮助指令
```

> ### 镜像命令
>
> https://docs.docker.com/reference/cli/docker/image/

#### 命令：

```shell
基础命令：
docker  images 
docker images  --help

解释：
REPOSITORY		 
# 镜像的仓库源
TAG
# 镜像的标签
IMAGE  ID
#  镜像的ID
CREATE
#  镜像的创建时间
SIZE
#  镜像的大小

参数：
-a  --all
# 列出所有镜像
-q  --quiet  
#  只显示镜像的ID
```

####  举例：

```shell
docker  images  -aq		# all 
```

#### 搜索镜像：

``` shell
docker search imageName

可选项：
--help
--filter=STARS=值
# 过滤星数大于值的镜像
```

#### 下载镜像：

```shell
docker pull imageName

可选项：
--help
imageName:version
# 自定义下载版本

注：下图中的分层下载可以有效避免包的重复，可以不同版本共享包
```

#### 删除镜像：

```shell
docker  rmi -f  镜像ID
# 删除指定镜像
docker  rmi -f  镜像ID  镜像ID  镜像ID
#  删除多个镜像
docker  rmi -f $(docker images -aq)
#  删除全部镜像
```

> ### 容器命令
> 说明：我们有了镜像才可以创建容器，linux，下载一个centOS镜像来学习。
> 
> 删除容器才能删除镜像

#### 拉取容器

```shell
docker  pull  centOS
```

#### 新建容器并启动

```shell
docker  run  --help
docker  run [可选参数]  image

参数说明：
--name = "name"
#  容器名字  用于区分容器
-d
#  以后台形式
-it
#  使用交互式运行，进入容器查看内容
-p
  -p  ip:主机端口:容器端口
  -p  主机端口:容器端口
  -p  容器端口 
#  指定容器端口  -p  80:80  端口映射
-P
# 	大P随机端口
```

#### 举例

```shell
举例：
docker  run -it  centos  /bin/bash
#  docker交互式运行centos并进入命令行/bin/bash 
exit 
#  退出容器到主机，不运行
ctrl + q +p
#  退出但运行
docker ps
#  列出运行容器
docker ps -a
#  曾经运行过的所用容器
docker ps -a -n=值
#  显示进n个容器
docker ps -aq
# 显示当前所有容器的编号
```

#### 删除容器

```shell
docker rm 容器ID
# 删除指定容器
docker rm -f $(docker ps -aq)
# 删除所有的容器，$(docker ps -aq)传递参数
docker ps -a -q|xargs docker rm
# 删除所有的容器
```

#### 启动和停止容器

```shell
docker start 容器ID
# 启动
docker restart 容器ID
# 重启
docker stop 容器ID
# 停止
docker kill 容器ID
# 杀掉
```