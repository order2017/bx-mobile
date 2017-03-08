<template>
    <div id="loginpage">
        <div class="loginpage_title">
            登录
        </div>
        <div class="loginpage_logintype">
            <div class="logintype" v-bind:class="{activetype : loginInfo.logintype=='message'}" @click="changeLoginType('message')">短信快捷登录</div>
            <div class="logintype" v-bind:class="{activetype : loginInfo.logintype=='common'}" @click="changeLoginType('common')">普通登录</div>
        </div>
        <div class="logintype_box">
            <div class="messagetype" v-bind:class="{active_logintype : loginInfo.logintype=='message'}">
                <div class="messagetype_eachline">
                    <div class="input_before">手机号码</div>
                    <input placeholder="请输入手机号码，将自动创建账号" id="telNumber" v-model="loginInfo.telNumber" />
                </div>
                <div class="messagetype_eachline">
                    <div class="input_before">手机号码</div>
                    <input placeholder="动态密码" id="telPassword" v-model="loginInfo.telPassword" />
                    <div class="getcode" @click="getcode">发送动态密码</div>
                </div>
                <div class="submit_btn" @click="loginSubmit">登录</div>
            </div>
            <div class="commontype" v-bind:class="{active_logintype : loginInfo.logintype=='common'}">
                <div class="input_before">手机号码</div>
                <input placeholder="请输入邮箱账号或手机号码" id="userName" v-model="loginInfo.userName" />
                <div class="input_before">密码</div>
                <input placeholder="密码不少于6位，限字母和数字" type="password" id="passWord" v-model="loginInfo.passWord" />
                <div class="forgot_password">忘记密码？</div>
                <div class="submit_btn" @click="loginSubmit">登录</div>
            </div>
        </div>
        <div class="wq_login">
            <div class="wq_login_title">
                <div></div>
                <div>或使用第三方登录</div>
                <div></div>
            </div>
            <div class="third_login">
                <a>
                    <div class="each_third_login">
                        <img :src="wxlogo" />
                        <div>微信</div>
                    </div>
                </a>
                <a>
                    <div class="each_third_login">
                        <img :src="qqlogo" />
                        <div>QQ</div>
                    </div>
                </a>
            </div>
        </div>

    </div>
