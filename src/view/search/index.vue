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
                <a href="#miao">
                    <span class="search-footer-item" @click="handleGroup">搜 尋</span>
                </a>

                <span class="search-footer-item" @click="handleBack0">重 選</span>
            </div>
        </div>
        <div class="content">
            <div v-for="(item, index) in card.data" :key="item.id + 'l'" class="content-item" @click="handleAdd(item, index)">
                <div class="item-img">
                    <img :src="imageHost + item.image"/>
                </div>
                <div class="content-item-title">{{item.title}}</div>
                <div class="mask" v-if="item.active"></div>
                <Icon class="icon" v-if="item.active" size="56" type="md-checkmark-circle-outline" />
            </div>
        </div>
        <div class="return" id="miao">
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
    </div>
</template>

<style src="./index.css" scoped></style>

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
            size: 80,
            group: []
        }),
        created() {  
            this.handleLoad()
        },
        methods: {
            handleBack0() {
                this.isItemTab = true;
                this.key = [];
                this.group = [];
                this.handleLoad()
            },
            handleAdd: function (id, index) {
                if(this.card.data[index].active) {
                    this.card.data[index].active = false;
                    this.key.map((data, i) => {
                        if(data.id == id.id) {
                            this.key.splice(i, 1)
                        }
                    })
                } else{
                    this.card.data[index].active = true;
                    this.key.push(id)
                }
                console.log( this.key)
            },
            handleLoad: function () {
                this.request({
                    url: '/api/card',
                    method: 'GET',
                    data: {
                        id: this.$route.query.id,
                        size: this.size
                    },
                    success: (response) => {
                        this.card = response,
                        this.card.data.map((data) => {
                            data.active = false
                        })
                        this.total = response.total
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
                        this.group = response
                    },
                    error: (response) => {

                    },
                    complete: (response) => {

                    }
                });
            },
        }
    }
</script>
