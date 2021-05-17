<template>
<div class="container-fluid text-center p-0">
  <div class="row mt-2 mb-5">
    <div class="col-xl-1 offset-xl-1 col-md-6 col-12 p-0">
      <a class="lg-icon text-black" data-target="#Environmental-modal" data-toggle="modal" title="Environmental" href="#">
        <div class="hero-img icon-img environmental-icon"></div>
        <div class="icon-text">Environmental</div>
      </a>
    </div>

    <div class="col-xl-1 col-md-6 col-12 p-0">
      <a class="lg-icon text-black" data-target="#Spiritual-modal" data-toggle="modal" title="Spiritual" href="#">
        <div class="hero-img icon-img spiritual-icon"></div>
        <div class="icon-text">Spiritual</div>
      </a>
    </div>

    <div class="col-xl-1 col-md-6 col-12 p-0">
      <a class="lg-icon text-black" data-target="#Physical-modal" data-toggle="modal" title="Physical" href="#">
        <div class="icon-img physical-icon"></div>
        <div class="icon-text">Physical</div>
      </a>
    </div>

    <div class="col-xl-1 col-md-6 col-12 p-0">
      <a class="lg-icon text-black" data-target="#Emotional-modal" data-toggle="modal" title="Emotional" href="#">
        <div class="hero-img icon-img emotional-icon"></div>
        <div class="icon-text">Emotional</div>
      </a>
    </div>

    <div class="col-xl-1 col-md-6 col-12 p-0">
      <a class="lg-icon text-black" data-target="#Relationship-modal" data-toggle="modal" title="Relationship" href="#">
        <div class="hero-img icon-img relationship-icon"></div>
        <div class="icon-text">Relationship</div>
      </a>
    </div>

    <div class="col-xl-1 col-md-6 col-12 p-0">
      <a class="lg-icon text-black" data-target="#Family-modal" data-toggle="modal" title="Family" href="#">
        <div class="hero-img icon-img family-icon"></div>
        <div class="icon-text">Family</div>
      </a>
    </div>

    <div class="col-xl-1 col-md-6 col-12 p-0">
      <a class="lg-icon text-black" data-target="#Social-modal" data-toggle="modal" title="Social" href="#">
        <div class="hero-img icon-img social-icon"></div>
        <div class="icon-text">Social</div>
      </a>
    </div>

    <div class="col-xl-1 col-md-6 col-12 p-0">
      <a class="lg-icon text-black" data-target="#Intellectual-modal" data-toggle="modal" title="Intellectual" href="#">
        <div class="hero-img icon-img intellectual-icon"></div>
        <div class="icon-text">Intellectual</div>
      </a>
    </div>

    <div class="col-xl-1 col-md-6 col-12 p-0">
      <a class="lg-icon text-black" data-target="#Career-modal" data-toggle="modal" title="Career" href="#">
        <div class="hero-img icon-img career-icon"></div>
        <div class="icon-text">Career</div>
      </a>
    </div>

    <div class="col-xl-1 col-md-6 col-12 p-0">
      <a class="lg-icon text-black" data-target="#Financial-modal" data-toggle="modal" title="Financial" href="#">
        <div class="hero-img icon-img financial-icon"></div>
        <div class="icon-text">Financial</div>
      </a>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'MBM-Icons',
}
</script>

<style scoped>
.career-icon {
  background-image: url(https://mybetterme.s3-us-west-2.amazonaws.com/images/Career-icon.svg);
}

.environmental-icon {
  background-image: url(https://mybetterme.s3-us-west-2.amazonaws.com/images/Environmental-icon.svg);
}

.emotional-icon {
  background-image: url(https://mybetterme.s3-us-west-2.amazonaws.com/images/Emotional-icon.svg);
}

.family-icon {
  background-image: url(https://mybetterme.s3-us-west-2.amazonaws.com/images/Family-icon.svg);
}

.financial-icon {
  background-image: url(https://mybetterme.s3-us-west-2.amazonaws.com/images/Financial-icon.svg);
}

.intellectual-icon {
  background-image: url(https://mybetterme.s3-us-west-2.amazonaws.com/images/Intellectual-icon.svg);
}

.spiritual-icon {
  background-image: url(https://mybetterme.s3-us-west-2.amazonaws.com/images/Spiritual-icon.svg);
}

.physical-icon {
  background-image: url(https://mybetterme.s3-us-west-2.amazonaws.com/images/Physical-icon.svg);
}

.relationship-icon {
  background-image: url(https://mybetterme.s3-us-west-2.amazonaws.com/images/Relationship-icon.svg);
}

.social-icon {
  background-image: url(https://mybetterme.s3-us-west-2.amazonaws.com/images/Social-icon.svg);
}

.icon-img {
  height: 150px;
  width: 150px;
}

.icon-text {
  font-size: 28px;
}

.lg-icon {
  color: #000;
  display: inline-table;
  font-family: 'Butterfly Kids';
}

.lg-icon:hover {
  color: #f7941d;
  text-decoration: none;
}

@media (min-width: 768px) {
  .icon-img {
    height: 120px;
    width: 120px;
  }
}

@media (min-width: 992px) {
  .icon-text {
    font-size: 26px;
  }
}

@media (min-width: 1200px) {
  .icon-text {
    font-size: 18px;
  }
}
</style>