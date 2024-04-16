import { APIURL } from '#/config';
import { Constant } from '#/constant';
import { Axios } from '#/packages';

global.cancel = [];
/* istanbul ignore next */
const APICaller = async (endPoint, method, token, body, params = '') => {
  const url =
    endPoint === 'upload'
      ? `https://dev.api.merchant.gosparsh.com/v1/files/${endPoint}`
      : `${APIURL}${endPoint}`;

  const headers = {
    'Content-Type':
      endPoint === 'upload' ? 'multipart/form-data' : 'application/json',
  };

  if (token) {
    headers.Authorization = `${token}`;
  }

  const axiosConfig = {
    method: method || 'get',
    url: url,
    data: body,
    headers: headers,
    timeout: Constant.requestTimeout,
    responseType: 'json',
    params: params,
  };

  if (body === '') {
    delete axiosConfig.data;
  }

  if (params === '') {
    delete axiosConfig.params;
  }

  return Axios(axiosConfig)
    .then((response) => response)
    .catch((error) => ({
      data: error.response.data,
      status: error.response.status,
    }));
};

export { APICaller };
