<template>
<div class="container-fluid text-center p-0 about-hero-container hero-img">
  <div class="p-5">
    <h1 class="text-center main-heading text-white text-shadow butterfly-text">Our Story</h1>
    <h2 class="text-center xl-p text-white text-shadow average-text">
      MyBetterMe began with a simple idea; People helping people!
    </h2>
    <router-link class="btn btn-link lg-button purple-button" role="button" to="/mbm">
      Help Me Find Balance! ▶
    </router-link>
  </div>
</div>
<div class="container-fluid text-center p-0">
  <div class="row m-0">
    <div class="col-lg-4 col-12 p-0">
      <img class="p-0 m-0 w-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/Index-Contest-hero.jpg" alt="MyBetterMe started as a simple idea with HUGE potential. Just like your goals, small
        things can sometimes make the largest impact on a person's life!">
    </div>
    <div class="col-lg-8 col-12 p-0">
      <div class="p-xl-3 p-lg-2 p-1">
        <h1 class="text-center p-xl-3 p-lg-2 p-1 lg-heading butterfly-text">Simplify. Organize. Inspire.</h1>
        <h2 class="mx-xl-5 m-1 text-center lg-p average-text">
          We wanted to create a tool to help us with the demands of our crazy everyday life!
          This included researching methods that are tried and proven in all aspects
          of life, from many different resources.
        </h2>
        <router-link class="btn btn-link lg-button orange-button" role="button" to="/mbm">
          Get Started
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.about-hero-container {
  background-image: url(https://mybetterme.s3-us-west-2.amazonaws.com/images/About-hero.jpg);
}
</style>