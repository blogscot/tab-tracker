<template>
  <panel title="Search">
    <v-text-field label="Search by album, artist, title or genre" v-model="search" autofocus>

    </v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
      search: ''
    }
  },
  watch: {

    search: _.debounce(async function(text) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 500),
    '$route.query.search': {
      immediate: true,
      handler(value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>

</style>
