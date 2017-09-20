<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form name="tab-tracker-form" autocomplete="off">
          <v-text-field type="email" name="email" label="Email" v-model="email" />
          <v-text-field type="password" name="password" label="Password" v-model="password"
            autocomplete="new-password" />
          <div class="error" v-html="error"></div>
          <v-btn class="light-green lighten-2" type="submit" @click="register($event)">Register</v-btn>
        </form>
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
    async register(event) {
      event.preventDefault()
      this.error = ''
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.usr)
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
