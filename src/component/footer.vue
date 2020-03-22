<template>
    <div>

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