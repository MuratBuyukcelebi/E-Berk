<template>
  <div class="signup-content">
    <div class="d-flex align-items-center mb-2">
      <a href="#" class="signup-content__button"><img src="../assets/icons/chevron.svg" alt="icon"></a>
      <div class="signup-content__title">Sign In</div>
    </div>
    <div class="signup-content__description">Use your email or continue with social to create an account.</div>
    <div class="signup-content__actions">
      <div class="row">
        <div class="col-6">
          <button class="signup-content__actions-button"><img src="../assets/icons/Google.png" alt="icon"><span>Facebook</span></button>
        </div>
        <div class="col-6">
          <button class="signup-content__actions-button"><img src="../assets/icons/Facebook.png" alt="icon"><span>Facebook</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupContent"
}
</script>

<style lang="scss">
.signup-content {

&__button {
   height: 24px;
   width: 24px;
   margin-right: 12px;
 }
&__title {
   font-weight: bold;
   font-size: 24px;
   line-height: 32px;
   color: #000;
 }
&__description {
   max-width: 300px;
   font-size: 14px;
   line-height: 24px;
   color: #5A6987;
   margin-bottom: 16px;
 }
&__actions {

&-button {
   background: #fff;
   border: 1px solid #EAEEF5;
   border-radius: 6px;
   padding: 12px 16px;
   font-weight: 500;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
span  {
  font-size: 15px;
  line-height: 24px;
  color: #111722;
  width: 100%;
}
img {

}
}
}
}
</style>