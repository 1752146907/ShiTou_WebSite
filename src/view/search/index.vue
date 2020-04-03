<template>
    <div class="main">
        <Header title="石頭網路 卡牌遊戲 自助查詢平台"></Header>
        <div class="search">
            <div class="search-box">
                <span v-for="(item, index) in key" :key="index + 's'">
                    <span v-if="index > 0">+</span>
                    {{item.title}}
                </span>
            </div>
            <div class="search-footer">
                <span class="search-footer-item" @click="handleGroup">搜 尋</span>
                <span class="search-footer-item" @click="handleBack0">重 選</span>
            </div>
        </div>
        <div id="content" class="content">
            <div v-for="(item, index) in historyList" :key="item.id + 'l'" class="content-item" @click="handleAdd(item, index)">
                <div class="item-img">
                    <img :src="imageHost + item.image"/>
                </div>
                <div class="content-item-title">{{item.title}}</div>
                <div class="mask" v-if="item.active"></div>
                <Icon class="icon" v-if="item.active" size="56" type="md-checkmark-circle-outline" />
            </div>
        </div>

        <div class="search page">
            <Page :total="total" :page-size="40" class-name="page-class" @on-change="handleChangePage" />
        </div>

        <div class="return">
            <div class="return-tab" v-if="group.length > 0">
                <span class="return-tab-item" :class="isItemTab ? 'on' : ''" @click="isItemTab = true">
                    <Icon type="ios-images-outline" />
                    圖片顯示2
                </span>
                <span class="return-tab-item" :class="isItemTab ? '' : 'on'" @click="isItemTab = false">
                    <Icon type="ios-grid-outline" />
                    名稱顯示
                </span>
            </div>
            <div class="return-content">
                <div class="return-content-box" v-for="(item, index) in group" :key="index + 'e'">
                    <!--<div class="return-content-left">-->
                        <!--NE252473-(S53)-->
                    <!--</div>-->
                    <div class="return-content-right">
                        <div class="return-content-right-title">{{item.title}}</div>
                        <div class="return-content-right-box">
                            <div class="item" v-for="(cards, index) in item.cards" :key="index + 'z'" v-if="isItemTab">
                                <img :src="imageHost + cards.image"/>
                                <p>{{cards.title}}</p>
                            </div>
                            <span v-for="(cards, index) in item.cards" :key="index + 'q'"  v-if="!isItemTab">
                            <storn v-if="index > 0">|</storn>{{cards.title}}
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="scroll-top" @click="handleScrollTop">
            <img src="../../image/push.png" alt="">
        </div>
    </div>
</template>

<style src="./index.css" scoped></style>
<style>
    .page-class a:hover{
        color: #000000;
    }
    .page-class .ivu-page-item-active{
        border-color: #000000;
    }
    .page-class .ivu-page-item-active a{
        color: #000000;
    }
    .page-class .ivu-page-item:hover{
        border-color: #000000;
    }
    .page-class .ivu-page-item:hover a{
        color: #000000;
    }
    .page-class .ivu-page-item a:hover{
        color: #000000;
    }
    .page-class .ivu-page-next:hover, .ivu-page-prev:hover{
        border-color: #000000;
    }
    .page-class .ivu-page-next:hover a, .ivu-page-prev:hover a{
        color: #000000;
    }
    .page-class .ivu-page-next a:hover, .ivu-page-prev a:hover{
        color: #000000;
    }
</style>

<script>

    import mixins from '../../common/mixin';
    import Header from '../../component/header';
    import application from '../../common/application';

    export default {
        components: {
            Header
        },
        mixins: [mixins],
        data: () => ({
            key: [],
            isItemTab: true,
            imageHost: application.imageHost,
            card: {},
            total: 0,
            page: 1,
            group: [],
            historyList: []
        }),
        created() {
            this.handleLoad()
        },
        methods: {
            handleChangePage(index) {
                this.page = index;
                this.handleLoad()
            },
            handleBack0() {
                this.isItemTab = true;
                this.key = [];
                this.group = [];
                this.handleLoad()
            },
            handleAdd: function (id, index) {
                if(this.historyList[index].active) {
                    this.historyList[index].active = false;
                    this.key.map((data, i) => {
                        if(data.id == id.id) {
                            this.key.splice(i, 1)
                        }
                    })
                } else{
                    this.historyList[index].active = true;
                    this.key.push(id)
                }
            },
            handleLoad: function () {
                this.request({
                    url: '/api/card',
                    method: 'GET',
                    data: {
                        id: this.$route.query.id,
                        page: this.page
                    },
                    success: (response) => {
                        // response.data.map((data) => {
                        //     this.historyList.push(data)
                        // })
                        this.historyList = response.data;
                        this.historyList.map((data) => {
                            data.active = false
                        });
                        this.total = response.total;
                    },
                    error: (response) => {
                        
                    },
                    complete: (response) => {

                    }
                });
            },
            handleGroup: function () {
                let keyId = [];
                this.key.map((data) => {
                    keyId.push(data.id)
                })
                if(keyId.length == 0) {
                    this.$Message.error({
                        content: "搜尋不能爲空",
                        duration: 3
                    });

                    return
                }

                this.request({
                    url: '/api/group',
                    method: 'POST',
                    data: {
                        id: keyId
                    },
                    success: (response) => {
                        this.group = response;

                        if(this.group.length <= 0) {
                            this.$Message.error({
                                content: "暫無數據",
                                duration: 3
                            });
                        } else{
                            setTimeout(() => {
                                let scroll_height = document.getElementById("content").offsetHeight + 268 + 150;
                                document.documentElement.scrollTop = scroll_height;
                                document.body.scrollTop = scroll_height;
                                console.log(document.getElementById("content").offsetHeight);
                            }, 100)
                        }
                    },
                    error: (response) => {

                    },
                    complete: (response) => {

                    }
                });
            },
            handleScrollTop() {
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }
        }
    }
</script>
