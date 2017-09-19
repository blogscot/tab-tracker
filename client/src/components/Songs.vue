<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
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

</style>
