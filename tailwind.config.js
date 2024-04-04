/*
 * @Author: QuestionMark001
 * @Date: 2024-04-04 17:08:23
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-04 17:09:31
 * @FilePath: \CNSA-Nuxt\tailwind.config.js
 * @Description: tailwindCSS 配置
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './composables/**/*.{js,ts}',
        './plugins/**/*.{js,ts}',
        './app.{js,ts,vue}'
    ],
    theme: {
        extend: {}
    },
    plugins: []
}
