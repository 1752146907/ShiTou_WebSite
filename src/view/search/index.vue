<template>
    <div class="main"> 
        <div class="top">卡牌手遊 自助查詢平台</div>
        <div class="search">
            <div class="search-box">
                <span v-for="(item, index) in 4" :key="item">
                    <storn v-if="index > 0">+</storn>
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
                <Col span="6" v-for="(item, index) in 20" :key="item">
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
        <div class="return">
            <div class="return-tab" id="miao">
                <span class="return-tab-item on">
                    <Icon type="ios-images-outline" />
                    圖片顯示
                </span>
                <span class="return-tab-item">
                    <Icon type="ios-grid-outline" />
                    名稱顯示
                </span>
            </div>
            <div class="return-content">
                <div class="return-content-box" v-for="(item, index) in 16" :key="item">
                    <div class="return-content-left">
                        NE252473-(S53)
                    </div>
                    <div class="return-content-right">
                        <div class="item" v-for="item in 16" :key="index">
                            <img src="http://amazeui.shopxo.net/static/images/100.jpg"/>
                            <p>SSR阿修羅獨角仙】</p>
                        </div>
                        <span v-for="(item, i) in 16" :key="index"  v-if="false">
                            <storn v-if="i > 0">|</storn>SSR阿修羅獨角仙
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

    export default {
        components: {

        },
        mixins: [mixins],
        data: () => ({

        }),
        created() {  
            
        },
        methods: {  
            handleWallet: function () {
                this.request({
                    url: '/api/user/wallet-info',
                    method: 'POST',
                    data: { 
                        code: this.$route.query.code ? this.$route.query.code : this.$storage.getWalletCode()
                    },
                    success: (response) => { 
                         this.wallet = response;
                         let total = 0;
                         this.wallet.total = response.map((data) => {
                            total += data.currency.rmb_price * data.balance
                         })
                         this.wallet.total = total
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
