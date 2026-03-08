<!-- AboutUs.vue -->
<template>
  <div class="about-container">
    <!-- RobinElysia 卡片 -->
    <div class="member-card fade-in" ref="robinCard" @mousemove="e => handleMouseMove(e, $refs.robinCard)">
      <img src="/assets/img/Rlogo.png" alt="RobinElysia" class="member-avatar">
      <h2 class="member-name" ref="robinName">RobinElysia</h2>
      <p class="member-title">Full Stack Developer | INTJ-T</p>
      
      <div class="skills-container">
        <span v-for="skill in robinSkills" :key="skill" class="skill-tag" ref="skillTags">
          {{ skill }}
        </span>
      </div>

      <div class="content-section fade-in-delay-1">
        <h3 class="section-title">生活</h3>
        <div class="quote">
          "The world has kissed my soul with its pain, asking for its return in songs."
        </div>
      </div>

      <div class="content-section fade-in-delay-1">
        <h3 class="section-title">读书清单</h3>
        <div class="book-list">
          <div v-for="book in robinBooks" :key="book" class="book-item">
            {{ book }}
          </div>
        </div>
      </div>

      <div class="content-section fade-in-delay-1">
        <h3 class="section-title">技术栈</h3>
        <p>{{ robinTechDesc }}</p>
        <a href="https://hcnxcb6dq341.feishu.cn/docx/BgV7d6F1kozzWJx4SqYcfzxOnVf" target="_blank" class="tech-link">技术文章请访问我们的飞书 &rarr;</a>
      </div>
    </div>

    <!-- 叁玖卡片 -->
    <div class="member-card fade-in" ref="sanjCard" @mousemove="e => handleMouseMove(e, $refs.sanjCard)">
      <img src="/assets/img/sanjiu.jpg" alt="叁玖" class="member-avatar">
      <h2 class="member-name" ref="sanjName">叁玖</h2>
      <p class="member-title">Security Researcher | Mysterious Developer</p>
      
      <div class="skills-container">
        <span v-for="skill in sanjSkills" :key="skill" class="skill-tag">
          {{ skill }}
        </span>
      </div>

      <div class="content-section fade-in-delay-1">
        <div class="quote">
          查无此人，据说他很神秘，是个谦虚的萌新
        </div>
        <p>{{ sanjDesc }}</p>
        <a href="www.sanjiuctf.cn" target="_blank" class="tech-link">水友の博客 &rarr;</a>
      </div>
    </div>

    <!-- DLQC卡片 -->
    <div class="member-card fade-in" ref="dlqcCard" @mousemove="e => handleMouseMove(e, $refs.dlqcCard)">
      <img src="/assets/img/DLQC.jpg" alt="DLQC" class="member-avatar">
      <h2 class="member-name" ref="dlqcName">DLQC</h2>
      <p class="member-title">Web Security Researcher | INFJ/ISFJ</p>
      
      <div class="skills-container">
        <span v-for="skill in dlqcSkills" :key="skill" class="skill-tag">
          {{ skill }}
        </span>
      </div>

      <div class="content-section fade-in-delay-1">
        <h3 class="section-title">生活</h3>
        <p>{{ dlqcLifeDesc }}</p>
      </div>

      <div class="content-section fade-in-delay-2">
        <h3 class="section-title">技术</h3>
        <p>{{ dlqcTechDesc }}</p>
      </div>

      <div class="content-section fade-in-delay-3">
        <div class="quote">
          路漫漫其修远兮兮兮兮兮兮……让我们一起努力吧！ᗜ ᴗ ᗜ 
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollAnimation, useTypewriter, useParallax } from '../ts/about'

const { observeElements } = useScrollAnimation()
const { typeText } = useTypewriter()
const { handleMouseMove } = useParallax()

// RobinElysia 数据
const robinSkills = [
  'Java后端', 'Python后端', '机器学习/深度学习', 'Vue3前端', 'Docker', 'Kubernetes'
]

const robinTechDesc = `自学 CS，专注于 Java 后端开发（可能），涉猎全栈技术。
技术栈包括但不限于 JUC、JVM、Spring 全家桶、Py 后端开发/人工智能、分布式系统、微服务架构等。`

const robinBooks = [
  '不拘一格','窄门','精神分析引论','查拉图斯特拉如是说','莎士比亚商籁','雷军创业思考','在春天走进果园','自我与本我',
  '那个夏天我们遇见了天使','西线无战事','让我们来谈谈我们的灵魂','局外人','人之觉醒','西西弗神话','悉达多','影响力',
  '万物生而有翼', '我身上有个不可战胜的夏天','莉莉亚娜不可战胜的夏天'
]

// 叁玖数据
const sanjSkills = [
  'web渗透', '内网渗透', '取证分析', 'MISC',
  '密码学', '信息收集'
]

const sanjDesc = `文科生信息安全专业在读，
主攻MISC和密码学方向。虽然不太爱社交，但对熟悉的人却非常热情。`

// DLQC数据
const dlqcSkills = [
  'Misc', 'Crypto', '网工（搭建网络架构及部署）'
]

const dlqcLifeDesc = `喜欢尝试新鲜的事物，积极面对生活的中的任何挑战。
其人常说：“比起四十二号混凝土，更喜欢探讨火鸡面的奥秘。”诸如此类不着边际的话。
最近倒是迷上了研究如何手搓机器人以及怎么写好一个故事。`

const dlqcTechDesc = `专注于网络工程方面，目前掌握Cisco、eNSP、
RG等的相关配置。同时学习CTF方面的知识，不局限于一个方面。`

onMounted(() => {
  // 初始化动画
  const elements = [
    ...document.querySelectorAll('.member-card'),
    ...document.querySelectorAll('.content-section')
  ]
  observeElements(elements)

  // 打字机效果
  typeText(document.querySelector('.member-name'), 'RobinElysia', 100)
})
</script>

<style scoped>
@import '../css/about.css';
</style>