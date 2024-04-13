import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://sversys.store',
})

export default instance
