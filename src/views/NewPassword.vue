<template>
  <div class="container">
    <Headline class="mb-3 pt-4">
      <template #title>New Password</template>
      <template #text>You can create a new password, please don’t forget it too.</template>
    </Headline>
    <form class="mb-4">
      <div class="mb-4">
        <label class="form-label" for="password">Password</label>
        <input type="text" class="form-control" id="password" placeholder="At least 8 characters">
      </div>
      <div class="mb-4">
        <label class="form-label" for="confirmPassword">Confirm Password</label>
        <input type="text" class="form-control" id="confirmPassword" placeholder="Repeat the password">
      </div>
      <button type="submit" class="btn btn-primary">Done</button>
    </form>
  </div>
</template>

<script>
  import Headline from "../components/Headline";
  import Social from "../components/Social";

  export default {
    name: "NewPassword",
    components: {Social, Headline}
  }
</script>