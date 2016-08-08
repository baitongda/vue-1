<template>
    <nv-head page-type="登录">
    </nv-head>
    <section class="page-body">
        <div class="label">
            <input class="txt" type="text" placeholder="账号：" v-model="uname" maxlength="32" minlength="4">
        </div>
        <div class="label">
            <input class="txt" type="text" placeholder="密码：" v-model="pw" maxlength="32" minlength="4">
        </div>
        <div class="label">
            <a class="button" @click="cancle">取消</a>
            <a class="button" @click="logon">登录</a>
        </div>
    </section>
    <nv-alert :content="alert.txt" :show="alert.show"></nv-alert>
    <nv-loading :show="loading.show" :show-txt="loading.showTxt"></nv-loading>
</template>

<script>
    import url from '../url.js'

    let browser = {
        versions: function() {
            let u = navigator.userAgent,
                app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
            };
        }(),
    }
    export default {
        data () {
            let self = this;
            return {
                uname:'',//账号
                pw:'',//密码
                /*弱提示*/
                alert: {
                    txt: '',
                    show: false,
                    hideFn:function(){
                        let timer;
                        clearTimeout(timer);
                        timer = setTimeout(function () {
                            self.alert.show = false;
                        }, 1000);
                    }
                },
                loading:{
                    show:false,
                    showTxt:'登陆中'
                }
            }
        },
        methods: {
            logon (){
                let self = this;

                function errFn(errText) {
                    self.alert.txt = errText;
                    self.alert.show = true;
                    self.alert.hideFn();
                    return false;
                }
                if (self.uname == '') {
                    let text = '请输入账号';
                    return errFn(text);
                }else if (self.pw == '') {
                    let text = '请输入密码';
                    return errFn(text);
                }
                $.ajax({
                    type:'POST',
                    url: url.url.signin,
                    data:{
                        uname: self.uname,
                        upasswd: self.pw
                    },
                    dataType: 'json',
                    success:function(res){
                        // if (res.ok) {
                            // 保存sessionid和用户名
                            localStorage.sessionid = res.sessionid;
                            localStorage.uname = res.uname;
                            // 跳到列表页
                            let redirect = decodeURIComponent(self.$route.query.redirect || '/');
                            self.$route.router.go(redirect);
                        // }
                    },
                    error:function(res){
                        var error = JSON.parse(res.responseText);
                        self.alert.txt = error.error_msg;
                        self.alert.show = true;
                        self.alert.hideFn();
                        return false;
                    }
                })
            },
            cancle(){}
        },
        components:{
            "nvHead":require('../components/header.vue'),
            "nvAlert":require('../components/nvAlert.vue'),
            "nvLoading":require('../components/loading.vue')
        }
    }
</script>
<style lang="sass">

.page-body {
    padding: 50px 15px;

    .label{
        display: inline-block;
        width: 100%;
        margin-top: 15px;
        position: relative;
        left: 0;
        top: 0;

        .txt{
            padding: 12px 0;
            border:none;
            border-bottom: 1px solid #4fc08d;
            background-color: transparent;
            width: 100%;
            font-size: 14px;
            color: #313131;
        }
        .button {
            display: inline-block;
            width: 48%;
            height: 42px;
            line-height: 42px;
            border-radius: 3px;
            color: #fff;
            font-size: 16px;
            background-color: #4fc08d;
            border: none;
            border-bottom: 2px solid #3aa373;
            text-align: center;
            vertical-align: middle;
        }
        .button:first-child{
            margin-right: 2%;
        }
        .file{
            position: absolute;
            top: 0;
            left: 0;
            height: 42px;
            width: 48%;
            outline: medium none;
            filter:alpha(opacity=0);
            -moz-opacity:0;
            opacity:0;
        }
    }
}
</style>