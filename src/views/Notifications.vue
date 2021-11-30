<template>
  <div class="notifications">
    <!--Navbar-->
    <div class="navbar">
      <div class="container">
        <div class="navbar__actions">
          <a href="#" class="navbar__actions-back"><img src="../assets/icons/chevron.svg" alt="icon"></a>
          <button class="navbar__actions-settings"><img src="../assets/icons/settings.svg" alt="icon"></button>
        </div>
        <div class="navbar__title">Notifications</div>
      </div>
    </div>

    <!--List-->
    <div class="container">
      <div class="list">
        <div class="list-empty d-none">
          <div class="list-empty__title">Nothing here!</div>
          <div class="list-empty__description">Your notifications will appaer here.</div>
        </div>
        <div class="list-item">
          <div class="list-item__icon"><img src="../assets/icons/notifications/check.svg" alt="icon"></div>
          <div class="list-item__content">
            <div class="list-item__title">Your order has been delivered.</div>
            <div class="list-item__description">We have delivered the package numbered 98613470.</div>
            <div class="list-item__date">01/20/2021</div>
          </div>
          <button class="list-item__close"><img src="../assets/icons/notifications/close.svg" alt="icon"></button>
        </div>
        <div class="list-item">
          <div class="list-item__icon"><img src="../assets/icons/notifications/check.svg" alt="icon"></div>
          <div class="list-item__content">
            <div class="list-item__title">Your order has been delivered.</div>
            <div class="list-item__description">We have delivered the package numbered 98613470.</div>
            <div class="list-item__date">01/20/2021</div>
          </div>
          <button class="list-item__close"><img src="../assets/icons/notifications/close.svg" alt="icon"></button>
        </div>
        <div class="list-item">
          <div class="list-item__icon"><img src="../assets/icons/notifications/check.svg" alt="icon"></div>
          <div class="list-item__content">
            <div class="list-item__title">Your order has been delivered.</div>
            <div class="list-item__description">We have delivered the package numbered 98613470.</div>
            <div class="list-item__date">01/20/2021</div>
          </div>
          <button class="list-item__close"><img src="../assets/icons/notifications/close.svg" alt="icon"></button>
        </div>
      </div>
    </div>

    <!--Navigation-->
    <Navigation/>
  </div>
</template>

<script>
  import Navigation from "../components/Navigation";

  export default {
    name: "Notifications",
    components: {Navigation},

    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  .navbar {
    padding-top: 8px;
    padding-bottom: 16px;
    border-bottom: solid 1px #EAEEF5;
    margin-bottom: 16px;

    &__actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      width: 100%;

      &-back {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 24px;
        width: 24px;
      }
      &-settings {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 24px;
        width: 24px;
        border: none;
        background-color: rgba( #fff, 0);
      }
    }
    &__title {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.015em;
      color: #000;
    }
  }
  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-empty {
      padding: 24px;
      border: 1px solid #EAEEF5;
      border-radius: 6px;

      &__title {
        font-weight: 500;
        font-size: 15px;
        line-height: 24px;
        text-align: center;
        letter-spacing: -0.015em;
        color: $brand-neutrals-800;
        margin-bottom: 8px;
      }
      &__description {
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        letter-spacing: -0.005em;
        color: $brand-neutrals-500;
      }
    }
    &-item {
      display: flex;
      justify-content: center;
      padding: 16px;
      border: 1px solid #EAEEF5;
      border-radius: 6px;

      &__content {
        padding: 0 16px;
      }
      &__title {
        font-weight: 500;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: -0.015em;
        color: $brand-neutrals-800;
        margin-bottom: 4px;
      }
      &__description {
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.005em;
        color: $brand-neutrals-500;
        margin-bottom: 8px;
      }
      &__date {
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;
        letter-spacing: -0.005em;
        color: #9AA7C1;
      }
      &__close {
        background-color: rgba(#fff, 0);
        border: none;
        display: flex;
        align-items: flex-start;
        height: 24px;
        padding: 0;
      }
    }

    &-item:not(:last-child) {
      margin-bottom: 16px;
    }
  }
</style>