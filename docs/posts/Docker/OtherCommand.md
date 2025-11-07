---

title: 5.Docker其他指令
description: 5.Docker其他指令
date: 2024-07-01
timeline: true
head:
  - - meta
    - name: keywords
      content: 5.Docker其他指令
  - - meta
    - name: description
      content: 5.Docker其他指令
  - - meta
    - name: author
      content: RobinElysia
category:
  - RobinElysia
tag:
  - Docker

---


## 其他命令

### 后台启动容器：

```shell
docker run -d centOS
# -d 后台启动，但docker ps 后centos停止了
# docker 后台运行，必须要有前台进程，docker没有发现进程就会自动杀掉
```

### 查看日志：

```shell
# 需启动程序才可查看
docker logs --help
docker logs -tf --tail 10 容器ID
# 查看10条日志
docker logs -tf 容器ID
# 全部日志 t是时间戳，f跟随最新的日志打印
```

### 查看容器中的进程信息：

```shell
docker top 容器ID
# 查看容器中的进程
# UID 用户ID，PID 当前进程ID，PPID 父进程ID
```

### 镜像的元数据：

```shell
docker inspect --help
docker inspect 容器ID
# 查看全ID，创建时间，Path终端路径，当前的状态state，Mounts挂载，环境变量，网络（桥接）等，
```

### 进入当前正在运行的容器：

```shell
# docker通常以后台方式运行，需要进入容器，修改配置
# 方式一
docker exec -it 容器ID bashshell
举例：
docker exec -it 4f1a89d357fc /bin/bash

# 方式二
docker attach 镜像ID
举例：
docker attach 4f1a89d357fc

区别在于，exec创建新窗口，进入新的命令行；attach进入正在运行的窗口
```

### 从容器内拷贝文件到主机上面：

```shell
# 拷贝无需运行
docker cp --help
可选参数：
  -a, --archive       Archive mode (copy all uid/gid information)
  -L, --follow-link   Always follow symbol link in SRC_PATH
  -q, --quiet          Suppress progress output during copy. Progress
                       output is automatically suppressed if no terminal
                       is attached
                       
docker cp 容器ID:容器内路径 目的的主机路径
 举例：
docker cp 4f1a89d357fc:/home/qwp/test.py /home
```

### Docker启动自动运行容器：

```shell
docker update --restart=always 容器ID或名称

# docker Compose
version: '3'
services:
  my-container:
    image: nginx:latest
    restart: always
    ports:
      - "80:80"
```

### Docker打包镜像，加载镜像

```Bash
# 打包镜像
docker save -o 文件名.tar 镜像名:TAG

# 加载镜像
docker load -i 文件名.tar
```

## 命令总结

<img src="https://geekdaxue.co/uploads/projects/yinxin-epzbr@easxgb/8ac495ea481d404a0262bf836466a604.png" style="display: block;margin: 0 auto;" />