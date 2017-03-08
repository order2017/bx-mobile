<template>
    <div id="product-list">
        <div class="product-list-category">
            <router-link v-for="(listCategory, index) in listCategorys" :to="{path: listCategory.linkto}" v-bind:class="{ active: listCategory.isActive }" v-if="index == 0">
                <div class="product-list-category-btn" :data-typeOf="listCategory.typeOf" v-on:click="listCategoryClick">{{listCategory.title}}</div>
            </router-link>
            <span class="line"></span>
            <router-link v-for="(listCategory, index) in listCategorys" :to="{path: listCategory.linkto}" v-bind:class="{ active: listCategory.isActive }" v-if="index > 0">
                <div class="product-list-category-btn" :data-typeOf="listCategory.typeOf" v-on:click="listCategoryClick">{{listCategory.title}}</div>
            </router-link>
        </div>
        <div class="product-list">
            <router-link v-for="product in products" :to="{ path: '/product/' + product.id }" class="product-list-line" v-if="showType=='all'||showType==product.typeOf">
                <div class="product-list-image">
                    <img :src="product.smallLogo" :alt="product.title">
                </div>
                <div class="product-list-info">
                    <div class="product-list-title">{{product.title}}</div>
                    <div class="product-list-tips">{{product.des}}</div>
                    <div class="product-list-company">{{product.company}}</div>
                    <div class="product-list-block">
                        <div class="product-list-price">{{product.price}}</div>
                        <div class="product-list-sale-number">销量{{product.hadSell}}份</div>
                    </div>
                </div>
            </router-link>
            <img class="product-list-noproduct" src="../assets/images/noproduct.jpg" v-show="noproduct" />
        </div>
        <main-menu></main-menu>
    </div>
</template>
<style lang="scss">

    .product-list-noproduct {
        width:100%;
        height:100%;
    }

    .product-list-category {
        display: block;
        font-size: 0;
        height: 90px;
        line-height: 90px;
        border-bottom: 1px solid #dcdcdc;/*no*/
        background: #ffffff;
        overflow: hidden;
    }

    .product-list-category > a {
        display: inline-block;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 30px;
        height: 90px;
        line-height: 90px;
        text-decoration: none;
        color: #000000;
        vertical-align: middle;
    }

    .product-list-category > a.active {
        color: #0084ca;
    }

    .product-list-category .line {
        height: 60px;
        display: inline-block;
        width: 1px;/*no*/
        border-right: 1px solid #a0a0a0;/*no*/
        vertical-align: middle;
    }

    .product-list-category-btn {
        padding-left: 20px;
        padding-right: 20px;
        height: 87px;
    }

    .product-list-category > a.active .product-list-category-btn {
        border-bottom: 3px solid #0084ca;/*no*/
        height: calc(100% - 3px);/*no*/
    }

    .product-list {
        background: #ffffff;
        /*margin-top: 10px;*/
        margin-bottom: 10px;
    }

    .product-list-line {
        /*border-top: 1px solid #e1e1e1;*/
        border-bottom: 1px solid #e1e1e1;/*no*/
        text-decoration: none;
        display: block;
        padding: 25px 20px;
        overflow: hidden;
    }

    .product-list-line + .product-list-line {
        border-top: none;
    }

    .product-list-image {
        float: left;
        width: 236px;
        height: 236px;
        text-align: center;
    }

    .product-list-image img {
        width: 236px;
        height: 236px;
    }

    .product-list-info {
        width: 445px;
        margin-left: 25px;
        float: left;
    }

    .product-list-title {
        height: 42px;
        line-height: 42px;
        font-size: 30px;
        overflow: hidden;
        color: #000000;
    }

    .product-list-tips {
        color: #808080;
        font-size: 24px;
        width: 350px;
        line-height: 32px;
        height: 64px;
        margin-top: 20px;
        margin-bottom: 20px;
        overflow: hidden;
    }

    .product-list-company {
        color: #ff6000;
        font-size: 24px;
        padding-left: 10px;
        padding-right: 10px;
        line-height: 30px;
        height: 30px;
        float: left;
        border: 1px solid #ff6000;/*no*/
        border-radius: 4px;
    }

    .product-list-block {
        clear: both;
        overflow: hidden;
        padding-top: 15px;
        /*hgc暂时隐藏价格，销量*/
        /*opacity:0;*/
    }

    .product-list-price {
        font-size: 40px;
        line-height: 42px;
        height: 42px;
        float: left;
        color: #ff0000;
    }

    .product-list-price:before {
        content: "￥";
        font-size: 25px;
    }

    .product-list-sale-number {
        float: right;
        font-size: 24px;
        line-height: 26px;
        height: 26px;
        margin-top: 15px;
        color: #808080;
    }
</style>
<script type="text/babel">
    var $ = require('jquery');
    import MainMenu from '../components/MainMenu.vue'
    export default{
        data () {
            return {
                noproduct: 0,
                showType: 'all',
                listCategorys: [
                    { title: '全部', typeOf:'all', linkto: '/products/all', isActive: 1},
                    { title: '意外', typeOf:'accident', linkto: '/products/accident', isActive: 0},
                    { title: '健康', typeOf:'health', linkto: '/products/health', isActive: 0},
                    { title: '旅游', typeOf:'tourism', linkto: '/products/tourism', isActive: 0},
                    { title: '人寿', typeOf:'life', linkto: '/products/life', isActive: 0},
                    { title: '财产', typeOf:'property', linkto: '/products/property', isActive: 0},
                ],
                products: this.$store.state.products,
            }
        },
        components:{
            'main-menu':MainMenu,
        },
        methods:{
            listCategoryClick(event) {
                this.showType = event.target.getAttribute('data-typeOf');

                //控制顶部列表样式
                for(var n in this.listCategorys){
                    if(this.listCategorys[n].typeOf === this.showType){
                        this.listCategorys[n].isActive = 1;
                    }else{
                        this.listCategorys[n].isActive = 0;
                    }
                }

                var trueNum = 0;
                for(var m in this.products){
                    if(this.products[m].typeOf === this.showType || this.showType === 'all'){
                        trueNum++;
                    }
                }
                if(trueNum == 0){
                    this.noproduct = 1;
                }else{
                    this.noproduct = 0;
                }

            }
        },
        mounted: function () {
            var that = this;
            this.$nextTick(function () {
                // 保证 this.$el 已经插入文档
                that.showType = that.$route.params.typeOf ? that.$route.params.typeOf : 'all';
                //控制顶部列表样式
                for(var n in that.listCategorys){
                    if(that.listCategorys[n].typeOf === that.showType){
                        that.listCategorys[n].isActive = 1;
                    }else{
                        that.listCategorys[n].isActive = 0;
                    }
                }

                var trueNum = 0;
                for(var m in this.products){
                    if(that.products[m].typeOf === that.showType || that.showType === 'all'){
                        trueNum++;
                    }
                }
                if(trueNum == 0){
                    that.noproduct = 1;
                }else{
                    that.noproduct = 0;
                }
            });
        }
    }

</script>
