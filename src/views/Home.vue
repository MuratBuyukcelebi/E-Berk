<template>
  <div class="home">
    <div class="container">
      <div class="home__header">
        <div class="home__header-navigation">
          <div class="home__header-logo">
            <img src="../assets/image/logo.png" alt="logo">
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
      <div class="home__banner">
        <div class="home__banner-image"><img src="../assets/image/home/headphone.png" alt="image"></div>
        <div class="home__banner-text">Up to 25% discount on Airpods!</div>
      </div>
      <div class="home-recommended">
        <div class="home-recommended__title">
          <span>Recommended for you</span>
          <a href="#">See All<img src="../assets/icons/right-arrow.svg" alt="icon"></a>
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
      padding-bottom: 32px;

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
        border: 1px solid $brand-neutrals-500;
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
      margin-bottom: 32px;

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
    &__banner {
      position: relative;
      background-color: #91B5AD;
      border-radius: 6px;
      overflow: hidden;

      &-image {
        position: absolute;
        bottom: 0;
        right: -1px;
      }
      &-text {
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.015em;
        color: #fff;
        max-width: 230px;
        padding: 24px;
      }

      &:before {
        background-image: url("data:image/svg+xml,%3Csvg width='330' height='395' viewBox='0 0 330 395' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='62.2385' height='351.769' transform='matrix(0.632736 0.774367 -0.760867 0.648907 278.673 58.8292)' fill='%23496E66'/%3E%3C/svg%3E%0A");
        content: "";
        width: 330px;
        height: 394px;
        position: absolute;
        top: -110px;
        right: -50px;
      }
    }
  }
</style>