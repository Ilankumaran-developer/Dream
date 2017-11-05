const Axios  = require('axios');
const url = require('./urls.json');

export const  API = Axios.create({baseURL:url.localURL,withCredentials:true});
