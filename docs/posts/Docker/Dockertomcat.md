---

title: 7.Docker—部署tomcat
description: 7.Docker—部署tomcat
date: 2024-07-03
timeline: true
head:
  - - meta
    - name: keywords
      content: 7.Docker—部署tomcat
  - - meta
    - name: description
      content: 7.Docker—部署tomcat
  - - meta
    - name: author
      content: RobinElysia
category:
  - RobinElysia
tag:
  - Docker

---

## Docker—tomcat

###  下载tomcat镜像：

```shell
docker run -it --rm tomcat:9.0
# rm 用来测试，用完即删
# ctrl+c后，docker ps -a不会显示
docker pull tomcat:9.0
# 拉取镜像
```

### 查看镜像：

```shell
docker images
```

### 运行tomcat容器：

```shell
docker run -d -p xxxx:8080 --name tomcat1 tomcat:9.0
```

### 进入tomcat容器：

```shell
docker exec -it tomcat1 /bin/bash
```

### 查看tomcat：

```shell
ls -al
cd webapps
ls
# linux命令少了，没有webapps，导致404
# 阿里云镜像原因

但是经过发现，存在webapps.list文件夹，下有root文件，so：
cp -r webapps.list/* webapps
拷贝文件到webapps刷新网页即可。
```