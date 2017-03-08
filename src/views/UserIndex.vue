<template>
    <div id="user-index">
        <div class="user-top">
            <i><img class="user-top-headimg" :src="this.$store.state.userInfo.headimgurl" /></i>
            <div class="user-top-username">{{this.$store.state.userInfo.nickname}}</div>
        </div>
        <div class="user-insurance-list-box">
            <div class="user-insurance-list-title"><i class="iconfont icon-icon2-copy"></i>我的保险订单</div>
            <div class="user-insurance-list-category">
                <!--<a href="###" class="active">-->
                    <!--<div>待付款</div>-->
                <!--</a>-->
                <!--<div class="line"></div>-->
                <!--<a href="###">-->
                    <!--<div>保障中</div>-->
                <!--</a>-->
                <!--<div class="line"></div>-->
                <!--<a href="###">-->
                    <!--<div>已失效</div>-->
                <!--</a>-->
                <router-link v-for="(category, num) in userInsuranceListCategory" :to="{path: category.linkto}" v-bind:class="{ active: category.isActive }">
                    <div @click="listCategoryClick">{{category.title}}</div>
                </router-link>
            </div>
            <div class="user-insurance-list">
                <div class="user-insurance-list-nothing">暂无保单</div>
                <!--<a class="user-insurance-line" href="###">-->
                    <!--<div class="user-insurance-image">-->
                        <!--<img src="../assets/images/product-thumb.jpg">-->
                    <!--</div>-->
                    <!--<div class="user-insurance-info">-->
                        <!--<div class="user-insurance-title">安联臻爱医疗保险</div>-->
                        <!--<div class="user-insurance-tips">平民价百万医疗险</div>-->
                        <!--<div class="user-insurance-block">-->
                            <!--<div class="user-insurance-company">安联保险</div>-->
                            <!--<div class="user-insurance-amount">152</div>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="user-insurance-category">医疗险</div>-->
                <!--</a>-->
            </div>
        </div>
        <router-link class="user-apply-agent-btn" to="/apply">申请成为保险代理人</router-link>
        <main-menu></main-menu>
    </div>
</template>
<style lang="scss">

    .user-top {
        background: url("../assets/images/user-top-bg.jpg") no-repeat center;
        background-size: 100%;
        height: 305px;
    }
    .user-top i img {
        width:120px;
        height:120px;
        -webkit-border-radius:60px;
        -moz-border-radius:60px;
        border-radius:60px;
        margin: 62px 0 0 316px;
        border:4px solid #ffffff;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .user-top-username {
        text-align: center;
        font-size: 33.3px;
        color: #ffffff;
        font-family: 'Regular';
        margin-top: 10px;
        /*letter-spacing:0;*/
    }

    .user-insurance-list-box {
        overflow: hidden;
        margin-bottom: 100px;
    }

    .user-insurance-list-nothing {
        height:100px;
        line-height: 100px;
        font-size: 26px;
        text-align: center;
        color: #cccccc;
    }

    .user-insurance-list-title {
        background: #ffffff;
        height: 90px;
        line-height: 90px;
        font-size: 34px;
        padding-left: 30px;
        border-bottom: 1px solid #e1e1e1;/*no*/
    }

    .user-insurance-list-title i {
        font-size: 50px;
        margin-right: 8px;
        color: #a0a0a0;
        vertical-align: middle;

    }

    .user-insurance-list-category {
        height: 90px;
        line-height: 90px;
        font-size: 0;
        background: #ffffff;
        border-bottom: 1px solid #e1e1e1;/*no*/
    }

    .user-insurance-list-category > a {
        display: inline-block;
        vertical-align: middle;
        font-size: 30px;
        width: 248px;
        text-align: center;
        text-decoration: none;
    }

    .user-insurance-list-category > a div {
        display: inline-block;
        color: #000000;
        padding-left: 25px;
        padding-right: 25px;
        height: 84px;
        vertical-align: top;
    }

    .user-insurance-list-category > a.active div {
        color: #0084ca;
        border-bottom:8px solid #0084ca;
    }

    .user-insurance-list-category .line {
        display: inline-block;
        width: 1px;/*no*/
        border-right:1px solid #e1e1e1;/*no*/
        height: 60px;
        vertical-align: middle;
    }

    .user-insurance-line {
        display: block;
        background: #ffffff;
        margin-top: 8px;
        border-bottom: 1px solid #e1e1e1;/*no*/
        border-top: 1px solid #e1e1e1;/*no*/
        box-sizing: border-box;
        padding: 40px 30px 30px;
        position: relative;
        overflow: hidden;
        color: #000000;
    }

    .user-insurance-image {
        width: 180px;
        height: 180px;
        line-height: 180px;
        text-align: center;
        float: left;
    }

    .user-insurance-image img {
        width: 180px;
        height: 180px;
    }

    .user-insurance-info {
        float: left;
        width: 470px;
        margin-left: 30px;
    }

    .user-insurance-category {
        position: absolute;
        right: 0;
        top: 30px;
        line-height: 42px;
        padding-right: 35px;
        padding-left: 25px;
        height: 42px;
        border-top-left-radius: 21px;
        border-bottom-left-radius: 21px;
        color: #ffffff;
        font-size: 24px;
        box-sizing: border-box;
        background: #f39800;
    }

    .user-insurance-title {
        font-size: 28px;
        line-height: 30px;
        height: 30px;
        width: 360px;
        overflow: hidden;
    }

    .user-insurance-tips {
        color: #999999;
        width: 360px;
        overflow: hidden;
        font-size: 24px;
        line-height: 28px;
        height: 56px;
        margin-top: 20px;
    }

    .user-insurance-block {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid #a0a0a0;/*no*/
    }

    .user-insurance-company {
        color: #ff6000;
        font-size: 24px;
        padding-left: 10px;
        padding-right: 10px;
        line-height: 30px;
        height: 30px;
        margin-top: 8px;
        float: left;
        border: 1px solid #ff6000;/*no*/
        border-radius: 4px;
    }

    .user-insurance-amount {
        font-size: 40px;
        line-height: 42px;
        height: 42px;
        float: right;
        color: #ff0000;
        /*opacity: 0;*/
    }

    .user-insurance-amount:before {
        content: "￥";
        font-size: 25px;
    }

    .user-apply-agent-btn {
        height: 90px;
        width: 750px;
        line-height: 90px;
        font-size: 34px;
        text-align: center;
        /*display: block;*/
        display: none;
        color: #ffffff;
        background: #0f71c1;
        text-decoration: none;
        position: fixed;
        bottom: 118px;
        left: 50%;
        margin-left: -375px;
    }

</style>
<script>
    import MainMenu from '../components/MainMenu.vue'
    export default{
        data () {
            return {
                headimgurl: this.$store.state.userInfo.headimgurl,
                nickname: this.$store.state.userInfo.nickname,
                userInsuranceListCategory: [
                    { title: '待付款', linkto: '###', isActive: 1},
                    { title: '保障中', linkto: '###', isActive: 0},
                    { title: '已失效', linkto: '###', isActive: 0},
                ],
            }
        },
        components:{
            'main-menu':MainMenu,
        },
        methods:{
            listCategoryClick(event) {
                for(var n in this.userInsuranceListCategory)
                {
                    if(this.userInsuranceListCategory[n].title === event.target.innerText)
                    {
                        this.userInsuranceListCategory[n].isActive = 1;
                    }
                    else
                    {
                        this.userInsuranceListCategory[n].isActive = 0;
                    }
                }
            }
        },
    }

</script>
