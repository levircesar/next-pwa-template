import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/users/levircesar'
  //'http://localhost:3333/'
  //'https://vercel-api-phi.vercel.app/api/'
  //'https://testeserverproffy.herokuapp.com/'
})

export const apiCantadas = axios.create({
  baseURL: 'https://levirlemos.online/utils/Cantadas/'
})
