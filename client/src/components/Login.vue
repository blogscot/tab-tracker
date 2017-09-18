<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="light-green lighten-2">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field type="email" name="email" label="Email" v-model="email"></v-text-field>
          <v-text-field type="password" name="password" label="Password" v-model="password"></v-text-field>
          <div class="error" v-html="error"></div>
          <v-btn class="light-green lighten-2" @click="login" type="submit">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login() {
      this.error = ''
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  background-color: red;
  color: white;
  font-size: 18px;
}
</style>
