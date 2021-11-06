<template>
  <div class="container">
    <Headline class="mb-3">
      <template #title>Get Started</template>
      <template #text>Use your email to create an account.</template>
    </Headline>
    <form class="d-grid gap-4">
      <div class="">
        <label class="form-label" for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Your first and last name">
      </div>
      <div class="">
        <label class="form-label" for="text">Email</label>
        <input type="text" class="form-control" id="text" placeholder="name@domain.com">
      </div>
      <div class="">
        <label class="form-label" for="inputPassword2">Password</label>
        <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
      </div>
      <div class="">
        <button type="submit" class="btn btn-primary mb-4">Sign In</button>
      </div>
    </form>
    <Divider/>
    <Social/>
  </div>
</template>

<script>
  import Headline from "../components/Headline";
  import Divider from "../components/Divider";
  import Social from "../components/Social";

  export default {
    name: "Started",
    components: {Social, Divider, Headline}
  }
</script>

<style lang="scss">
</style>