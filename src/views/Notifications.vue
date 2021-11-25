<template>
  <div class="notifications">
    <!--Navigation-->
    <div class="navbar">
      <div class="container">
        <div class="navbar__actions">
          <a class="navbar__actions-back"><img src="../assets/icons/chevron.svg" alt="icon"></a>
          <button class="navbar__actions-settings"><img src="../assets/icons/settings.svg" alt="icon"></button>
        </div>
        <div class="navbar__title">Notifications</div>
      </div>
    </div>

    <!--List-->
    <div class="container">
      <div class="list">
        <div class="list-empty">
          <div class="list-empty__title">Nothing here!</div>
          <div class="list-empty__description">Your notifications will appaer here.</div>
        </div>
        <div class="list-item"></div>
      </div>
    </div>

    <Navigation/>
  </div>
</template>
<script>
  import Navigation from "../components/Navigation";


export default {
    name: "Notifications",
  components: {Navigation}
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
    &-item {}

  }
</style>