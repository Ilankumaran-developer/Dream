const Axios  = require('axios');
const url = require('./url.json');

export const  API = Axios.create({baseURL:url.liveURL,withCredentials:true});
