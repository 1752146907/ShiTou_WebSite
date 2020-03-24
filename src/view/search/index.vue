<template>
    <div class="main">
        <Header title="石頭網路 卡牌遊戲 自助查詢平台"></Header>
        <div class="search">
            <div class="search-box">
                <span v-for="(item, index) in 4" :key="index + 's'">
                    <span v-if="index > 0">+</span>
                    【SSR疫苗人】
                </span>
            </div>
            <div class="search-footer">
                <a href="#miao">
                    <span class="search-footer-item">搜 尋</span>
                </a>

                <span class="search-footer-item">重 選</span>
            </div>
        </div>
        <div class="content">
            <Row>
                <Col span="6" v-for="(item, index) in 20" :key="item + 'l'">
                    <div class="content-item">
                        <div class="item-img">
                            <img src="http://amazeui.shopxo.net/static/images/100.jpg"/>
                        </div>
                        <div class="content-item-title">【台港澳服】一拳超人：最強之男(限安卓)</div>
                        <div class="mask" v-if="index == 3"></div>
                        <Icon class="icon" v-if="index == 3" size="56" type="md-checkmark-circle-outline" />
                    </div>
                </Col>
            </Row>
        </div>
        <div class="return" id="miao">
            <div class="return-tab">
                <span class="return-tab-item" :class="isItemTab ? 'on' : ''" @click="isItemTab = true">
                    <Icon type="ios-images-outline" />
                    圖片顯示
                </span>
                <span class="return-tab-item" :class="isItemTab ? '' : 'on'" @click="isItemTab = false">
                    <Icon type="ios-grid-outline" />
                    名稱顯示
                </span>
            </div>
            <div class="return-content">
                <div class="return-content-box" v-for="(item, index) in 16" :key="index + 'e'">
                    <!--<div class="return-content-left">-->
                        <!--NE252473-(S53)-->
                    <!--</div>-->
                    <div class="return-content-right">
                        <div class="return-content-right-title">NE252473-(S53)</div>
                        <div class="item" v-for="(item, index) in 16" :key="index + 'z'" v-if="isItemTab">
                            <img src="http://amazeui.shopxo.net/static/images/100.jpg"/>
                            <p>SSR阿修羅獨角仙】</p>
                        </div>
                        <span v-for="(item, index) in 16" :key="index + 'q'"  v-if="!isItemTab">
                            <storn v-if="index > 0">|</storn>S阿修羅獨角仙aaaa
                        </span>
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

    export default {
        components: {
            Header
        },
        mixins: [mixins],
        data: () => ({
            isItemTab: true
        }),
        created() {  
            
        },
        methods: {  
            handleWallet: function () {
                this.request({
                    url: '/api/user/wallet-info',
                    method: 'POST',
                    data: {

                    },
                    success: (response) => {

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
