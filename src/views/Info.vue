<template>
  <div class="info">
    <div class="container">
      <div class="phone"><img src="../assets/image/phone.png" alt="image"></div>
      <div class="alert">
        <div class="alert__item">
          <div class="alert__item-title">
            <span class="alert__item-logo"><img src="../assets/image/logo.png" alt="icon">E-Berk</span>
            <span class="alert__item-time">now</span>
          </div>
          <div class="alert__item-description">DISCOUNT ALERT! Iphone 11 is %20 off now for the next 15 minutes!</div>
        </div>
      </div>
      <div class="content">
        <div class="content__title">Don’t miss opportunities with notifications!</div>
        <div class="content__description">Be the first to know!</div>
        <button class="btn btn-primary mb-3">Keep  me notified</button>
        <button class="btn btn-secondary">No, thanks</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Info"
  }
</script>

<style scoped lang="scss">
  .info {
    position: relative;
    background: $brand-neutrals-100;
    padding-top: 34%;
    height: var(--app-height);
  }
  .phone {
    display: flex;
    justify-content: center;
    position: fixed;
    width: var(--app-width);

    img {
      height: auto;
    }
  }
  .alert {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    width: 100%;
    bottom: 338px + 68px;
    left: 0;

    &__item {
      width: 296px;
      background: rgba(255, 255, 255, 0.88);
      backdrop-filter: blur(32px);
      border-radius: 12px;
      padding: 16px;

      &-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
      }
      &-logo {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.01px;
        color: #4B4F58;

        img {
          height: 18px;
          width: 18px;
          margin-right: 4px;
        }
      }
      &-time {
        font-size: 12px;
        line-height: 16px;
        text-align: right;
        letter-spacing: 0.01px;
        color: #D3D5D9;
      }
      &-description {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.09px;
        color: #1C1E21;
      }
    }
  }
  .content {
    position: absolute;
    background-color: #fff;
    padding: 32px 12px 58px 12px;
    display: flex;
    flex-direction: column;
    width: 100%;
    left: 0;
    bottom: 0;

    &__title {
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #000;
      margin-bottom: 12px;
    }
    &__description {
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      letter-spacing: -0.015em;
      color: $brand-neutrals-500;
      margin-bottom: 36px;
    }
  }
</style>