import CONFIG from './config';

const API_ENDPOINT = {
  DATA: `${CONFIG.BASE_URL}/data`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/data/${id}`,
};

export default API_ENDPOINT;
