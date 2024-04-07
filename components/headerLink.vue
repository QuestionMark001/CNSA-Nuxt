<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-04 20:37:53
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-07 21:31:09
 * @FilePath: \CNSA-Nuxt\components\headerLink.vue
 * @Description: 导航栏链接组件
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <li class="hover:font-semibold drop-shadow-md shadow-black">
        <NuxtLink to="/">
            <Icon name="ph:house-line" /> 首页
        </NuxtLink>
    </li>
    <li class="hover:font-semibold drop-shadow-md shadow-black">
        <NuxtLink to="/about">
            <Icon name="ph:info" /> 关于机构
        </NuxtLink>
    </li>
    <li class="hover:font-semibold drop-shadow-md shadow-black">
        <NuxtLink to="/articles">
            <Icon name="ph:article" /> 文章公告
        </NuxtLink>
    </li>
    <li class="hover:font-semibold drop-shadow-md shadow-black">
        <NuxtLink to="/videos">
            <Icon name="ph:video" /> 视频展示
        </NuxtLink>
    </li>
</template>

<script lang="ts" setup>
// TODO: 在移动端点击菜单下导航链接后，自动关闭移动端菜单按钮
</script>

<style>
</style>
