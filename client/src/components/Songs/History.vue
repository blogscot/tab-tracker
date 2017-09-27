<template>
  <panel title="Recently Viewed">
    <v-data-table :headers="headers" :pagination.sync="pagination" :items="songs">
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
import HistoryService from '@/services/HistoryService'

export default {
  computed: {
    ...mapState([
      'isUserLoggedIn'
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
        sortBy: 'createdAt',
        descending: true
      },
      songs: []
    }
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      const response = await HistoryService.index()
      this.songs = response.data
    }
  }
}
</script>
