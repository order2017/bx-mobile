<template>
    <div id="product-index">
        <div class="product-index-list" v-for="(n, m) in product.picNum">
            <img class="product-index-list-img lazyImages" :data-src="require('../assets/images/products/'+product.id+'/'+n+'.jpg')" />
        </div>
        <div class="block-buy"></div>
        <a class="user-apply-agent-btn wait-inline" v-bind:href="'###'" v-if="!product.buyLink">准备上线</a>
        <a class="user-apply-agent-btn" v-bind:href="product.buyLink" v-if="product.buyLink">立即投保</a>
    </div>
</template>
<style lang="scss">
    * {
        padding:0;
        border:0;
        margin:0;
    }
    ::-webkit-scrollbar {
        width:0;
        height:0;
        background-color: rgba(0, 0, 0, 0);
    }
    #product-index {
        width:100%;
        height:auto;
    }
    .product-index-list {
        width:100%;
        text-align: center;
    }
    .product-index-list-img {
        max-width: 100%;
    }
    .product-index-list-text {
        font-size: 0;
    }
    #product-index .block-buy {
        height: 120px;
        width: 100%;
    }
    #product-index .user-apply-agent-btn.wait-inline {
        background-color: #c9c9c9;
    }
    #product-index .user-apply-agent-btn {
        width:96%;
        max-width: calc(750px * 0.96);
        margin-left: 0;
        margin-bottom: 10px;
        bottom:0;
        display: block;

        -webkit-transform: translate(-50%, 0);
        -moz-transform: translate(-50%, 0);
        -ms-transform: translate(-50%, 0);
        -o-transform: translate(-50%, 0);
        transform: translate(-50%, 0);

        -webkit-border-radius:5px;
        -moz-border-radius:5px;
        border-radius:5px;
    }
</style>
<script type="text/babel">

    import MainMenu from '../components/MainMenu.vue'
    export default{
        data () {
            return {
                productId: this.$route.params.id,
                product: this.$store.state.products[this.$route.params.id-1],
                imagesSrc: [],
            }
        },
        components:{
        },
        mounted: function(){
            var that = this;
            console.log(JSON.stringify(that.product));

            that.imagesSrc.push();

            var lazyImages = require('../assets/js/lazyImages');
            this.$nextTick(function () {
                lazyImages.lazyImages('product-index');
            });
        },
    }
</script>