<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-03 17:47:11
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-07 18:31:28
 * @FilePath: \CNSA-Nuxt\components\pageHeader.vue
 * @Description: 导航栏组件
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <div class="w-full h-20 fixed bg-white shadow-md z-50">
        <div class="lg:w-80 text-left w-64">
            <NuxtImg src="/CNSA_logo.png" class="lg:left-20 fixed w-20 top-0 left-0" title="CNSA" />
            <div class="lg:w-96 lg:text-2xl lg:ml-48 lg:mt-2 mt-4 ml-20 font-semibold text-base">
                China National Space Administration
            </div>
        </div>
        <div class="lg:hidden md:left-[90%] menu mt-5" @click="toggleMenu">
            <div :class="{ 'bar1': !menuOpen, 'bar1-active': menuOpen }"></div>
            <div :class="{ 'bar2': !menuOpen, 'bar2-active': menuOpen }"></div>
            <div :class="{ 'bar3': !menuOpen, 'bar3-active': menuOpen }"></div>
        </div>
        <ul id="menu-hide" :class="{ 'mobile-header-hide': !menuOpen, 'mobile-header-show': menuOpen }"
            class="lg:inline-flex fixed top-3 right-12 m-0 mt-3.5 p-0 flex-row gap-8 font-medium text-lg text-sky-700 transition-all duration-300">

            <!-- 导航栏链接插槽，用于插入导航栏链接 -->
            <slot />

        </ul>
    </div>
</template>

<script setup>
const menuOpen = ref(false); // 按钮默认为不显示

function toggleMenu() {
    menuOpen.value = !menuOpen.value;
}
</script>

<style>

</style>
