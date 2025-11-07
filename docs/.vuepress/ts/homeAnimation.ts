export const useParallax = (event, element) => {
  const x = (window.innerWidth - event.pageX) / 90;
  const y = (window.innerHeight - event.pageY) / 90;
  
  element.style.transform = `translateX(${x}px) translateY(${y}px)`;
};

export const typewriterEffect = (element, text, speed = 100) => {
  let i = 0;
  element.textContent = '';
  
  return new Promise((resolve) => {
    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
};

export const fadeInElements = (elements, delay = 100) => {
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, index * delay);
  });
};
