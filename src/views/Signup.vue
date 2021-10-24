<template>
<div class="signup">
  <div class="container">
    <Headline class="mb-3">
      <template v-slot:title>
        Sign In
      </template>
      <template v-slot:text>
        Use your email or continue with social to create an account.
      </template>
    </Headline>
    <Social class="mb-3"/>
    <Divider/>
    <Signup-register/>
      <div class="signup__footer">
        <div class="signup__footer-text">
         <span>By signing in, you agree to</span>
          <span>
            <router-link :to="{ path: '#'}"
              style="text-decoration-color: #5A6987;">
              <span>Terms of Service</span>
            </router-link>
            and
            <router-link to="/privacypolicy"
              style="text-decoration-color: #5A6987;">
              <span>Privacy Policy.</span>
            </router-link>
          </span>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import SignupRegister from "../components/SignupRegister";
import Divider from "../components/Divider";
import Headline from "../components/Headline";
import Social from "../components/Social";

export default {
  name: "Signup",
  components: {Social, Headline, Divider, SignupRegister},
}
</script>

<style lang="scss">
.signup {
  padding: 68px 0 50px 0;

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
    span {
      color: #5A6987;
    }
  }
}
</style>