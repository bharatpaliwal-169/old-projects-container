
import { getHeader } from '../../utills/Utils'
import { BASE_URL } from '../apiManager/ApiEndpoints'

const ApiFetch = {
  /// For Api get use this
  fetchGet: function (url) {
    let headers = getHeader();
    console.log(
      'get url ==>>>' + BASE_URL + url,
      'headers =>>>',
      headers,
    );
    return fetch(BASE_URL + url, {
      method: 'GET',
      headers: headers,
    })
      .then(response => {return response.json()})
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.log('error=>>>', error);
      });
  },
  // for Api Post use this
  fetchPost: function (url, body) {
    let headers = getHeader();
    console.log(
      'url ==>>',
      BASE_URL + url,
      '  body==',
      body,
      'headers=>>>',
      headers,
    );

    return fetch(BASE_URL + url, {
      method: 'POST',
      headers: headers,
      body: body,
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("Api Response=====>", responseJson);
        return responseJson;
      })
      .catch(error => {
        console.log('Error', error);
      });
  },
  fetchPut: function (url, body) {
    let headers = getHeader();
    console.log(
      'url ==>>',
      BASE_URL + url,
      '  body==',
      body,
      'headers=>>>',
      headers,
    );

    return fetch(BASE_URL + url, {
      method: 'PUT',
      headers: headers,
      body: body,
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("Api Response=====>", responseJson);
        return responseJson;
      })
      .catch(error => {
        console.log('Error', error);
      });
  },

  fetchDelete: function (url, body) {
    let headers = getHeader();
    console.log(
      'url ==>>',
      BASE_URL + url,
      '  body==',
      body,
      'headers=>>>',
      headers,
    );

    return fetch(BASE_URL + url, {
      method: 'DELETE',
      headers: headers,
      body: body,
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("Api Response=====>", responseJson);
        return responseJson;
      })
      .catch(error => {
        console.log('Error', error);
      });
  },

  futch: function(url, opts={}, onProgress){
    console.log(BASE_URL + url, opts)
    const urlToCall = BASE_URL + url
    return new Promise((res, rej) => {
      var xhr = new XMLHttpRequest();
      xhr.open(opts.method || 'get', urlToCall);
      for (var k in opts.headers || {})
          xhr.setRequestHeader(k, opts.headers[k]);
      xhr.onload = e => res(e.target);
      xhr.onerror = rej;
      if (xhr.upload && onProgress)
          xhr.upload.onprogress = onProgress; // event.loaded / event.total * 100 ; //event.lengthComputable
      xhr.send(opts.body);
  });

  }

};
export default ApiFetch
