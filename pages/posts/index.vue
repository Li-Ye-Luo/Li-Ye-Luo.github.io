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

  <YunFooter />
</template>
