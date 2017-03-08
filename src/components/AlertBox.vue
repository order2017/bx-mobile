<template>
    <div id="alertbox" v-bind:class="{showalert : this.$store.state.alertBox.showBox}">
        {{this.$store.state.alertBox.options.Message}}
    </div>
</template>
<style>
    #alertbox {
        position: fixed;
        top:50%;
        left:50%;
        width:489px;
        max-height: 700px;
        background-color: rgba(0, 0, 0, 0.76);
        padding:33px 55px;
        color: #ffffff;
        text-align: center;
        font-size: 33px;
        z-index: 999;

        -webkit-border-radius:10px;
        -moz-border-radius:10px;
        border-radius:10px;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

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
    #alertbox.showalert {
        -webkit-transform: translate(-50%, -50%) scale(1, 1);
        -moz-transform: translate(-50%, -50%) scale(1, 1);
        -ms-transform: translate(-50%, -50%) scale(1, 1);
        -o-transform: translate(-50%, -50%) scale(1, 1);
        transform: translate(-50%, -50%) scale(1, 1);
    }
</style>
