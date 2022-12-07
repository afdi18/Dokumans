<template>
      <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-user"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right">
          <a href="#" class="dropdown-item">
            <i class="fas fa-user mr-2"></i> My Profile
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" @click.prevent="logOut">
            <i class="fas fa-sign-out mr-2"></i> Log Out
          </a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <!-- <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
          <i class="fas fa-th-large"></i>
        </a>
      </li> -->
    </ul>
  </nav>
</template>

<script>
import store from "../../../store";

export default {
  // computed: {
  //   currentUser() {
  //     return this.$store.state.auth.user;
  //   },
  //   showAdminBoard() {
  //     if (this.currentUser && this.currentUser['roles']) {
  //       return this.currentUser['roles'].includes('ROLE_ADMIN');
  //     }

  //     return false;
  //   },
  //   showModeratorBoard() {
  //     if (this.currentUser && this.currentUser['roles']) {
  //       return this.currentUser['roles'].includes('ROLE_MODERATOR');
  //     }

  //     return false;
  //   }
  // },
  methods: {
    logOut() {
      store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>