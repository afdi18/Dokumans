<template>
<div class="wrapper">
  <NavBar/>

  <SideBar :sideBarItems="sideBarItems"></SideBar>

  <div class="content-wrapper">
    <router-view />
  </div>

  <Footer></Footer>

  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>

</div>
</template>

<script>
import NavBar from "./include/NavBar.vue";
import SideBar from "./include/SideBar.vue";
import Footer from "./include/Footer.vue";
import sideBarItems from "../../lib/sideBarItems.js";

export default {
  data () {
    return {
      sideBarItems : sideBarItems
    }
  },
  created () {

  },
  components: {
    NavBar,
    SideBar,
    Footer
  }
}

</script>

