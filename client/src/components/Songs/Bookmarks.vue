<template>
  <panel title="Bookmarks">
    <v-data-table :headers="headers" :pagination.sync="pagination" :items="bookmarks">
      <template slot="items" scope="props">
        <td class="text-xs-right">
          {{props.item.title}}
        </td>
        <td class="text-xs-right">
          {{props.item.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import { mapState } from 'vuex'
import BookmarkService from '@/services/BookmarkService'

export default {
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  data() {
    return {
      headers: [{
        text: 'Title',
        value: 'title'
      },
      {
        text: 'Artist',
        value: 'artist'
      }],
      pagination: {
        sortBy: 'date',
        descending: true
      },
      bookmarks: []
    }
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      const response = await BookmarkService.index({
        userId: this.user.id
      })
      this.bookmarks = response.data
    }
  }

}
</script>

<style scoped>

</style>
