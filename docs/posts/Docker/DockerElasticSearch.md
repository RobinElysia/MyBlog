---

title: 8.Docker—部署ElasticSearch
description: 8.Docker—部署ElasticSearch
date: 2024-07-04
timeline: true
head:
  - - meta
    - name: keywords
      content: 8.Docker—部署ElasticSearch
  - - meta
    - name: description
      content: 8.Docker—部署ElasticSearch
  - - meta
    - name: author
      content: RobinElysia
category:
  - RobinElysia
tag:
  - Docker

---

## Docker—ElasticSearch

### ElasticSearch：

ElasticSearch DockerHub URl：https://hub.docker.com/_/elasticsearch

elasticsearch 是一个强大的搜索引擎。

elasticsearch 暴漏的端口巨多，十分耗内存
elasticsearch 一般需要将数据放置在安全目录，需要挂载

#### 官方文档拉取运行镜像：

```shell
docker run -d --name elasticsearch1 --net somenetwork -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:tag

--net somenetwork
这个参数指定了容器应该连接到哪个Docker网络。
在这个例子中，容器将连接到名为somenetwork的网络。这允许容器与其他在同一网络中的容器进行通信。

-e "discovery.type=single-node" 
这个参数设置了环境变量discovery.type的值为single-node。
Elasticsearch默认配置为集群模式，即期望在一个集群中有多个节点。
但是，在某些情况下（如开发或测试环境），你可能希望运行一个单节点的Elasticsearch实例。
通过设置discovery.type=single-node，你告诉Elasticsearch以单节点模式运行，这样它就不会尝试加入其他节点形成的集群。

elasticsearch:tag
这指定了要运行的Elasticsearch镜像的名称和标签（tag）。
elasticsearch是镜像的名称，而tag是镜像的版本标签
例如7.10.2。如果你不指定标签，Docker会默认使用latest标签。

注：elasticsearch 运行起来十分卡，所以...
```

#### 测试访问9200：

```shell
curl localhost:9200
回显出配置界面
```

#### 查看运行情况（是否存活）：

```shell
docker stats
```

#### 停止elasticsearch，增加内存限制：

```shell
# 停止容器
docker ps
docker stop imageID

# 增加内存限制，修改配置文件，-e（environment）环境修改
docker run -d --name elasticsearch2 --net somenetwork -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e ES_JAVA_OPTS="-Xms64m -Xmx512m" elasticsearch:tag
```

#### 再次查看容器状态：

```shell
docke ps
docker stats imageID
```

#### 再次查看9200端口：

```shell
curl localhost:9200
```

问：docker 容器之间如何进行连接（涉及Docker网络原理）