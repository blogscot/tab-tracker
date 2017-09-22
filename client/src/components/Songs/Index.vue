<template>
  <v-container fluid>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <songs-search />
        <songs-panel :songs="songs" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SongsService from '@/services/SongService'
import SongsPanel from './SongsPanel'
import SongsSearch from './SongsSearch'
export default {
  components: {
    SongsPanel,
    SongsSearch
  },
  data() {
    return {
      songs: null
    }
  },
  async mounted() {
    const response = await SongsService.index()
    this.songs = response.data
  }
}
</script>

<style scoped>
.song-button {
  text-decoration: none;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}

.song {
  padding: 20px;
  height: 440px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 22px;
}

.song-genre {
  font-size: 24px;
}

.album-image {
  width: 80%;
  margin: 0 auto;
}
</style>
