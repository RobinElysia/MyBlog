---
sidebar: false
---

<script setup>
import FriendCard from '/.vuepress/components/FriendCard.vue'

const friends = [
  {
    name: 'RobinElysia',
    avatar: '/assets/img/avatar-default.jpg',
    description: '全栈开发ing | 热爱技术与创新',
    link: './AboutUs.html#关于robinelysia',
    tags: [
      { text: 'CS补天计划ing' },
      { text: 'Java全栈', color: 'green' },
      { text: '站主', color: 'purple' }
    ]
  },
  {
    name: 'ICStudio',
    avatar: '/assets/img/fengcheng.jpg',
    description: '枫城 | React全栈',
    link: 'http://icstudio.top/',
    tags: [
      { text: '一站式开发' },
      { text: 'Rust"带盐人"', color: 'green' }
    ]
  },
  {
    name: '叁玖',
    avatar: '/assets/img/sanjiu.jpg',
    description: '密码学/加密研究者 | 网络安全',
    link: 'www.sanjiuctf.cn',
    tags: [
      { text: '密码学', color: 'orange' },
      { text: '__，__！', color: 'purple' }
    ]
  },
  {
    name: 'DLQC',
    avatar: '/assets/img/DLQC.jpg',
    description: '努力学习ing',
    link: './AboutUs.html#关于dlqc',
    tags: [
      { text: 'C/C++' },
      { text: '网络安全', color: 'green' }
    ]
  },
  {
    name: '魔理沙',
    avatar: 'https://pica.zhimg.com/466406875631534fc5629e5c75a58a7a_xll.jpg?source=32738c0c&needBackground=1',
    description: '雾雨魔法店 CEO | 魔理沙',
    link: 'https://marisa.moe/',
    tags: [
      { text: 'phd 在读', color: 'orange' },
      { text: '知乎大佬', color: 'green' }
    ]
  },
  {
    name: 'Purpleplanen',
    avatar: 'https://www.purpleplanen.top/logo.png',
    description: '前端开发 | Fumo',
    link: 'https://www.purpleplanen.top/AboutMe.html',
    tags: [
      { text: '前端', color: 'purple' },
      { text: 'UI/UX' }
    ]
  },
  {
    name: '蕾米 Remi Guan',
    avatar: '/assets/img/Remi.jpg',
    description: '全栈 | 蕾米',
    link: 'https://www.purpleplanen.top/Notes/%E6%91%98%E5%BD%95%E8%AF%AD%E5%8F%A5/remi.html',
    tags: [
      { text: '技术沉思录', color: 'orange' },
      { text: '舞萌', color: 'purple' }
    ]
  },
  {
    name: 'Riko',
    avatar: '/assets/img/Riko.jpg',
    description: '平面设计 | 转行ing',
    link: 'https://akiyamariko.github.io/Blog/',
    tags: [
      { text: '前端开发入门中', color: 'green' },
      { text: '明日方舟', color: 'purple' }
    ]
  },
  {
    name: "小海",
    avatar: "https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg",
    description: "小海的角落",
    link: "https://norubias.site/#/",
    tags: [
      { text: '孤独摇滚', color: 'purple'},
      { text: 'Web前端开发者', color: 'orange'}
    ]
  },
  {
    name: "rand777",
    avatar: "https://avatars.githubusercontent.com/u/91131723?s=400&u=cc52bb8ae67e4a4706570ac84399dc7519cfa749&v=4",
    description: "摇摇晃晃，也能到达目的地。",
    link: "https://blog.rand777.space/",
    tags: [
      { text: '笨笨的', color: 'green'},
      { text: 'ENTJ-A', color: 'purple'}
    ]
  },
  {
    avatar:"https://avatars.githubusercontent.com/u/176664901?v=4",
    name: "LunaRain_079",
    description: "独酌清月",
    link:"https://www.lunarain.top/",
    tags: [
      { text: 'CS learner', color: 'orange'},
      { text: 'ENTJ-A', color: 'purple'}
    ]
  },
  {
    name: "Immortal's Blog",
    avatar:"https://immort.top/image/e13254c44147cea5d9f1302c5878819d.jpg",
    description: "Immortal's Blog",
    link:"https://blog.immortel.top/",
    tags: [
      { text: '随便吧', color: 'purple'}
    ]
  },
]
</script>

<style scoped>
.page {
    background-color: #111827;
    min-height: 100vh;
    color: #fff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.friend-links-container {
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
}

.friend-header {
    text-align: center;
    margin-bottom: 3rem;
}

.friend-header h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.friend-header p {
    color: #9CA3AF;
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
}

.link-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0;
    list-style: none;
    width: 100%;
}

/* 响应式设计 */
@media (max-width: 1200px) {
    .link-list {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 900px) {
    .link-list {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .friend-links-container {
        padding: 1rem;
    }
    
    .link-list {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    
    .friend-header h1 {
        font-size: 2rem;
    }
    
    .friend-header p {
        font-size: 1rem;
    }
}
</style>

<div class="friend-links-container">
    <div class="friend-header">
        <h1> 🍔OtherLink And Friends🍟 </h1>
        <p>Some personal links with friends.</p>
    </div>
    <br>
    <ul class="link-list">
        <FriendCard v-for="friend in friends" :key="friend.name" :friend="friend" />
    </ul>
</div>
