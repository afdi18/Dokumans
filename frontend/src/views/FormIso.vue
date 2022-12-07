<template>
  <content-header title="Input Dokumen ISO9001" />
  <content>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Jenis :</h3>
            <form @submit.prevent="pilihJenis">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <select v-model="selected">
                      <option v-for="option in options" :value="option.value">
                        {{ option.text }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="card-body">
            <div class="row text-danger" v-if="selected === ''">
              Pilih jenis dokumen ISO9001 yang akan diupload.
            </div>
            <div class="row" v-else>
              <form action="">
                <div class="form-group">
                  <label for="nodok">No Dokumen</label>
                  <input type="text" class="form-control" name="nodok" id="nodok" />
                </div>
                <div class="form-group">
                  <label for="judul">Judul</label>
                  <input
                    type="text"
                    class="form-control"
                    id="judul"
                    placeholder="Judul"
                  />
                </div>
                <div class="form-group">
                  <label for="revisi">Revisi</label>
                  <input
                    type="text"
                    class="form-control"
                    id="revisi"
                    placeholder="Revisi"
                  />
                </div>
                <date-pick
        v-model="date"
        :format="'YYYY.MM.DD'"
    ></date-pick>
                <div class="form-group">
                  <label>Tgl Terbit:</label>
                    <div class="input-group date" id="reservationdate" data-target-input="nearest">
                        <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate"/>
                        <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                            <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                  <label for="ket">Keterangan</label>
                  <input
                    type="text"
                    class="form-control"
                    id="ket"
                    placeholder="Keterangan"
                  />
                </div>
                <div class="form-group">
                  <label for="file">File Dokumen</label>
                  <div class="input-group">
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="file"
                      />
                      <label class="custom-file-label" for="file"
                        >Pilih file</label
                      >
                    </div>
                    <div class="input-group-append">
                      <span class="input-group-text">Upload</span>
                    </div>
                  </div>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Check me out</label
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </content>
</template>

<script>
import DatePick from 'vue-date-pick';

export default {
  component:{ DatePick },
  data() {
    return {
      date: null,
      selected: "",
      options: this.$store.state.jenisDok,
      date: new Date(),
    };
  },
  methods: {
    pilihJenis() {
      if (selected === "") {
      }
    },
  },
};
</script>
