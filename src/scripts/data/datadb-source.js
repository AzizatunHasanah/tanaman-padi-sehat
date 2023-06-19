import API_ENDPOINT from '../globals/api-endpoint';

class DataDbSource {
  static async tentangPadi() {
    const response = await fetch(API_ENDPOINT.DATA);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailPenyakit(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJSON = await response.json();
    return responseJSON;
  }
}

export default DataDbSource;
