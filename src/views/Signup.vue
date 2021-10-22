<template>
<div class="signup">
  <div class="container">
    <SignupContent class="mb-3"/>
    <div class="signup__divider"> <span>or</span></div>
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
  &__divider {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;


    span {
      color: #9AA7C1;
      font-weight: 500;
      font-size: 11px;
      line-height: 16px;
      padding: 0 16px;
      background-color: #FFFFFF;
    }

    &:before {
      content: "";
      position: absolute;
      height: 1px;
      background-color: #F8F9FC;
      width: 100%;
      z-index: -1;
    }
  }
}

</style>