import Vue from 'vue'
import Vuex from 'vuex'
// import { fetchItems, fetchIdsByType, fetchUser } from './api'
import { products } from './products'
import { userInfo } from './userInfo'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: userInfo,
        products: products,
        alertBox: {
            'showBox': false,
            'timeOut': 3000,
            'timeOutList': [],
            'options': {
                Message: '',
                callback: function () {
                },
            },
        },
    },

    mutations: {
        // mutation 必须是同步函数

        //将获取到的个人信息保存到vuex中
        setUserInfo(state, payload){
            state.userInfo = payload ? payload : state.userInfo;
        },
        //传入相关参数，显示提示窗口，一段时间后关闭提示窗口，并执行回调函数
        showAlert(state, options){
            var that = this;
            for(var n in state.alertBox.timeOutList){
                clearTimeout(state.alertBox.timeOutList[n]);
            }
            state.alertBox.timeOutList = [];
            state.alertBox.options = options;
            state.alertBox.showBox = true;
            state.alertBox.timeOutList.push(setTimeout(function () {
                var callback = state.alertBox.options.callback ? state.alertBox.options.callback : function(){};
                state.alertBox.showBox = false;
                callback();
            }, state.alertBox.timeOut || 3000));
        },
    },

    actions: {
        //请求接口获取个人信息，获取成功后调用mutations的setUserInfo函数存储到vuex中
        setUserInfo(context){
            var http = require('http');
            http.get('/api/getuserinfo', (res)=>{
                var resData = '';
                res.on('data', (data)=>{
                    resData += data;
                })
                res.on('end', ()=>{
                    // console.log('test=>>>'+JSON.stringify(resData));
                    resData = JSON.parse(resData);
                    context.commit('setUserInfo', resData);
                })
            });
        },
    },

    getters: {
    }
})

export default store
