<template>
    <div class="bar-header">
        <div class="bar-box">
            <van-icon class="bar-back" name="arrow-left" v-if="isHiddenArrowLeft" @click="handleBack" size="20" /> 
            {{title}}
            <span @click="handleRightText">{{rightText}}</span>
        </div>
    </div>
</template>

<style scoped>
    .bar-header{
        height: 44px;
        position: sticky;
        left: 0px;
        top: 0px;
        right: 0px;
        line-height: 44px;
        text-align: center;
        font-size: 20px;
        z-index: 99;
        background: #F3F3F3;
        border-bottom: 1px solid #E6E6E6;
    }
    .bar-header .bar-box{
        height: 44px;
        line-height: 44px;
        font-size:17px;
        font-weight:400;
        color: #1A1A1A;
    }
    .bar-header .bar-back{
        position: absolute;
        top: 12px;
        left: 16px;
    }
    .bar-header .bar-box span{
        position: absolute;
        top: 0px;
        right: 16px;
        font-size: 15px;
    }
</style>

<script>

    export default {
        components: {

        },
        props: {
            title: {
                required: false
            },
            rightText: {
                required: false
            },
            isHiddenArrowLeft: {
                required: false
            }
        },
        data: () => ({

        }),
        created () {

        },
        methods: {
            handleBack: function () {
                //返回上一层
                // if (window.history.length <= 1) {
                //     this.$router.push({path:'/'})
                //     return false
                // } else {
                //     if(sessionStorage.getItem('url_from') && sessionStorage.getItem('url_from') != null){
                //         this.$router.go(-1)
                //     } else{
                //         this.$router.push({path:'/'})
                //     }
                // }
                this.$router.go(-1)
            },
            handleRightText: function () {
                this.$emit('handleRightText');
            }
        }
    }
</script>
