<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-16 17:53:34
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-16 20:46:13
 * @FilePath: \CNSA-Nuxt\components\IndexTime.vue
 * @Description: 首页时间显示
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <div>
        <time>{{ currentTime }}</time>
    </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';

const currentTime = ref(dayjs(new Date()).format('YYYY年MM月DD日 HH:mm'));

onMounted(() => {
    setInterval(() => {
        currentTime.value = dayjs(new Date()).format('YYYY年MM月DD日 HH:mm');
    }, 1000);
});
</script>

<style></style>