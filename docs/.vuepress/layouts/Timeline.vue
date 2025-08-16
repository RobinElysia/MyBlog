<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import ArticleList from '../components/ArticleList.vue'

const timelines = useBlogType('timeline')
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <h2 class="timeline-title">RobinElysia is a DDL grinder ！</h2>

        <ArticleList :items="timelines.items" is-timeline />
      </main>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
@use '../css/font.css';

.timeline-title {
  padding-top: calc(var(--navbar-height) + 1rem) !important;
  font-family: RobinElysia, qwp;
  text-align: center;
}
</style>
