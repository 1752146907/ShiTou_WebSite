<template>
    <div class="main"> 
        首页
    </div>
</template>

<style src="./index.css" scoped></style>

<script>

    import mixins from '../../common/mixin'; 
    import Footer from '../../component/footer';

    export default {
        components: {
            'Footer': Footer
        },
        mixins: [mixins],
        data: () => ({ 
            aaa: '1111',
            wallet_account: '',
            wallet: {}
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
