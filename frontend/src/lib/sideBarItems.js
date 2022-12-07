module.exports= [
  {
    type: 'item',
    isHeader: true,
    name: 'MAIN NAVIGATION'
  },
  {
    type: 'item',
    icon: 'fas fa-tachometer-alt',
    name: 'Dashboard',
    router: {
      name: '/dashboard'
    }
  },
  {
    type: 'tree',
    icon: 'fas fa-copy',
    name: 'Input Dokumen',
    link: '/input',
    items: [
      {
        type: 'item',
        icon: 'fa fa-edit',
        name: 'ISO 9001',
        router: {
          name: '/input/dok-iso'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-edit',
        name: 'SMK3',
        router: {
          name: '/input/dok-smk3'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-edit',
        name: 'ARSIP',
        router: {
          name: '/input/dok-arsip'
        }
      },
    ]
  },  
  {
    type: 'item',
    icon: 'fas fa-th',
    name: 'Daftar Rekaman',
    router: {
      name: '/daftar-rekaman'
    }
  },
  {
    type: 'item',
    isHeader: true,
    name: 'SETTINGS'
  },
  {
    type: 'item',
    icon: 'fas fa-user',
    name: 'Daftar Pengguna',
    router: {
      name: '/daftar-pengguna'
    }
  },
]
