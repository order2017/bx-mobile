<template>
    <div>
        <div id="activity-body">
            <img class="activity-body-building" src="../assets/images/building.jpg">
        </div>
        <main-menu></main-menu>
    </div>
</template>
<style>
    .activity-body-building {
        width: 100%;
    }
</style>
<script>
import MainMenu from '../components/MainMenu.vue'
  export default{
    data () {
      return {
      }
    },
    components:{
         'main-menu':MainMenu,
     }
  }

</script>
