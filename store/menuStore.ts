/*
 * @Author: QuestionMark001
 * @Date: 2024-04-08 16:11:09
 * @LastEditors: QuestionMark001
 * @LastEditTime: 2024-04-08 16:46:35
 * @FilePath: \CNSA-Nuxt\store\menuStore.ts
 * @Description: 使用 Pinia 来存储移动端菜单按钮（关闭/打开）状态
 * 
 * Copyright (c) 2024 by QuestionMark001, All Rights Reserved. 
 */

export const useMenuStore = defineStore({
    id: 'menu',
    state: () => ({
        menuOpen: false, // 默认为关闭状态
    }),
    actions: {
        /**
         * 移动端按钮切换（打开/关闭）
         */
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },

        /**
         * 移动端关闭菜单（用于点击菜单栏下选项后自动折叠菜单）
         */
        closeMenu() {
            this.menuOpen = false;
        }
    }
})
