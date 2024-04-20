<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-16 17:53:34
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-19 21:37:09
 * @FilePath: \CNSA-Nuxt\components\IndexTime.vue
 * @Description: 首页时间显示
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <div class="flex flex-row-reverse mt-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-[97%] w-[100%] lg:rounded-l-lg gap-8 p-12 bg-gray-100">
            <!-- 中国航天日 -->
            <div>
                <div class="text-base font-semibold text-[#1879bd] pb-3">中国航天日</div>
                <time class="font-extrabold text-3xl">{{ todayIsSpaceDay }}</time>
                <NuxtLink to="https://www.bilibili.com/video/BV18Z4y117Z8" target="_blank" rel="noopener noreferrer">
                    <br />
                    <Icon name="ph:arrow-circle-up-right" class="arrow-icon text-[#1879bd] hover:text-blue-600 mt-2"
                        size="50" />
                </NuxtLink>
            </div>
            <!-- 嫦娥一号发射距今 -->
            <div>
                <div class="text-base font-semibold text-[#1879bd] pb-3">嫦娥一号发射距今</div>
                <time class="font-extrabold text-3xl">{{ chang_e_1_diff }}</time>
                <NuxtLink to="https://www.bilibili.com/video/BV1Xt4y1a7aY" target="_blank" rel="noopener noreferrer">
                    <br />
                    <Icon name="ph:arrow-circle-up-right" class="arrow-icon text-[#1879bd] hover:text-blue-600 mt-2"
                        size="50" />
                </NuxtLink>
            </div>
            <!-- 中国第一艘载人飞船发射距今时间差 -->
            <div>
                <div class="text-base font-semibold text-[#1879bd] pb-3">中国第一艘载人飞船发射距今</div>
                <time class="font-extrabold text-3xl">{{ shenZhouVDiff }}</time>
                <NuxtLink to="https://www.bilibili.com/video/BV1HV41127jh" target="_blank" rel="noopener noreferrer">
                    <br />
                    <Icon name="ph:arrow-circle-up-right" class="arrow-icon text-[#1879bd] hover:text-blue-600 mt-2"
                        size="50" />
                </NuxtLink>
            </div>
            <!-- 当前时间 -->
            <div>
                <div class="text-base font-semibold text-[#1879bd] pb-3">当前时间</div>
                <time class="font-extrabold text-3xl">{{ currentTime }}</time>
                <NuxtLink to="https://time.is/" target="_blank" rel="noopener noreferrer">
                    <br />
                    <Icon name="ph:arrow-circle-up-right" class="arrow-icon text-[#1879bd] hover:text-blue-600 mt-2"
                        size="50" />
                </NuxtLink>
            </div>
        </div>
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


/* 中国第一艘载人飞船发射距今多少天 */
const shenZhouVStart = '2003-10-15';                          // 中国第一艘载人飞船发射时间（YYYY-MM-DD）
const todayTime = dayjs(new Date()).format('YYYY-MM-DD');     // 当前时间（YYYY-MM-DD）
const shenZhouVDiff = getDateDiff(shenZhouVStart, todayTime); // 算出时间差（XX年XX月XX天）

/* 嫦娥一号发射距今多少天 */
const chang_e_1_start = '2007-10-24';                           // 嫦娥一号发射时间（YYYY-MM-DD）
const chang_e_1_diff = getDateDiff(chang_e_1_start, todayTime); // 算出时间差（XX年XX月XX天）

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


/* 检测是否为国家航天日 */
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