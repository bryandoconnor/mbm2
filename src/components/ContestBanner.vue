<template>
<div class="container-fluid text-center p-0 index-contest-container hero-img">
  <div class="p-5 white-over">
    <h1 class="text-center black-text butterfly-text main-heading">{{(new Date().getFullYear())}} MBM Contest</h1>
    <h2 class="text-center xl-p average-text">Enter our contest to win a $100 Gift Card!</h2>
    <router-link class="btn btn-link lg-button green-button average-text" role="button" to="/contest">Enter to Win</router-link>
    <p class="text-center my-0 mx-3 xs-p">
      Winning is not guaranteed upon entry. Any information you enter will not be shared with other entities, but may be used for other MyBetterMe, LLC promotions.
      Only one entry per person. This offer is not available in all States and Territories.
      Certain restrictions apply. Must be 18 years or older (or have a parent or guardian's permission) to enter.
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Contest',
}
</script>

<style scoped>
.index-contest-container {
  background-image: url(https://mybetterme.s3-us-west-2.amazonaws.com/images/Index-Contest-hero.jpg);
}
</style>