<template>
    <section id="sideBar" class="nav-list" :class="{'show':showMenu}">
        <user-info></user-info>
        <ul class="list-ul">
            <li v-for="list in lists" @click="toggle(list)">
                <div class="list-item">
                    {{list.title}}
                    <span class="folder" v-if="isFolder(list)">[{{list.open?'-':'+'}}]</span>
                </div>
                <ul v-if="list.subList" v-show="list.open">
                    <li v-for="subList in list.subList" v-link="{'name':subList.linkName,query:{tab:subList.linkTab}}">
                        <div class="list-item">{{subList.title}}</div>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    data() {
            return {
                lists: [{
                    title: '内容运营',
                    open: false,
                    subList: [{
                        linkName: '',
                        linkTab: '',
                        title: '发哎吖'
                    }, {
                        linkName: '',
                        linkTab: '',
                        title: '自动发哎吖'
                    }, {
                        linkName: '',
                        linkTab: '',
                        title: '一键点赞'
                    }]
                }, {
                    title: '功能中心',
                    open: false,
                    subList: [{
                        linkName: '',
                        linkTab: '',
                        title: '新建虚拟用户'
                    }, {
                        linkName: '',
                        linkTab: '',
                        title: '自动回复'
                    }, {
                        linkName: '',
                        linkTab: '',
                        title: '新建账号'
                    }]
                }]
            }
        },
        methods: {
            toggle: function(item) {
                item.open = !item.open;
            },
            isFolder: function(item) {
                return item.subList &&
                    item.subList.length
            }
        },
        replace: true,
        props: ['showMenu',
            'pageType',
            'nickName',
            'profileUrl',
            'list'
        ],
        components: {
            'userInfo': require('./user-info.vue')
        }
}
</script>
<style lang="sass">
/*侧边栏*/

.nav-list {
    position: fixed;
    top: 0;
    bottom: 0;
    left: -200px;
    width: 200px;
    background-color: #fff;
    color: #313131;
    transition: all .3s ease;
    z-index: 99;
    &.show {
        transform: translateX(200px);
    }
}


/*侧边栏列表*/

.list-ul {
    margin: 0 24px;
    border-top: 1px solid #d4d4d4;
    overflow: hidden;
    padding-top: 9%;
    a {
        display: block;
        color: #313131;
    }
    &>li>ul>li>.list-item{
        position: relative;
        text-indent: 30px;
        &:before{
            position: absolute;
            content:'--';
            left: -14px;
        }
    }
}

.list-item {
    font-size: 14px;
    font-weight: 200;
    padding: 12px 0;
    text-align: left;
    text-indent: 1px;
    line-height: 1;
    color: #7f8c8d;
    cursor: default;
}

.folder{
    float: right;
    font-weight: bold;
}
</style>
