<template>
    <div>
        <div class="top">
            <span class="top-back">
                <Icon @click="isShow = !isShow" type="md-menu" />
            </span>
            {{title}}
            <div class="top-number">8591商家編號:No.1139934</div>
        </div>
        <div class="menu" v-if="isShow">
            <div class="menu-header">
                <Icon class="menu-header-icon" @click="isShow = !isShow" type="md-close" />
                遊戲選單
            </div>
            <div class="menu-body">
                <p @click="handleIndex">返回首页</p>
                <p v-for="item in 10" :key="item">【台港澳服】一拳超人</p>
                <p @click="handleAbout">關于我們</p>
            </div>
        </div>
        <div v-if="isShow" @click="isShow = !isShow" class="masl"></div>
    </div>
</template>

<style scoped>
    .top{
        background-color: #000000;
        height: 70px;
        z-index: 3;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
        position: fixed;
        left: 0px;
        right: 0px;
        top: 0px;
        font-size: 30px;
        line-height: 70px;
        font-weight: bold;
        color: #FFF;
        text-align: center;
    }
    .top-number{
        height: 70px;
        max-width: 1140px;
        padding: 0px 20px;
        margin: -70px auto auto auto;
        text-align: right;
        font-size: 12px;
    }
    .top-back{
        float: left;
        margin-left: 10px;
    }
    .masl{
        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background: #000000;
        opacity: 0.6;
        z-index: 998;
    }
    .menu{
        width: 300px;
        position: fixed;
        left: 0px;
        top: 0px;
        background: #ffffff;
        font-size: 19px;
        z-index: 999;
        height: 100vh;
        overflow-y: scroll;
    }
    .menu-header{
        background-color: #000000;
        height: 70px;
        line-height: 70px;
        text-align: center;
        color: #ffffff;
        font-weight: bold;
        position: relative;
    }
    .menu-header-icon{
        position: absolute;
        font-size: 30px;
        top: 20px;
        left: 10px;
    }
    .menu-body{

    }
    .menu-body p{
        color: #1e1e1e;
        cursor: pointer;
        padding: 20px 10px;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #e6e6e6;
        box-shadow: 0px 1px 1px #FFF;
    }
</style>

<script>

    export default {
        components: {

        },
        props: {
            title: {
                required: true
            }
        },
        data: () => ({
            isShow: false
        }),
        created () {

        },
        methods: {
            handleIndex: function () {
                this.$router.push({path:'/home/index'})
            },
            handleAbout: function () {
                if(this.$route.path == '/about') {
                    this.isShow = false
                    return
                }
                this.$router.push({path:'/about'})
            },
            handleRightText: function () {
                this.$emit('handleRightText');
            }
        }
    }
</script>
