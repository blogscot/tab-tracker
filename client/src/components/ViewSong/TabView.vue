<template>
  <panel title="Tab">
    <textarea class="textarea" label="Tab" multi-line v-model="tab" />
  </panel>
</template>

<script>
export default {
  props: [
    'tab'
  ]
}
</script>

<style scoped>
.textarea {
  width: 100%;
  height: 500px;
  font-family: monospace;
}
</style>
