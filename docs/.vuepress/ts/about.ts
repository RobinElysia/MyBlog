import { ref } from 'vue'

// 滚动动画
export const useScrollAnimation = () => {
  const observerRef = ref(null)

  const observeElements = (elements) => {
    if (!observerRef.value) {
      observerRef.value = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            observerRef.value.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0.1
      })
    }

    elements.forEach(el => {
      if (el) {
        observerRef.value.observe(el)
      }
    })
  }

  return {
    observeElements
  }
}

// 打字机效果
export const useTypewriter = () => {
  const typeText = async (element, text, speed = 50) => {
    if (!element) return
    
    element.textContent = ''
    const chars = text.split('')
    
    for (let char of chars) {
      element.textContent += char
      await new Promise(resolve => setTimeout(resolve, speed))
    }
  }

  return {
    typeText
  }
}

// 视差效果
export const useParallax = () => {
  const handleMouseMove = (e, element) => {
    if (!element) return
    
    const { left, top, width, height } = element.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top
    
    const xPercent = ((x / width) - 0.5) * 20
    const yPercent = ((y / height) - 0.5) * 20
    
    element.style.transform = `perspective(1000px) rotateX(${yPercent}deg) rotateY(${xPercent}deg)`
  }

  return {
    handleMouseMove
  }
}

// 随机颜色生成
export const useRandomColor = () => {
  const colors = [
    ['#3EC8FF', '#2AFC98'],
    ['#FF6B6B', '#FFE66D'],
    ['#4FACFE', '#00F2FE'],
    ['#FA709A', '#FEE140'],
    ['#43E97B', '#38F9D7']
  ]

  const getRandomGradient = () => {
    const pair = colors[Math.floor(Math.random() * colors.length)]
    return `linear-gradient(120deg, ${pair[0]}, ${pair[1]})`
  }

  return {
    getRandomGradient
  }
}

// 技能标签动画
export const useSkillAnimation = () => {
  const animateSkill = (element) => {
    if (!element) return
    
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'scale(1.1) translateY(-5px)'
    })
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1) translateY(0)'
    })
  }

  return {
    animateSkill
  }
}
