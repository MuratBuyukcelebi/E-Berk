<template>
<div class="signup">
  <div class="container">
    <SignupContent class="mb-3"/>
    <div class="signup__divider mb-3"><span>or</span></div>
    <signup-register/>
      <div class="signup__footer">
        <div class="signup__footer-text">
         <span>By signing in, you agree to</span>
          <span>
            <a href="#">Terms of Service</a> and <a href="/privacypolicy">Privacy Policy.</a>
          </span>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import SignupContent from "../components/SignupContent";
import SignupRegister from "../components/SignupRegister";

export default {
  name: "Signup",
  components: {SignupRegister, SignupContent},
}
</script>

<style lang="scss">
.signup {
  padding: 68px 0 50px 0;

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
    }

    &:before {
      content: "";
      position: absolute;
      height: 1px;
      background-color: #F8F9FC;
      width: calc(50% - 16px);
      left: 0;
      z-index: -1;
    }
    &:after {
      content: "";
      position: absolute;
      height: 1px;
      background-color: #F8F9FC;
      width: calc(50% - 16px);
      right: 0;
      z-index: -1;
    }
  }
  &__footer {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
    color: #5A6987;
    padding-top: 166px;

    &-text {
      max-width: 247px;
      display: flex;
      flex-direction: column;
    }
    a {
      color: #5A6987;
    }
  }
}

</style>