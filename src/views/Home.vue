<template>
  <div class="home">
    <div class="container">
      <div class="home__header">
        <div class="home__header-navigation">
          <div class="home__header-logo">
            <img src="../assets/icons/logo.png" alt="logo">
            <span>E-Berk</span>
          </div>
          <div class="home__header-actions">
            <a href="#"><img src="../assets/icons/home/notifications.svg" alt="icon"></a>
            <a href="#"><img src="../assets/icons/home/bookmark.svg" alt="icon"></a>
          </div>
        </div>
        <div class="home__header-input">
          <img src="../assets/icons/home/search.svg" alt="search-icon">
          <input type="text" placeholder="Search product, category or brand...">
        </div>
      </div>
      <div class="home__special">
        <div class="home__special-title">
          <span>Special for today</span>
          <div class="home__special-order">1/8</div>
        </div>
        <div class="home__special-list">
          <div class="home__special-item">
            <div class="home__special-item__image"><img src="../assets/image/home/item.png" alt="image"></div>
            <div class="home__special-item__content">Up to 25% discounts on baby care and cosmetics</div>
          </div>
          <div class="home__special-item">
            <div class="home__special-item__image"><img src="../assets/image/home/item.png" alt="image"></div>
            <div class="home__special-item__content">Up to 25% discounts on baby care and cosmetics</div>
          </div>
          <div class="home__special-item">
            <div class="home__special-item__image"><img src="../assets/image/home/item.png" alt="image"></div>
            <div class="home__special-item__content">Up to 25% discounts on baby care and cosmetics</div>
          </div>
        </div>
      </div>
    </div>
    <Navigation/>
  </div>
</template>

<script>
  import Navigation from "../components/Navigation";

  export default {
    name: "Home",
    components: {Navigation}
  }
</script>

<style lang="scss">
  .home {
    &__header {
      padding-top: 12px;
      padding-bottom: 16px;

      &-navigation {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
      }
      &-logo {
        display: flex;
        align-items: center;

        span {
          font-weight: bold;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: -0.015em;
          color: #000;
        }
        img {
          height: 24px;
          width: 24px;
          margin-right: 12px;
        }
      }
      &-actions {
        display: flex;
        align-items: center;
        gap: 0 4px;
      }
      &-input {
        border: 1px solid #EAEEF5;
        border-radius: 6px;
        padding: 12px;
        display: flex;
        align-items: center;

        img {
          margin-right: 12px;
        }
        input {
          border: none;
          width: 100%;

          &::placeholder {
            font-size: 14px;
            line-height: 24px;
            letter-spacing: -0.015em;
            color: #364259;
          }
          &:focus {
            outline: none;
          }
        }
      }
    }
    &__special {
      &-title {
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        span {
          font-weight: bold;
          font-size: 18px;
          line-height: 24px;
          letter-spacing: -0.015em;
          color: #000;
          margin-right: 12px;
        }
      }
      &-order {
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.005em;
        color: #364259;
        background: #F8F9FC;
        border-radius: 12px;
        width: 42px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &-list {
        white-space: nowrap;
        overflow: auto;
      }
      &-item {
        display: inline-block;
        border-radius: 6px;
        overflow: hidden;
        margin-right: 12px;
        background-color: #000;

        &__image {
          img {
            width: 100%;
          }
        }
        &__content {
          color: #fff;
          padding: 16px;
          font-weight: 500;
          font-size: 15px;
          line-height: 24px;
          letter-spacing: -0.015em;
          max-width: 300px;
          white-space: break-spaces;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>