<template>
  <div class="navigation">
    <div class="navigation__menu">
      <a class="navigation__menu-item" href="#">
        <img src="../assets/icons/navigation/home.svg" alt="icon">
        <span>Home</span>
      </a>
      <a class="navigation__menu-item" href="#">
        <img src="../assets/icons/navigation/categories.svg" alt="icon">
        <span>Categories</span>
      </a>
      <a class="navigation__menu-item" href="#">
        <img src="../assets/icons/navigation/cart.svg" alt="icon">
        <span>Cart</span>
      </a>
      <a class="navigation__menu-item" href="#">
        <img src="../assets/icons/navigation/orders.svg" alt="icon">
        <span>Orders</span>
      </a>
      <a class="navigation__menu-item" href="#">
        <img src="../assets/icons/navigation/profile.svg" alt="icon">
        <span>Profile</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navigation"
  }
</script>

<style lang="scss">
  .navigation {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    border-top:1px solid $brand-neutrals-200;
    width: 100%;

    &__menu {
      display: flex;
      align-items: center;
      justify-content: center;

      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        max-width: 76px;
        width: 100%;
        padding-top: 12px;
        padding-bottom: 4px;

        img {
          margin-bottom: 10px;
          height: 24px;
          width: 24px;
        }
        span {
          font-weight: 500;
          font-size: 11px;
          line-height: 16px;
          text-align: center;
          letter-spacing: -0.005em;
          color: $brand-neutrals-700;
        }
      }
    }
  }

</style>