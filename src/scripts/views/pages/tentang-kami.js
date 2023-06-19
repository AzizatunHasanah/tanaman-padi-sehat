const Tentangkamis = {
  tentangkamiList: [
    {
      nama: 'Adinda Camila',
      jabatan: 'Mahasiswa Univ Esa Unggul',
      DID: 'F079YB241',
      image:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIfEcNVjTdougM1iRL6sFqgvCA5hgEsHgPcPGn40pWSfHHU4DYm6yYRpEN45J_V-br96Xa8EgQAn6UNkMaFaoZfbcld_btubWrQCA-DgM7BLOWcYO_9LksuBp7BKIq_RzWMxSFmUuDh05hEG-DqOmgPRBLQLxLGewQdwmLh3u3z3O6YnhAHeac9T2cLmtv/s320/Adinda.png', // Tambahkan properti 'image' dengan URL gambar pertama
    },
    {
      nama: 'Azizatun Hasanah',
      jabatan: 'Mahasiswa Politeknik Negeri Jember',
      DID: 'F004YB252',
      image:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj96is8fFRHx4dbrZni2hUXnYmxbiA-_yBNzljgTsl-AzshZfoSLIwM8ZZ3bStXrfIJapvTWvyA2zWbjmEWcteRUq_fP9fLYrktxbs8FPG6DK9zRPANjUM47-_dIMjIxcTa-FFCLnk4aT1tUDKm9px_WAMpNZkaw77Z_Id6c9agURna-NfYVBfsNktzcsRy/s320/Azizah.png', // Tambahkan properti 'image' dengan URL gambar kedua
    },
    {
      nama: 'Gilang Fatahilah Akbar',
      jabatan: 'Mahasiswa STMIK Bani Saleh',
      DID: 'F076XB127',
      image:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifXDLLN3uBwM8pBzWBavN5TIftvBeVFFsevasJ9Maub1nWr2u79-_1mQAxRYY-NLJZFSYEoAtUfhgB4UWPFE7AVtDIbPWvvykYCiObU918FEtgxlumFL9EFBhm_NqJBtcyDXksdiFIdY8InGeJedT6OzlLfDS5Tsd8-56CjVEiFDv409Yj9G4ju67xq2d6/s320/Gilang.png', // Tambahkan properti 'image' dengan URL gambar ketiga
    },
    {
      nama: 'Sevtia Ardana Putri',
      jabatan: 'Mahasiswa Univ Esa Unggul',
      DID: 'F079YB370',
      image:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOKJyYAbuZVp-bIyeebQhLrXI23nrmEHYIbP_ZXpi-FefDcjHGJhTYY6qgjm-hybuTp6dZkjmLZh6YsJGvjQvXaD13zvye6LtzQDXquWCk9iBByLJ-Lgz1rxn5RuXl2r5IhbbfyRUZpjh2pR1oK4lbL37sWDl3Wr87pB4LbsQNQeyTyITF9InUl1wgBnvU/s320/Putri.png', // Tambahkan properti 'image' dengan URL gambar keempat
    },
  ],

  async render() {
    let tentangkamisHtml = '<h2>Meet Our Team</h2>';
    tentangkamisHtml += '<div class="tentangkami-list">';

    this.tentangkamiList.forEach((tentangkami) => {
      tentangkamisHtml += `
        <div class="tentangkami">
          <div class="tentangkami-image" style="background-image: url(${tentangkami.image})"></div>
          <div>
            <h3>${tentangkami.nama}</h3>
            <h4>${tentangkami.jabatan}</h4>
            <p>${tentangkami.DID}</p>
          </div>
        </div>
      `;
    });

    tentangkamisHtml += '</div>';
    return tentangkamisHtml;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Tentangkamis;
