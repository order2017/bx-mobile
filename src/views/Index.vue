<template>
    <div id="index-box">
        <div class="index-banner-box">
            <div class="index-banner-image-box">
                <img src="../assets/images/index-banner.jpg">
            </div>
            <div class="index-banner-dot-box">
            </div>
        </div>
        <div class="index-recommend-box">
            <!--<a class="index-recommend" href="">-->
            <router-link to="/products/health" class="index-recommend">
                <div class="index-recommend-icon">
                    <i class="iconfont icon-aixin color-f67a7d"> </i>
                </div>
                <div class="index-recommend-title">健康险</div>
                <div class="index-recommend-des">陪伴光阴岁月</div>
            </router-link>
            <!--</a>-->
            <router-link to="/products/accident" class="index-recommend">
                <div class="index-recommend-icon">
                    <i class="iconfont icon-san color-a0d97d"> </i>
                </div>
                <div class="index-recommend-title">意外险</div>
                <div class="index-recommend-des">坚强的后盾</div>
            </router-link>
            <router-link to="/products/tourism" class="index-recommend">
                <div class="index-recommend-icon">
                    <i class="iconfont icon-xiangji color-33a1e7"> </i>
                </div>
                <div class="index-recommend-title">旅游险</div>
                <div class="index-recommend-des">无忧走天下</div>
            </router-link>
            <router-link to="/products/property" class="index-recommend">
                <div class="index-recommend-icon">
                    <i class="iconfont icon-jiacai color-6f849c"> </i>
                </div>
                <div class="index-recommend-title">财产险</div>
                <div class="index-recommend-des">悦享安居乐业</div>
            </router-link>
        </div>
        <div class="index-hot-box">
            <div class="index-hot-title">好评热销</div>
            <div class="index-hot-list">
                <router-link v-for="(product, index) in products" :to="{ path: '/product/' + product.id }" v-if="index < 9">
                    <div class="index-hot-line">
                        <img :src="product.bigLogo">
                        <div class="index-hot-line-title">{{ product.title }}</div>
                        <div class="index-hot-line-des">{{ product.des }}</div>
                        <div class="index-hot-line-company">{{ product.company }}</div>
                        <div class="index-hot-line-price">{{ product.price }}</div>
                    </div>
                </router-link>
            </div>
            <router-link to="/product" class="index-hot-all-line">全部产品</router-link>
        </div>
        <main-menu></main-menu>
    </div>
</template>
<style lang="scss">
    .index-banner-image-box img {
        width: 750px;
    }

    .index-banner-box {
        width: 750px;
        /*height: 279px;*/
        position: relative;
    }

    .index-hot-box {
        /*border-top: 1px solid #e5e5e5;*/
        background: #ffffff;
        /*margin-top: 18px;*/
    }

    .index-hot-title {
        padding-top: 25px;
        padding-left: 35px;
        padding-right: 35px;
        font-size: 30px;
        line-height: 32px;
    }

    .index-hot-list {
        overflow: hidden;
    }

    .index-hot-list a, .index-hot-list a:hover, .index-hot-list a:active, .index-hot-list a:visited {
        text-decoration:none;
        color:#333
    }

    .index-hot-line {
        width: 750px;
        margin-top: 30px;
        padding-left: 35px;
        padding-right: 35px;
        overflow: hidden;
        box-sizing: border-box;
    }

    .index-hot-line img {
        width: 675px;
        height: 322px;
        display: block;
        margin: 0 auto;
    }

    .index-hot-line-title {
        font-size: 28px;
        line-height: 30px;
        height: 30px;
        margin-top: 20px;
    }

    .index-hot-line-des {
        font-size: 24px;
        line-height: 26px;
        height: 26px;
        margin-top: 15px;
        margin-bottom: 15px;
        color: #818181;
    }

    .index-hot-line-company {
        float: left;
        font-size: 24px;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        padding-right: 10px;
        margin-top: 8px;
        color: #ff6000;
        border: 1px solid #ff6000;/*no*/
        border-radius: 5px;
    }

    .index-hot-line-price {
        float: right;
        font-size: 40px;
        color: #ff0000;
        /*hgc 隐藏价格*/
        /*opacity: 0;*/
    }

    .index-hot-line-price:before {
        content: "￥";
        font-size: 25px;
    }

    .index-hot-all-line {
        text-align: center;
        display: block;
        color: #008ae1;
        height: 90px;
        font-size: 24px;
        line-height: 90px;
        margin-top: 30px;
        border-top: 1px solid #e5e5e5;/*no*/
        text-decoration: none;
    }

    .index-recommend-box {
        overflow: hidden;
        width: 750px;
        background: #ffffff;
    }

    .index-recommend {
        float: left;
        display: block;
        text-decoration: none;
        width: 374px;
        height: 150px;
        line-height: 150px;
        padding-top: 35px;
        padding-left: 40px;
        padding-right: 40px;
        border-left: 1px solid #e5e5e5;/*no*/
        border-bottom: 1px solid #e5e5e5;/*no*/
        box-sizing: border-box;
    }

    a.index-recommend {
        color: #000000;
    }

    .index-recommend:nth-child(2n-1) {
        border-left: none;
    }

    .index-recommend-icon {
        float: left;
        width: 80px;
        height: 80px;
        line-height: 80px;
        margin-right: 10px;
        text-align: center;
    }

    .index-recommend-icon i {
        font-size: 50px;
    }

    .index-recommend-title {
        float: left;
        width: 200px;
        line-height: 32px;
        height: 32px;
        font-size: 30px;
        margin-top: 5px;
        overflow: hidden;
    }

    .index-recommend-des {
        float: left;
        color: #808080;
        width: 200px;
        line-height: 26px;
        height: 26px;
        font-size: 24px;
        margin-top: 10px;
        overflow: hidden;
    }
</style>
<script>
    import MainMenu from '../components/MainMenu.vue'
    export default{
        data () {
            return {
                products: this.$store.state.products
            }
        },
        methods: {
        },
        components:{
            'main-menu':MainMenu,
        }
    }
</script>
