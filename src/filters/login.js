
const appId = 'wx24796907236ed1f0';
const secret = '8c50e8381fec4ad0830e23357a24c10e';

const express = require('express');
var session = require('express-session');
var URL = require('url');

const app = express()



app.use(session({
    secret: 'cybx btb', //secret的值建议使用随机字符串
    cookie: {maxAge: 1000 * 60 * 5} // 过期时间（毫秒）
}));


exports.checkLogin = function (req, res) {
    if(!!req.session.accessToken)
    {
        //已经登录
        console.log('have session');
        // req.session.accessToken = '已登陆';
        // return req.session.accessToken;
    }else{
        //还没有登录
        console.log('no session');
        // return false;
    }
}


// 重定向到授权页面
exports.weixin_getCode = function(req, res){
    //取得url上所有参数，并转化为json对象
    console.log('url========>'+req.originalUrl);
    var urlData = URL.parse(req.originalUrl, true).query;
    if(urlData.code)
    {
        // url上有code参数
        return urlData.code;
    }else{
        //url上没有带code参数
        var options = {
            appid: appId,
            redirect_uri: encodeURIComponent(req.originalUrl),
            response_type: 'code',
            scope: 'snsapi_userinfo',
            state: '',
        };
        var linkUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+options.appid+
            '&redirect_uri='+options.redirect_uri+
            '&response_type='+options.response_type+
            '&scope='+options.scope+
            '&state='+options.state+
            '#wechat_redirect';
        res.redirect(linkUrl);
        return false;
    }
}

exports.weixin_getUserAccessToken = function (code) {
    console.log('weixin_getUserAccessToken');
    var https = require('https');

    var getUrl = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='+appId+'&secret='+secret+'&code='+code+'&grant_type=authorization_code';

    https.get(getUrl, (res)=> {
        var resData = '';

        res.on('data', (data)=>{
            resData += data;
        });

        res.on('end', ()=>{
            resData = JSON.parse(resData);
            console.log(resData);
            if(resData.errcode)
            {
                //获取失败
                console.error(resData.errmsg);
                return false;
            }else{
                //获取openid和一次性access_token成功
                return resData;
            }
        });
    });
}


exports.weixin_getUserInfo = (access_token, openid)=>{
    var https = require('https');

    var getUrl = 'https://api.weixin.qq.com/sns/userinfo?access_token='+access_token+'&openid='+openid+'&lang=zh_CN';
    https.get(getUrl, (res)=>{
        var resData = '';

        res.on('data', (data)=>{
            resData += data;
        });

        res.on('end', ()=>{
            resData = JSON.parse(resData);
            if(resData.errcode)
            {
                //获取个人信息失败
                console.error(resData.errmsg);
                return false;
            }else{
                //获取个人信息成功
                return resData;
            }
        });
    });
}


















