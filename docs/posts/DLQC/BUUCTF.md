---

title: BUUCTF-Misc第一部分
description: BUUCTF-Misc第一部分
date: 2026-01-10
timeline: true
head:
  - - meta
    - name: keywords
      content: BUUCTF-Misc第一部分
  - - meta
    - name: description
      content: BUUCTF-Misc第一部分
  - - meta
    - name: author
      content: DLQC
category:
  - DLQC
tag:
  - 浅读文章

---

<link rel="stylesheet" href="/css/font-style.css">

## 金三胖

打开是gif，中间有碎片跳转，直接分解gif

![image-20251212112837124](/assets/img/DLQC/image-20251212112837124.png)

得到flag

```
flag{he11ohongke}
```

## 荷兰宽带数据泄露

得到一个bin文件，又提到了宽带，那就可以想路由密码查看工具。

搜索flag、username、password等关键词，将它们对应的val提交

![image-20251212150742435](/assets/img/DLQC/image-20251212150742435.png)

可以得到了flag

```
flag{053700357621}
```

## 你竟然赶我走

丢随波逐流直接出来了

![image-20251212151838483](/assets/img/DLQC/image-20251212151838483.png)

```
flag{stego_is_s0_bor1ing}
```

## 二维码

解压是个二维码，QR扫了之后内容是，想想是否是隐写

![image-20251212152143903](/assets/img/DLQC/image-20251212152143903.png)

binwalk之后得到一个压缩包，解压需要密码，想想之前的内容应该就是对应的密码。但是不对，我们看需要解压的文件，提示是四个数，那么直接去爆破。

![image-20251212152652380](/assets/img/DLQC/image-20251212152652380.png)

```
CTF{vjpw_wnoei}
按照要求是：flag{vjpw_wnoei}
```

## 大白

提示屏幕太小了，直接改宽高得到flag

![image-20251212153128572](/assets/img/DLQC/image-20251212153128572.png)

```
flag{He1l0_d4_ba1}
```

## wireshark

![image-20251212154134076](/assets/img/DLQC/image-20251212154134076.png)

在过滤栏里输入http，然后在查找输入flag，然后随便找一条查看追踪流，找到了密码



![image-20251212154628917](/assets/img/DLQC/image-20251212154628917.png)

![image-20251212154241059](/assets/img/DLQC/image-20251212154241059.png)

```
flag{ffb7567a1d4f4abdffdb54e022f8facd}
```

## 乌镇峰会种图

直接用010

![image-20251212155400366](/assets/img/DLQC/image-20251212155400366.png)

```
 flag{97314e7864a8f62627b26f3f998c37f1}
```

## N种方法解决

运行一下就能得到一个二维码，扫！

![image-20251212155707774](/assets/img/DLQC/image-20251212155707774.png)

```
按照他的格式交：
flag{dca57f966e4e4e31fd5b15417da63269}
```

## 基础破解

![image-20251212155845749](/assets/img/DLQC/image-20251212155845749.png)

很可爱的注释哦，直接暴力破解

![image-20251212160101404](/assets/img/DLQC/image-20251212160101404.png)

![image-20251212160125893](/assets/img/DLQC/image-20251212160125893.png)

base64编码

```
flag{70354300a5100ba78068805661b93a5c}
```

## 文件中的秘密

010打开，后面啥都没有，可以到处找找，在备注里找到了。

![image-20251212161940681](/assets/img/DLQC/image-20251212161940681.png)

```
flag{870c5a72806115cb5439345d8b014396}
```

## 被嗅探的流量

http——>flag——>追踪一个——>在追踪流里找flag

![image-20251212163803977](/assets/img/DLQC/image-20251212163803977.png)

![image-20251212163505488](/assets/img/DLQC/image-20251212163505488.png)

然后我们找到了一个flag的图片

我们先尝试从foremost提取图片，不过直接搜索flag，就在下面找到了flag

![image-20251212164628067](/assets/img/DLQC/image-20251212164628067.png)

