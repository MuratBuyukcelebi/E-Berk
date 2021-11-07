<template>
  <div class="notification">
    <div class="notification__container container">
      <div class="notification__phone"></div>
      <div class="notification__alert">
        <div class="notification__alert-item">
          <div class="notification__alert-title">
            <span class="notification__alert-logo"><img src="../assets/icons/logo.png" alt="icon">E-Berk</span>
            <span class="notification__alert-time">now</span>
          </div>
          <div class="notification__alert-description">DISCOUNT ALERT! Iphone 11 is %20 off now for the next 15 minutes!</div>
        </div>
      </div>
      <div class="notification__content">
        <div class="notification__content-title">Don’t miss opportunities with notifications!</div>
        <div class="notification__content-description">Be the first to know!</div>
        <button class="btn btn-primary mb-3">Keep  me notified</button>
        <button class="btn btn-secondary">No, thanks</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Notifications"
  }
</script>

<style lang="scss">
  .notification {
    position: relative;
    background: #F8F9FB;
    padding-top: 124px;
    height: 100%;

    &__phone {
      display: flex;
      justify-content: center;

      &::before {
        content: "";
        position: absolute;
        width: 248px;
        height: 498px;
        background-image: url("../assets/image/phone.png");
        z-index: 0;
      }
    }
    &__alert {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      position: absolute;
      width: 100%;
      bottom: 338px + 68px;
      left: 0;

      &-item {
        width: 296px;
        background: rgba(255, 255, 255, 0.88);
        backdrop-filter: blur(32px);
        border-radius: 12px;
        padding: 16px;
      }
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
    &__content {
      position: absolute;
      background-color: #fff;
      padding: 32px 12px 58px 12px;
      display: flex;
      flex-direction: column;
      width: 100%;
      left: 0;
      bottom: 0;

      &-title {
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #000;
        margin-bottom: 12px;
      }
      &-description {
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        letter-spacing: -0.015em;
        color: #5A6987;
        margin-bottom: 36px;
      }
    }
  }
</style>