<template>
  <div class="container">
    <Headline class="mb-3">
      <template #title>Get Started</template>
      <template #text>Use your email to create an account.</template>
    </Headline>
    <form class="mb-4">
      <div class="mb-4">
        <label class="form-label" for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Your first and last name">
      </div>
      <div class="mb-4">
        <label class="form-label" for="text">Email</label>
        <input type="text" class="form-control" id="text" placeholder="name@domain.com">
      </div>
      <div class="mb-4">
        <label class="form-label" for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password">
      </div>
        <button type="submit" class="btn btn-primary ">Sign In</button>
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