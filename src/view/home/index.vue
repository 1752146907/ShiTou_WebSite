<template>
    <div class="main"> 
        <div class="top">
            石頭網路 卡牌遊戲 自助查詢平台
            <div class="top-number">8591商家編號:No.1139934</div>
        </div>
        <div class="title">遊戲選單</div>
        <div class="content">
            <Row>
                <Col span="6" v-for="(item, index) in category" :key="item.id">
                    <router-link :to="'/search/index?id=' + item.id">
                        <div class="content-item">
                            <div class="item-img">
                                <img :src="imageHost + item.image"/>
                            </div>
                            <div class="content-item-title">{{item.title}}</div>
                        </div>
                    </router-link>
                </Col>
            </Row>
        </div>
    </div>
</template>

<style src="./index.css" scoped></style>

<script>

    import mixins from '../../common/mixin';
    import application from '../../common/application';

    export default {
        components: {

        },
        mixins: [mixins],
        data: () => ({
            imageHost: application.imageHost,
            category:[]
        }),
        created() {
            this.handleCategory()
        },
        methods: {  
            handleCategory: function () {
                this.request({
                    url: '/api/category',
                    method: 'POST',
                    data: {

                    },
                    success: (response) => { 
                         this.category = response;
                    },
                    error: (response) => {
                        
                    },
                    complete: (response) => {

                    }
                });
            },
            handleGoItem() {
                this.$router.push({
                    path:'/search/index'
                })
            }
        }
    }
</script>
