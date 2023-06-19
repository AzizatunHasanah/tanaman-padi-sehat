import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from "../views/templates/template-creator";
import favoritePenyakitIdb from "../data/favorite-penyakit-idb";

const LikeButtonPresenter = {
  async init({ likeButtonContainer, penyakit }) {
    this._likeButtonContainer = likeButtonContainer;
    this._penyakit = penyakit;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._penyakit;

    if (await this._isPenyakitExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isPenyakitExist(id) {
    const penyakit = await favoritePenyakitIdb.getPenyakit(id);
    return !!penyakit;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await favoritePenyakitIdb.putPenyakit(this._penyakit);
      this._renderButton(this._penyakit);
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await favoritePenyakitIdb.deletePenyakit(this._penyakit.id);
      this._renderButton(this._penyakit);
    });
  },
};

export default LikeButtonPresenter;
