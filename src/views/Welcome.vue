<template>
  <div class="container">
    <div class="welcome">
      <div class="welcome__image">
        <div class="welcome__image-icon"><img src="../assets/icons/welcome.png" alt="icon"></div>
      </div>
      <div class="welcome__content">
        <div class="welcome__content-title">Millions of item. Best shopping experience.</div>
        <div class="welcome__content-text">Let’s get you started!</div>
      </div>
      <div class="welcome__actions">
        <a href="#" class="btn btn-primary">I'm new here</a>
        <a href="#" class="btn btn-secondary">I'm alrerady member</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome"
}
</script>

<style lang="scss">
.welcome {
  padding-top: 196px;

  &__image {
    display: flex;
    justify-content: center;
    margin-bottom: 146px;

    img {
      width: 160px;
      height: 160px;
    }

  }
  &__content {
    gap: 8px 0;
    margin-bottom: 48px;

    &-title {
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
    }
    &-text {
      font-size: 14px;
      color: #5A6987;
      line-height: 24px;
      text-align: center;
    }
  }
  &__actions {
    display: flex;
    flex-direction: column;
    gap: 12px 0;
  }
}
</style>