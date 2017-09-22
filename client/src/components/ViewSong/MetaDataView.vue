<template>
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
</template>

<script>
export default {
  props: [
    'song'
  ]
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
</style>
