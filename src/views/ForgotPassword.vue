<template>
  <div class="container">
    <Headline class="mb-3">
      <template #title>Forgot Password</template>
      <template #text>We need your email adress so we can send you the password reset code.</template>
    </Headline>
    <form class="mb-4">
      <div class="mb-4">
        <label class="form-label" for="email">Email</label>
        <input type="text" class="form-control" id="email" placeholder="name@domain.com">
      </div>
      <button type="submit" class="btn btn-primary">Send Verification Code</button>
    </form>
  </div>
</template>

<script>
  import Headline from "../components/Headline";
  import Divider from "../components/Divider";
  import Social from "../components/Social";

  export default {
    name: "Forgot-Password",
    components: {Social, Divider, Headline}
  }
</script>