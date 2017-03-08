<template>
  <div id="app">
    <router-view></router-view>
    <alert-box></alert-box>
  </div>
</template>
<style lang="scss">
  @import "../node_modules/normalize.css/normalize.css";
  @import "assets/fonts/iconfont.css";
  @import "assets/sass/common.scss";
  #app {
      max-width: 750px;
      margin-left:auto;
      margin-right:auto;
  }
</style>

<script>
//    import { Url, Http, Resource } from 'vue-resource'
    var $ = require('jquery');
    var wxconfig = require('./assets/js/wxconfig');
    import store from './store/index'
    import alertBox from './components/AlertBox.vue'
    export default{
        store: store,
        methods: {
            getsignature(){
                $.ajax({
                    type: 'POST',
                    url: '/api/getsignature',
                    data: {'url':window.location.href},
                    dataType: 'json',
                    success:function (result) {
                        console.log('success===>');
                        wxconfig.wxconfig(result, function (result) {
                            console.log('wx config callback');
                        })
                    },
                    error:function (result) {

                    }
                });
            },
        },
        mounted: function () {
            var that = this;
            this.$nextTick(function () {
                //获取当前用户信息
                that.$store.dispatch('setUserInfo');

//                if(navigator.userAgent.indexOf('MicroMessenger') > -1){
//                    that.getsignature();
//                }
            });
        },
        components: {
            'alert-box': alertBox,
        },
    }
</script>