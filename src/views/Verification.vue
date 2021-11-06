<template>
  <div class="container">
    <Headline class="mb-3">
      <template #title>Verification Code</template>
      <template #text>You need to enter 6-digit code we send to your email adress.</template>
    </Headline>
    <form class="mb-4">
      <div class="mb-4">
        <label class="form-label" for="code">Enter Code</label>
        <input type="text" class="form-control" id="code" placeholder="Enter the verification code">
      </div>
      <button type="submit" class="btn btn-primary">Confirm</button>
    </form>
  </div>
</template>

<script>
  import Headline from "../components/Headline";
  import Divider from "../components/Divider";
  import Social from "../components/Social";

  export default {
    name: "Verification",
    components: {Social, Divider, Headline}
  }
</script>