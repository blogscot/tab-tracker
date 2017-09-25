<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4>
        <panel title='Edit Song'>
          <v-text-field type="text" v-model="song.title" label="Title" required :rules="[required]" />
          <v-text-field type="text" v-model="song.artist" label="Artist" required :rules="[required]" />
          <v-text-field type="text" v-model="song.genre" label="Genre" required :rules="[required]" />
          <v-text-field type="text" v-model="song.album" label="Album" required :rules="[required]" />
          <v-text-field type="text" v-model="song.albumImageUrl" label="Album Image Url" required :rules="[required]" />
          <v-text-field type="text" v-model="song.youtubeId" label="YouTube Id" required :rules="[required]" />
        </panel>
      </v-flex>
      <v-flex xs8>
        <panel title='Song Structure' class='ml-2'>
          <v-text-field type="text" v-model="song.lyrics" label="Lyrics" multi-line required :rules="[required]" />
          <v-text-field type="text" v-model="song.tab" label="Tab" multi-line required :rules="[required]" />
        </panel>
      </v-flex>
    </v-layout>
    <v-layout class="mt-4">
      <v-btn class="light-green lighten-2" @click="update" type="submit">Update Song</v-btn>
    </v-layout>
    <v-layout>
      <v-alert v-if="error">
        {{error}}
      </v-alert>
      <span class="danger-alert ml-2 mt-2 pa-1" v-if="error">
        {{error}}
      </span>
    </v-layout>
  </v-container>
</template>

<script>
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
      },
      songId: null,
      error: null
    }
  },
  async mounted() {
    this.songId = this.$store.state.route.params.songId
    const response = await SongService.show(this.songId)
    this.song = response.data
  },
  methods: {
    required: value => !!value || 'Required',
    async update() {
      this.error = null
      const areAllFieldsFilledIn =
        Object
          .keys(this.song)
          .every(key => !!this.song[key])

      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all required fields'
        return
      }
      try {
        const response = await SongService.update(this.songId, this.song)

        if (response.status === 200) {
          this.$router.push({
            name: 'songs'
          })
        } else {
          console.error('Edit Song: response status: ', response.status)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
.danger-alert {
  background: red;
  color: white;
  font-weight: 500;
  font-size: 18px;
}
</style>
