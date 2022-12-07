<template>
  <content-header title="Dashboard" />
  <content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box bg-info">
            <div class="inner">
              <h3>1</h3>

              <p>Dokumen ISO9001</p>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <a href="#" class="small-box-footer"
              >More info <i class="fas fa-arrow-circle-right"></i
            ></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box bg-success">
            <div class="inner">
              <h3>0<sup style="font-size: 20px"></sup></h3>

              <p>Dokumen SMK3</p>
            </div>
            <div class="icon">
              <i class="ion ion-stats-bars"></i>
            </div>
            <a href="#" class="small-box-footer"
              >More info <i class="fas fa-arrow-circle-right"></i
            ></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box bg-warning">
            <div class="inner">
              <h3>0</h3>

              <p>Dokumen Arsip</p>
            </div>
            <div class="icon">
              <i class="ion ion-person-add"></i>
            </div>
            <a href="#" class="small-box-footer"
              >More info <i class="fas fa-arrow-circle-right"></i
            ></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box bg-danger">
            <div class="inner">
              <h3>0</h3>

              <p>Dokumen Expired</p>
            </div>
            <div class="icon">
              <i class="ion ion-pie-graph"></i>
            </div>
            <a href="#" class="small-box-footer"
              >More info <i class="fas fa-arrow-circle-right"></i
            ></a>
          </div>
        </div>
        <!-- ./col -->
        <BarchartVue></BarchartVue>
      </div>
    </div>
  </content>
</template>

<!-- <script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->

<script>
  import BarchartVue from "../components/chart/Barchart.vue";
export default {
  components: {BarchartVue},
  beforeMount() {
    $("body").removeClass("login-page").addClass("sidebar-mini");
  },
};
</script>
