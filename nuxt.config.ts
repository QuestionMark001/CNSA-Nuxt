/*
 * @Author: QuestionMark001
 * @Date: 2024-04-03 15:42:15
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-03 20:19:54
 * @FilePath: \CNSA-Nuxt\nuxt.config.ts
 * @Description: Nuxt配置文件
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "@pinia/nuxt",
        "@nuxtjs/i18n",
        "@nuxt/image",
        "@nuxt/content",
        "nuxt-icon",
        "@nuxtjs/color-mode"
    ]
})
