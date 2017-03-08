<template>
    <div id="telbindpage">
        <div class="telbindpage_title">
            绑定手机号码
        </div>
        <div class="telbind_message">
            为了保障你的账户安全，请立即绑定手机。
        </div>
        <div class="telbind_prompt">
            <span class="blue-box"></span>您还未绑定手机号
        </div>
        <div class="telbind_box">
            <div class="telbind_eachline">
                <div class="input_before">绑定手机号</div>
                <input placeholder="请输入手机号码，将自动创建账号" id="telNumber" v-model="loginInfo.telNumber" />
            </div>
            <div class="telbind_eachline">
                <div class="input_before">手机验证码</div>
                <input placeholder="动态密码" id="telPassword" v-model="loginInfo.telPassword" />
                <div class="getcode" @click="getcode">发送动态密码</div>
            </div>
            <div class="submit_btn" @click="telBindSubmit">登录</div>
        </div>

    </div>
</template>
<style>
    #telbindpage {
        background-color: #ffffff;
        font-family: "Microsoft YaHei", sans-serif;
        height:100%;
    }
    .telbindpage_title {
        width: 100%;
        height:89px;
        font-size: 36px;
        text-align: center;
        line-height: 89px;
        border-bottom: 2px solid rgba(177, 177, 178, 1);
    }
    .telbind_message {
        width:100%;
        height: 82px;
        line-height: 82px;
        font-size: 26px;
        padding:0 33px;
        background-color: rgba(245, 245, 249, 1);
        border-bottom: 1px solid rgba(210, 210, 210, 1);

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .telbind_prompt {
        width:100%;
        height:82px;
        line-height: calc(82px - 20px *2);
        font-size: 26px;
        padding:20px 18px;
        background-color: rgba(221, 243, 255, 1);
        margin-top: 18px;
        vertical-align: top;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .telbind_prompt .blue-box {
        height:100%;
        vertical-align: top;
        margin-right: 14px;
    }
    .telbind_box {
        width:100%;
        padding:0 10px;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .telbind_eachline {
        width:100%;
        height:100px;
        line-height: 100px;
        border-bottom: 1px solid rgba(210, 210, 210, 1);
    }
    .telbind_eachline .input_before {
        width:200px;
        height:100px;
        line-height: 100px;
        font-size: 30px;
        padding:0 15px;
        display: inline-block;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .telbind_eachline input {
        height:100px;
        line-height: 100px;
        font-size: 30px;
        vertical-align: top;
        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        display: inline-block;
    }
    .telbind_eachline #telNumber {
        width:calc(100% - 210px);
    }
    .telbind_eachline #telPassword {
        width:237px;
    }
    .telbind_eachline .getcode {
        width: calc(100% - 200px - 267px);
        height:90px;
        line-height: 90px;
        font-size: 30px;
        color: #8a8a8a;
        text-align: center;
        background-color: rgba(247, 247, 247, 1);
        margin-top: 5px;
        vertical-align: top;
        display: inline-block;
        border:1px solid #bfbfbf;

        -webkit-border-radius:10px;
        -moz-border-radius:10px;
        border-radius:10px;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .telbind_box .submit_btn {
        width: 540px;
        height:100px;
        font-size: 38px;
        line-height: 100px;
        color: #ffffff;
        text-align: center;
        background-color: rgba(0, 138, 225, 1);
        margin: 105px auto 0 auto;

        -webkit-border-radius:8px;
        -moz-border-radius:8px;
        border-radius:8px;
    }
</style>
<script>
    var $ = require('jquery');
    export default{
        data () {
            return {
                waitTime: 3,
                isWaiting: 0,
                loginInfo: {
                    telNumber: '',
                    telPassword: '',
                },
            }
        },
        methods:{
            getcode(event){
                var that = this;
                if(that.isWaiting == 1)
                    return;

                //验证手机号码格式
                var reg = /^1[34578]\d{9}$/;
                if(!reg.test(that.loginInfo.telNumber)){
                    that.$store.commit('showAlert', {
                        Message: '请正确输入手机号码',
                        callback: function () {
                        },
                    });
                    return;
                }
                that.isWaiting = 1;
                var waittime = that.waitTime;
                var thisEle = event.target;
                thisEle.innerHTML = waittime+'秒后重新获取';

                var Reciprocal = setInterval(function(){
                    if(waittime==0){
                        clearInterval(Reciprocal);
                        that.isWaiting = 0;
                        thisEle.innerHTML = '发送动态密码';
                    }else{
                        that.isWaiting = 1;
                        waittime--;
                        thisEle.innerHTML = waittime+'秒后重新获取';
                    }
                }, 1000);

                //调用验证码接口
                $.ajax({
                    type:  'POST',
                    url:  '/api/getcode',
                    data: {'telNumber':that.loginInfo.telNumber},
                    success: function(result){
                        console.log('result==>'+result);
                        result = JSON.parse(result);
                        if(result.code==0){
                            that.$store.commit('showAlert', {
                                Message: '验证码已发送',
                                callback: function () {
                                },
                            });
                        }else{
                            that.$store.commit('showAlert', {
                                Message: '获取验证码失败',
                                callback: function () {
                                },
                            });
                        }
                        console.log('验证码接口返回=>');
                        for(var m in result){
                            console.log(m+'==>'+result[m]);
                        }
                    },
                    error: function(result){
                        that.$store.commit('showAlert', {
                            Message: '获取验证码失败',
                            callback: function () {
                            },
                        });
                        clearInterval(Reciprocal);
                        that.isWaiting = 0;
                        thisEle.innerHTML = '发送动态密码';
                    },
                });
            },
            telBindSubmit(event){
                var that = this;

                var telNumber = that.loginInfo.telNumber;
                var telPassword = that.loginInfo.telPassword;

                if(!telNumber && !telPassword){
                    that.$store.commit('showAlert', {
                        Message: '请正确输入绑定信息',
                        callback: function () {
                        },
                    });
                    return;
                }

                //验证手机号码格式
                var regtel = /^1[34578]\d{9}$/;
                if(!regtel.test(telNumber)){
                    that.$store.commit('showAlert', {
                        Message: '请正确输入手机号码',
                        callback: function () {
                        },
                    });
                    return;
                }

                $.ajax({
                    type: 'POST',
                    url: '/telbind',
                    data: {
                        'telNumber': telNumber,
                        'telPassword': telPassword,
                    },
                    success: function (result) {
                        console.log('登录接口返回=>');
                        for(var m in result){
                            console.log(m+'==>'+result[m]);
                        }
                        //返回数据
                        if(result.state == 0){
                            //成功
                            that.$store.commit('showAlert', {
                                Message: '登录成功',
                                callback: function () {
                                },
                            });
//                            window.location.href = '/';
                        }else{
                            //失败
                            that.$store.commit('showAlert', {
                                Message: '登录失败',
                                callback: function () {
                                },
                            });
                        }
                    },
                    error: function (result) {
                        //请求失败
//                        that.showAlert('登录失败');
                        that.$store.commit('showAlert', {
                            Message: '登录失败',
                            callback: function () {
                            },
                        });
                    }
                });
            },
        },
        components:{
        }
    }

</script>
