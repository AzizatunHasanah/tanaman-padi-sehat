import UrlParser from "../../routes/url-parser";
import DataDbSource from "../../data/datadb-source";
import { createPenyakitDetailTemplate } from "../templates/template-creator";
import LikeButtonPresenter from "../../utils/like-button-presenter";

const Detail = {
  async render() {
    return `
    <div id="penyakit" class="penyakit"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const penyakit = await DataDbSource.detailPenyakit(url.id);
    const penyakitContainer = document.querySelector("#penyakit");
    penyakitContainer.innerHTML = createPenyakitDetailTemplate(penyakit);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      penyakit: {
        id: penyakit.id,
        nama_penyakit: penyakit.nama_penyakit,
        gejala: penyakit.gejala,
        deskripsi: penyakit.deskripsi,
        cara_mengatasi: penyakit.cara_mengatasi,
        gambar: penyakit.gambar,
      },
    });
  },
};

export default Detail;
