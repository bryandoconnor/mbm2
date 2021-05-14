<template>
<div class="container-fluid text-center p-0 four-oh-four-hero-container hero-img">
  <div class="p-5 white-over">
    <h1 class="text-center main-heading butterfly-text">Whoops! Wrong Turn...</h1>
    <h2 class="text-center xl-p">This is not the page you are looking for</h2>
    <router-link to="/" class="btn btn-link lg-button yellow-button" role="button">
      Return to Home Page ▶
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: '404',
}
</script>

<style scoped>
.four-oh-four-hero-container {
  background-image: url(https://mybetterme.s3-us-west-2.amazonaws.com/images/Four-Oh-Four-hero.jpg);
}
</style>