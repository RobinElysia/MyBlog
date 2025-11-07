<script setup>
defineProps({
  /** Article items */
  items: {
    type: Array,
    required: true,
  },
  /** Whether is timeline or not */
  isTimeline: Boolean,
})
</script>

<template>
  <div class="article-wrapper">
    <div v-if="!items.length">没有更多了喵~~</div>

    <article
      v-for="{ info, path } in items"
      :key="path"
      class="article"
      @click="$router.push(path)"
    >
      <header class="title">
        {{
          info.title
        }}
      </header>

      <hr />

      <div class="article-info">
        <span v-if="info.author" class="author">作者: {{ info.author }}</span>

        <span v-if="info.date && !isTimeline" class="date"
          >时间: {{ new Date(info.date).toLocaleDateString('zh').replaceAll('/', '-') }}</span
        >

        <span v-if="info.category" class="category"
          >作者: {{ info.category.join(', ') }}</span
        >
        <span v-if="info.tag" class="tag">标签: {{ info.tag.join(', ') }}</span>

      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
@use '@vuepress/theme-default/styles/mixins';
@use '../public/css/font.css';

.article-wrapper {
  font-family: RobinElysia, qwp;
  @include mixins.content-wrapper;
  padding-top: calc(var(--navbar-height) + 1rem) !important;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.article {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto 2rem;
  padding: 2rem;
  background: var(--vp-c-bg);
  border-radius: 16px;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      #00C9FF,
      #92FE9D
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  @media (max-width: 419px) {
    border-radius: 0;
    margin: 0 auto 1rem;
    padding: 1.5rem;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -4px rgba(0, 0, 0, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    
    &::before {
      opacity: 1;
    }
  }

  .title {
    position: relative;
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.4;
    color: var(--vp-c-text);
    margin-bottom: 1.5rem;
    transition: color 0.3s ease;
    
    &::before {
      content: '#';
      position: absolute;
      left: -1.5rem;
      color: #00C9FF;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      color: #00C9FF;
      
      &::before {
        opacity: 1;
      }
    }
  }

  .article-info {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.5rem;
    font-size: 0.9rem;

    > span {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.35rem 0.8rem;
      border-radius: 6px;
      background: var(--vp-c-bg-soft);
      color: var(--vp-c-text-2);
      transition: all 0.3s ease;
      border: 1px solid transparent;

      &:hover {
        border-color: #00C9FF;
        color: #00C9FF;
      }

      &::before {
        font-size: 0.8rem;
      }

      &.author::before {
        content: '👤';
      }

      &.date::before {
        content: '📅';
      }

      &.category::before {
        content: '📁';
      }

      &.tag::before {
        content: '🏷️';
      }
    }
  }

  .excerpt {
    h1 {
      display: none;
    }

    h2 {
      font-size: 1.2em;
    }

    h3 {
      font-size: 1.15em;
    }
  }
}
</style>
