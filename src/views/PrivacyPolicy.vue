<template>
  <div class="privacy">
    <div class="container">
      <Headline class="mb-4">
        <template v-slot:title>Privacy Policy</template>
        <template v-slot:text>
          <div class="mb-5">This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Chameleon website.</div>
        </template>
        <template v-slot:text2>If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. Our Privacy Policy was created with the help of the Privacy Policy Template Generator.</template>
      </Headline>
      <div class="privacy__content">
        <div class="privacy__content-title">Information Collection and Use</div>
        <div class="privacy__content-text">For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</div>
      </div>
      <div class="privacy__content">
        <div class="privacy__content-title">Log Data</div>
        <div class="privacy__content-text">We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer’s Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Headline from "../components/Headline";
  export default {
    name: "PrivacyPolicy",
    components: {Headline}
  }
</script>

<style scoped lang="scss">
  .privacy {
    padding: 24px 0;

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
    &__content {
      margin-bottom: 24px;

      &-title {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 8px;
        color: $brand-neutrals-800;
      }
      &-text {
        display: flex;
        flex-direction: column;
        gap: 16px 0;
      }
    }
  }
</style>