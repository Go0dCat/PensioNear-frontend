import axios from 'axios'

//currently not able to access this. 

//import:
//import service from "@/services/index.js";

//reach baseURL:
//service().defaults.baseURL;


export default() => {
  return axios.create({
    baseURL: `https://ancient-spire-37013.herokuapp.com/`
  })
}

