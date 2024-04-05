<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-04 20:37:53
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-05 18:33:09
 * @FilePath: \CNSA-Nuxt\components\headerLink.vue
 * @Description: 导航栏链接组件
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <ul class="fixed top-3 right-12 m-0 mt-3.5 p-0 flex flex-row gap-8 font-medium text-lg text-sky-700">
        <li class="hover:font-semibold">
            <NuxtLink to="/">
                <Icon name="ph:house-line" /> 首页
            </NuxtLink>
        </li>
        <li class="hover:font-semibold">
            <NuxtLink to="/about">
                <Icon name="ph:info" /> 关于机构
            </NuxtLink>
        </li>
        <li class="hover:font-semibold">
            <NuxtLink to="/articles">
                <Icon name="ph:article" /> 文章公告
            </NuxtLink>
        </li>
        <li class="hover:font-semibold">
            <NuxtLink to="/videos">
                <Icon name="ph:video" /> 视频展示
            </NuxtLink>
        </li>
    </ul>
</template>

<script lang="ts" setup>

</script>

<style></style>