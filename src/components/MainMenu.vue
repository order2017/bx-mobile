<template>
    <div class="nav-position">
        <div class="nav-bar">
            <router-link to="/" active-class="active" exact>
                <i class="iconfont icon-fz"></i>
                <span>首页</span>
            </router-link>
            <router-link to="/products" active-class="active">
                <i class="iconfont icon-liebiao"></i>
                <span>产品</span>
            </router-link>
            <router-link to="/activity" active-class="active">
                <i class="iconfont icon-faxian"></i>
                <span>活动</span>
            </router-link>
            <router-link to="/user" active-class="active">
                <i class="iconfont icon-ren"></i>
                <span>我的</span>
            </router-link>
        </div>
    </div>
</template>
<style lang="scss">

    .nav-bar {
        position: fixed;
        bottom: 0;
        left: 50%;
        margin-left: -375px;
        width: 750px;
        height: 118px;
        border-top: 1px solid #dcdcdc;/*no*/
        font-size: 0;
        background: #ffffff;
        z-index: 10;
    }

    .nav-position {
        width: 750px;
        height: 120px;
    }

    .nav-bar > a {
        text-decoration: none;
        color: #a0a0a0;
        display: inline-block;
        width: 187.5px;
        box-sizing: border-box;
        text-align: center;
        font-size: 24px;
    }

    .nav-bar > a i {
        font-size: 40px;
        display: block;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    .nav-bar > a.active {
        color: #008ae1;
    }

</style>

