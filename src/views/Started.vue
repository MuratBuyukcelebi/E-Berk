<template>
  <div class="started">
    <div class="container">
      <Headline class="mb-3">
        <template #title>Get Started</template>
        <template #text>Use your email to create an account.</template>
      </Headline>
      <form class="row g-4">
        <div class="col-12">
          <label class="form-label" for="staticName">Name</label>
          <input type="text" class="form-control" id="staticName" placeholder="Your first and last name">
        </div>
        <div class="col-12">
          <label class="form-label" for="staticEmail2">Email</label>
          <input type="text" class="form-control" id="staticEmail2" placeholder="name@domain.com">
        </div>
        <div class="col-12">
          <label class="form-label" for="inputPassword2">Password</label>
          <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary mb-4">Sign In</button>
        </div>
      </form>
      <Divider/>
      <Social/>
    </div>
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
  .started {
    padding: 68px 0;
  }
</style>