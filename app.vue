<!--
 * @Author: QuestionMark001
 * @Date: 2024-04-03 15:42:15
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-12 20:59:21
 * @FilePath: \CNSA-Nuxt\app.vue
 * @Description: 主组件
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
-->

<template>
    <div class="flex flex-col">
        <!-- 使用导航栏组件 -->
        <PageHeader>
            <!-- 将 导航栏链接组件 插入到 导航栏组件预留的插槽 中  -->
            <HeaderLink />
        </PageHeader>

        <div class="lg:my-0 mx-0 my-20">
            <!-- Nuxt页面路由 -->
            <NuxtPage />
        </div>

        <!-- 使用页尾组件 -->
        <PageFooter>
        </PageFooter>
    </div>
</template>
