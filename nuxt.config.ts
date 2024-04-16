/*
 * @Author: QuestionMark001
 * @Date: 2024-04-03 15:42:15
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-16 18:03:34
 * @FilePath: \CNSA-Nuxt\nuxt.config.ts
 * @Description: Nuxt配置文件
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        '@nuxt/image',
        'nuxt-icon',
        '@nuxtjs/color-mode',
        'nuxt-swiper',
        'dayjs-nuxt'
    ],
    // 配置图片资源路径
    image: {
        dir: 'assets/',
    },
    // 指定 tailwindCSS 配置文件地址
    tailwindcss: {
        configPath: '~/tailwind.config.ts'
    },
})
