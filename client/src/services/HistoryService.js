import Api from '@/services/Api'

export default {
  index(params) {
    return Api().get('history', { params })
  },
  post(params) {
    return Api().post('history', params)
  }
}
