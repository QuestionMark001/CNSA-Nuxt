<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-03 16:06:04
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-17 21:37:01
 * @FilePath: \CNSA-Nuxt\pages\index.vue
 * @Description: 首页
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <!-- 首页轮播图 -->
    <IndexCarousel />
    <!-- 首页时间显示 -->
    <div class="flex flex-row-reverse mt-6">
        <IndexTime />
    </div>

    <!-- 首页内容展示 -->
    <div class="lg:m-10 m-5">
        <div>Test 内容</div>
        <div>Test 内容</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
    </div>
</template>

<script setup>

</script>

<style scoped>
</style>