<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-03 16:06:04
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-16 17:48:45
 * @FilePath: \CNSA-Nuxt\pages\index.vue
 * @Description: 首页
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <div class="swiper-container">
        <Swiper
        :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
        :autoplay="{
            delay: 3000,
            pauseOnMouseEnter: true
        }"
        :slides-per-view="1"
        :navigation="{
            enabled: true,
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        }"
        :pagination="{
            clickable: true
        }">
            <SwiperSlide v-for="(image, index) in images" :key="index">
                <NuxtImg
                :src="image.src"
                :alt="image.alt"
                :title="image.title"
                layout="responsive"
                class="swiper-img" />
            </SwiperSlide>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </Swiper>

        <IndexTime />
    </div>
</template>

<script setup>
const images = ref([
    { src: 'img/foreword.jpg', alt: '前言', title: '前言' },
    { src: 'img/Chang\'e-5.jpg', alt: '嫦娥五号', title: '嫦娥五号' }
]);
</script>

<style scoped>
.swiper-container {
    width: 100%;
}

.swiper-img {
    width: 100%;
    height: auto;
}

.swiper-button-prev {
    color: rgb(218, 236, 255);
}

.swiper-button-next {
    color: rgb(218, 236, 255);
}

.autoplay-progress {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: var(--swiper-theme-color);
}

.autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: var(--swiper-theme-color);
    fill: none;
    stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
}
</style>