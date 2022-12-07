<template>
  <content-header title="Daftar Rekaman" />
  <content>
    <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Daftar Dokumen</h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-body table-responsive p-0" style="height: 300px;">
                <table class="table table-head-fixed table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th class="text-center">No</th>
                      <th class="text-center">Tanggal</th>
                      <th class="text-center">No. Dokumen</th>
                      <th class="text-center">Judul Dokumen</th>
                      <th class="text-center">Jenis</th>
                      <th class="text-center">Kategori</th>
                      <th class="text-center">Keterangan</th>
                      <th class="text-center">Tindakan</th>
                    </tr>
                  </thead>
                  <tbody v-if="content.length > 0">
                <tr v-for="(data, index) in content" :data="data" :key="data.id_doku">
                  <td class="text-center">{{ index + 1 }}</td>
                  <td class="text-center">{{ data.tgl_terbit }}</td>
                  <td class="text-center">{{ data.no_doku }}</td>
                  <td class="text-center">{{ data.judul }}</td>
                  <td class="text-center">{{ data.jenis }}</td>
                  <td class="text-center">{{ data.kategori }}</td>
                  <td class="text-center">{{ data.keterangan }}</td>
                  <td class="text-center">
                    <Button class="btn btn-info btn-sm" @click="lihatDok()"
                      ><i class="fa fa-eye"></i></Button
                    > 
                  </td>
                </tr>
              </tbody>
              <tbody v-else></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

  </content>

</template>

<script>
import DokuService from "../services/doku-service";
import store from "../store";


export default {
  name: "datadok",
  data() {
    return {
      content: {
        type: Array,
        default() {
          return [];
        },
      },
      userdata:[]
    };
  },
  beforeMount(){
    store.dispatch('auth/token');
  },
  mounted() {
    console.log()
    DokuService.getDataDokumen().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
  methods: {
lihatDok(){
  $('#pengguna').modal('show');
}
  },
};
</script>
