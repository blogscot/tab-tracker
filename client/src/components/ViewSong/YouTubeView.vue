<template>
  <panel title="YouTube">
    <youtube :video-id="youtubeId" :player-width="800" :player-height="500" />
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
