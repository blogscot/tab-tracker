<template>
  <div>
    <v-layout>
      <v-flex xs4>
        <panel title='Song Metadata'>
          <v-text-field type="text" v-model="song.title" label="Title" />
          <v-text-field type="text" v-model="song.artist" label="Artist" />
          <v-text-field type="text" v-model="song.genre" label="Genre" />
          <v-text-field type="text" v-model="song.album" label="Album" />
          <v-text-field type="text" v-model="song.albumImageUrl" label="Album Image Url" />
          <v-text-field type="text" v-model="song.youtubeId" label="YouTube Id" />
        </panel>
      </v-flex>
      <v-flex xs8>
        <panel title='Song Structure' class='ml-2'>
          <v-text-field type="text" v-model="song.lyrics" label="Lyrics" multi-line/>
          <v-text-field type="text" v-model="song.tab" label="Tab" multi-line/>
        </panel>
      </v-flex>
    </v-layout>
    <v-layout class="mt-4">
      <v-btn class="light-green lighten-2" @click="create" type="submit">Create Song</v-btn>
    </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongService'
export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  components: {
    Panel
  },
  methods: {
    async create() {
      try {
        await SongService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>

</style>
