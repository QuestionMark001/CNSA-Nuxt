<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-03 17:47:11
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-06 22:31:08
 * @FilePath: \CNSA-Nuxt\components\pageHeader.vue
 * @Description: 导航栏组件
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <div class="w-full h-20 fixed bg-white shadow-md z-50">
        <div class="lg:w-80 text-left w-64">
            <NuxtImg src="/CNSA_logo.png" class="lg:left-20 fixed w-20 top-0 left-0" title="CNSA" />
            <div class="lg:w-96 lg:text-2xl lg:ml-48 lg:mt-2 mt-4 ml-20 font-semibold text-base">China National Space
                Administration</div>
        </div>
        <!-- FIXME: 按钮点击后有时无响应 -->
        <div class="lg:hidden md:left-[90%] menu mt-5" @click="menuClick($event)" @touchstart.prevent="menuClick">
            <div class="bar1" @click="menuClick($event)" @touchstart.prevent="menuClick"></div>
            <div class="bar2" @click="menuClick($event)" @touchstart.prevent="menuClick"></div>
            <div class="bar3" @click="menuClick($event)" @touchstart.prevent="menuClick"></div>
        </div>
        <ul id="menu-hide"
            class="hidden lg:inline-flex fixed top-3 right-12 m-0 mt-3.5 p-0 flex-row gap-8 font-medium text-lg text-sky-700">

            <!-- 导航栏链接插槽，用于插入导航栏链接 -->
            <slot />

        </ul>
    </div>
</template>

<script lang="ts" setup>
function menuClick(event: MouseEvent | TouchEvent) {
    const mobileMenu = event.target as HTMLElement;
    if (!mobileMenu) return; // 如果 mobileMenu 为 null，则直接返回

    const menu = document.getElementById('menu-hide');
    if (!menu) return; // 如果 menu 为 null，则直接返回

    if (mobileMenu.classList.toggle('change')) {
        /* 菜单可见 */
        menu.style.display = 'inline-block';
        menu.style.marginTop = '20%';
    } else {
        /* 菜单不可见 */
        menu.style.display = 'none';
        menu.style.display = '';
        menu.style.marginTop = '';
    }
}
</script>

<style>

</style>