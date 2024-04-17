<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-16 17:53:34
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-17 18:05:51
 * @FilePath: \CNSA-Nuxt\components\IndexTime.vue
 * @Description: 首页时间显示
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <div class="bg-[#f5f5f5] gap-3 w-2/5 flex flex-col items-end self-end p-4 rounded-l-md">
        <div class="text-[#1879bd] text-base">当前时间</div>
        <time class="font-extrabold text-3xl">{{ currentTime }}</time>
        <NuxtLink to="https://time.is/"
        target="_blank" rel="noopener noreferrer" class="hover:underline">
            <Icon name="ph:arrow-circle-up-right"
            class="arrow-icon text-[#1879bd] hover:text-blue-600"
            size="50" />
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';

const currentTime = ref(dayjs(new Date()).format('YYYY.MM.DD HH:mm'));

// 客户端渲染
onMounted(() => {
    setInterval(() => {
        currentTime.value = dayjs(new Date()).format('YYYY.MM.DD HH:mm');
    }, 1000);
});
</script>

<style scoped>
.arrow-icon {
    transition: transform 0.3s ease-in-out, scale 0.3s ease-in-out;
}

.arrow-icon:hover {
    cursor: pointer;
    transform: scale(1.2);
}
</style>