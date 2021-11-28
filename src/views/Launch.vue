<template>
  <div class="launch">
    <div class="launch__logo"><img src="../assets/image/logo.png" alt="logo"></div>
  </div>
</template>

<style scoped lang="scss">
  .launch {
    background-image: url("../assets/image/login.svg");
    height: 100vh;
    width: 100%;
    background-color:#000;
    background-repeat: no-repeat;
    background-position: center;

    &__logo {
      width: 100%;
      height: 100%;
      display:flex;
      justify-content: center;
      align-items: center;

      img {
        height: 172px;
        width: 172px;
      }
    }
  }
</style>

<script>
  export default {
    created() {
      setTimeout( () => this.$router.push({ path: '/onboarding'}), 1500);
    },
  }
</script>
