<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-03 17:47:11
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-04 18:24:45
 * @FilePath: \CNSA-Nuxt\components\pageHeader.vue
 * @Description: 导航栏组件
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <div class="w-full h-20 fixed bg-white shadow-md z-50">
        <div class="text-left w-80">
            <NuxtImg src="/CNSA_logo.png" class="fixed w-20 top-0 left-20" />
            <div class="ml-48 mt-2 w-96 font-semibold text-2xl">China National Space Administration</div>
        </div>
        <div class="container" onclick="myFunction(this)"> <!-- TODO: 移动端按钮 --> <!-- TODO: 移动端按钮点击事件 -->

            <!-- 导航栏链接插槽，用于插入导航栏链接 -->
            <slot />

        </div>
        <ul class="header_item" id="menu_hide"> <!-- TODO: 移动端按钮隐藏 -->

        </ul>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>