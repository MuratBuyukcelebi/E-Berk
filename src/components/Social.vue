<template>
  <div class="social">
    <div class="row">
      <div class="col-6">
        <button class="social__button"><img src="../assets/image/Google.png" alt="icon"><span>Facebook</span></button>
      </div>
      <div class="col-6">
        <button class="social__button"><img src="../assets/image/Facebook.png" alt="icon"><span>Facebook</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Social"
}
</script>

<style lang="scss">
.social {
  &__button {
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
  }
}
</style>