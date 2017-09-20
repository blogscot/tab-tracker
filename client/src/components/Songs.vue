<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <router-link to="home" slot='action' class="song">
          <v-btn class="light-green lighten-2" small medium fab>
            <v-icon>
              add
            </v-icon>
          </v-btn>
        </router-link>
        <div :key="song.id" v-for="song in songs">
          Song: {{song.title}} Artist: {{song.artist}} Album: {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
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
.song {
  text-decoration: none;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
