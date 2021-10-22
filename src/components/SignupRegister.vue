<template>
  <form class="row g-4">
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
      <button type="submit" class="btn btn-plain">Forgot Password?</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SignupRegister"
}
</script>

<style lang="scss">

</style>