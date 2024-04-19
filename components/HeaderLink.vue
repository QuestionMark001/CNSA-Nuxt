<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-04 20:37:53
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-19 17:18:16
 * @FilePath: \CNSA-Nuxt\components\HeaderLink.vue
 * @Description: 导航栏链接组件
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <!-- 仅在移动端显示此项： -->
    <li class="lg:hidden flex text-sky-500 hover:font-semibold drop-shadow-md shadow-black">
        <NuxtLink class="flex items-center" @click="closeMenu" to="/">
            <Icon name="ph:house-line" /> 返回首页
        </NuxtLink>
    </li>

    <li class="hover:font-semibold text-sky-500 drop-shadow-md shadow-black">
        <NuxtLink class="flex items-center pc-link-line" @click="closeMenu" to="/about">
            <Icon name="ph:info" /> 关于我们
        </NuxtLink>
    </li>
    <li class="hover:font-semibold text-sky-500 drop-shadow-md shadow-black">
        <NuxtLink class="flex items-center pc-link-line" @click="closeMenu" to="/articles">
            <Icon name="ph:article" /> 文章公告
        </NuxtLink>
    </li>
    <li class="hover:font-semibold text-sky-500 drop-shadow-md shadow-black">
        <NuxtLink class="flex items-center pc-link-line" @click="closeMenu" to="/videos">
            <Icon name="ph:video" /> 视频展示
        </NuxtLink>
    </li>
    <li class="hover:font-semibold text-sky-500 drop-shadow-md shadow-black">
        <NuxtLink class="flex items-center pc-link-line" @click="closeMenu" to="#">
            <Icon name="ph:share-network-fill" /> 友情链接
        </NuxtLink>
    </li>
</template>

<script lang="ts">
import { useMenuStore } from '~/store/menuStore';

export default {
    methods: {
        closeMenu() {
            const menuStore = useMenuStore();
            menuStore.closeMenu();
            document.body.classList.remove('scroll-hide'); // 关闭菜单后恢复内容页滚动条
        },
    },
};
</script>

<style>
</style>
