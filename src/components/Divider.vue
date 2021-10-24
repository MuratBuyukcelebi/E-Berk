<template>
  <div class="divider mb-3"><span>or</span></div>
</template>

<script>
export default {
  name: "Divider"
}
</script>

<style lang="scss">
.divider {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #9AA7C1;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
  }

  &:before {
    content: "";
    position: absolute;
    height: 1px;
    background-color: #F8F9FC;
    width: calc(50% - 16px);
    left: 0;
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    height: 1px;
    background-color: #F8F9FC;
    width: calc(50% - 16px);
    right: 0;
    z-index: -1;
  }
}
</style>