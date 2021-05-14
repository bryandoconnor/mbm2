<template>
<div class="row text-center py-2 footer-bg">
  <div class="col-12 p-0">

    <div class="row mx-0 my-2">
      <div class="col-12 p-0">
        <a href="/" class="footer-link-basic footer-heading butterfly-text white-text">
          <div class="row m-0">
            <div class="col-12 p-0 text-center">
              <img src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MyBetterMe+Logo-Footer.svg" alt="MyBetterMe logo" class="footer-img" />
              <span class="d-inline-block mr-2 ml-1 average-text">|</span>© {{(new Date().getFullYear())}}
            </div>
          </div>
        </a>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.footer-bg {
  background-color: #222;
}

.footer-heading {
  font-size: 30px;
}

.footer-img {
  height: 50px;
}

.footer-link {
  color: #000;
  font-size: 17px;
}

.footer-link:hover {
  color: #9353f9;
}

.footer-link-basic {
  color: #fff;
}

.footer-link-basic:hover {
  color: #00ff04;
  text-decoration: none;
  transition-duration: .4s;
}

.footer-links {
  font-size: 16px;
}
</style>
