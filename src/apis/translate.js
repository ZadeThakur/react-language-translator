import axios from 'axios';

const KEY = 'trnsl.1.1.20190223T171247Z.4a0c835d313bb56d.752973d3b5c33c4c7ca3eae05a877460ca6ead52';
export default axios.create({
  baseURL: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
  params: {
    key:KEY
  }
});