```
flag{da73d88936010da1eeeb36e945ec4b97}
```

## zip伪加密

打开压缩文件发现需要密码，结合题目知道这是伪加密

去011修改

![image-20251212172003537](/assets/img/DLQC/image-20251212172003537.png)

**未加密：**

文件头中的全局方式位标记为**00 00**

 目录中源文件的全局方式位标记为**00 00**

**伪加密：**

文件头中的全局方式位标记为**00 00**

目录中源文件的全局方式位标记为**09 00**

**真加密：**

文件头中的全局方式位标记为**09 00**

目录中源文件的全局方式位标记为**09 00**
因为是伪加密，所以把全局方式位都改为00 00就好了

```
flag{Adm1N-B2G-kU-SZIP}
```

## LSB

![image-20251213143538538](/assets/img/DLQC/image-20251213143538538.png)

将文件保存为png格式，发现是二维码。

![image-20251213143603919](/assets/img/DLQC/image-20251213143603919.png)

![image-20251213143742101](/assets/img/DLQC/image-20251213143742101.png)

扫了之后得到了

```
cumtctf{1sb_i4_s0_Ea4y}
记得修改格式为flag{}
```

## rar

谢谢你毫无保留告诉我。

![image-20251213143946526](/assets/img/DLQC/image-20251213143946526.png)

直接破解：

![image-20251213144128777](/assets/img/DLQC/image-20251213144128777.png)

![image-20251213144213682](/assets/img/DLQC/image-20251213144213682.png)

```
flag{1773c5da790bd3caff38e3decd180eb7}
```

## qr

![image-20251213144351453](/assets/img/DLQC/image-20251213144351453.png)

扫

![image-20251213144437589](/assets/img/DLQC/image-20251213144437589.png)

```
 Flag{878865ce73370a4ce607d21ca01b5e59}
 谨记是flag{}
```

## 镜子里面的世界

得到一张图片，后面没有隐写，直接去stegsolve

![image-20251213145829768](/assets/img/DLQC/image-20251213145829768.png)

![image-20251213145934973](/assets/img/DLQC/image-20251213145934973.png)

```
flag{st3g0_saurus_wr3cks}
```

## 爱因斯坦

![image-20251213150301496](/assets/img/DLQC/image-20251213150301496.png)

我们可以看到一个zip压缩文件，提取出来，然后发现需要密码来解密，我们回到图片中。

想到是隐写或者是其他，现在去看看备注。。。哈。哈。

呀！切切切。。。。。。。那这就是密码！

![image-20251213153014077](/assets/img/DLQC/image-20251213153014077.png)

![image-20251213153122787](/assets/img/DLQC/image-20251213153122787.png)

```
flag{dd22a92bf2cceb6c0cd0d6b83ff51606}
```

## ningen

图片后面隐藏了一个压缩包，需要密码，看题目，我们知道密码有六位数。

![image-20251213154800164](/assets/img/DLQC/image-20251213154800164.png)

密码是8368

![image-20251213155102681](/assets/img/DLQC/image-20251213155102681.png)

```
flag{b025fc9ca797a67d2103bfbc407a6d5f}
```

#### 套路一样的题：小明的保险箱

## easycap

![image-20251213155832792](/assets/img/DLQC/image-20251213155832792.png)

找到了flag

![image-20251213155845921](/assets/img/DLQC/image-20251213155845921.png)

```
flag{385b87afc8671dee07550290d16a8071}
```

## 隐藏的钥匙

![image-20251213160005971](/assets/img/DLQC/image-20251213160005971.png)

用base64来解吧，一键解码不对，所以直接去010

![image-20251213160047461](/assets/img/DLQC/image-20251213160047461.png)

一键解码不对，所以直接去010

![image-20251213160602200](/assets/img/DLQC/image-20251213160602200.png)

找到了，去base64解码

```
flag{377cbadda1eca2f2f73d36277781f00a}
```

## 另外一个世界

思考一下，一张图片没有藏东西，备注没东西，lsb也没有东西，隐写应该也没有，你会怎么做？

