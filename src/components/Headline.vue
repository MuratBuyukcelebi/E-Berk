<template>
  <div class="headline">
    <div class="d-flex align-items-center mb-2">
      <a href="#" class="headline__button"><img src="../assets/icons/chevron.svg" alt="icon"></a>
      <div class="headline__title">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="headline__text">
      <slot name="text"></slot>
    </div>
    <div class="headline__text">
      <slot name="text2"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Headline",
  props: ['title', 'text']
}
</script>

<style lang="scss">
.headline {
  &__button {
    height: 24px;
    width: 24px;
    margin-right: 12px;
  }
  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: #000;
  }
  &__description {
    max-width: 300px;
    font-size: 14px;
    line-height: 24px;
    color: #5A6987;
    margin-bottom: 16px;
  }
}
</style>