import axios from "axios";

axios.defaults.baseURL = 'https://moments-app-api-f55e67a631c8.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true