![image-20251213161904844](/assets/img/DLQC/image-20251213161904844.png)

```
01101011011011110110010101101011011010100011001101110011
```

01想二进制

![image-20251213162028052](/assets/img/DLQC/image-20251213162028052.png)

![image-20251213162042813](/assets/img/DLQC/image-20251213162042813.png)

第二个是ASCLL，我觉得这个可能性更大一点。

```
flag{koekj3s}
```

## 数据包中的线索

tcp协议很多，我们直接过滤http去追踪

![image-20251213173527907](/assets/img/DLQC/image-20251213173527907.png)

像编码，去解一下

![image-20251213173627512](/assets/img/DLQC/image-20251213173627512.png)

![image-20251213174542366](/assets/img/DLQC/image-20251213174542366.png)

[Base64解码 Base64编码 UTF8 GB2312 UTF16 GBK 二进制 十六进制 解密 - The X 在线工具](https://the-x.cn/encodings/Base64.aspx)这个好用啊，这个能看出来这是啥东西。

根据图片显示原来这个是jpg啊，那就转图片

![image-20251213174643518](/assets/img/DLQC/image-20251213174643518.png)

```
flag{209acebf6324a09671abc31c869de72c}
```

## 神秘龙卷风

![image-20251213175039138](/assets/img/DLQC/image-20251213175039138.png)

![image-20251213175104828](/assets/img/DLQC/image-20251213175104828.png)

没让我失望，打开之后是这个东西，好了我将继续写题。

![image-20251213175339350](/assets/img/DLQC/image-20251213175339350.png)

```
flag{e4bbef8bdf9743f8bf5b727a9f6332a8}
```

## FLAG

![image-20251213182102536](/assets/img/DLQC/image-20251213182102536.png)

里面藏了一个压缩包，

![image-20251213184735912](/assets/img/DLQC/image-20251213184735912.png)

保存下来尝试解压，其他软件可能会说损坏了，不能解压，那就直接7z

![image-20251213201959814](/assets/img/DLQC/image-20251213201959814.png)

解压出来之后丢去010看一下里面有啥内容，得出flag

![image-20251213201941205](/assets/img/DLQC/image-20251213201941205.png)

```
hctf{dd0gf4c3tok3yb0ard4g41n~~~}
记得按照格式来
```

## 假如给我三天光明

![image-20251213202857326](/assets/img/DLQC/image-20251213202857326.png)

盲文，直接去搜：

![image-20251213203606792](/assets/img/DLQC/image-20251213203606792.png)

```
kmdonowg
```

![image-20251213204606857](/assets/img/DLQC/image-20251213204606857.png)

```
-.-. - ..-. .-- .--. . .. ----- ---.. --... ...-- ..--- ..--.. ..--- ...-- -.. --..
```

无需多言，摩斯密码

```
CTFWPEI08732?23DZ
```

```
flag{wpei08732?23dz}  #os提交多次得出的结论
```

## 后门查杀

#### 套路一样的题：webshell后门

![image-20251215111522521](/assets/img/DLQC/image-20251215111522521.png)

解压之后会有个html的文件夹，切记电脑里有火绒的一定要关闭查杀，设置只查不杀。按照一下设置就好：

![image-20251215151933401](/assets/img/DLQC/image-20251215151933401.png)

不错，立马就跳出来了，我们直接去查看。（做完题不放心就改回来就好了）

![image-20251215151958196](/assets/img/DLQC/image-20251215151958196.png)

![image-20251215152317140](/assets/img/DLQC/image-20251215152317140.png)

找到flag

```
flag{6ac45fb83b3bc355c024f5034b947dd3}
```

## 来首歌吧

一看知道这是双音轨的，我觉得应该是摩斯密码

![image-20251215153001145](/assets/img/DLQC/image-20251215153001145.png)

```
..... -... -.-. ----. ..--- ..... -.... ....- ----. -.-. -... ----- .---- ---.. ---.. ..-. ..... ..--- . -.... .---- --... -.. --... ----- ----. ..--- ----. .---- ----. .---- -.-. 
```

解一下得到了这个：

![image-20251215165214948](/assets/img/DLQC/image-20251215165214948.png)

```
flag{5BC925649CB0188F52E617D70929191C}
```

## #面具下的flag

![image-20251215170112851](/assets/img/DLQC/image-20251215170112851.png)

![image-20251215170234563](/assets/img/DLQC/image-20251215170234563.png)

![image-20251215172514712](/assets/img/DLQC/image-20251215172514712.png)

我用了7z，直接解压，看来是伪加密

![image-20251215173401949](/assets/img/DLQC/image-20251215173401949.png)

用010查看看见了这个，我们这次用kali来解

![image-20251217110538147](/assets/img/DLQC/1.png)

我们可以看到：binwalk后，里面有隐藏文件，然后foremost提取到了这几个文件。

得到了重要的zip，我用了010，修改我圈的部分，从09--->00，解压出来。

![image-20251217111411059](/assets/img/DLQC/image-20251217111411059.png)

是一个vmdk文件。

![image-20251217111608611](/assets/img/DLQC/image-20251217111608611.png)

回到kali，我们用7z来解压它。

![image-20251217112128443](/assets/img/DLQC/image-20251217112128443.png)

发现了1和2，我们来一一查看

一、看编码是啥呀？是不是Brainfuck呀？

![image-20251217112213811](/assets/img/DLQC/2.png)

```
flag{N7F5_AD5
```

二、嘘，我都懂，还是Brainfuck

![image-20251217112820285](/assets/img/DLQC/image-20251217112820285.png)

因为我的笔记查看可知（有点忘了，看一看嘿嘿）：

![image-20251217113027686](/assets/img/DLQC/image-20251217113027686.png)

```
_i5_funny!}
```

拼到一起得出了这个：

```
flag{N7F5_AD5_i5_funny!}
```



## 九连环

![image-20251215192625173](/assets/img/DLQC/3.png)

标志性图片展示：

![image-20251216170832467](/assets/img/DLQC/image-20251216170832467.png)

我们直接binwalk提取出来然后解压

![image-20251215192744300](/assets/img/DLQC/4.png)

发现要输入密码，我们去找吧，我们尝试一下看他是不是伪加密。(出现了问题，那就点这个可以恢复哦)

![image-20251216164232898](/assets/img/DLQC/image-20251216164232898.png)

另一种方法：

不是伪加密吗？我直接去改，将`01---->00`

![image-20251217092832739](/assets/img/DLQC/image-20251217092832739.png)

直接无损提取出来图片，nice

有个jpg和压缩包

去kali

![image-20251217102607890](/assets/img/DLQC/5.png)

识别出来之后它说

```
1、capacity: 1.2 KB
 → 这张图最多能藏 **1.2KB 的数据**（即约 1200 字节），说明有空间可以藏东西。
 
2、Try to get information about embedded data ? (y/n)
→ 系统在问你：
“你想查一下里面有没有隐藏的数据吗？（y/n）”
```

在后面一直提取不出来的同学，就比如：

![image-20251217104543659](/assets/img/DLQC/image-20251217104543659.png)

那么应该怎么做呢？

```
#确认你是谁
whoami
#如果输出的是：
root
但是咱们的路径实在普通用户桌面上的
拿我的kali来举例，我们接下来要用完整路径命令（不要用cd）
steghide extract -sf /home/sparrow/桌面/good-已合并.jpg
```

![image-20251217105025979](/assets/img/DLQC/image-20251217105025979.png)

我们去查看提取出来的东西。

![image-20251217105139243](/assets/img/DLQC/image-20251217105139243.png)

```
bV1g6t5wZDJif^J7
```

ok，直接转回压缩包，输入密码

![image-20251217105340211](/assets/img/DLQC/image-20251217105340211.png)

耶✌

```
flag{1RTo8w@&4nK@z*XL}
```