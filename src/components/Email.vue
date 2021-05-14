<template>
<div
  class="container-fluid text-center p-0 email-thanks-hero-container hero-img"
  alt="Thanks for all your continued support. Our goal is to help others who are having troubles achieving their goals.
  This means that sometimes we are busy preparing new products and that we might not always get back to you immediately.
  Please be patient with us as we try to change the world. Thanks!"
>
  <div class="p-5 blue-over">
    <h1 class="text-center main-heading text-white text-shadow butterfly-text">Thank You!</h1>
    <h2 class="text-center xl-p text-white text-shadow average-text">Your Form Has Been Submitted!</h2>
    <router-link class="btn btn-link lg-button purple-button" role="button" to="/">
      Return to Home ▶
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Email',
}
</script>

<style scoped>
.email-thanks-hero-container {
  background-image: url(https://mybetterme.s3-us-west-2.amazonaws.com/images/EmailThanks-hero.jpg);
}
</style>