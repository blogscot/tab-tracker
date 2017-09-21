<template>
  <v-container fluid>

    <v-layout row>
      <v-flex xs6>
        <meta-data :song="song" />
      </v-flex>

      <v-flex v-if="song" xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex v-if="song" xs6 class="mt-2">
        <Lyrics :lyrics="song.lyrics" />
      </v-flex>

      <v-flex xs6 v-if="song" class="ml-2 mt-2">
        <tab :tab="song.tab" />
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import SongsService from '@/services/SongService'
import Panel from '@/components/Panel'
import MetaData from './MetaDataView'
import Tab from './TabView'
import Lyrics from './LyricsView'
import YouTube from './YouTubeView'

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
    Panel,
    MetaData,
    Tab,
    Lyrics,
    YouTube
  }
}
</script>

<style scoped>

</style>
