<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-16 17:53:34
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-19 17:01:16
 * @FilePath: \CNSA-Nuxt\components\IndexTime.vue
 * @Description: 首页时间显示
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <!-- TODO: 将 IndexTime 组件重构为 grid布局 -->
    <div class="bg-[#f5f5f5] gap-3 w-[95%] flex flex-col items-end self-end p-4 rounded-l-md">
        <!-- 中国航天日 -->
        <div class="text-[#1879bd] text-base">中国航天日</div>
        <time class="font-extrabold text-3xl">{{ todayIsSpaceDay }}</time>
        <NuxtLink to=""
        target="_blank" rel="noopener noreferrer" class="hover:underline">
            <Icon name="ph:arrow-circle-up-right"
            class="arrow-icon text-[#1879bd] hover:text-blue-600"
            size="50" />
        </NuxtLink>
        <!-- 第一艘载人飞船发射距今时间差 -->
        <div class="text-[#1879bd] text-base">第一艘载人飞船发射距今</div>
        <time class="font-extrabold text-3xl">{{ shenZhouVDiff }}</time>
        <NuxtLink to="https://www.youtube.com/watch?v=Wo_MquF2br8"
        target="_blank" rel="noopener noreferrer" class="hover:underline">
            <Icon name="ph:arrow-circle-up-right"
            class="arrow-icon text-[#1879bd] hover:text-blue-600"
            size="50" />
        </NuxtLink>
        <!-- 当前时间 -->
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
// 启用 day.js 的 Duration 插件，用于计算时间差
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

/* 计算当前时间（YYYY.MM.DD HH:mm） */
const currentTime = ref(dayjs(new Date()).format('YYYY.MM.DD HH:mm'));
// 客户端渲染
onMounted(() => {
    setInterval(() => {
        currentTime.value = dayjs(new Date()).format('YYYY.MM.DD HH:mm');
    }, 1000);
});


/* 第一艘载人飞船发射距今多少天 */
const shenZhouVStart = '2003-10-15';                          // 第一艘载人飞船发射时间（YYYY-MM-DD）
const todayTime = dayjs(new Date()).format('YYYY-MM-DD');     // 当前时间（YYYY-MM-DD）
const shenZhouVDiff = getDateDiff(shenZhouVStart, todayTime); // 算出时间差（XX年XX月XX天）

/* 计算日期时间差并返回格式化字符串的函数 */
function getDateDiff(startDateString: string, endDateString: string) {
    // 创建起始日期和结束日期对象
    const startDate = dayjs(startDateString, 'YYYY-MM-DD');
    const endDate = dayjs(endDateString, 'YYYY-MM-DD');

    // 计算日期差异
    const diff = endDate.diff(startDate);

    // 提取差异的时间单位
    const duration = dayjs.duration(diff);
    const years = duration.years();
    const months = duration.months();
    const days = duration.days();

    // 格式化为字符串
    const formattedDiff = `${years}年${months}月${days}天`;

    return formattedDiff;
};


/* 计算是否为国家航天日 */
const todayTime2 = dayjs(new Date()).format('MM-DD'); // 当前时间（MM-DD）
const todayIsSpaceDay = isSpaceDay(todayTime2);

/* 检测是否为国家航天日的函数 */
function isSpaceDay(day: string) {
    if (day === '04-24') {
        return '今天';
    } else {
        return '4月24日';
    }
};
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