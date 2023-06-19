const createPenyakitDetailTemplate = (data) => `
<h2 class="penyakit__title">${data.nama_penyakit}</h2>
  <img class="penyakit__poster" src="${data.gambar}" alt="${data.nama_penyakit}" />
  <div class="penyakit__info">
    <h4>Deskripsi</h4>
    <p>${data.deskripsi}</p>
  </div>
  <div class="penyakit__overview">
    <h3>Gejala</h3>
    <p>${data.gejala}</p>
    <h3>Cara Mengatasi</h3>
    <p>${data.cara_mengatasi}</p>
  </div>`;

const createPenyakitTemplate = (data) => `
  <div class="penyakit-item">
    <div class="penyakit-item__header">
      <img class="penyakit-item__header__poster" alt="${data.nama_penyakit}"
           src="${data.gambar}">
    </div>
    <div class="penyakit-item__content">
      <h5><a href="/#/detail/${data.id}">${data.nama_penyakit}</a></h5>
      <p>${data.deskripsi}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like" onclick="alert('Berhasil menyimpan restaurant ke daftar favorit.')">
    <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like" onclick="alert('Berhasil menghapus restaurant dari daftar favorit.')">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createPenyakitDetailTemplate,
  createPenyakitTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
