<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-03 17:47:11
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-05-08 19:30:12
 * @FilePath: \CNSA-Nuxt\components\PageHeader.vue
 * @Description: 导航栏组件
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <div class="lg:pc-header-bg transition-all transform bg-white w-full h-20 fixed shadow-sm z-50">
        <div class="lg:w-80 text-left w-64 hover:underline hover:decoration-sky-500">
            <NuxtLink to="/" title="CNSA">
                <NuxtImg src="img/CNSA_logo.png" class="lg:left-16 fixed w-20 top-0 left-0" />
                <div id="cnsa" class="lg:text-white lg:w-96 lg:text-2xl lg:ml-40 lg:mt-2 mt-4 ml-20 font-semibold text-base">
                    China National Space Administration
                </div>
            </NuxtLink>
        </div>
        <div class="lg:hidden md:left-[95%] menu mt-5" @click="toggleMenu">
            <div :class="{ 'bar1': !menuOpen, 'bar1-active': menuOpen }"></div>
            <div :class="{ 'bar2': !menuOpen, 'bar2-active': menuOpen }"></div>
            <div :class="{ 'bar3': !menuOpen, 'bar3-active': menuOpen }"></div>
        </div>
        <ul :class="{ 'mobile-header-hide': !menuOpen, 'mobile-header-show mobile-header-style': menuOpen }"
        class="lg:inline-flex lg:top-3 lg:flex-row lg:text-lg lg:p-0 lg:gap-8 lg:font-medium fixed right-12 m-0 mt-3.5 font-medium text-sky-700 transition-all duration-300">

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


        // 监听滚动事件
        const isScrolling = ref(false);
        // 上一次滚动的位置（初始值为0）
        let lastScrollTop = 0;

        const handleScroll = () => {
            // 获取当前滚动的垂直偏移量（页面滚动距离顶部的距离）
            const st = window.pageYOffset || document.documentElement.scrollTop;

            // 判断滚动方向
            if (st > lastScrollTop) {
                // 向下滚动，隐藏导航栏
                if (!isScrolling.value) {
                    isScrolling.value = true;
                    const header = document.querySelector('.lg\\:pc-header-bg');
                    if (header) {
                        header.classList.add('header-hidden');
                    }
                }
            } else {
                // 向上滚动，显示导航栏
                if (isScrolling.value) {
                    isScrolling.value = false;
                    const header = document.querySelector('.lg\\:pc-header-bg');
                    if (header) {
                        header.classList.remove('header-hidden');
                        // header.classList.remove('header-visible');
                    }
                }

                // 如果当前位置不是0px，则导航栏背景显示白色
                if (st !== 0) {
                    const header = document.querySelector('.lg\\:pc-header-bg');
                    const cnsa = document.querySelector('#cnsa');
                    if (header && cnsa) {
                        header.classList.add('header-white-bg');  // 导航栏背景显示白色
                        cnsa.classList.add('text-black');         // 主标题字体颜色为黑色
                    }
                } else {
                    // 如果当前位置是0px，则移除白色背景
                    const header = document.querySelector('.lg\\:pc-header-bg');
                    const cnsa = document.querySelector('#cnsa');
                    if (header && cnsa) {
                        header.classList.remove('header-white-bg');
                        cnsa.classList.remove('text-black');
                    }
                }
            }

            // 更新上一次滚动的位置
            lastScrollTop = st <= 0 ? 0 : st; // 防止 Safari 的弹性滚动
        };

        // 在组件挂载时添加滚动事件监听器
        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        // 在组件销毁时移除滚动事件监听器
        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return { menuOpen, toggleMenu, closeMenu };
    },
});
</script>

<style scoped>
/* 控制导航栏隐藏 */
.header-hidden {
    transform: translate3d(0, -100%, 0);
}

/* 控制导航栏显示 */
.header-visible {
    transform: translateZ(0);
}
</style>
