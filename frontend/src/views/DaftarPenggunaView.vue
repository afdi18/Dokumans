<template>
  <content-header title="Daftar Pengguna" />
  <content>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Daftar Pengguna</h3>

            <div class="card-tools">
              <div class="input-group input-group-sm" style="width: 150px">
                <input
                  type="text"
                  name="table_search"
                  class="form-control float-right"
                  placeholder="Search"
                />

                <div class="input">
                  <button type="submit" class="btn btn-default">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="card-body table-responsive p-0" style="height: 300px">
            <!-- {{ content }} -->
            <table class="table table-head-fixed table-hover text-nowrap">
              <thead>
                <tr>
                  <th class="text-center">No</th>
                  <th class="text-center">Nama Pengguna</th>
                  <th class="text-center">Username</th>
                  <th class="text-center">Hak</th>
                  <th class="text-center">Tindakan</th>
                </tr>
              </thead>
              <tbody v-if="content.length > 0">
                <tr v-for="(data, index) in content" :data="data" :key="data.id_user">
                  <td class="text-center">{{ index + 1 }}</td>
                  <td class="text-center">{{ data.nama }}</td>
                  <td class="text-center">{{ data.uname }}</td>
                  <td class="text-center">{{ data.id_hak }}</td>
                  <td class="text-center">
                    <Button class="btn btn-info btn-sm" @click="editUser()"
                      ><i class="fa fa-edit"></i></Button
                    > <Button class="btn btn-danger btn-sm" @click=""
                      ><i class="fa fa-trash"></i
                    ></Button>
                  </td>
                </tr>
              </tbody>
              <tbody v-else></tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
    </div>
  </content>
  <div class="modal fade" id="pengguna" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel">Edit Data Pengguna</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                <div class="row">
                  <!-- main product -->
                  <div class="col-md-8">
                    <div class="form-group">
                      <input type="text" placeholder="Product Name"  class="form-control">
                    </div>

                    <div class="form-group">
                    </div>
                  </div>
                  <!-- product sidebar -->
                  <div class="col-md-4">
                    <h4 class="display-6">Product Details</h4>
                    <hr>

                    <div class="form-group">
                      <input type="text" placeholder="Product price"  class="form-control">
                    </div>

                    <div class="form-group">
                      <input type="text" placeholder="Product tags"  class="form-control">
                      
                      <div  class="d-flex">
                        <p >
                            <span class="p-1"></span>
                        </p>

                      </div>
                    </div>


                    <div class="form-group">
                      <label for="product_image">Product Images</label>
                      <input type="file"  class="form-control">
                    </div>

                    <div class="form-group d-flex">
                      <div class="p-1" >
                          <div class="img-wrapp">
                              <img  alt="" width="80px">
                              <span class="delete-img" >X</span>
                          </div>
                      </div>
                    </div>

                  </div>
                </div>




            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button @click="" type="button" class="btn btn-primary" >Save changes</button>
              <button @click="" type="button" class="btn btn-primary" >Apply changes</button>
            </div>
          </div>
        </div>
      </div>

</template>

<script>
import UserService from "../services/user-service";
import store from "../store";


export default {
  name: "Home",
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
    UserService.getUsers().then(
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
    editUser(){
      $('#pengguna').modal('show');

    }
  },
};
</script>
