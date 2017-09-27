<template>
  <v-container fluid>
    <v-layout row>
      <v-flex v-if="isUserLoggedIn" class="pr-2">
        <bookmarks class="mb-2" />
        <history />
      </v-flex x6>
      <v-flex :class="{
          xs12: !isUserLoggedIn,
          xs6: isUserLoggedIn
        }">
        <songs-search />
        <songs-panel class="mt-2" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import SongsPanel from './SongsPanel'
import SongsSearch from './SongsSearch'
import Bookmarks from './Bookmarks'
import History from './History'

export default {
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  components: {
    SongsPanel,
    SongsSearch,
    Bookmarks,
    History
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
