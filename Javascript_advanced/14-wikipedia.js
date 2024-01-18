function createElement(data) {
  const para = document.createElement('p');
  const text = document.createTextNode(data);
  para.appendChild(text);
  document.body.appendChild(para);
}

function queryWikipedia(callback) {
  let xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'
  );
  xhr.responseType = 'json';
  xhr.send();
  xhr.onload = function () {
    callback(xhr.response.query.pages[21721040].extract);
  };
  xhr.onerror = function () {
    alert('Request failed');
  };
}

queryWikipedia(createElement);
