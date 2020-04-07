import axios from 'axios'
import config from './config.js'

function handlerResponse(response) {
  return response.data
}

function Get(path, params) {
  return axios.get(config.host + path, {params: params}).then((response) => {
    return handlerResponse(response)
  }).catch((error) => {
  })
}

function Post(path, params) {
  return axios.post(config.host + path, params).then((response) => {
    return {data: response.data}
  }).catch((error) => {
  })
}

export default {
  Get,
  Post
}
