<template>
<div class="container-fluid text-center blue-over p-0 contest-hero-container hero-img" alt="Enter Our Contest and Win a $100 Gift Card!">
  <div class="p-5 white-over">
    <h1 class="text-center main-heading text-white text-shadow butterfly-text">2021 MBM Contest</h1>
    <p class="text-center xl-p text-white text-shadow average-text">
      Enter Your Information to Win a $100 Gift Card!
    </p>
    <a class="btn btn-link orange-button lg-button" role="button" data-target="#Contest-modal" data-toggle="modal" href="#">
      Count Me In! ▶
    </a>
  </div>
</div>
<div class="container-fluid m-0 p-0">
  <div class="row m-0 p-0">
    <div class="col-md-12 p-0 m-0">
      <div id="Contest-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content p-5">
            <div class="main-header text-center">
              <h1 class="main-heading butterfly-text">Contest Form</h1>
              <div>To submit your application, email us at
                <span><a href="mailto:mbmcontest@gmail.com">mbmcontest@gmail.com</a></span>
                with your name, address, and a brief description of why you think you should win.
              </div>
              <div><button class="btn btn-link green-button lg-button" data-dismiss="modal" type="button">Close</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Thanks',
}
</script>

<style scoped>
.contest-hero-container {
  background-image: url(https://mybetterme.s3-us-west-2.amazonaws.com/images/Index-Contest-hero.jpg);
}
</style>