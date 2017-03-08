/**
 * Created by cykj-hgc on 2016/11/18.
 */



//传入元素节点id名，该节点下的所有图像将会延迟加载
exports.lazyImages = function(idName){
    var eleId = idName;
    var loadingImg = require('../images/loadingImg.gif');

//获得对象距离页面顶端的距离
    function getH(obj) {
        var h = 0;
        while (obj) {
            h += obj.offsetTop;
            obj = obj.offsetParent;
        }
        return h;
    }

    function scrollImages () {
        if(document.getElementById(eleId))
        {
            var oDiv = document.getElementById(eleId);
            var aImg = oDiv.getElementsByTagName('img');

            for (var i = 0, l = aImg.length; i < l; i++) {
                var oImg = aImg[i];
                //检查oImg是否在可视区域
                var t = document.documentElement.clientHeight + (document.documentElement.scrollTop || document.body.scrollTop);
                var h = getH(oImg);
                if (h < t) {
                    var imgsrc = oImg.getAttribute('data-src');
                    if(oImg.src != imgsrc)
                    {
                        oImg.src = imgsrc;
                    }
                }
            }
        }

    };

    //loadingImg
    var loadImg = new Image();
    loadImg.onload = function () {
        var oDiv = document.getElementById(eleId);
        var aImg = oDiv.getElementsByTagName('img');

        for (var i = 0, l = aImg.length; i < l; i++) {
            var oImg = aImg[i];
            oImg.src = loadingImg;
        }

        window.onscroll = scrollImages;
        window.onscroll();
    };
    loadImg.src = loadingImg;
};