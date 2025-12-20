<script setup lang="ts">
useHead({
  title: '所有文章',
  meta: [
    {
      name: 'description',
      content: '本站全部文章列表，按时间与置顶权重排序。',
    },
  ],
})
</script>

<template>
  <div class="mt-37 mb-4">
    <YunPostList />
  </div>

  <!-- 如果用了 layout: default，布局里自带 Footer，这里通常不需要加 YunFooter -->
  <!-- 如果你发现有两个页脚，请把下面这行删掉 -->
  <YunFooter />
</template>

<!-- 关键点：这个 route 块必须存在，且缩进必须正确 (YAML格式) -->
<route lang="yaml">
meta:
  layout: default
</route>