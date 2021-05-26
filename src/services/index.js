import axios from 'axios'

//currently not able to access this. 

export default() => {
  return axios.create({
    baseURL: `https://ancient-spire-37013.herokuapp.com/`
  })
}