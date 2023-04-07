import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://private-bbbe9-blissrecruitmentapi.apiary-mock.com',
})
