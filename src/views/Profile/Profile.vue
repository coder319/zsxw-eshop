<template>
  <div>
    <nav-bar></nav-bar>
    <div class="cm_content">
      <div class="cm_main">

      </div>
    </div>
    <cm_footer></cm_footer>
  </div>
</template>

<script>
import navBar from "components/NavBar"
import cm_footer from "components/Footer"
export default {
  name: "Profile",
  components:{
    navBar,cm_footer
  },
  data () {
    return {
    };
  }
}
</script>

<style lang="less">
</style>
