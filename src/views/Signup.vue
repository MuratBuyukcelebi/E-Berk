<template>
  <div class="container">
    <Headline class="mb-3 pt-4">
      <template v-slot:title>Sign In</template>
      <template v-slot:text>Use your email or continue with social to create an account.</template>
    </Headline>
    <Social class="mb-3"/>
    <Divider/>
    <form>
      <div class="mb-4">
        <label class="form-label" for="email">Email</label>
        <input type="text" class="form-control" id="email" placeholder="name@domain.com">
      </div>
      <div class="mb-4">
        <label class="form-label" for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="At least 8 characters">
      </div>
        <button type="submit" class="btn btn-primary mb-4">Sign In</button>
        <button type="submit" class="btn btn-plain">Forgot Password?</button>
    </form>
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
</template>

<script>
  import Divider from "../components/Divider";
  import Headline from "../components/Headline";
  import Social from "../components/Social";

  export default {
    name: "Signup",
    components: {Social, Headline, Divider},
  }
</script>

<style scoped lang="scss">
  .signup {
    &__footer {
      display: flex;
      justify-content: center;
      text-align: center;
      font-size: 12px;
      line-height: 16px;
      color: $brand-neutrals-500;
      padding-top: 166px;

      &-text {
        max-width: 247px;
        display: flex;
        flex-direction: column;
      }
      span {
        color: $brand-neutrals-500;
      }
    }
  }
</style>