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
        <router-link :to="{name: 'song/edit', params: {songId: song.id}}" class="light-green lighten-2 btn">
          Edit
        </router-link>

        <v-btn v-if="isUserLoggedIn" @click="toggleBookmark" class="light-green lighten-2 btn">
          {{ isBookmarked ? 'bookmarked' : 'bookmark'}}
        </v-btn>

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
import { mapState } from 'vuex'
import BookmarkService from '@/services/BookmarkService'

export default {
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  data() {
    return {
      isBookmarked: false
    }
  },
  props: [
    'song'
  ],
  methods: {
    async toggleBookmark() {
      const params = {
        userId: this.user.id,
        songId: this.song.id
      }
      if (!this.isBookmarked) {
        await BookmarkService.post(params)
      } else {
        await BookmarkService.delete(params)
      }
      this.isBookmarked = !this.isBookmarked
    }
  },
  watch: {
    async song() {
      if (this.isUserLoggedIn) {
        const response = await BookmarkService.index({
          userId: this.user.id,
          songId: this.song.id
        })
        const bookmark = response.data
        console.log(bookmark)
        this.isBookmarked = !!bookmark
      }
    }
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
</style>
