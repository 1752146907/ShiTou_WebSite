<template>
    <div class="main">
        <Header title="卡牌手遊 自助查詢平台"></Header>
        <div class="main-body">
            <h2>聯絡方式</h2>
            <div style="margin-bottom: 20px">
                <Icon type="ios-call-outline" color="#32b4e6" size="70" />
            </div>
            <p>LINE客服：stones1126</p>
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