</template>
<style>
    html,body,#app {
        width:100%;
        height:100%;
    }
    #loginpage {
        background-color: #ffffff;
        font-family: "Microsoft YaHei", sans-serif;
        height:100%;
    }
    .loginpage_title {
        width: 100%;
        height:89px;
        border-bottom: 1px solid rgba(210, 210, 210, 1);
        font-size: 36px;
        text-align: center;
        line-height: 89px;
    }
    .loginpage_logintype {
        width:100%;
        height:89px;
        line-height: 89px;
        border-bottom: 1px solid rgba(210, 210, 210, 1);
    }
    .logintype {
        width:calc(50% - 1.5px);
        height:100%;
        float: left;
        font-size: 28px;
        text-align: center;
        background-color: rgba(238, 238, 238, 1);
    }
    .logintype:nth-of-type(1).activetype {
        background-color: #ffffff;
        border-right: 1px solid rgba(210, 210, 210, 1);
    }
    .logintype:nth-of-type(2).activetype {
        background-color: #ffffff;
        border-left: 1px solid rgba(210, 210, 210, 1);
    }
    .logintype_box, .wq_login {
        padding: 0 24px;
    }
    .messagetype {
        display: none;
    }
    .messagetype_eachline {
        border-bottom: 1px solid rgba(210, 210, 210, 1);
    }
    .messagetype_eachline:nth-of-type(1) {
        /*margin-top: -24px;*/
    }
    .messagetype .input_before {
        width:164px;
        height:100px;
        line-height: 100px;
        font-size: 30px;
        color: #000;
        display: inline-block;
    }
    .messagetype .input_before:nth-of-type(1) {
        /*margin-top: -24px;*/
    }
    .messagetype input {
        height:100px;
        line-height: 100px;
        font-size: 30px;
        outline: none;
        margin-left: -9px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .messagetype_eachline input:nth-of-type(1) {
        width:calc(100% - 164px);
        /*padding-left: 75px;*/
        /*padding-right: 20px;*/
        /*margin-bottom: 21px;*/
        /*margin-top: -24px;*/
    }
    .messagetype_eachline:nth-of-type(2) input:nth-of-type(1) {
        width: 227px;
        /*padding-left: 23px;*/
        /*padding-right: 23px;*/
    }
    .messagetype .getcode {
        width: calc(100% - 164px - 250px);
        height:90px;
        line-height: 90px;
        font-size: 30px;
        color: #8a8a8a;
        text-align: center;
        background-color: rgba(247, 247, 247, 1);
        margin-left: 8px;
        margin-top: 7px;
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
    .messagetype .submit_btn {
        width: 540px;
        height:100px;
        font-size: 30px;
        line-height: 100px;
        color: #ffffff;
        text-align: center;
        background-color: rgba(0, 138, 225, 1);
        margin: 75px auto 92px auto;

        -webkit-border-radius:8px;
        -moz-border-radius:8px;
        border-radius:8px;
    }
    .commontype {
        display: none;
    }
    .commontype input {
        width:calc(100% - 170.5px);
        height:100px;
        line-height: 100px;
        font-size: 30px;
        margin-left: -8px;
        border-bottom: 1px solid rgba(210, 210, 210, 1);
        padding:0 20px 0 0;
        /*padding:0 20px 0 170px;*/

        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .commontype input:nth-of-type(1) {
        /*margin-top: -24px;*/
    }
    .commontype .input_before {
        width:170px;
        height:100px;
        line-height: 100px;
        font-size: 30px;
        color: #000;
        border-bottom: 1px solid rgba(210, 210, 210, 1);
        display: inline-block;
    }
    .commontype .input_before:nth-of-type(1) {
        /*margin-top: -24px;*/
    }
    .forgot_password {
        height:108px;
        line-height: 108px;
        text-align: right;
        color: rgba(103, 172, 233, 1);
    }
    .commontype .submit_btn {
        width: 540px;
        height:100px;
        font-size: 30px;
        line-height: 100px;
        color: #ffffff;
        text-align: center;
        background-color: rgba(0, 138, 225, 1);
        margin: 0 auto 97px auto;

        -webkit-border-radius:8px;
        -moz-border-radius:8px;
        border-radius:8px;
    }
    .active_logintype {
        display: block;
    }

    .wq_login_title div {
        content: ' ';
        display: inline-block;
        width:calc(100% / 3 - 6px);
        vertical-align: top;
    }
    .wq_login_title div:nth-of-type(1),.wq_login_title div:nth-of-type(3) {
        border-top: 1px solid rgba(210, 210, 210, 1);
        margin-top: 12px;
    }
    .wq_login_title div:nth-of-type(2) {
        text-align: center;
        color: #8a8a8a;
        font-size: 25px;
    }
    .third_login {
        margin-top: 66px;
        text-align: center;
    }
    .each_third_login {
        width:100px;
        height:150px;
        display: inline-block;
        margin:0 56px;
    }
    .each_third_login img {
        width:100px;
        height:100px;
        border-radius: 50px;
    }
    .each_third_login div {
        text-align: center;
        font-size: 25px;
        color: rgba(138, 138, 138, 1);
        margin-top: 23px;
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
                    logintype: 'message',
                    telNumber: '',
                    telPassword: '',
                    userName: '',
                    passWord: '',
                },
                wxlogo: require('../assets/images/wx.png'),
                qqlogo: require('../assets/images/qq.png'),
            }
        },
        methods:{
            changeLoginType(typeOf){
                this.loginInfo.logintype = typeOf;
            },
            getcode(event){
                var that = this;
                if(that.isWaiting == 1)
                    return;

                //验证手机号码格式
                var reg = /^1[34578]\d{9}$/;
                if(!reg.test(that.loginInfo.telNumber)){
//                    that.showAlert('请正确输入手机号码');
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
                    //dataType: 'json',
                    success: function(result){
                        console.log('result==>'+result);
                        result = JSON.parse(result);
                        if(result.code==0){
//                            that.showAlert('验证码已发送');
                            that.$store.commit('showAlert', {
                                Message: '验证码已发送',
                                callback: function () {
                                },
                            });
                        }else{
//                            that.showAlert('获取验证码失败');
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
//                        that.showAlert('获取验证码失败');
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
            loginSubmit(event){
                var that = this;

                var login_username = that.loginInfo.logintype=='message' ? that.loginInfo.telNumber : that.loginInfo.userName;
                var login_password = that.loginInfo.logintype=='message' ? that.loginInfo.telPassword : that.loginInfo.passWord;

                if(!login_username && !login_password){
//                    that.showAlert('请正确输入登录信息');
                    that.$store.commit('showAlert', {
                        Message: '请正确输入登录信息',
                        callback: function () {
                        },
                    });
                    return;
                }

                //验证手机号码格式
                var regtel = /^1[34578]\d{9}$/;
                var regemail = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;

                //短信登录时只判断手机号码是否正确
                if(that.loginInfo.logintype == 'message'){
                    if(!regtel.test(login_username)){
//                        that.showAlert('请正确输入手机号码');
                        that.$store.commit('showAlert', {
                            Message: '请正确输入手机号码',
                            callback: function () {
                            },
                        });
                        return;
                    }
                }

                //普通登录时判断账户是否为手机号码或者邮箱账号
                if(that.loginInfo.logintype == 'common'){
                    if(!regtel.test(login_username) && !regemail.test(login_username)){
//                        that.showAlert('请正确输入手机号码或邮箱账号');
                        that.$store.commit('showAlert', {
                            Message: '请正确输入手机号码或邮箱账号',
                            callback: function () {
                            },
                        });
                        return;
                    }
                }

                $.ajax({
                    type: 'POST',
                    url: '/login',
                    data: {
                        'logintype': that.loginInfo.logintype,
                        'username': login_username,
                        'password': login_password,
                    },
                    success: function (result) {
                        console.log('登录接口返回=>');
                        for(var m in result){
                            console.log(m+'==>'+result[m]);
                        }
                        //返回数据
                        if(result.state == 0){
                            //成功
//                            that.showAlert('登录成功');
                            that.$store.commit('showAlert', {
                                Message: '登录成功',
                                callback: function () {
                                },
                            });
//                            window.location.href = '/';
                        }else{
                            //失败
//                            that.showAlert('登录失败');
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
