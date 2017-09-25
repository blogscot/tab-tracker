import Api from '@/services/Api'

export default {
  index(params) {
    console.log(params)
    return Api().get('bookmark', { params })
  },
  post(params) {
    return Api().post('bookmark', params)
  },
  delete(params) {
    return Api().post('bookmark/delete', params)
  }
}
