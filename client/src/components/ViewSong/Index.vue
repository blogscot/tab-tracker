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

    <v-layout>
      <router-link :to="{name: 'song/edit', params: {songId: song.id}}" class="light-green lighten-2 btn">
        Edit
      </router-link>
    </v-layout>

  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import MetaData from './MetaDataView'
import Tab from './TabView'
import Lyrics from './LyricsView'
import YouTube from './YouTubeView'
import SongService from '@/services/SongService'
import HistoryService from '@/services/HistoryService'

export default {
  data() {
    return {
      song: {
        id: 0
      }
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'route'
    ])
  },
  async mounted() {
    const songId = this.route.params.songId
    const response = await SongService.show(songId)
    this.song = response.data

    if (this.isUserLoggedIn) {
      HistoryService.post({
        songId: songId
      })
    }
  },
  components: {
    MetaData,
    Tab,
    Lyrics,
    YouTube
  }
}
</script>

