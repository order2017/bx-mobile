<template>
    <div id="index-box">
        <div class="index-banner-box">
            <div class="index-banner-image-box">
                <img src="../assets/images/apply-agent-banner.jpg">
                <div class="index-banner-image-box-text">来自【保通宝】的邀请</div>
                <div class="index-banner-image-box-text">
                    填写资料申请成为<br>
                    保通宝保险代理人
                </div>
            </div>
        </div>

        <div class="index-info-box">
            <div class="index-each-info-box">
                真实姓名
                <input placeholder="必填" id="realName" />
                <span class="errorHint" v-show="errorInfo.realName">!</span>
            </div>
            <div class="index-each-info-box">
                手机号码
                <input placeholder="必填" id="telNumber" />
                <span class="errorHint" v-show="errorInfo.telNumber">!</span>
            </div>
            <div class="index-each-info-box">
                手机验证码
                <input placeholder="必填" id="telCode" />
                <span class="errorHint" v-show="errorInfo.telCode">!</span>
                <div class="get-core-btn" @click="getcode" v-bind:class="{waiting : isWaiting}">获取验证码</div>
            </div>
            <div class="index-each-info-box">
                身份证号码
                <input placeholder="必填" id="idNumber" />
                <span class="errorHint" v-show="errorInfo.idNumber">!</span>
            </div>
        </div>

        <div class="index-upimg-box">
            <div class="index-upimg-box-text">
                <span class="blue-box"></span>
                <div class="blue-box-text">
                    <p>上传身份证正反面照，身份证上面信息必须清晰可见</p>
                    <p>*每张图片不超过2M，支持格式JPG、JPEG、PNG</p>
                </div>
            </div>
            <div class="index-upimg-box-img">
                <div class="index-each-img-box" @click="chooseImage(1)">
                    <img id="firstPic" src="" />
                    <span v-show="errorInfo.firstPic == 1">点击选择图片</span>
                    <input id="choose_Pic1" type="file" accept="image/jpg, image/jpeg, image/png" @change="changeImage" hidden />
                    <div v-show="errorInfo.firstPic == 2">出现错误，请重新上传</div>
                </div>
                <div class="index-each-img-box" @click="chooseImage(2)">
                    <img id="secondPic" src="" />
                    <span v-show="errorInfo.secondPic == 1">点击选择图片</span>
                    <input id="choose_Pic2" type="file" accept="image/jpg, image/jpeg, image/png" @change="changeImage" hidden />
                    <div v-show="errorInfo.secondPic == 2">出现错误，请重新上传</div>
                </div>
            </div>
        </div>

        <div class="index-hadagree-box">
            <div class="index-hadagree-box-clearbox">{{cleartext}}</div>
            <p>阅读并同意<a href="###">注册条款</a>，<a href="###">隐私协议</a></p>
        </div>

        <div class="index-submit-box">
            <div class="index-submit-box-submitbtn" v-bind:class="{cansubmit : canSubmit}" @click="submitInfo">提交资料</div>
        </div>




        <div id="diy-waitbox" v-show="waitbox.showBox">
            <div class="coever-waitbox"></div>
            <div class="coever-waitbox-small"></div>
            <div class="coever-waitbox-info">{{waitbox.info}}</div>
        </div>

        <div id="diy-alertbox" v-show="alertBox.showBg">
            <div class="cover-alertbox" v-bind:class="{showalert : alertBox.showBox}">
                <div class="alertbox-info">{{alertBox.info}}</div>
                <div class="alertbox-btn" @click="hideAlert">确认</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    * {
        font-family: "Microsoft YaHei", sans-serif;
    }
    body {
        background-color: #f5f5f9;
    }

    .index-banner-box {
        position: relative;
        width: 750px;
        /*height: 336px;*/
    }

    .index-banner-image-box img {
        width: 750px;
        /*height: 336px;*/
    }

    .index-banner-image-box-text {
        position: absolute;
        font-size: 30px;
    }
    .index-banner-image-box-text:nth-of-type(1){
        top:101px;
        left:92px;
        color: #f6ff00;
    }
    .index-banner-image-box-text:nth-of-type(2){
        top:156px;
        left:122px;
        width:240px;
        height:70px;
        color: #ffffff;
    }

    .index-info-box {
        width:750px;
        /*height:351px;*/
        margin-top: 8px;
        background-color: #ffffff;
        padding: 0 24px;
        border:1px solid #dcdcdc;/*no*/

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .index-each-info-box {
        position: relative;
        top:0;
        left:0;
        width:100%;
        height:100px;
        font-size: 30px;
        line-height: 100px;
        text-indent: 8px;
        border-bottom: 1px solid #a0a0a0;/*no*/
    }
    .index-each-info-box:nth-of-type(1) {
        /*margin-top: -24px;*/
    }
    .index-each-info-box:nth-of-type(4) {
        border-bottom: 0;
    }
    .index-each-info-box input {

        position: absolute;
        top:0;
        left:195px;
        width:430px;
        height:100px;
        font-size: 30px;
        line-height: 100px;
        background-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        outline: none;
    }
    .index-each-info-box:nth-of-type(3) input {
        width:224px;
    }
    .index-each-info-box .errorHint {
        position: absolute;
        top:21px;
        left:640px;
        width:46px;
        height:46px;
        line-height: 46px;
        color: #ffffff;
        font-size: 30px;
        font-weight:bold;
        text-align: center;
        text-indent:1px;
        background-color: red;
        display: inline-block;

        -webkit-border-radius:23px;
        -moz-border-radius:23px;
        border-radius:23px;
    }
    .index-each-info-box:nth-of-type(3) .errorHint {
        left:430px;
    }

    .get-core-btn {
        position: absolute;
        top:10px;
        left:480px;
        width:212px;
        height:69px;
        line-height: 69px;
        border:1px solid #008ae1;/*no*/
        text-align: center;
        font-size: 26px;
        color: #008ae1;
        -webkit-border-radius:10px;
        -moz-border-radius:10px;
        border-radius:10px;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .index-each-info-box .waiting {
        border:1px solid rgba(204, 204, 204, 0.8);/*no*/
        color: rgba(204, 204, 204, 0.8);
    }

    .index-upimg-box {
        margin-top: 60px;
        padding:0 14px;
    }
    .blue-box {
        width:19px;
        height:40px;
        display: inline-block;
        background-color: #008ae1;
    }
    .blue-box-text {
        width:calc(100% - 19px - 10px);
        vertical-align: top;
        display: inline-block;
    }
    .blue-box-text p:nth-of-type(1) {
        font-size: 30px;
    }
    .blue-box-text p:nth-of-type(2) {
        margin-top: 20px;
        font-size: 28px;
        color: #8d8d8d;
    }
    .index-upimg-box-img {
        margin-top: 43px;
        width:100%;
        text-align: center;
    }
    .index-each-img-box {
        position: relative;
        width:288px;
        height:288px;
        background-color: #ffffff;
        border:1px solid rgba(204, 204, 204, 0.8);/*no*/
        display: inline-block;
    }
    .index-each-img-box:nth-of-type(2) {
        margin-left:31px;
    }
    .index-each-img-box img {
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        max-width: 100%;
        max-height: 100%;
        margin:auto;
    }
    .index-each-img-box span {
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        margin:auto;
        /*width:170px;*/
        height:28px;
        font-size: 28px;
        color: #8d8d8d;
    }
    .index-each-img-box div {
        position: absolute;
        top:100%;
        width:100%;
        color: red;
        font-size: 14px;
        margin-top: 20px;
    }
    .index-hadagree-box {
        width:100%;
        margin-top: 77px;
        text-align: center;
        font-size: 30px;
    }
    .index-hadagree-box-clearbox {
        width:30px;
        height:30px;
        -webkit-border-radius:8px;
        -moz-border-radius:8px;
        border-radius:8px;
        background-color: #008ae1;
        color: #ffffff;
        font-size: 12px;
        line-height: 28px;
        text-align: center;
        display: inline-block;
    }
    .index-hadagree-box p {
        text-indent:10px;
        display: inline-block;
    }
    .index-hadagree-box p a {
        color: #008ae1;
    }

    .index-submit-box {
        margin: 27px 0 60px 0;
        width:100%;
        text-align: center;
    }
    .index-submit-box-submitbtn {
        width:656px;
        height:82px;
        line-height: 82px;
        background-color: #c9c9c9;
        text-align: center;
        color: #ffffff;
        font-size: 38px;
        margin:auto;
        -webkit-border-radius:5px;
        -moz-border-radius:5px;
        border-radius:5px;
    }
    .index-submit-box-submitbtn.cansubmit {
        background-color: #008ae1;
    }

</style>
<style lang="scss">
    #diy-waitbox, #diy-alertbox {
        position: fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color: rgba(78, 78, 78, 0.64);
    }
    .coever-waitbox, .coever-waitbox-small {
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        width:150px;
        height:150px;
        border:15px solid #ffffff;
        border-top-color: transparent;
        border-bottom-color: transparent;

        -webkit-border-radius:75px;
        -moz-border-radius:75px;
        border-radius:75px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-animation:waitRotate 2s linear forwards infinite;
        -o-animation:waitRotate 2s linear forwards infinite;
        animation:waitRotate 2s linear forwards infinite;
    }
    .coever-waitbox-small {
        -webkit-transform: scale(0.5, 0.5) rotate(180deg);
        -moz-transform: scale(0.5, 0.5) rotate(180deg);
        -ms-transform: scale(0.5, 0.5) rotate(180deg);
        -o-transform: scale(0.5, 0.5) rotate(180deg);
        transform: scale(0.5, 0.5) rotate(180deg);
        -webkit-transform-origin:center center;
        -moz-transform-origin:center center;
        -ms-transform-origin:center center;
        -o-transform-origin:center center;
        transform-origin:center center;
        -webkit-animation:waitSmallRotate 2s linear forwards infinite;
        -o-animation:waitSmallRotate 2s linear forwards infinite;
        animation:waitSmallRotate 2s linear forwards infinite;
    }
    @keyframes waitRotate {
        0%   {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);}
        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes waitSmallRotate {
        0%   {
            -webkit-transform: scale(0.5, 0.5) rotate(180deg);
            -moz-transform: scale(0.5, 0.5) rotate(180deg);
            -ms-transform: scale(0.5, 0.5) rotate(180deg);
            -o-transform: scale(0.5, 0.5) rotate(180deg);
            transform: scale(0.5, 0.5) rotate(180deg);}
        100% {
            -webkit-transform: scale(0.5, 0.5) rotate(-540deg);
            -moz-transform: scale(0.5, 0.5) rotate(-540deg);
            -ms-transform: scale(0.5, 0.5) rotate(-540deg);
            -o-transform: scale(0.5, 0.5) rotate(-540deg);
            transform: scale(0.5, 0.5) rotate(-540deg);
        }
    }
    .coever-waitbox-info {
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        width:70%;
        height:100px;
        text-align: center;
        color: #ffffff;
        font-size: 36px;

        -webkit-transform: translate(0, 150px);
        -moz-transform: translate(0, 150px);
        -ms-transform: translate(0, 150px);
        -o-transform: translate(0, 150px);
        transform: translate(0, 150px);
    }
    .cover-alertbox {
        position: absolute;
        top:50%;
        left:50%;
        margin:auto;
        width:489px;
        /*min-height:300px;*/
        max-height: 700px;
        background-color: #ffffff;
        -webkit-border-radius:10px;
        -moz-border-radius:10px;
        border-radius:10px;

        -webkit-transition: all 0.1s linear;
        -moz-transition: all 0.1s linear;
        -ms-transition: all 0.1s linear;
        -o-transition: all 0.1s linear;
        transition: all 0.1s linear;

        -webkit-transform: translate(-50%, -50%) scale(0, 0);
        -moz-transform: translate(-50%, -50%) scale(0, 0);
        -ms-transform: translate(-50%, -50%) scale(0, 0);
        -o-transform: translate(-50%, -50%) scale(0, 0);
        transform: translate(-50%, -50%) scale(0, 0);
    }
    #diy-alertbox .showalert {
        -webkit-transform: translate(-50%, -50%) scale(1, 1);
        -moz-transform: translate(-50%, -50%) scale(1, 1);
        -ms-transform: translate(-50%, -50%) scale(1, 1);
        -o-transform: translate(-50%, -50%) scale(1, 1);
        transform: translate(-50%, -50%) scale(1, 1);
    }
    .alertbox-info {
        width:100%;
        padding-top:51px;
        padding-left:38px;
        padding-right:38px;
        padding-bottom: 42px;
        text-align: center;
        font-size: 26px;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .alertbox-btn {
        width:100%;
        border-top:1px solid rgba(220, 220, 220, 0.5);/*no*/
        padding-top: 15px;
        padding-bottom: 25px;
        text-align: center;
        font-size: 28px;
        color: #008ae1;


        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
</style>
<!--<script type="application/javascript" src="../assets/js/lrz.js"></script>-->
<!--<script type="application/javascript" src="../assets/js/exif.js"></script>-->
<!--<script type="application/javascript" src="../assets/js/zipImage.js"></script>-->
<script type="text/javascript" src="http://gosspublic.alicdn.com/aliyun-oss-sdk-4.4.4.min.js"></script>
<script>

    var $ = require('jquery');
    import MainMenu from '../components/MainMenu.vue'
    export default{
        data () {
            return {
                errorInfo: {
                    realName: 0,
                    telNumber: 0,
                    telCode: 0,
                    idNumber: 0,
                    firstPic: 1,
                    secondPic: 1,
                },
                waitTime: 3,
                isWaiting: 0,
                cleartext: '✔',
                canSubmit: 0,
                waitbox: {
                    showBox: 0,
                    info: 'Loading...',
                },
                alertBox: {
                    showBg: 0,
                    showBox: 0,
                    info: 'alert信息',
                }
            }
        },
        methods: {
            chooseImage(num){
                document.getElementById('choose_Pic'+num).click();
            },
            changeImage(event){
                var that = this;
                var thisbox = event.target;
                var zipImage = require('../assets/js/zipImage');
                zipImage.changeImage(thisbox, function (result) {
                    that.uploadImage(result, thisbox);
                });
            },
            getOssPolicy(callback){
                $.ajax({
                    type: 'GET',
                    url: '',
                    dataType: 'json',
                    success: function (result) {
                        callback(result);
                    },
                    error: function (result) {
                        console.error(result);
                    }
                });
            },
            uploadImage(fileInfo, thisbox){
                //向后端请求osskey
//                this.getOssPolicy();
                var that = this;
                var date = new Date();
                var stringname = date.getTime();
                var ossData = new FormData();
                // 添加配置参数
                ossData.append('OSSAccessKeyId', 'LTAIfdBmEBW2wHYv');
                ossData.append('policy', 'eyJleHBpcmF0aW9uIjoiMjAxNi0xMi0wNlQwNDowNzowM1oiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMCwxMDQ4NTc2MDAwXV19');
                ossData.append('Signature', 'eVIkfHapAsQghv0mwoehoTKE1cQ=');
                ossData.append('key', stringname+'.jpg');
                ossData.append('success_action_status', 201); // 指定返回的状态码
                ossData.append('file', fileInfo.file, stringname+'.jpg');

                $.ajax({
                    url: 'http:\/\/btb-upload.oss-cn-shenzhen.aliyuncs.com',
                    data: ossData,
                    dataType: 'xml',
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    success:function (data) {
                        // 返回的上传信息
                        if ($(data).find('PostResponse')) {
//                            var res = $(data).find('PostResponse');
//                            console.info('Bucket：' + res.find('Bucket').text() );
//                            console.info('Location：' + res.find('Location').text() );
//                            console.info('Key：' + res.find('Key').text() );
//                            console.info('ETag：' + res.find('ETag').text() );
                        }
                        //已开启防盗链，只能上线用
//                        thisbox.parentNode.getElementsByTagName('img')[0].src = res.find('Location').text();
                        //开发测试时用于显示图片
                        var imgEle = thisbox.parentNode.getElementsByTagName('img')[0];
                        imgEle.src = fileInfo.base64;

                        that.errorInfo[imgEle.id] = 0;
                    },
                    error: function (data) {
                        console.log('错误');
                        that.errorInfo[imgEle.id] = 2;
                    }
                });
            },
            getcode(event){
                var that = this;
                if(that.isWaiting == 1)
                    return;
                that.isWaiting = 1;
                var waittime = that.waitTime;
                var thisEle = event.target;
                thisEle.innerHTML = waittime+'秒后重新获取';

                var Reciprocal = setInterval(function(){
                    if(waittime==0){
                        clearInterval(Reciprocal);
                        that.isWaiting = 0;
                        thisEle.innerHTML = '获取验证码';
                    }else{
                        that.isWaiting = 1;
                        waittime--;
                        thisEle.innerHTML = waittime+'秒后重新获取';
                    }
                }, 1000);

                //调用验证码接口
                var telNumber = document.getElementById('telNumber').value;
                console.log('调用验证码接口'+telNumber);
                $.ajax({
                    type:  'POST',
                    url:  '/api/getcode',
                    data: {'telNumber':telNumber},
                    //dataType: 'json',
                    success: function(result){
                        console.log('result==>'+result);
                        result = JSON.parse(result);
                        if(result.code==0){
                            that.showAlert('验证码已发送');
                        }else{
                            that.showAlert('获取验证码失败');
                        }
                        console.log('验证码接口返回=>');
                        for(var m in result){
                            console.log(m+'==>'+result[m]);
                        }
                    },
                    error: function(result){
                        that.showAlert('获取验证码失败');
                        clearInterval(Reciprocal);
                        that.isWaiting = 0;
                        thisEle.innerHTML = '获取验证码';
                    },
                });
            },
            checkIdCard(code){
                var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
                var tip = "";
                var pass= true;

                if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
                    tip = "身份证号格式错误";
                    pass = false;
                }else if(!city[code.substr(0,2)]){
                    tip = "地址编码错误";
                    pass = false;
                }else{
                    //18位身份证需要验证最后一位校验位
                    if(code.length == 18){
                        code = code.split('');
                        //∑(ai×Wi)(mod 11)
                        //加权因子
                        var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                        //校验位
                        var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
                        var sum = 0;
                        var ai = 0;
                        var wi = 0;
                        for (var i = 0; i < 17; i++)
                        {
                            ai = code[i];
                            wi = factor[i];
                            sum += ai * wi;
                        }
                        var last = parity[sum % 11];
                        if(parity[sum % 11] != code[17]){
                            tip = "校验位错误";
                            pass =false;
                        }
                    }
                }
                if(!pass) console.error('身份证号码错误：'+tip);
                return pass;
            },
            hadInput(){
                var that = this;
                var realName = document.getElementById('realName').value;
                var telNumber = document.getElementById('telNumber').value;
                var telCode = document.getElementById('telCode').value;
                var idNumber = document.getElementById('idNumber').value;

                var firstPic = document.getElementById('firstPic').src;
                var secondPic = document.getElementById('secondPic').src;

                //检查真实姓名是否输入
                if(realName){
                    that.errorInfo.realName = 0;
                }else{
                    that.errorInfo.realName = 1;
                }

                //检查手机号码是否输入
                if(telNumber){
                    that.errorInfo.telNumber = 0;
                }else{
                    that.errorInfo.telNumber = 1;
                }

                //检查验证码是否输入
                if(telCode){
                    that.errorInfo.telCode = 0;
                }else{
                    that.errorInfo.telCode = 1;
                }

                //检查图片是否已经选择
                if(firstPic){
                    that.errorInfo.firstPic = 0;
                    console.log('firstPic = 0===>'+firstPic);
                }else{
                    that.errorInfo.firstPic = 1;
                    console.log('firstPic = 1');
                }
                if(secondPic){
                    that.errorInfo.secondPic = 0;
                    console.log('secondPic = 0===>'+secondPic);
                }else{
                    that.errorInfo.secondPic = 1;
                    console.log('secondPic = 1');
                }

                for(var n in that.errorInfo){
                    if(that.errorInfo[n]){
                        that.cansubmit = 0;
                        return;
                    }
                }
                that.cansubmit = 1;
            },
            checkInfo(){
                var that = this;
                var errinfo = '';
                var telNumber = document.getElementById('telNumber').value;
                var idNumber = document.getElementById('idNumber').value;

                //验证手机号码格式
                var reg = /^1[34578]\d{9}$/;
                if(reg.test(telNumber)){
                    that.errorInfo.telNumber = 0;
                }else{
                    that.errorInfo.telNumber = 1;
                    errinfo = errinfo ? errinfo : '请正确输入手机号码';
                }

                //验证身份证号码格式
                if(that.checkIdCard(idNumber)){
                    that.errorInfo.idNumber = 0;
                }else{
                    that.errorInfo.idNumber = 1;
                    errinfo = errinfo ? errinfo : '请正确输入身份证号码';
                }

                for(var n in that.errorInfo){
                    if(that.errorInfo[n])
                        return {'state':false, 'errinfo':errinfo};
                }

                return {'state':true};
            },
            submitInfo(){
                this.hadInput();
                var submitState = this.checkInfo();
                if(submitState.state)
                    this.showAlert('can submit');
                else
                    this.showAlert(submitState.errinfo);
            },
            showwait(info, callback){
                callback = callback ? callback : function(){};
                this.waitbox.info = info ? info : 'Loading...';
                this.waitbox.showBox = 1;
                callback();
            },
            hideWait(callback){
                callback = callback ? callback : function(){};
                this.waitbox.showBox = 0;
                this.waitbox.info = 'Loading...';
                callback();
            },
            showAlert(info, callback){
                var that = this;
                callback = callback ? callback : function(){};
                that.alertBox.info = info;
                that.alertBox.showBg = 1;
                window.alertBoxCallback = callback;
                setTimeout(function(){
                    that.alertBox.showBox = 1;
                }, 100);
            },
            hideAlert(){
                var callback = window.alertBoxCallback ? window.alertBoxCallback : function(){};
                var that = this;
                that.alertBox.showBox = 0;
                setTimeout(function(){
                    that.alertBox.showBg = 0;
                    callback();
                }, 100);
            },
        },
        components:{
            'main-menu':MainMenu,
        },
        mounted:function(){
        },
    }
</script>
