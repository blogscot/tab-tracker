<template>
  <v-container fluid>

    <v-layout row>
      <v-flex xs6>
        <panel title="Song Metadata">

          <v-layout class="song" v-if="song">
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="headline">
                {{song.genre}}
              </div>
            </v-flex>
            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl" alt="">
              <p class="text-xs-center title">
                {{song.album}}
              </p>
            </v-flex>
          </v-layout>

        </panel>
      </v-flex>
      <v-flex xs6 v-if="song" class="ml-2">
        <panel title="Tab">
          <textarea class="textarea" label="Tab" multi-line v-model="song.tab" />
        </panel>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import SongsService from '@/services/SongService'
import Panel from '@/components/Panel'

export default {
  data() {
    return {
      song: null
    }
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId
    const response = await SongsService.show(songId)
    this.song = response.data
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 500px;
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
  width: 90%;
  margin: 0 auto;
}

.textarea {
  width: 100%;
  height: 500px;
  font-family: monospace;
}
</style>
