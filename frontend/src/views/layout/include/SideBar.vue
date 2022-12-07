<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="/dashboard" class="brand-link">
      <img
        src="/adminlte/dist/img/AdminLTELogo.png"
        :alt="$store.state.app.name"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">{{
        $store.state.app.shortname
      }}</span>
    </a>

    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            src="/adminlte/dist/img/user2-160x160.jpg"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <a href="#" class="d-block">Administrator</a>
        </div>
      </div>

      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <SideItem
            v-for="(item, index) in sideBarItems"
            :data="item"
            :key="index"
            :type="item.type"
            :isHeader="item.isHeader"
            :icon="item.icon"
            :name="item.name"
            :items="item.items"
            :router="item.router"
            :link="item.link"
          ></SideItem>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
import SideItem from "./SideItem.vue";

export default {
  name: "sidebar",
  props: {
    sideBarItems: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      content: "",
    };
  },
  create() {},
  components: {
    SideItem,
  },
};
</script>
