<template>
    <div class="main">
        <Header title="石頭網路 卡牌遊戲 自助查詢平台"></Header>
        <div class="main-body">
            <h2>关于我们</h2>
            <img src="./image/logo.jpeg" class="logo" alt="">
            <div class="main-body-box">
                <div class="main-body-item">
                    <h3>介绍1</h3>
                    <p>石頭網路石頭網路石頭網路石頭網路石頭網路石頭網路石頭網路石頭網路石頭網路石頭網路石頭網路石頭網路石頭網路</p>
                </div>
                <div class="main-body-item">
                    <h3>介绍2</h3>
                    <p>卡牌遊戲卡牌遊戲卡牌遊戲卡牌遊戲卡牌遊戲卡牌遊戲卡牌遊戲卡牌遊戲卡牌遊戲卡牌遊戲卡牌遊戲卡牌遊戲</p>
                </div>
                <div class="main-body-item">
                    <h3>介绍3</h3>
                    <p>自助查詢平台自助查詢平台自助查詢平台自助查詢平台自助查詢平台自助查詢平台自助查詢平台自助查詢平台自助查詢平台</p>
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
