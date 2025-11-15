import{_ as s,c as a,h as e,a as l}from"./app-BPzQcCmO.js";const i={};function p(c,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>准备工作：</p><ol><li>虚拟机：WSL Ubuntu 20.04 以上版本（不含20.04，低版本系统处理方案我会放在文中）</li><li>Python：3.10</li><li><a href="https://pypi.org/project/virtualenv/#files" target="_blank" rel="noopener noreferrer">virtualenv：任意版本</a></li><li><a href="https://developer.nvidia.com/cuda-11-8-0-download-archive?target_os=Linux&amp;target_arch=x86_64&amp;Distribution=WSL-Ubuntu&amp;target_version=2.0" target="_blank" rel="noopener noreferrer">CUDA：11.8</a></li><li><a href="https://developer.nvidia.com/rdp/cudnn-archive" target="_blank" rel="noopener noreferrer">cuDNN：CUDA 11.X → cuDNN 8.9.7</a></li><li><a href="https://pypi.org/project/torch/2.0.1/#files" target="_blank" rel="noopener noreferrer">PyTorch：2.0.1</a></li><li><a href="https://pypi.org/project/tensorflow/2.12.1/#files" target="_blank" rel="noopener noreferrer">Tensorflow：2.12.1</a></li></ol><p>注意：Python、CUDA、cuDNN、PyTorch、Tensorflow这五者拥有较强的依赖关系，其中 CUDA and cuDNN 是强依赖关系，CUDA 与 Pytorch、Tensorflow 是强依赖关系。因为我这里使用的是离线安装，很大程度上需要自行处理依赖关系，所以特此强调。对于直接 pip install XXX 的在线用户，大概率无需考虑 pytorch 和 tensorflow 的版本问题。</p><h3 id="虚拟环境与-python-安装" tabindex="-1"><a class="header-anchor" href="#虚拟环境与-python-安装"><span>虚拟环境与 Python 安装</span></a></h3><p>这里采用 WSL2 作为本地开发环境支持，为什么不选 VM 和 其他的虚拟化技术，一是 VM 有点大材小用的感觉，虚拟化环境配发 4 核心或许不太够用；为什么不用 Docker 虚拟环境，一方面是出现的各种硬件虚拟化问题，一方面是精简虚拟化环境可能导致各种意料之外的问题。所以我们采用折中方案， WSL2 虚拟化。</p><p>对于 WSL2 而言，我建议使用 Ubuntu 22 以上的版本，Python 环境无需有过多的担忧，20 及以下版本 apt 无 py3.8 以上版本，需要手动编译高版本 py，我会给出详细的高低版本教程。</p><h4 id="高版本系统" tabindex="-1"><a class="header-anchor" href="#高版本系统"><span>高版本系统</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 更新</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> upgrade</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看是否存在高版本 py</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> list python3</span>
<span class="line"><span class="token comment"># 查看是否存在 3.9 以上版本</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 选择存在的高版本进行安装</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> python3.9/python3.10/<span class="token punctuation">..</span>.</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">python3 <span class="token parameter variable">--version</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 出现正常回显代表成功</span></span>
<span class="line">Python <span class="token number">3.10</span>.17</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="低版本系统" tabindex="-1"><a class="header-anchor" href="#低版本系统"><span>低版本系统</span></a></h4><p>低版本较为麻烦，需要去 python 官网或者ustc源直接下载高版本的压缩包，解压缩编译</p><p>这里我们选择 ustc源 进行下载，链接如下： https://mirrors.ustc.edu.cn/python/3.10.8/Python-3.10.8.tar.xz</p><p>步骤如下：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 进入到opt中</span></span>
<span class="line"><span class="token builtin class-name">cd</span> /opt</span>
<span class="line"><span class="token comment"># 下载安装包</span></span>
<span class="line"><span class="token function">wget</span> https://mirrors.ustc.edu.cn/python/3.10.8/Python-3.10.8.tar.xz</span>
<span class="line"><span class="token comment"># 解压缩</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> Python-3.10.8.tar.xz</span>
<span class="line"><span class="token comment"># 进入文件夹</span></span>
<span class="line"><span class="token builtin class-name">cd</span> Python-3.10.8</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更新，安装gcc/g++/make</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> build-essential</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装 zlib1g 依赖</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> zlib1g-dev libssl-dev libbz2-dev libreadline-dev <span class="token punctuation">\\</span></span>
<span class="line">  libsqlite3-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">gcc <span class="token parameter variable">--version</span>   <span class="token comment"># 应能看到版本号</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在 Python-3.10.8 中进行编译</span></span>
<span class="line"><span class="token function">sudo</span> ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/python3.11 <span class="token punctuation">\\</span></span>
<span class="line">                 --enable-optimizations <span class="token punctuation">\\</span></span>
<span class="line">                 --with-ensurepip<span class="token operator">=</span>install</span>
<span class="line">                 </span>
<span class="line"></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">make</span> -j<span class="token variable"><span class="token variable">$(</span>nproc<span class="token variable">)</span></span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 编译完成就成功了</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比赛的时候，这一步 py 环境的搭建是没有的，毕竟连最基本的环境都没有，还打什么比赛？？？</p><h3 id="cuda-与-cudnn" tabindex="-1"><a class="header-anchor" href="#cuda-与-cudnn"><span>CUDA 与 cuDNN</span></a></h3><h4 id="cuda" tabindex="-1"><a class="header-anchor" href="#cuda"><span>CUDA</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 在普通用户下，检测最高支持的 CUDA 版本</span></span>
<span class="line">nvidia-smi <span class="token comment"># 这一步比赛忽略</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 直接安装比最高支持版本低的版本</span></span>
<span class="line"><span class="token builtin class-name">cd</span> /opt <span class="token operator">&amp;&amp;</span> <span class="token function">wget</span> https://developer.download.nvidia.com/compute/cuda/11.8.0/local_installers/cuda_11.8.0_520.61.05_linux.run <span class="token comment"># 这一步可忽略，因为比赛方会提供文件</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">su</span> cuda_11.8.0_520.61.05_linux.run</span>
<span class="line"><span class="token comment"># 时间会很长，因为文件很大</span></span>
<span class="line">后边就是 accept 即可</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 环境配置</span></span>
<span class="line"><span class="token function">vim</span> ~/.bashrc</span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/cuda-11.8/bin<span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span>/usr/local/cuda-11.8/lib64<span class="token operator">=</span><span class="token variable">\${LD_LIBRARY_PATH}</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">CUDA_HOME</span><span class="token operator">=</span>/usr/local/suda-11.8</span>
<span class="line"><span class="token comment"># 保存退出</span></span>
<span class="line"><span class="token comment"># 刷新</span></span>
<span class="line"><span class="token builtin class-name">source</span> ~/.bashrc</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证</span></span>
<span class="line">nvcc <span class="token parameter variable">-V</span></span>
<span class="line"><span class="token comment"># 回显</span></span>
<span class="line">nvcc: NVIDIA <span class="token punctuation">(</span>R<span class="token punctuation">)</span> Cuda compiler driver</span>
<span class="line">Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2005</span>-2022 NVIDIA Corporation</span>
<span class="line">Built on Wed_Sep_21_10:33:58_PDT_2022</span>
<span class="line">Cuda compilation tools, release <span class="token number">11.8</span>, V11.8.89</span>
<span class="line">Build cuda_11.8.r11.8/compiler.31833905_0</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cudnn" tabindex="-1"><a class="header-anchor" href="#cudnn"><span>cuDNN</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 下载</span></span>
<span class="line"><span class="token function">wget</span> https://developer.nvidia.com/downloads/compute/cudnn/secure/8.9.7/local_installers/12.x/cudnn-linux-x86_64-8.9.7.29_cuda12-archive.tar.xz/ <span class="token comment"># 比赛忽略这一步</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 解压缩</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> cudnn-linux-x86_64-8.9.7.29_cuda11-archive.tar.xz</span>
<span class="line"><span class="token comment"># 进入解压后的文件夹</span></span>
<span class="line"><span class="token builtin class-name">cd</span> cudnn-linux-x86_64-8.9.7.29_cuda11-archive</span>
<span class="line"><span class="token comment"># 移动文件到原来 CUDA 安装的文件夹下</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">cp</span> include/* /usr/local/cuda-11.8/include</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">cp</span> lib/libcudnn* /usr/local/cuda-11.8/lib64</span>
<span class="line"><span class="token comment"># 你需要确认以下文件夹名对不对</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 给予权限</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">chmod</span> a+r /usr/local/cuda-11.8/include/cudnn*.h /usr/local/cuda/lib64/libcudnn*</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装完成</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-virtualenv、pytorch、tensorflow" tabindex="-1"><a class="header-anchor" href="#安装-virtualenv、pytorch、tensorflow"><span>安装 Virtualenv、Pytorch、Tensorflow</span></a></h3><h4 id="virtualenv" tabindex="-1"><a class="header-anchor" href="#virtualenv"><span>Virtualenv</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 进入 opt</span></span>
<span class="line"><span class="token builtin class-name">cd</span> /opt</span>
<span class="line"><span class="token comment"># 下载 whl</span></span>
<span class="line"><span class="token function">wget</span> https://files.pythonhosted.org/packages/79/0c/c05523fa3181fdf0c9c52a6ba91a23fbf3246cc095f26f6516f9c60e6771/virtualenv-20.35.4-py3-none-any.whl <span class="token comment"># 比赛忽略</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装</span></span>
<span class="line">pip <span class="token function">install</span> /opt/virtualenv-20.35.4-py3-none-any.whl</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是直接在全局进行安装 Pytorch Tensorflow</p><h4 id="pytorch" tabindex="-1"><a class="header-anchor" href="#pytorch"><span>Pytorch</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 在 opt 下</span></span>
<span class="line"><span class="token function">wget</span> https://files.pythonhosted.org/packages/21/33/4925decd863ce88ed9190a4bd872b01c146243ee68db08c72923984fe335/torch-2.0.1-cp310-cp310-manylinux2014_aarch64.whl</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装</span></span>
<span class="line">pip <span class="token function">install</span> /opt/torch-2.0.1-cp310-cp310-manylinux2014_aarch64.whl</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tensorflow" tabindex="-1"><a class="header-anchor" href="#tensorflow"><span>Tensorflow</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 在 opt 下</span></span>
<span class="line"><span class="token function">wget</span> https://files.pythonhosted.org/packages/21/33/4925decd863ce88ed9190a4bd872b01c146243ee68db08c72923984fe335/torch-2.0.1-cp310-cp310-manylinux2014_aarch64.whl</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装</span></span>
<span class="line">pip <span class="token function">install</span> /opt/torch-2.0.1-cp310-cp310-manylinux2014_aarch64.whl</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用Virtualenv新建虚拟环境进行安装：</p><h4 id="virtualenv-虚拟环境下安装环境" tabindex="-1"><a class="header-anchor" href="#virtualenv-虚拟环境下安装环境"><span>Virtualenv 虚拟环境下安装环境</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 假如在 /home/user/test 下</span></span>
<span class="line">virtualenv <span class="token parameter variable">-p</span> python3.10 ProjectName</span>
<span class="line"><span class="token comment"># 新建虚拟环境 ProjectName</span></span>
<span class="line"><span class="token comment"># 激活虚拟环境</span></span>
<span class="line"><span class="token builtin class-name">source</span> /home/user/test/ProjectName/bin/activate</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装依赖</span></span>
<span class="line">pip <span class="token function">install</span> /opt/torch-2.0.1-cp310-cp310-manylinux2014_aarch64.whl <span class="token operator">&amp;&amp;</span> pip <span class="token function">install</span> /opt/torch-2.0.1-cp310-cp310-manylinux2014_aarch64.whl</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证 CUDA、cuDNN、Pytorch、Tensorflow是否安装成功</span></span>
<span class="line"><span class="token comment"># Pytorch</span></span>
<span class="line">python <span class="token parameter variable">-c</span> <span class="token string">&quot;import torch; print(torch.__version__); print(torch.version.cuda); print(torch.backends.cudnn.version())&quot;</span></span>
<span class="line"><span class="token comment"># Tensorflow</span></span>
<span class="line">python <span class="token parameter variable">-c</span> <span class="token string">&quot;import tensorflow as tf; print(tf.__version__); print(tf.config.list_physical_devices(&#39;GPU&#39;))&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31)]))}const r=s(i,[["render",p]]),o=JSON.parse('{"path":"/posts/DL/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA.html","title":"深度学习环境搭建","lang":"en-US","frontmatter":{"title":"深度学习环境搭建","description":"深度学习环境搭建","date":"2025-11-06T00:00:00.000Z","timeline":true,"head":[["meta",{"name":"keywords","content":"深度学习环境搭建"}],["meta",{"name":"description","content":"深度学习环境搭建"}],["meta",{"name":"author","content":"RobinElysia"}]],"category":["RobinElysia"],"tag":["Deep Learning"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[{"level":3,"title":"虚拟环境与 Python 安装","slug":"虚拟环境与-python-安装","link":"#虚拟环境与-python-安装","children":[]},{"level":3,"title":"CUDA 与 cuDNN","slug":"cuda-与-cudnn","link":"#cuda-与-cudnn","children":[]},{"level":3,"title":"安装 Virtualenv、Pytorch、Tensorflow","slug":"安装-virtualenv、pytorch、tensorflow","link":"#安装-virtualenv、pytorch、tensorflow","children":[]}]}],"git":{"updatedTime":1762519389000,"contributors":[{"name":"qwp_p","username":"","email":"qwp20060309@outlook.com","commits":1}],"changelog":[{"hash":"cfd09171d1be97fa09ef8c4fc2be80d788219c63","time":1762519389000,"email":"qwp20060309@outlook.com","author":"qwp_p","message":"Update blog content and add new articles"}]},"filePathRelative":"posts/DL/深度学习环境搭建.md","excerpt":"<h2>前言</h2>\\n<p>准备工作：</p>\\n<ol>\\n<li>虚拟机：WSL Ubuntu 20.04 以上版本（不含20.04，低版本系统处理方案我会放在文中）</li>\\n<li>Python：3.10</li>\\n<li><a href=\\"https://pypi.org/project/virtualenv/#files\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">virtualenv：任意版本</a></li>\\n<li><a href=\\"https://developer.nvidia.com/cuda-11-8-0-download-archive?target_os=Linux&amp;target_arch=x86_64&amp;Distribution=WSL-Ubuntu&amp;target_version=2.0\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">CUDA：11.8</a></li>\\n<li><a href=\\"https://developer.nvidia.com/rdp/cudnn-archive\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">cuDNN：CUDA 11.X → cuDNN 8.9.7</a></li>\\n<li><a href=\\"https://pypi.org/project/torch/2.0.1/#files\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PyTorch：2.0.1</a></li>\\n<li><a href=\\"https://pypi.org/project/tensorflow/2.12.1/#files\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Tensorflow：2.12.1</a></li>\\n</ol>"}');export{r as comp,o as data};
