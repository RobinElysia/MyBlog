<template>
  <li class="link-item">
    <div class="friend-avatar">
      <img :src="friend.avatar" :alt="friend.name">
    </div>
    <div class="friend-info">
      <div class="friend-name">{{ friend.name }}</div>
      <div class="friend-desc">{{ friend.description }}</div>
      <div class="friend-tags">
        <span
          v-for="(tag, index) in friend.tags" 
          :key="index" 
          class="friend-tag" 
          :class="tag.color"
        >
          {{ tag.text }}
        </span>
      </div>
    </div>
    <a :href="friend.link" target="_blank" class="friend-link"></a>
  </li>
</template>

<script setup>
defineProps({
  friend: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
@import '../css/FriendCard.css';
</style>
