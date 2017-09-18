<template>
  <v-toolbar fixed class="light-green lighten-2">
    <v-toolbar-title class="mr-4">

      <router-link to="/" class="light-green lighten-2 btn flat dark">
        Tab Tracker
      </router-link>

    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>

      <router-link to="register" class="light-green lighten-2 btn flat dark">
        Sign Up
      </router-link>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>
.toolbar-style {
  font-size: 18px;
  color: green;
}
</style>
