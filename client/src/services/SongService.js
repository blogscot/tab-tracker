import Api from '@/services/Api'

export default {
  index(search) {
    return Api().get('songs', {
      params: { search }
    })
  },
  show(songId) {
    return Api().get(`songs/${songId}`)
  },
  post(song) {
    return Api().post('songs', song)
  },
  update(songId, song) {
    return Api().post(`song/${songId}`, song)
  }
}
