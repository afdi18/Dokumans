import { createStore } from 'vuex'

import { auth } from './auth-module.js'
// import { doku } from './doku-module.js'
// import { user } from './user-module.js'

export default createStore({
  state: {
    app: {
      name: 'Dokumen Manajemen Sistem',
      shortname: 'DokuManS'
    },
    jenisDok: [
      { text: "Manual", value: "M" },
      { text: "Prosedur", value: "P" },
      { text: "Instruksi Kerja", value: "I" },
      { text: "Formulir", value: "F" }
    ],
    jenisArsip: [
      { text: "ISO 9001", value: "iso" },
      { text: "SMK3", value: "smk" },
      { text: "Surat", value: "srt" },
      { text: "Sertifikat", value: "stf" }
    ],
    token: ''
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,

  }
})
