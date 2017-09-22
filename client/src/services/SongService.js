import Api from '@/services/Api'

export default {
  index() {
    return Api().get('songs')
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
