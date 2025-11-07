<template>
  <div class="home-container" @mousemove="handleMouseMove" ref="container">
    <div class="background-overlay"></div>
    <div class="hero-section" ref="heroSection">
      <div class="hero-content" :class="{ 'visible': isContentVisible }">
        <div class="logo-container">
          <img 
            :src="heroImage" 
            alt="Hero" 
            class="hero-image"
            ref="/assets/img/RobinElysia.png"
          >
          <div class="logo-glow"></div>
        </div>
        <h1 class="title" ref="title">RSD</h1>
        <p class="tagline" ref="tagline">We are always devout scholars</p>
        
        <div class="actions">
          <a href="/AboutUs.html" class="action-button primary">About Us</a>
          <a href="/Link.html" class="action-button secondary">Other Link</a>
        </div>
      </div>
    </div>

    <div class="features-section">
      <div 
        v-for="(feature, index) in features" 
        :key="index" 
        class="feature-card"
        :class="{ 'visible': isVisible }"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <footer class="footer">
      RobinElysia、叁玖、DLQC | Copyright © 2025 qwp Community
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useParallax, typewriterEffect, fadeInElements } from '../ts/homeAnimation'
import { initParticles } from '../ts/particles'

const container = ref(null)
const heroImage = ref('/assets/img/RobinElysia.png')
const heroSection = ref(null)
const title = ref(null)
const tagline = ref(null)
const isVisible = ref(false)
const isContentVisible = ref(false)
let cleanupParticles = null

const features = [
  {
    title: 'Java Backend Development',
    details: 'JUC、JVM、JMM、SSM、SpringBoot、SpringCould、SpringSecurity、SpringAI'
  },
  {
    title: 'Vue Frontend Development',
    details: 'Vue3生态组件库、TypeScript'
  },
  {
    title: 'DevOps/Cloud Native',
    details: 'Linux Basics、Docker、Kubernetes、Kibana、LogStash'
  },
  {
    title: 'Computer Security',
    details: 'Linux/Unix System Design Principles、TCP/IP、Network Security, Web Security'
  },
  {
    title: 'SQL/Cache/Middleware',
    details: 'Nginx、Tomcat、MySQL、MongDB、Redis、ElasticSearch、Kafka、RabbitMQ...'
  },
  {
    title: 'Other',
    details: 'Machine Learning/Deep Learning、Python Backend Development、C/C++'
  }
]

const handleMouseMove = (e) => {
  if (heroSection.value) {
    useParallax(e, heroSection.value)
  }
}

const handleScroll = () => {
  const rect = container.value?.getBoundingClientRect()
  if (rect && rect.top < window.innerHeight && rect.bottom >= 0) {
    isVisible.value = true
  }
}

onMounted(async () => {
  // 初始化粒子效果
  if (container.value) {
    cleanupParticles = initParticles(container.value)
  }

  // 内容渐入
  setTimeout(() => {
    isContentVisible.value = true
  }, 300)

  // 打字机效果
  if (title.value && tagline.value) {
    await typewriterEffect(title.value, 'RSD', 150)
    await typewriterEffect(tagline.value, 'We are always devout scholars', 50)
  }
  
  // 监听滚动
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (cleanupParticles) {
    cleanupParticles()
  }
})
</script>

<style scoped>
@import '../css/HomePage.css';
</style>
