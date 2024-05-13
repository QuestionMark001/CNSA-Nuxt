<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-20 17:42:43
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-05-13 20:16:19
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
            <div class="lg:BaseGrid lg:rounded-lg container relative z-10 mx-auto bg-white lg:mt-[-10rem] lg:pt-20">
                <div class="lg:px-0 lg:col-end-8 xl:col-end-9 col-start-2 px-4">
                    <div class="lg:mb-8 mb-5 lg:text-4xl text-3xl">国家航天局</div>
                    <div class="md:text-lg md:leading-10 text-base leading-7">
                        <p class="mb-8">
                            国家航天局（官方英文译名：China National Space Administration，英文缩写为CNSA），简称航天局。
                        </p>
                        <p class="mb-8">
                            国家航天局是中华人民共和国负责民用航天管理及国际空间合作的政府机构，履行政府相应的管理职责。
                            对航天活动实施行业管理，使其稳定、有序、健康、协调地发展。
                            代表中国政府组织或领导开展航天领域对外交流与合作等活动。
                        </p>
                    </div>
                    <div class="mt-5">
                        <span class="flex items-center">
                            <NuxtLink to="https://baike.baidu.com/item/国家航天局"
                            target="_blank" rel="noopener noreferrer">
                                <span class="learn-more mr-1">了解更多</span>
                                <Icon name="ph:arrow-circle-up-right" class="arrow-icon text-[#1879bd] hover:text-blue-600"
                                size="32" />
                            </NuxtLink>
                        </span>
                    </div>
                </div>
                <aside class="lg:mt-0 lg:mx-0 xl:col-span-3 sm:mx-auto lg:w-auto sm:w-80
                lg:col-start-8 xl:col-start-9 col-span-4 mx-6 mt-12">
                    <div class="shadow-2xl rounded-lg">
                        <div class="relative h-auto">
                                <NuxtLink to="https://www.bilibili.com/video/BV1Yy4y1q7Rh"
                                target="_blank" rel="noopener noreferrer">
                                    <NuxtImg src="img/indexImg/introduction-cover.jpg"
                                    class="w-full rounded-t-lg" width="400" height="226">
                                    </NuxtImg>
                                </NuxtLink>
                        </div>
                        <div class="px-6 pt-6 pb-4">
                            <div class="mb-3 text-xl font-medium">CNSA官宣</div>
                            <p class="md:text-base text-sm">
                                官宣来了！【CNSA独家首发】国家航天局官方宣传片，全程高能超震撼！
                            </p>
                            <div class="mt-5">
                                <NuxtLink to="https://www.bilibili.com/video/BV1Yy4y1q7Rh"
                                target="_blank" rel="noopener noreferrer">
                                    <span class="learn-more mr-1">观看视频</span>
                                    <Icon name="ph:arrow-circle-up-right" class="arrow-icon text-[#1879bd] hover:text-blue-600"
                                    size="32" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>

    <!-- 隶属部门标语 -->
    <div class="BaseGrid container mx-auto lg:my-16 my-12">
        <div class="lg:col-start-2 lg:col-end-12 col-start-1 col-end-13 lg:px-0 px-4 relative">
            <div class="md:px-0 px-4 mx-auto text-center">
                <hr class="md:slogan-hr-pc slogan-hr-base  lg:mb-6 mb-3" />
                <p class="md:slogan-pc slogan-base">CNSA由中华人民共和国工业和信息化部管理</p>
                <hr class="md:slogan-hr-pc slogan-hr-base  lg:mt-6 mt-3" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const messages = ref([
    {
        url: 'https://github.com', // 测试1
        img: 'img/indexImg/foreword.jpg',
        alt: 'Test1',
        title: 'Test1',
        description: 'test1 description'
    },
    {
        url: 'https://microsoft.com', // 测试2
        img: 'img/indexImg/Chang\'e-5.jpg',
        alt: 'Test2',
        title: 'Test2',
        description: 'test2 description'
    },
    {
        url: 'https://microsoft.com', // 测试3
        img: 'img/indexImg/Chang\'e-5.jpg',
        alt: 'Test3',
        title: 'Test3',
        description: 'test3 description'
    },
    {
        url: 'https://microsoft.com', // 测试4
        img: 'img/indexImg/Chang\'e-5.jpg',
        alt: 'Test4',
        title: 'Test4',
        description: 'test4 description'
    },
    {
        url: 'https://microsoft.com', // 测试5
        img: 'img/indexImg/Chang\'e-5.jpg',
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
.swiper-button-prev,
.swiper-button-next {
    background-color: #1879bd;
    border: none;
    cursor: pointer;
    position: absolute;
    width: 60px;
    height: 60px;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
    background-color: #125f96;
}


/* 自定义按钮样式（箭头） */

.swiper-button-prev:after,
.swiper-button-next:after {
    color: #fff;
    font-size: 25px;
    font-family: swiper-icons;
    text-transform: none !important;
    letter-spacing: 0;
    font-variant: initial;
    line-height: 1;
}
/* TODO: hover箭头动画处理 */
.swiper-button-prev:after:hover,
.swiper-button-next:after:hover {

}
/* 如果某一侧没有内容则不显示按钮 */
.swiper-button-disabled {
    display: none;
}
/* TODO: 箭头动画 */
@keyframes swiper-button-arrow-move {

}


/* “国家航天局简介”CSS部分 */

.arrow-icon {
    transition: transform 0.3s ease-in-out, scale 0.3s ease-in-out;
}
.arrow-icon:hover {
    cursor: pointer;
    transform: scale(1.2);
}
.learn-more {
    color: #1879bd;
    font-weight: 600;
}
.learn-more:hover {
    color: #125f96;
}


/* “隶属部门标语”CSS部分在 tailwind.css 中 */
</style>