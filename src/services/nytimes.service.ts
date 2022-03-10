import axios, { AxiosInstance } from 'axios'
import { SearchRequest } from '../store/articleSlice'
interface INyTimesService {
  api: AxiosInstance;
  articleSearch: Function;
}

class NyTimes implements INyTimesService {
  api = axios.create({
    baseURL: process.env.REACT_APP_NYT_API,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  articleSearch(params: SearchRequest) {
    return this.api.get(`/articlesearch.json?q=${params.q}&page=${params.page}&api-key=${process.env.REACT_APP_API_KEY}`)
  }
}

export default new NyTimes()