<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-03 16:55:40
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-20 20:14:35
 * @FilePath: \CNSA-Nuxt\components\PageFooter.vue
 * @Description: 页尾组件
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <footer class="bg-[#1879bd] text-white py-10">
        <div class="container mx-auto px-6">
            <div class="md:flex md:flex-wrap md:-mx-6">
                <!-- 关于我们 -->
                <div class="md:w-1/4 md:px-6 mb-10">
                    <h3 class="text-xl font-semibold mb-4">
                        <NuxtLink to="/about" class="hover:underline">关于我们</NuxtLink>
                    </h3>
                    <ul>
                        <li class="mb-2">
                            <NuxtLink to="" class="hover:underline">关于机构</NuxtLink>
                        </li>
                        <li class="mb-2">
                            <NuxtLink to="" class="hover:underline">我们的使命</NuxtLink>
                        </li>
                        <li class="mb-2">
                            <NuxtLink to="" class="hover:underline">航天事业</NuxtLink>
                        </li>
                        <li class="mb-2">
                            <NuxtLink to="/" class="hover:underline">返回首页</NuxtLink>
                        </li>
                    </ul>
                </div>
                <!-- 文章公告 -->
                <div class="md:w-1/4 md:px-6 mb-10">
                    <h3 class="text-xl font-semibold mb-4">
                        <NuxtLink to="/articles" class="hover:underline">文章公告</NuxtLink>
                    </h3>
                    <ul>
                        <li class="mb-2">
                            <NuxtLink to="" class="hover:underline">要闻</NuxtLink>
                        </li>
                        <li class="mb-2">
                            <NuxtLink to="" class="hover:underline">公告</NuxtLink>
                        </li>
                        <li class="mb-2">
                            <NuxtLink to="" class="hover:underline">航天动态</NuxtLink>
                        </li>
                        <li class="mb-2">
                            <NuxtLink to="" class="hover:underline">精彩图集</NuxtLink>
                        </li>
                    </ul>
                </div>
                <!-- 视频展示 -->
                <div class="md:w-1/4 md:px-6 mb-10">
                    <h3 class="text-xl font-semibold mb-4">
                        <NuxtLink to="/videos" class="hover:underline">视频展示</NuxtLink>
                    </h3>
                    <ul>
                        <li class="mb-2">
                            <NuxtLink to="" class="hover:underline">科普视频</NuxtLink>
                        </li>
                        <li class="mb-2">
                            <NuxtLink to="" class="hover:underline">新闻播报</NuxtLink>
                        </li>
                        <li class="mb-2">
                            <NuxtLink to="" class="hover:underline">宣传视频</NuxtLink>
                        </li>
                        <li class="mb-2">
                            <NuxtLink to="" class="hover:underline">做最优质的航天事业</NuxtLink>
                        </li>
                    </ul>
                </div>
                <!-- 友情链接 -->
                <div class="md:w-1/4 md:px-6 mb-10">
                    <h3 class="text-xl font-semibold mb-4">
                        <NuxtLink to="" class="hover:underline">友情链接</NuxtLink>
                    </h3>
                    <ul>
                        <li class="mb-2">
                            <NuxtLink to="" class="hover:underline">
                                <Icon name="logos:twitter" size="25" /> X
                            </NuxtLink>
                        </li>
                        <li class="mb-2">
                            <NuxtLink to="" class="hover:underline">
                                <Icon name="logos:youtube-icon" size="25" /> Youtube
                            </NuxtLink>
                        </li>
                        <li class="mb-2">
                            <NuxtLink to="" class="hover:underline">
                                <Icon name="tabler:brand-bilibili" size="25" class="text-[#ff6699]" /> BiliBili
                            </NuxtLink>
                        </li>
                        <li class="mb-2">
                            <NuxtLink to="" class="hover:underline">
                                <Icon name="tabler:brand-weibo" size="25" class="text-[#fa2f2f]" /> Weibo
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 版权说明 -->
        <div class="flex ml-5 my-5">
            <NuxtLink to="https://github.com/QuestionMark001/CNSA-Nuxt"
            target="_blank" rel="noopener noreferrer" class="hover:underline">
                <small>*注：本项目仅为个人开源作品，并非 NASA JPL 或 CNSA 官网。</small>
                <Icon name="logos:github-octocat" size="32" />
            </NuxtLink>
        </div>
        <!-- 本项目框架说明 -->
        <div class="flex justify-center items-center">
            <NuxtLink to="https://nuxt.com/"
            target="_blank" rel="noopener noreferrer" class="hover:underline">
                <small>本项目由 </small>
                <Icon name="logos:nuxt" size="64" />
                <small> 强力驱动。</small>
            </NuxtLink>
        </div>
    </footer>
</template>

<script setup lang="ts">
</script>

<style>
</style>
