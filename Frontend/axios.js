import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://45.12.238.189:4000',
})

export default instance
