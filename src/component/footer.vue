<template>
    <div>
        <van-tabbar v-model="active" @change="handleTabbar">
            <van-tabbar-item icon="balance-o"
                             replace
                             to="/home/index/" >钱包</van-tabbar-item> 
            <van-tabbar-item icon="user-o"
                             replace
                             to="/my/index/"
                             info="" >我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<style>
    .van-tabbar-item--active{
        color: #b20004 !important;
    }
</style>

<script>

    export default {
        components: {

        },
        props: {
            active: {
                type: Number,
                required: true
            }
        },
        data: () => ({

        }),
        created () {

        },
        mounted() {
            
        },
        methods: {
            handleTabbar: function (e) { 
                // if(this.active == 0){
                //     this.$router.push({
                //         path: '/home/index/'
                //     });
                // } 
                // else {
                //     this.$router.push({
                //         path: '/my/index/'
                //     });
                // }
            }
        }
    }
</script>