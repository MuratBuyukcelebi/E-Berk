<template>
  <div class="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    data() {},
    methods: {
      screenSize() {
        document.documentElement.style.setProperty('--app-height', `${document.documentElement.clientHeight}px`)
        document.documentElement.style.setProperty('--app-width', `${document.documentElement.clientWidth}px`)
      }
    },
    created() {
      let that = this;
      that.screenSize();
      window.addEventListener("resize", function () {
        that.screenSize();
      });
      this.layout = { ...this.layoutBase }
      // Detect iPhone
      let iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream
      let aspect = window.screen.width / window.screen.height
      if (iPhone && aspect.toFixed(3) === "0.462") {
        that.bars = true;
      }
    }
  }
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "src/assets/scss/main";

.app {
  position: relative;
  height: var(--app-height, 100vh);
  width: var(--app-width, 100%);
  padding: 68px 0;
}
</style>
