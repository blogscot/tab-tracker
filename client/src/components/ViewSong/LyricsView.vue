<template>
  <panel title="Lyrics">
    <textarea class="textarea" label="Lyrics" multi-line v-model="lyrics" />
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'lyrics'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
.textarea {
  width: 100%;
  height: 500px;
  font-family: monospace;
}
</style>
