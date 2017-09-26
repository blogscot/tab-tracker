import Api from '@/services/Api'

export default {
  index(params) {
    return Api().get('bookmark', { params })
  },
  post(params) {
    return Api().post('bookmark', params)
  },
  delete(bookmarkId) {
    return Api().delete(`bookmark/${bookmarkId}`)
  }
}
