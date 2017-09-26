<template>
  <panel title="Songs">
    <router-link to="home" slot='action' class="song-button">
      <v-btn class="light-green lighten-2" medium fab>
        <v-icon>
          add
        </v-icon>
      </v-btn>
    </router-link>
    <div :key="song.id" class="song" v-for="song in songs">
      <v-layout row>
        <v-flex xs6>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>
          <router-link :to="{name: 'song', params: {songId: song.id}}" class="light-green lighten-2 btn">
            View
          </router-link>
          <router-link :to="{name: 'song/edit', params: {songId: song.id}}" class="light-green lighten-2 btn">
            Edit
          </router-link>
        </v-flex>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" alt="">
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongService'

export default {
  data() {
    return {
      'songs': null
    }
  },
  async mounted() {
    const response = await SongsService.index()
    this.songs = response.data
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler(value) {
        const response = await SongsService.index(value)
        this.songs = response.data
      }
    }
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
  height: 310px;
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
