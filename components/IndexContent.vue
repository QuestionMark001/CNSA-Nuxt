<template>
    <div class="lg:ml-20 ml-5 my-20">
        <div class="lg:text-3xl text-2xl font-semibold leading-normal tracking-wider uppercase mb-5">
            最新消息
        </div>
        <div class="swiper-container">
            <Swiper
            :modules="[SwiperNavigation, SwiperPagination]"
            :slides-per-view="1"
            :navigation="{
                enabled: true,
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            }">
                <SwiperSlide v-for="(message, index) in messages" :key="index">
                    <NuxtLink
                    :to="message.url"
                    :alt="message.alt"
                    :title="message.title"
                    layout="responsive"
                    class="swiper-link">
                        <NuxtImg :src="message.img" class="swiper-img" />
                        <div>{{ message.title }}</div>
                        <div>{{ message.description }}</div>
                    </NuxtLink>
                </SwiperSlide>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </Swiper>
        </div>
    </div>
</template>

<script lang="ts" setup>
const messages = ref([
    {
        url: 'https://github.com', // 测试
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
    }
]);
</script>

<style scoped>
.swiper-img {
    width: 512px;
    height: 288px;
}
</style>