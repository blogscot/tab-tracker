<template>
  <panel title="YouTube">
    <youtube :video-id="youtubeId" :player-width="800" :player-height="500" />
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>

</style>
