<template>
<div class="signup">
  <div class="container">
    <SignupContent/>
  </div>
</div>
</template>

<script>
import SignupContent from "../components/SignupContent";

export default {
  name: "Signup",
  components: {SignupContent}
}
</script>

<style lang="scss">
.signup {
  padding: 68px 0;
}
</style>