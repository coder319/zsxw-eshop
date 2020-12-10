<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="cm_content">
      <div class="cm_main">

      </div>
    </div>
    <cm_footer></cm_footer>
  </div>
</template>

<script>
import navBar from "../../assets/component/NavBar"
import cm_footer from "../../assets/component/Footer"
export default {
  name: 'Home',
  components: {
    navBar,cm_footer
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods:{
  }
}
</script>
<style lang="less">

</style>
