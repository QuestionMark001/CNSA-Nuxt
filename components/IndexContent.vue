<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-20 17:42:43
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-05-08 19:39:39
 * @FilePath: \CNSA-Nuxt\components\IndexContent.vue
 * @Description: 首页内容组件
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <!-- 最新消息 -->
    <div class="lg:ml-20 ml-5 my-20">
        <div class="lg:text-3xl text-2xl font-semibold leading-normal tracking-wider uppercase mb-5">
            最新消息
        </div>
        <div class="swiper-message-container">
            <Swiper :modules="[SwiperNavigation, SwiperPagination, SwiperVirtual]" :navigation="{
                enabled: true,
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            }" :virtual="{
                enabled: true
            }" :space-between="56" :slides-per-view="2"> <!-- TODO: 移动端图像大小处理 -->
                <SwiperSlide v-for="(message, index) in messages" :key="index" class="swiper-slide">
                    <NuxtLink :to="message.url" :alt="message.alt" :title="message.title" layout="responsive"
                        class="swiper-link">
                        <NuxtImg :src="message.img" class="swiper-img" />
                        <div>{{ message.title }}</div>
                        <div>{{ message.description }}</div>
                    </NuxtLink>
                </SwiperSlide>
                <button class="swiper-button-prev"></button>
                <button class="swiper-button-next"></button>
            </Swiper>
        </div>
    </div>

    <!-- 国家航天局简介 -->
    <div class="relative mx-auto lg:my-16 my-10">
        <div class="lg:mb-0 mb-10">
            <NuxtImg src="img/indexImg/CNFly.jpg" class="w-full"></NuxtImg>
        </div>
        <div class="lg:pt-20 lg:px-4 2xl:px-0">
            <div class="lg:BaseGrid container relative z-10 mx-auto bg-white lg:mt-[-6.5rem] lg:pt-20">
                <div class="lg:px-0 lg:col-end-8 xl:col-end-9 col-start-2 px-4">
                    <div class="lg:mb-8 mb-5 lg:text-4xl text-2xl">国家航天局</div>
                </div>
                <aside class="lg:mt-0 lg:mx-0 xl:col-span-3 sm:mx-auto lg:w-auto sm:w-80
                lg:col-start-8 xl:col-start-9 col-span-4 mx-6 mt-12">

                </aside>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const messages = ref([
    {
        url: 'https://github.com', // 测试1
        img: 'img/foreword.jpg',
        alt: 'Test1',
        title: 'Test1',
        description: 'test1 description'
    },
    {
        url: 'https://microsoft.com', // 测试2
        img: 'img/Chang\'e-5.jpg',
        alt: 'Test2',
        title: 'Test2',
        description: 'test2 description'
    },
    {
        url: 'https://microsoft.com', // 测试3
        img: 'img/Chang\'e-5.jpg',
        alt: 'Test3',
        title: 'Test3',
        description: 'test3 description'
    },
    {
        url: 'https://microsoft.com', // 测试4
        img: 'img/Chang\'e-5.jpg',
        alt: 'Test4',
        title: 'Test4',
        description: 'test4 description'
    },
    {
        url: 'https://microsoft.com', // 测试5
        img: 'img/Chang\'e-5.jpg',
        alt: 'Test5',
        title: 'Test5',
        description: 'test5 description'
    }
]);
</script>

<style scoped>
/* “最新消息”CSS部分 */
.swiper-slide {
    display: flex;
}

.swiper-img {
    width: 512px;
    height: 288px;
}

/* 自定义按钮样式（背景） */
.swiper-button-prev, .swiper-button-next {
    background-color: #1879bd;
    border: none;
    cursor: pointer;
    position: absolute;
    width: 60px;
    height: 60px;
}
.swiper-button-prev:hover, .swiper-button-next:hover {
    background-color: #125f96;
}

/* 自定义按钮样式（箭头） */
.swiper-button-prev:after, .swiper-button-next:after {
    color: #fff;
    font-size: 25px;
    font-family: swiper-icons;
    text-transform: none !important;
    letter-spacing: 0;
    font-variant: initial;
    line-height: 1;
}
/* TODO: hover箭头动画处理 */
.swiper-button-prev:after:hover, .swiper-button-next:after:hover {

}

/* 如果某一侧没有内容则不显示按钮 */
.swiper-button-disabled {
    display: none;
}

/* TODO: 箭头动画 */
@keyframes swiper-button-arrow-move {
    
}
</style>