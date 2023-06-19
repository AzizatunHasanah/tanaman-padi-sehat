import { openDB } from "idb";
import { async } from "regenerator-runtime";
import CONFIG from "../globals/config";

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: "id" });
  },
});

const favoritePenyakitIdb = {
  async getPenyakit(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllPenyakits() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putPenyakit(penyakit) {
    // eslint-disable-next-line no-prototype-builtins
    if (!penyakit.hasOwnProperty("id")) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return (await dbPromise).put(OBJECT_STORE_NAME, penyakit);
  },
  async deletePenyakit(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default favoritePenyakitIdb;
