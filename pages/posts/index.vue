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
  
  <!-- 注意：如果使用 layout: default，布局通常自带 Footer。 -->
  <!-- 如果发现有两个页脚，请删除下面这行 <YunFooter /> -->
  <YunFooter />
</template>

<!-- !!! 必须添加下面这个代码块 !!! -->
<route lang="yaml">
meta:
  layout: default
</route>