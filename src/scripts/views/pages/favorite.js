import favoritePenyakitIdb from '../../data/favorite-penyakit-idb';
import { createPenyakitTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="fav-penyakit">
          <h2 class="content__heading">Favorites</h2>
          <div id="fav-card" class="penyakits"></div>
      </div>
    `;
  },

  async afterRender() {
    const data = await favoritePenyakitIdb.getAllPenyakits();
    const penyakitContainer = document.querySelector('#fav-card');

    if (data.length > 0) {
      data.forEach((penyakit) => {
        penyakitContainer.innerHTML += createPenyakitTemplate(penyakit);
      });
    }
  },
};

export default Favorite;
