<template>
    <div class="main">
        <Header title="石頭網路 卡牌遊戲 自助查詢平台"></Header>
        <div class="main-body">
            <h2>關于我們</h2>
            <img src="./image/logo.jpeg" class="logo" alt="">
            <div class="main-body-box">
                <div class="main-body-item">
                    <h3>手遊端遊技術開發</h3>
                    <p>石頭遊戲團隊與業界多位大型遊戲作者合作，可訂製任何遊戲腳本，讓人工智能發輝最大極限</p>
                </div>
                <div class="main-body-item">
                    <h3>海內外銷售</h3>
                    <p>提供海內外各大國家銷售 韓國、日本、美國、台灣、香港</p>
                    <p>可代售任何遊戲相關物品</p>
                    <p>可代儲台灣、大陸遊戲 (皆為正規)</p>
                </div>
                <div class="main-body-item">
                    <h3>服務時間及聯絡方式</h3>
                    <p>聯絡方式:LINE:stones1126 (石頭遊戲客服)</p>
                    <p>服務時間:早上8點-晚上12點(人在隨時回復)</p>
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
