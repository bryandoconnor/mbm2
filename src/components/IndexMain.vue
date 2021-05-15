<template>
<div class="container-fluid text-center p-0">
  <div class="row">
    <div class="col-12 col-md-6 order-12 order-md-1">
      <div class="p-3">
        <h1 class="text-center main-heading butterfly-text">Inspiring Purpose.</h1>
        <h2 class="my-4 text-center xl-p average-text">Welcome to MyBetterMe!</h2>
        <p class="my-0 mx-2 text-center lg-p average-text">
          We are proud to offer help and solutions to an overwhelmed and cluttered lifestyle.
          Our workbooks can help individuals to find direction and support in attaining their goals!
        </p>
        <a class="btn btn-link lg-button purple-button average-text" role="button" data-target="#Welcome-modal" data-toggle="modal" href="#">
          Find Out More
        </a>
      </div>
    </div>
    <div class="col-12 col-md-6 order-1 order-md-12">
      <div class="py-0 px-3">
        <img class="index-hero-img" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/Index-hero.jpg" alt="Welcome to MyBetterMe!">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'IndexMain',
}
</script>

<style scoped>
.index-hero-img {
  height: 400px;
}
</style>