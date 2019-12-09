const axios = require('axios')

const instance = axios.create({
  // baseURL: 'http://35.185.181.180'
  baseURL: 'http://localhost:3000'

})

module.exports = instance