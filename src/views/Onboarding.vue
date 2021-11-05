<template>
  <div class="onboarding">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="onboarding__title">Enjoy your online shopping</div>
        </div>
        <div class="col-12">
          <a href="#" class="btn btn-primary">Start shopping</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Onboarding"
}
</script>

<style lang="scss">
  .onboarding {
    display: flex;
    align-items: flex-end;
    padding-bottom: 58px;
    background-image: url("../assets/image/onboarding.png");
    background-size: cover;
    height: var(--app-height, 100vh);
    width: var(--app-width, 100%);
    overflow: hidden;

    &__title {
      position: relative;
      font-weight: 800;
      font-size: 52px;
      line-height: 68px;
      color: #000;
      margin-bottom: 58px;

      &:before {
        content: "";
        background-image: url("data:image/svg+xml,%3Csvg width='239' height='40' viewBox='0 0 239 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.94362 27.1299C2.94362 27.1299 10.4621 16.3725 28.8796 14.6268C47.297 12.8812 56.7027 22.0345 56.7027 22.0345L67.5073 30.0508C67.5073 30.0508 76.913 39.2041 95.3304 37.4584C113.748 35.7128 121.266 24.9554 121.266 24.9554L129.377 15.1463C129.377 15.1463 136.895 4.38883 155.313 2.64318C173.73 0.897528 183.136 10.0509 183.136 10.0509C183.136 10.0509 192.542 19.2042 210.959 17.4585C229.377 15.7129 236.895 4.95543 236.895 4.95543' stroke='%23D7DDEA' stroke-width='4' stroke-linecap='round'/%3E%3C/svg%3E%0A");
        width: 235px;
        height: 39px;
        position: absolute;
        left: 170px;
        bottom: 50px;
        pointer-events: none;
        z-index: -1;
      }
      &:after {
        content: "";
        background-image: url("data:image/svg+xml,%3Csvg width='58' height='14' viewBox='0 0 58 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 2C2 2 10.5 12 29 12C47.5 12 56 2 56 2' stroke='%23D7DDEA' stroke-width='4' stroke-linecap='round'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        position: absolute;
        height: 14px;
        width: 64px;
        left: 54px;
        bottom: -20px;
      }
    }
  }
</style>