<template>
  <v-toolbar fixed class="light-green lighten-2">
    <v-toolbar-title class="mr-4">
      <router-link to="/" class="light-green lighten-2 btn flat dark">
        Tab Tracker
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <router-link to="songs" class="light-green lighten-2 btn flat dark">
        Browse
      </router-link>
    </v-toolbar-items>

    <v-spacer />

    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <router-link to="login" class="light-green lighten-2 btn flat dark">
        Login
      </router-link>
      <router-link to="register" class="light-green lighten-2 btn flat dark">
        Sign Up
      </router-link>
    </v-toolbar-items>

    <v-toolbar-items v-if="$store.state.isUserLoggedIn" @click="logout">
      <router-link to="/" class="light-green lighten-2 btn flat dark">
        Logout
      </router-link>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<style scoped>
.toolbar-style {
  font-size: 18px;
  color: green;
}
</style>
