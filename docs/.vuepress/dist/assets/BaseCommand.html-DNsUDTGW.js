import{_ as n,c as a,h as e,a as l}from"./app-DFfsekp4.js";const i={};function p(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h2 id="docker命令" tabindex="-1"><a class="header-anchor" href="#docker命令"><span>Docker命令</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">docker</span>  version</span>
<span class="line"><span class="token comment">#  显示Docker版本信息</span></span>
<span class="line"><span class="token function">docker</span>  info</span>
<span class="line"><span class="token comment">#  显示更详细信息</span></span>
<span class="line"><span class="token function">docker</span>  命令 <span class="token parameter variable">--help</span></span>
<span class="line"><span class="token function">docker</span> <span class="token parameter variable">--help</span></span>
<span class="line"><span class="token comment">#  帮助指令</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="镜像命令" tabindex="-1"><a class="header-anchor" href="#镜像命令"><span>镜像命令</span></a></h3><p>https://docs.docker.com/reference/cli/docker/image/</p></blockquote><h4 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">基础命令：</span>
<span class="line"><span class="token function">docker</span>  images </span>
<span class="line"><span class="token function">docker</span> images  <span class="token parameter variable">--help</span></span>
<span class="line"></span>
<span class="line">解释：</span>
<span class="line">REPOSITORY		 </span>
<span class="line"><span class="token comment"># 镜像的仓库源</span></span>
<span class="line">TAG</span>
<span class="line"><span class="token comment"># 镜像的标签</span></span>
<span class="line">IMAGE  ID</span>
<span class="line"><span class="token comment">#  镜像的ID</span></span>
<span class="line">CREATE</span>
<span class="line"><span class="token comment">#  镜像的创建时间</span></span>
<span class="line">SIZE</span>
<span class="line"><span class="token comment">#  镜像的大小</span></span>
<span class="line"></span>
<span class="line">参数：</span>
<span class="line"><span class="token parameter variable">-a</span>  <span class="token parameter variable">--all</span></span>
<span class="line"><span class="token comment"># 列出所有镜像</span></span>
<span class="line"><span class="token parameter variable">-q</span>  <span class="token parameter variable">--quiet</span>  </span>
<span class="line"><span class="token comment">#  只显示镜像的ID</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="举例" tabindex="-1"><a class="header-anchor" href="#举例"><span>举例：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">docker</span>  images  <span class="token parameter variable">-aq</span>		<span class="token comment"># all </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="搜索镜像" tabindex="-1"><a class="header-anchor" href="#搜索镜像"><span>搜索镜像：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">docker</span> search imageName</span>
<span class="line"></span>
<span class="line">可选项：</span>
<span class="line"><span class="token parameter variable">--help</span></span>
<span class="line"><span class="token parameter variable">--filter</span><span class="token operator">=</span>STARS<span class="token operator">=</span>值</span>
<span class="line"><span class="token comment"># 过滤星数大于值的镜像</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="下载镜像" tabindex="-1"><a class="header-anchor" href="#下载镜像"><span>下载镜像：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">docker</span> pull imageName</span>
<span class="line"></span>
<span class="line">可选项：</span>
<span class="line"><span class="token parameter variable">--help</span></span>
<span class="line">imageName:version</span>
<span class="line"><span class="token comment"># 自定义下载版本</span></span>
<span class="line"></span>
<span class="line">注：下图中的分层下载可以有效避免包的重复，可以不同版本共享包</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除镜像" tabindex="-1"><a class="header-anchor" href="#删除镜像"><span>删除镜像：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">docker</span>  rmi <span class="token parameter variable">-f</span>  镜像ID</span>
<span class="line"><span class="token comment"># 删除指定镜像</span></span>
<span class="line"><span class="token function">docker</span>  rmi <span class="token parameter variable">-f</span>  镜像ID  镜像ID  镜像ID</span>
<span class="line"><span class="token comment">#  删除多个镜像</span></span>
<span class="line"><span class="token function">docker</span>  rmi <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-aq</span><span class="token variable">)</span></span></span>
<span class="line"><span class="token comment">#  删除全部镜像</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="容器命令" tabindex="-1"><a class="header-anchor" href="#容器命令"><span>容器命令</span></a></h3><p>说明：我们有了镜像才可以创建容器，linux，下载一个centOS镜像来学习。</p><p>删除容器才能删除镜像</p></blockquote><h4 id="拉取容器" tabindex="-1"><a class="header-anchor" href="#拉取容器"><span>拉取容器</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">docker</span>  pull  centOS</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="新建容器并启动" tabindex="-1"><a class="header-anchor" href="#新建容器并启动"><span>新建容器并启动</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">docker</span>  run  <span class="token parameter variable">--help</span></span>
<span class="line"><span class="token function">docker</span>  run <span class="token punctuation">[</span>可选参数<span class="token punctuation">]</span>  image</span>
<span class="line"></span>
<span class="line">参数说明：</span>
<span class="line"><span class="token parameter variable">--name</span> <span class="token operator">=</span> <span class="token string">&quot;name&quot;</span></span>
<span class="line"><span class="token comment">#  容器名字  用于区分容器</span></span>
<span class="line"><span class="token parameter variable">-d</span></span>
<span class="line"><span class="token comment">#  以后台形式</span></span>
<span class="line"><span class="token parameter variable">-it</span></span>
<span class="line"><span class="token comment">#  使用交互式运行，进入容器查看内容</span></span>
<span class="line"><span class="token parameter variable">-p</span></span>
<span class="line">  <span class="token parameter variable">-p</span>  ip:主机端口:容器端口</span>
<span class="line">  <span class="token parameter variable">-p</span>  主机端口:容器端口</span>
<span class="line">  <span class="token parameter variable">-p</span>  容器端口 </span>
<span class="line"><span class="token comment">#  指定容器端口  -p  80:80  端口映射</span></span>
<span class="line"><span class="token parameter variable">-P</span></span>
<span class="line"><span class="token comment"># 	大P随机端口</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="举例-1" tabindex="-1"><a class="header-anchor" href="#举例-1"><span>举例</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">举例：</span>
<span class="line"><span class="token function">docker</span>  run <span class="token parameter variable">-it</span>  centos  /bin/bash</span>
<span class="line"><span class="token comment">#  docker交互式运行centos并进入命令行/bin/bash </span></span>
<span class="line"><span class="token builtin class-name">exit</span> </span>
<span class="line"><span class="token comment">#  退出容器到主机，不运行</span></span>
<span class="line">ctrl + q +p</span>
<span class="line"><span class="token comment">#  退出但运行</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span></span>
<span class="line"><span class="token comment">#  列出运行容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span></span>
<span class="line"><span class="token comment">#  曾经运行过的所用容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-n</span><span class="token operator">=</span>值</span>
<span class="line"><span class="token comment">#  显示进n个容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span></span>
<span class="line"><span class="token comment"># 显示当前所有容器的编号</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除容器" tabindex="-1"><a class="header-anchor" href="#删除容器"><span>删除容器</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">docker</span> <span class="token function">rm</span> 容器ID</span>
<span class="line"><span class="token comment"># 删除指定容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span></span>
<span class="line"><span class="token comment"># 删除所有的容器，$(docker ps -aq)传递参数</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> -q<span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span></span>
<span class="line"><span class="token comment"># 删除所有的容器</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动和停止容器" tabindex="-1"><a class="header-anchor" href="#启动和停止容器"><span>启动和停止容器</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">docker</span> start 容器ID</span>
<span class="line"><span class="token comment"># 启动</span></span>
<span class="line"><span class="token function">docker</span> restart 容器ID</span>
<span class="line"><span class="token comment"># 重启</span></span>
<span class="line"><span class="token function">docker</span> stop 容器ID</span>
<span class="line"><span class="token comment"># 停止</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">kill</span> 容器ID</span>
<span class="line"><span class="token comment"># 杀掉</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24)]))}const t=n(i,[["render",p]]),d=JSON.parse('{"path":"/posts/Docker/BaseCommand.html","title":"4.Docker基础命令","lang":"en-US","frontmatter":{"title":"4.Docker基础命令","description":"4.Docker基础命令","date":"2024-06-30T00:00:00.000Z","timeline":true,"head":[["meta",{"name":"keywords","content":"4.Docker基础命令"}],["meta",{"name":"description","content":"4.Docker基础命令"}],["meta",{"name":"author","content":"RobinElysia"}]],"category":["RobinElysia"],"tag":["Docker"]},"headers":[{"level":2,"title":"Docker命令","slug":"docker命令","link":"#docker命令","children":[]}],"git":{"updatedTime":1762519389000,"contributors":[{"name":"qwp_p","username":"","email":"qwp20060309@outlook.com","commits":1}],"changelog":[{"hash":"cfd09171d1be97fa09ef8c4fc2be80d788219c63","time":1762519389000,"email":"qwp20060309@outlook.com","author":"qwp_p","message":"Update blog content and add new articles"}]},"filePathRelative":"posts/Docker/BaseCommand.md","excerpt":"<h2>Docker命令</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\"><pre><code><span class=\\"line\\"><span class=\\"token function\\">docker</span>  version</span>\\n<span class=\\"line\\"><span class=\\"token comment\\">#  显示Docker版本信息</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">docker</span>  info</span>\\n<span class=\\"line\\"><span class=\\"token comment\\">#  显示更详细信息</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">docker</span>  命令 <span class=\\"token parameter variable\\">--help</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">docker</span> <span class=\\"token parameter variable\\">--help</span></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">#  帮助指令</span></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{t as comp,d as data};
