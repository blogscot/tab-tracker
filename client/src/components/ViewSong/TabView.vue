<template>
  <panel title="Tab">
    <textarea class="textarea" label="Tab" multi-line v-model="tab" />
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'tab'
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
