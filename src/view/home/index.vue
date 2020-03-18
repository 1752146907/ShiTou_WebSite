<template>
    <div class="main"> 
        <div class="top">卡牌手遊 自助查詢平台</div>
        <div class="title">遊戲選單</div>
        <div class="content">
            <Row>
                <Col span="6" v-for="(item, index) in 20" :key="item">
                    <router-link to='/search/index'>
                        <div class="content-item">
                            <div class="item-img">
                                <img src="http://amazeui.shopxo.net/static/images/100.jpg"/>
                            </div>
                            <div class="content-item-title">【台港澳服】一拳超人：最強之男(限安卓)</div>
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
            handleGoItem() {
                this.$router.push({
                    path:'/search/index'
                })
            }
        }
    }
</script>
