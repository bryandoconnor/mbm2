<template>
<div class="d-none container-fluid text-center p-0">
  <div class="carousel slide" data-ride="carousel">
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <div class="row p-0">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 p-0">
            <img class="carousel-img" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/Carousel1.jpg">
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="p-3">
              <h1 class="text-center main-heading butterfly-text">Our Workbooks</h1>
              <h2 class="text-center xl-p average-text">We Offer A Way To Simplify Your Life!</h2>
              <p class="m-0 text-center lg-p">
                Want to change your lifestyle? We know how daunting it can be..
                But not to worry! Our workbooks are designed to help take down those
                daunting tasks that are holding you back from enjoying life!
              </p>
              <a class="btn btn-link lg-button yellow-button" role="button" href="mbm.html">Find Out More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="row p-0">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 p-0">
            <img class="carousel-img" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/Carousel2.jpg">
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="p-3">
              <h1 class="text-center main-heading butterfly-text">A Simpler Life</h1>
              <h2 class="text-center xl-p average-text">Our Customers Rave About Their MBM Experience!</h2>
              <p class="m-0 text-center lg-p average-text">"Things are SO much easier for me!" - Alexis | Pittsburgh, PA</p>
              <p class="m-0 text-center lg-p average-text">"This workbook is amazing!!" - Chandra | Salt Lake City, UT</p>
              <p class="m-0 text-center lg-p average-text">"Wow! I can see a huge difference in my life!!" - Jessica | Benton, AR</p>
              <a class="btn btn-link lg-button green-button" role="button" href="mbm.html">Experience Your Own MBM</a>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="row p-0">
          <div class="col-lg-6 col-md-6 col-md-offset-0 col-sm-6 col-xs-12 p-0">
            <img class="p-0 m-0 carousel-img" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/Carousel3.jpg">
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="p-3">
              <h1 class="text-center main-heading butterfly-text">Simplify Everything!</h1>
              <h2 class="text-center xl-p average-text">There's More to Life Than Just Cleaning.</h2>
              <p class="m-0 text-center lg-p average-text">
                Endless dishes, laundry and cleaning up after kids got you down?
                You can change it all, and we can help! Learn how to incorporate systems that will help you
                thrive and find that extra "you" time you've been looking for.
              </p>
              <a class="btn btn-link lg-button orange-button" role="button" href="mbm.html">Get Started!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <a class="left carousel-control" href="#index-carousel" role="button" data-slide="prev">
        <i class="glyphicon glyphicon-chevron-left"></i>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#index-carousel" role="button" data-slide="next">
        <i class="glyphicon glyphicon-chevron-right"></i>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <ol class="carousel-indicators">
      <li data-target="#index-carousel" data-slide-to="0" class="active"></li>
      <li data-target="#index-carousel" data-slide-to="1"></li>
      <li data-target="#index-carousel" data-slide-to="2"></li>
    </ol>
  </div>
</div>
</template>

<script>
export default {
  name: 'IndexCarousel',
}
</script>

<style scoped>
.carousel-img {
  width: 100%;
}

.carousel-indicators li {
  background-color: #000;
}

.carousel-indicators .active {
  background-color: #f7941d;
}
</style>