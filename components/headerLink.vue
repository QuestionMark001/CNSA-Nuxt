<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-04 20:37:53
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-04 21:04:24
 * @FilePath: \CNSA-Nuxt\components\headerLink.vue
 * @Description: 导航栏链接组件
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <!-- TODO: 将导航栏li排版 -->
    <ul>
        <li>
            <NuxtLink to="/">
                <Icon name="ph:house-line" /> 首页
            </NuxtLink>
        </li>
        <li>
            <NuxtLink to="/articles">
                <Icon name="ph:article" /> 文章页
            </NuxtLink>
        </li>
        <li>
            <NuxtLink to="/videos">
                <Icon name="ph:video" /> 视频页
            </NuxtLink>
        </li>
    </ul>
</template>

<script lang="ts" setup>

</script>

<style></style>