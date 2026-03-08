import{_ as s,c as a,h as e,a as l}from"./app-CsXYJcMP.js";const i={};function p(c,n){return l(),a("div",null,n[0]||(n[0]=[e(`<link rel="stylesheet" href="/css/font-style.css"><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置"><span>环境配置</span></a></h2><p>准备工作：</p><ol><li>虚拟机：WSL Ubuntu （建议22）</li><li>Python：3.10</li><li><a href="https://pypi.org/project/virtualenv/#files" target="_blank" rel="noopener noreferrer">virtualenv：任意版本</a></li><li><a href="https://developer.nvidia.com/cuda-11-8-0-download-archive?target_os=Linux&amp;target_arch=x86_64&amp;Distribution=WSL-Ubuntu&amp;target_version=2.0" target="_blank" rel="noopener noreferrer">CUDA：11.8</a></li><li><a href="https://developer.nvidia.com/rdp/cudnn-archive" target="_blank" rel="noopener noreferrer">cuDNN：CUDA 11.X → cuDNN 8.9.7</a></li><li><a href="https://pypi.org/project/torch/2.0.1/#files" target="_blank" rel="noopener noreferrer">PyTorch：2.0.1</a></li><li><a href="https://pypi.org/project/tensorflow/2.12.1/#files" target="_blank" rel="noopener noreferrer">Tensorflow：2.12.1</a></li></ol><p>注意：Python、CUDA、cuDNN、PyTorch、Tensorflow这五者拥有较强的依赖关系，其中 CUDA and cuDNN 是强依赖关系，CUDA 与 Pytorch、Tensorflow 是强依赖关系。因为我这里使用的是离线安装，很大程度上需要自行处理依赖关系，所以特此强调。对于直接 pip install XXX 的在线用户，大概率无需考虑 pytorch 和 tensorflow 的版本问题。</p><h3 id="虚拟环境与-python-安装" tabindex="-1"><a class="header-anchor" href="#虚拟环境与-python-安装"><span>虚拟环境与 Python 安装</span></a></h3><p>这里采用 WSL2 作为本地开发环境支持，为什么不选 VM 和 其他的虚拟化技术，一是 VM 有点大材小用的感觉，虚拟化环境配发 4 核心或许不太够用；为什么不用 Docker 虚拟环境，一方面是出现的各种硬件虚拟化问题，一方面是精简虚拟化环境可能导致各种意料之外的问题。所以我们采用折中方案， WSL2 虚拟化。</p><p>对于 WSL2 而言，我建议使用 Ubuntu 20/22 版本，24 版本不支持cuda11.8和对应的cudnn。</p><h4 id="手动编译-python-环境" tabindex="-1"><a class="header-anchor" href="#手动编译-python-环境"><span>手动编译 Python 环境</span></a></h4><p>因为apt不支持安装特定版本，所以这里需要去 python 官网或者 ustc 源下载高版本的压缩包，解压缩编译</p><p>这里我们选择 ustc 源 进行下载，链接如下：</p><p>https://mirrors.ustc.edu.cn/python/3.10.8/Python-3.10.8.tar.xz</p><p>https://mirrors.ustc.edu.cn/python/3.11.14/Python-3.11.14.tar.xz</p><p>步骤如下：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
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
<span class="line"><span class="token function">sudo</span> ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/python3.10 <span class="token punctuation">\\</span></span>
<span class="line">                 --enable-optimizations <span class="token punctuation">\\</span></span>
<span class="line">                 --with-ensurepip<span class="token operator">=</span>install</span>
<span class="line">                 </span>
<span class="line"></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">make</span> -j<span class="token variable"><span class="token variable">$(</span>nproc<span class="token variable">)</span></span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 有时候需要进行链接，如果查看python3.10不管用的话</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-sf</span> /usr/local/python3.10/bin/python3.10 /usr/bin/python3.10</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 同理Python3.11如法炮制</span></span>
<span class="line"><span class="token comment"># 编译完成就成功了</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cuda-与-cudnn" tabindex="-1"><a class="header-anchor" href="#cuda-与-cudnn"><span>CUDA 与 cuDNN</span></a></h3><h4 id="cuda" tabindex="-1"><a class="header-anchor" href="#cuda"><span>CUDA</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
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
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/cuda-11.8/bin:<span class="token environment constant">$PATH</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span>/usr/local/cuda-11.8/lib64:<span class="token variable">$LD_LIBRARY_PATH</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">CUDA_HOME</span><span class="token operator">=</span>/usr/local/cuda-11.8</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cudnn" tabindex="-1"><a class="header-anchor" href="#cudnn"><span>cuDNN</span></a></h4><p>压缩包安装：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 下载</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>deb安装：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># dpkg：Debin package</span></span>
<span class="line">dpkg <span class="token parameter variable">-i</span> XXX.deb</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行提示命令</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">cp</span> /var/cudnn-local-repo-ubuntu2204-8.9.3.28/cudnn-*-keyring.gpg /usr/share/keyrings/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更新仓库</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> update</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> libcudnn8 libcudnn8-dev libcudnn8-samples</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-virtualenv、pytorch、tensorflow、ollama、model" tabindex="-1"><a class="header-anchor" href="#安装-virtualenv、pytorch、tensorflow、ollama、model"><span>安装 Virtualenv、Pytorch、Tensorflow、Ollama、Model</span></a></h3><h4 id="virtualenv" tabindex="-1"><a class="header-anchor" href="#virtualenv"><span>Virtualenv</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 进入 opt</span></span>
<span class="line"><span class="token builtin class-name">cd</span> /opt</span>
<span class="line"><span class="token comment"># 下载 whl</span></span>
<span class="line"><span class="token function">wget</span> https://files.pythonhosted.org/packages/79/0c/c05523fa3181fdf0c9c52a6ba91a23fbf3246cc095f26f6516f9c60e6771/virtualenv-20.35.4-py3-none-any.whl <span class="token comment"># 需自行找下载链接，在上文我给到了</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装</span></span>
<span class="line">pip <span class="token function">install</span> /opt/virtualenv-20.35.4-py3-none-any.whl</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是直接在全局进行安装 Pytorch Tensorflow</p><h4 id="pytorch" tabindex="-1"><a class="header-anchor" href="#pytorch"><span>Pytorch</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 在 opt 下</span></span>
<span class="line"><span class="token function">wget</span> https://files.pythonhosted.org/packages/21/33/4925decd863ce88ed9190a4bd872b01c146243ee68db08c72923984fe335/torch-2.0.1-cp310-cp310-manylinux2014_aarch64.whl <span class="token comment"># 需自行找下载链接，在上文我给到了</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装</span></span>
<span class="line">pip <span class="token function">install</span> /opt/torch-2.0.1-cp310-cp310-manylinux2014_aarch64.whl</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tensorflow" tabindex="-1"><a class="header-anchor" href="#tensorflow"><span>Tensorflow</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 在 opt 下</span></span>
<span class="line"><span class="token function">wget</span> https://files.pythonhosted.org/packages/21/33/4925decd863ce88ed9190a4bd872b01c146243ee68db08c72923984fe335/torch-2.0.1-cp310-cp310-manylinux2014_aarch64.whl <span class="token comment"># 需自行找下载链接，在上文我给到了</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装</span></span>
<span class="line">pip <span class="token function">install</span> /opt/torch-2.0.1-cp310-cp310-manylinux2014_aarch64.whl</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用Virtualenv新建虚拟环境进行安装：</p><h4 id="virtualenv-虚拟环境下安装环境-不如-uv" tabindex="-1"><a class="header-anchor" href="#virtualenv-虚拟环境下安装环境-不如-uv"><span>Virtualenv 虚拟环境下安装环境（不如 uv</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ollama、模型安装" tabindex="-1"><a class="header-anchor" href="#ollama、模型安装"><span>Ollama、模型安装</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 解压Ollama</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-C</span> /usr/ollama <span class="token parameter variable">-xvf</span> 文件名.文件后缀</span>
<span class="line"><span class="token comment"># 环境</span></span>
<span class="line"><span class="token function">vim</span> /etc/profile</span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">OLLAMA_HOME</span><span class="token operator">=</span>/usr/ollama</span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$OLLAMA_HOME</span>/bin:<span class="token environment constant">$PATH</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建 Modelfile</span></span>
<span class="line"><span class="token function">vim</span> Modelfile</span>
<span class="line"><span class="token comment"># 注意，不同用户需要都刷新</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 文件中引入模型</span></span>
<span class="line"><span class="token comment"># 创建新的 Modelfile 文件</span></span>
<span class="line"><span class="token comment"># 怎么编写参考下述文档</span></span>
<span class="line"><span class="token comment"># 保存退出</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建模型</span></span>
<span class="line">ollama create 好记的名称 <span class="token parameter variable">-f</span> Modelfile</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行模型</span></span>
<span class="line">ollama run 好记的名称</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 你就可以愉快的 ask 了</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于<code>Ollama Modelfile</code>和部分Modelfile中的系统调试，你可以参考后续的ModelFile文件编写</p><h3 id="openwebui-安装-可选" tabindex="-1"><a class="header-anchor" href="#openwebui-安装-可选"><span>OpenWebUI 安装（可选）</span></a></h3><p>注：关于open-webui，你需要开启wsl网络镜像，同时开启vpn加速，关闭全局代理。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 进入opt下</span></span>
<span class="line"><span class="token builtin class-name">cd</span> /opt/openwebui</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载</span></span>
<span class="line"><span class="token function">wget</span> https://files.pythonhosted.org/packages/a6/dd/3665ce90ca299d670c656d767effb33c6a20b6370361e7f11cd1f72e947b/open_webui-0.6.36-py3-none-any.whl</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装open-webui</span></span>
<span class="line">pip <span class="token function">install</span> /opt/openwebui/open_webui-0.6.36-py3-none-any.whl</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装高版本sqlite3</span></span>
<span class="line"><span class="token comment"># 所有的Ubuntu都需要，因为自带的系统没有sqlite3.35以上版本</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载</span></span>
<span class="line"><span class="token function">wget</span> https://sqlite.org/2025/sqlite-autoconf-3510000.tar.gz</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 解压缩</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-vxf</span> sqlite-autoconf-3510000.tar.gz</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Debian/Ubuntu:</span></span>
<span class="line"><span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> build-essential gcc <span class="token function">make</span> tcl</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置编译选项（推荐启用 FTS5、JSON、RTree）</span></span>
<span class="line">./configure <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local <span class="token punctuation">\\</span></span>
<span class="line">  --enable-fts5 <span class="token punctuation">\\</span></span>
<span class="line">  --enable-rtree <span class="token punctuation">\\</span></span>
<span class="line">  --enable-shared <span class="token punctuation">\\</span></span>
<span class="line">  --enable-static</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 编译</span></span>
<span class="line"><span class="token function">make</span> -j<span class="token variable"><span class="token variable">$(</span>nproc<span class="token variable">)</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装（可选，但建议，安装到系统）</span></span>
<span class="line"><span class="token function">make</span> <span class="token function">install</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证sqlite版本</span></span>
<span class="line">/usr/local/bin/sqlite3 <span class="token parameter variable">--version</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改对应的init文件（偷梁换柱）</span></span>
<span class="line"><span class="token comment"># 在：site-packages/chromadb/__init__.py</span></span>
<span class="line">__import__<span class="token punctuation">(</span><span class="token string">&#39;pysqlite3&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">import</span> sys</span>
<span class="line">sys.modules<span class="token punctuation">[</span><span class="token string">&#39;sqlite3&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> sys.modules.pop<span class="token punctuation">(</span><span class="token string">&#39;pysqlite3&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行</span></span>
<span class="line">open-webui serve</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h3><p>标准库：json、os、xml和re无需下载，直接导入使用 第三方库：</p><ol><li>pymysql：直接pip install就可以</li><li>pymongo：同上</li><li>faiss：Windows平台仅支持cpu版本，py版本在3.14 ~ 9（我使用的是3.10.X版本）；gpu加速版本仅限Linux平台，版本限制在3.10 ~ 6。官方建议在conda虚拟环境上安装，但是没必要，我将使用权威的 uv。</li><li>sqlite3：仅限Linux平台，自己搭建可能需要手动编译&gt;=3.35.0版本，编译完成后重新让Py链接sqlite3的依赖（这部分如果你的py也是编译的，那就重新编译一遍）</li><li>BeautifulSoup：使用4.X版本 <ol><li>需要下载 lxml</li></ol></li><li>SQLAlchemy：2.0.44版本的，尽量使用2.X版本</li></ol><p>因为我使用的是权威的 <code>uv</code> 项目管理器，所以直接给出 <code>toml</code> ：</p><div class="language-toml line-numbers-mode" data-highlighter="prismjs" data-ext="toml"><pre><code><span class="line"><span class="token comment"># pyproject.toml</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token table class-name">build-system</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token key property">requires</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;setuptools&gt;=61&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;wheel&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token key property">build-backend</span> <span class="token punctuation">=</span> <span class="token string">&quot;setuptools.build_meta&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span><span class="token table class-name">project</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;mysqlproject&quot;</span></span>
<span class="line"><span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.1.0&quot;</span></span>
<span class="line"><span class="token key property">description</span> <span class="token punctuation">=</span> <span class="token string">&quot;Add your description here&quot;</span></span>
<span class="line"><span class="token key property">requires-python</span> <span class="token punctuation">=</span> <span class="token string">&quot;==3.10.11&quot;</span></span>
<span class="line"><span class="token key property">dependencies</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment"># 解析/爬虫 - 快速、容错地抽取/清洗 HTML/XML 文本</span></span>
<span class="line">    <span class="token string">&quot;lxml==6.0.2&quot;</span><span class="token punctuation">,</span>          <span class="token comment"># C 级高性能 XML/HTML 解析器，支持 XPath</span></span>
<span class="line">    <span class="token string">&quot;BeautifulSoup4==4.12.3&quot;</span><span class="token punctuation">,</span> <span class="token comment"># 对不规则 HTML 友好的高层解析、搜索、遍历接口</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 数据分析 - 结构化数据二维表格化操作与统计</span></span>
<span class="line">    <span class="token string">&quot;pandas==2.2.3&quot;</span><span class="token punctuation">,</span>        <span class="token comment"># 提供 DataFrame/Series，支撑读写、过滤、聚合、透视等全套 EDA 流程</span></span>
<span class="line">    <span class="token string">&quot;pyarrow==17.0.0&quot;</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 数据库 - 与 MySQL、MongoDB、向量检索引擎交互的驱动与 ORM</span></span>
<span class="line">    <span class="token string">&quot;pymysql==1.1.1&quot;</span><span class="token punctuation">,</span>       <span class="token comment"># 纯 Python 实现的 MySQL 客户端</span></span>
<span class="line">    <span class="token string">&quot;pymongo==4.15.4&quot;</span><span class="token punctuation">,</span>       <span class="token comment"># 官方 MongoDB 驱动</span></span>
<span class="line">    <span class="token string">&quot;faiss-cpu==1.9.0&quot;</span><span class="token punctuation">,</span>     <span class="token comment"># Facebook 开源的稠密向量相似度检索库（CPU 版）</span></span>
<span class="line">    <span class="token string">&quot;SQLAlchemy==2.0.36&quot;</span><span class="token punctuation">,</span>    <span class="token comment"># Python 事实标准 ORM &amp; SQL 工具链</span></span>
<span class="line">    <span class="token string">&quot;mysqlclient&quot;</span><span class="token punctuation">,</span>   <span class="token comment"># SQLAlchemy链接mysql需要，和pymysql都可以</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 机器学习基本工具 - 经典 ML+可视化+数值计算</span></span>
<span class="line">    <span class="token string">&quot;numpy&gt;=1.25.0&quot;</span><span class="token punctuation">,</span> <span class="token comment"># 张量/向量化计算基石，sklearn、torch 均依赖</span></span>
<span class="line">    <span class="token string">&quot;scikit-learn==1.7.2&quot;</span><span class="token punctuation">,</span>   <span class="token comment"># 传统机器学习算法（分类/回归/聚类/降维/预处理）</span></span>
<span class="line">    <span class="token string">&quot;matplotlib&quot;</span><span class="token punctuation">,</span>     <span class="token comment"># 2D 静态可视化，科研作图首选</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 深度学习库 - Transformer 生态、PyTorch 全家桶及配套评估/加速/日志组件</span></span>
<span class="line">    <span class="token string">&quot;transformers==4.45.2&quot;</span><span class="token punctuation">,</span>   <span class="token comment"># Hugging Face 社区预训练 SOTA 模型库（BERT/GPT/T5…）</span></span>
<span class="line">    <span class="token string">&quot;datasets==2.18.0&quot;</span><span class="token punctuation">,</span>       <span class="token comment"># HF 社区 1000+ 标准/自定义数据集加载、缓存与处理接口</span></span>
<span class="line">    <span class="token string">&quot;evaluate&quot;</span><span class="token punctuation">,</span>       <span class="token comment"># HF 统一封装 GLUE、ROUGE、BLEU 等常用评估指标</span></span>
<span class="line">    <span class="token string">&quot;peft==0.10.0&quot;</span><span class="token punctuation">,</span>           <span class="token comment"># 参数高效微调（LoRA/AdaLoRA/P-tuning）官方实现</span></span>
<span class="line">    <span class="token string">&quot;accelerate==0.27.0&quot;</span><span class="token punctuation">,</span>     <span class="token comment"># HF 分布式训练/混合精度/CPU offload 通用框架</span></span>
<span class="line">    <span class="token string">&quot;optimum&quot;</span><span class="token punctuation">,</span>        <span class="token comment"># 针对 Intel/ONNX/OpenVINO/NVIDIA 的推理加速与量化工具箱</span></span>
<span class="line">    <span class="token string">&quot;sentencepiece==0.1.99&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># Google 子词分词器（支持 BPE/Unigram）</span></span>
<span class="line">    <span class="token string">&quot;nltk==3.9.1&quot;</span><span class="token punctuation">,</span>           <span class="token comment"># 经典 NLP 工具集（分句、词性、情感词典等）</span></span>
<span class="line">    <span class="token string">&quot;torch==2.4.0+cu118&quot;</span><span class="token punctuation">,</span>     <span class="token comment"># PyTorch GPU 2.2.0（CUDA 11.8）核心库</span></span>
<span class="line">    <span class="token string">&quot;torchvision==0.19.0+cu118&quot;</span><span class="token punctuation">,</span> <span class="token comment"># 官方视觉模型/数据变换/数据集</span></span>
<span class="line">    <span class="token string">&quot;torchaudio==2.4.0+cu118&quot;</span><span class="token punctuation">,</span> <span class="token comment"># 官方语音模型/特征提取/数据集</span></span>
<span class="line">    <span class="token string">&quot;tqdm==4.66.5&quot;</span><span class="token punctuation">,</span>           <span class="token comment"># 进度条美化，训练/数据加载可视化</span></span>
<span class="line">    <span class="token string">&quot;tensorboard==2.13.0&quot;</span><span class="token punctuation">,</span>    <span class="token comment"># 训练日志可视化（兼容 PytorchLib-lightning、transformers）</span></span>
<span class="line">    <span class="token string">&quot;torchsummary==1.5.1&quot;</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 页面开发</span></span>
<span class="line">    <span class="token string">&quot;watchdog&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;streamlit&quot;</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">tool.pip.index-url</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token key property">url</span> <span class="token punctuation">=</span> <span class="token string">&quot;https://pypi.org/simple&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">tool.uv.index</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token key property">url</span> <span class="token punctuation">=</span> <span class="token string">&quot;https://download.pytorch.org/whl/cu118&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span><span class="token table class-name">tool.setuptools</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token key property">packages</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>      <span class="token comment"># 只装依赖，不打包任何源码</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45)]))}const o=s(i,[["render",p]]),r=JSON.parse('{"path":"/posts/DeepLearningAndMachineLearning/DeepLearningInit.html","title":"深度学习环境搭建","lang":"en-US","frontmatter":{"title":"深度学习环境搭建","description":"深度学习环境搭建","date":"2025-11-06T00:00:00.000Z","timeline":true,"head":[["meta",{"name":"keywords","content":"深度学习环境搭建"}],["meta",{"name":"description","content":"深度学习环境搭建"}],["meta",{"name":"author","content":"RobinElysia"}]],"category":["RobinElysia"],"tag":["DL And ML"]},"headers":[{"level":2,"title":"环境配置","slug":"环境配置","link":"#环境配置","children":[{"level":3,"title":"虚拟环境与 Python 安装","slug":"虚拟环境与-python-安装","link":"#虚拟环境与-python-安装","children":[]},{"level":3,"title":"CUDA 与 cuDNN","slug":"cuda-与-cudnn","link":"#cuda-与-cudnn","children":[]},{"level":3,"title":"安装 Virtualenv、Pytorch、Tensorflow、Ollama、Model","slug":"安装-virtualenv、pytorch、tensorflow、ollama、model","link":"#安装-virtualenv、pytorch、tensorflow、ollama、model","children":[]},{"level":3,"title":"OpenWebUI 安装（可选）","slug":"openwebui-安装-可选","link":"#openwebui-安装-可选","children":[]},{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[]}]}],"git":{"updatedTime":1768056600000,"contributors":[{"name":"qwp_p","username":"","email":"qwp20060309@outlook.com","commits":4}],"changelog":[{"hash":"d8b619b6210a7978a63cc8f79cdfc4e55676d4f5","time":1768056600000,"email":"qwp20060309@outlook.com","author":"qwp_p","message":"docs(posts): rename DL folder to DeepLearningAndMachineLearning and update tags"},{"hash":"c3e9818bdb14748626616f6605243a3396abb0ed","time":1768055865000,"email":"qwp20060309@outlook.com","author":"qwp_p","message":"docs(guide): add comprehensive database operations and data handling guides"},{"hash":"e54902a8a620a751540a909555486f1cb2c74d2b","time":1768055562000,"email":"qwp20060309@outlook.com","author":"qwp_p","message":"docs(posts): remove October paper blog reading page"},{"hash":"cfd09171d1be97fa09ef8c4fc2be80d788219c63","time":1762519389000,"email":"qwp20060309@outlook.com","author":"qwp_p","message":"Update blog content and add new articles"}]},"filePathRelative":"posts/DeepLearningAndMachineLearning/DeepLearningInit.md","excerpt":"<link rel=\\"stylesheet\\" href=\\"/css/font-style.css\\">\\n<h2>环境配置</h2>\\n<p>准备工作：</p>\\n<ol>\\n<li>虚拟机：WSL Ubuntu （建议22）</li>\\n<li>Python：3.10</li>\\n<li><a href=\\"https://pypi.org/project/virtualenv/#files\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">virtualenv：任意版本</a></li>\\n<li><a href=\\"https://developer.nvidia.com/cuda-11-8-0-download-archive?target_os=Linux&amp;target_arch=x86_64&amp;Distribution=WSL-Ubuntu&amp;target_version=2.0\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">CUDA：11.8</a></li>\\n<li><a href=\\"https://developer.nvidia.com/rdp/cudnn-archive\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">cuDNN：CUDA 11.X → cuDNN 8.9.7</a></li>\\n<li><a href=\\"https://pypi.org/project/torch/2.0.1/#files\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PyTorch：2.0.1</a></li>\\n<li><a href=\\"https://pypi.org/project/tensorflow/2.12.1/#files\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Tensorflow：2.12.1</a></li>\\n</ol>"}');export{o as comp,r as data};
