<template>
  <ul class="login_tabs">
    <li><span>Sign up</span></li>
    <li class="login_tabs_s">Or</li>
    <li><span>Sign in</span></li>
  </ul>
</template>

<style lang="stylus" scoped>
  .login_tabs
    display:flex
    padding: 0 34px
  
    li
      display: flex
      padding: 10px
      flex: 1
      justify-content: space-around
      align-content: center
      transition: all .6s ease 

    span
      display: block
      padding: 4px 10px
      border: 1px solid white
      border-radius: 3px
      text-align: center 
      transition: all .6s ease 

    .login_tabs_s
      justify-content: center
      transition-duration: .55s
      transition-delay: .05s
      font-size: 12px 

       &:after,&:before
        content: '-'

.login_signup  .login_tabs li:first-child{
  transition-duration: .5s
  transition-delay: .05s
}
</style>

