'use strict'

import Vue from 'vue';
import VueRouter from 'vue-router';
import filters from './filters';
import routerMap from './routers';
import FastClick from 'fastclick';

Vue.use(VueRouter);

$.ajaxSettings.crossDomain = true;

//实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

//实例化VueRouter
let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

//登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((transition) => {
    //处理左侧滚动不影响右边
    $("html, body, #page").removeClass("scroll-hide");
    FastClick.attach(document.body);

    if (transition.to.auth) {
        if (localStorage.userId) {
            transition.next();
        } else {
            var redirect = encodeURIComponent(transition.to.path);
            transition.redirect('/login?redirect=' + redirect);
        }
    } else {
        transition.next();
    }
});

// 路由器需要一个根组件
let app = Vue.extend({});
routerMap(router);

// 启动应用
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(app, "#app");
