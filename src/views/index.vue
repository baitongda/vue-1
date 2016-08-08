<template>
    <!-- 全局header -->
    <div class="index-wrap">
        <!-- logo图片 -->
        <img class="index" src="../assets/images/index.png">
    </div>
</template>
<script>
    require('../assets/scss/iconfont/iconfont.css');
    require('../assets/scss/CV.scss');
    require('../assets/scss/github-markdown.css');


    export default {
        // ready：生命周期钩子，
        ready (){
            var url = {};
            if (localStorage.sessionid) {
                // 如果有sessionid,则直接跳到主页
                url.name = 'list';
            }else{
                url.name = 'login';
            }
            setTimeout(() => {
                // 钩子的 this 指向调用它的 Vue 实例
                // $route属性查阅Vue-router第4条“路由规则和路由匹配”
                // $route.router:路由规则所属的路由器(及其所属的组件)
                this.$route.router.go(url);
            },2000);
        }
    }
</script>
<style lang="sass">
    .index-wrap{
        position: absolute;
        top: 20%;
        left: 0;
        right: 0;
        text-align: center;
     }
    .index{
        width: auto;
        background-color: #fff;
    }
</style>

