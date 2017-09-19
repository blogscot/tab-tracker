<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <v-text-field type="email" name="email" label="Email" v-model="email"></v-text-field>
        <v-text-field type="password" name="password" label="Password" v-model="password"></v-text-field>
        <div class="error" v-html="error"></div>
        <v-btn class="light-green lighten-2" @click="login" type="submit">Login</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: { Panel },
  props: [
    'title'
  ],
  methods: {
    async login() {
      this.error = ''
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'home'
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
