<template>
  <div
    class="login"
    :class="{ login_signin: isSignIn, login_signup: isSignUp }"
  >
    <login-tabs @click.native="switchState"></login-tabs>
  </div>
</template>

<script>
  import LoginTabs from './LoginTabs'
  export default {
    components: {
      LoginTabs,
    },
    data() {
      return {
        state: 1,
      }
    },
    computed: {
      isSignIn() {
        return this.state === 1
      },
      isSignUp() {
        return this.state === 2
      },
    },
    methods: {
      switchState() {
        this.state = this.state === 1 ? 2 : 1
      },
    },
  }
</script>

<style lang="stylus">
  .login
    width: 100%
    color: white
    font-size: 14px
</style>