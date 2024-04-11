<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-03 17:47:11
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-11 20:52:58
 * @FilePath: \CNSA-Nuxt\components\PageHeader.vue
 * @Description: 导航栏组件
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <div class="w-full h-20 fixed bg-white shadow-md z-50">
        <div class="lg:w-80 text-left w-64 hover:underline">
            <NuxtLink to="/" title="CNSA">
                <NuxtImg src="/CNSA_logo.png" class="lg:left-16 fixed w-20 top-0 left-0" />
                <div class="lg:w-96 lg:text-2xl lg:ml-40 lg:mt-2 mt-4 ml-20 font-semibold text-base">
                    China National Space Administration
                </div>
            </NuxtLink>
        </div>
        <div class="lg:hidden md:left-[95%] menu mt-5" @click="toggleMenu">
            <div :class="{ 'bar1': !menuOpen, 'bar1-active': menuOpen }"></div>
            <div :class="{ 'bar2': !menuOpen, 'bar2-active': menuOpen }"></div>
            <div :class="{ 'bar3': !menuOpen, 'bar3-active': menuOpen }"></div>
        </div>
        <ul :class="{ 'mobile-header-hide': !menuOpen, 'mobile-header-show mobile-header-style': menuOpen }" class="lg:inline-flex lg:top-3 lg:flex-row lg:text-lg lg:p-0 lg:gap-8 lg:font-medium
        fixed right-12 m-0 mt-3.5 font-medium text-sky-700 transition-all duration-300">

            <!-- 导航栏链接插槽，用于插入导航栏链接 -->
            <slot :closeMenu="closeMenu" />

        </ul>
    </div>
</template>

<script lang="ts">
import { useMenuStore } from '~/store/menuStore';

export default defineComponent({
    setup() {
        const menuStore = useMenuStore();
        // 从 store 中获取菜单状态
        // 同时使用 computed 计算属性实时改变按钮状态（必要！）
        const menuOpen = computed(() => menuStore.menuOpen);

        // 切换菜单状态函数
        const toggleMenu = () => {
            // 切换菜单状态
            menuStore.toggleMenu();

            // 移动端展开菜单后隐藏内容页滚动条
            if (menuStore.menuOpen) {
                document.body.classList.add('scroll-hide');
            } else {
                document.body.classList.remove('scroll-hide');
            }
        };

        // 关闭菜单函数
        const closeMenu = () => {
            menuStore.closeMenu();
        };

        return { menuOpen, toggleMenu, closeMenu };
    },
});
</script>

<style></style>
