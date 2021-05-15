<template>
<div class="container-fluid p-0 mb-1 mt-0 mx-auto">
  <div class="row m-0" id="Shopping-row">
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center py-0 px-5">
      <a class="d-block" data-target="#Peek-modal" data-toggle="modal" href="#">
        <img class="mb-1 mt-3 mx-auto w-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/Cover_Image.jpg">
        <p class="sm-p average-text">
          Preview
          <i class="fas fa-angle-double-right"></i>
        </p>
      </a>
      <h1 class="main-heading p-0 mx-auto my-1 butterfly-text">
        Quantity
      </h1>

      <div class="mb-4">
        <button class="btn btn-light d-inline-block" type="button" v-on:click="cartCounter -= 1" :disabled="minusDisabled">-</button>
        <div class="d-inline-block mx-4">{{ cartCounter }}</div>
        <button class="btn btn-light d-inline-block" type="button" v-on:click="cartCounter += 1" :disabled="plusDisabled">+</button>
      </div>

      <!-- TODO Add Local Storage Item For Cart -->
      <!-- <div>
        <button class="d-none btn btn-default lg-button orange-button" type="button" v-on:click="cartFunc()">
          Add to Cart
        </button>
      </div> -->
    </div>

    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center checkout-container">
      <h3 class="main-heading butterfly-text">MyBetterMe Workbook</h3>
      <p class="lg-p average-text">
        The MyBetterMe workbook is our standard product created to help you simplify your life.
        There are 10 sections that correspond with creating a balanced life to inspire you and help
        you achieve your goals!
      </p>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center checkout-container" v-if="cartCounter <= 0">
      <h3 class="xl-p average-text">No Items In Cart</h3>
      <p class="lg-p average-text">Please choose a quantity</p>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center checkout-container" v-if="cartCounter === 1">
      <h3 class="xl-p average-text">1 Workbook | $19.99</h3>
      <p class="lg-p average-text">+ tax &amp; shipping</p>
      <a class="btn btn-default mb-3 mt-1 mx-auto orange-button lg-button" role="button" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=C9797BHUMUZEN">
        Proceed to Checkout
      </a>
    </div>

    <div class="col-4 col-xs-12 text-center checkout-container" v-if="cartCounter === 2">
      <h3 class="xl-p average-text">2 Workbooks | $39.98</h3>
      <p class="lg-p average-text">+ tax &amp; shipping</p>
      <a class="btn btn-default mb-3 mt-1 mx-auto orange-button lg-button" role="button" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=8NDPR8N6M4LL6">
        Proceed to Checkout
      </a>
    </div>

    <div class="col-sm-4 col-xs-12 text-center checkout-container" v-if="cartCounter === 3">
      <h3 class="xl-p average-text">3 Workbooks | $59.97</h3>
      <p class="lg-p average-text">+ tax &amp; shipping</p>
      <a class="btn btn-default mb-3 mt-1 mx-auto orange-button lg-button" role="button" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=VTYACC29GJLXL">
        Proceed to Checkout
      </a>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center checkout-container" v-if="cartCounter === 4">
      <h3 class="xl-p average-text">4 Workbooks | $79.96</h3>
      <p class="lg-p average-text">+ tax &amp; shipping</p>
      <a class="btn btn-default mb-3 mt-1 mx-auto orange-button lg-button" role="button" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=BEWD6RGU4U5G6">
        Proceed to Checkout
      </a>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center checkout-container" v-if="cartCounter === 5">
      <h3 class="xl-p average-text">5 Workbooks | $99.95</h3>
      <p class="lg-p average-text">+ tax &amp; shipping</p>
      <a class="btn btn-default mb-3 mt-1 mx-auto orange-button lg-button" role="button" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=4H495DJSRBEEE">
        Proceed to Checkout
      </a>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center checkout-container blue-over text-black" v-if="cartCounter > 5">
      <h3 class="xl-p average-text">For Orders Larger Than 5</h3>
      <p class="lg-p average-text mb-3">Please contact us directly at
        <a href="mailto:info@mybetterme.net">info@mybetterme.net</a>
        or <a href="tel:385.743.1371">385.743.1371
        </a>
      </p>
    </div>

  </div>
</div>

<div class="container-fluid m-0 p-0" id="Peek-Modal-container">
  <div class="row m-0 p-0" id="Peek-Modal-row">
    <div class="col-md-12 p-0 m-0" id="Peek-Modal-column1">
      <div id="Peek-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content p-5">
            <div class="main-header text-center">

              <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselIndicators" data-slide-to="3"></li>
                  <li data-target="#carouselIndicators" data-slide-to="4"></li>
                  <li data-target="#carouselIndicators" data-slide-to="5"></li>
                  <li data-target="#carouselIndicators" data-slide-to="6"></li>
                  <li data-target="#carouselIndicators" data-slide-to="7"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-Carousel-001.jpg" alt="First slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-Carousel-002.jpg" alt="Second slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-Carousel-003.jpg" alt="Third slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-Carousel-004.jpg" alt="Fourth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-Carousel-005.jpg" alt="Fifth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-Carousel-006.jpg" alt="Sixth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-Carousel-007.jpg" alt="Seventh slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-Carousel-008.jpg" alt="Eighth slide">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>

              <!-- <div class="carousel slide" data-ride="carousel" id="Peek-carousel">
                <div class="carousel-inner" role="listbox">
                  <div class="item active">
                    <img src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-Carousel-001.jpg" alt="Slide Image">
                  </div>
                  <div class="item">
                    <img src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-Carousel-002.jpg" alt="Slide Image">
                  </div>
                  <div class="item">
                    <img src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-Carousel-003.jpg" alt="Slide Image">
                  </div>
                  <div class="item">
                    <img src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-Carousel-004.jpg" alt="Slide Image">
                  </div>
                  <div class="item">
                    <img src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-Carousel-005.jpg" alt="Slide Image">
                  </div>
                  <div class="item">
                    <img src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-Carousel-006.jpg" alt="Slide Image">
                  </div>
                  <div class="item">
                    <img src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-Carousel-007.jpg" alt="Slide Image">
                  </div>
                  <div class="item">
                    <img src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MBM-Carousel-008.jpg" alt="Slide Image">
                  </div>
                </div>
                <div>
                  <a class="left carousel-control" href="#Peek-carousel" role="button" data-slide="prev">
                    <i class="glyphicon glyphicon-chevron-left"></i>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="right carousel-control" href="#Peek-carousel" role="button" data-slide="next">
                    <i class="glyphicon glyphicon-chevron-right"></i>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <ol class="carousel-indicators">
                  <li data-target="#Peek-carousel" data-slide-to="0" class="active"></li>
                  <li data-target="#Peek-carousel" data-slide-to="1"></li>
                  <li data-target="#Peek-carousel" data-slide-to="2"></li>
                  <li data-target="#Peek-carousel" data-slide-to="3"></li>
                  <li data-target="#Peek-carousel" data-slide-to="4"></li>
                  <li data-target="#Peek-carousel" data-slide-to="5"></li>
                  <li data-target="#Peek-carousel" data-slide-to="6"></li>
                  <li data-target="#Peek-carousel" data-slide-to="7"></li>
                </ol>
              </div> -->

              <div>
                <button class="btn btn-link green-button lg-button" data-dismiss="modal" type="button">
                  Close
                </button>
              </div>

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
  name: 'Cart',
  props: {
    initialCartItem: {
      type: String,
      default: 'MyBetterMe Workbook'
    },
    initQuantity: {
      type: Number,
      default: 0,
      min: 0,
    }
  },
  computed: {
    plusDisabled() {
      // you can  check your form is filled or not here.
      if (this.cartCounter >= 6) {
        return true;
      }
      return false;
    },
    minusDisabled() {
      // you can  check your form is filled or not here.
      if (this.cartCounter <= 0) {
        return true;
      }
      return false;
    },
  },
  data() {
    return {
      cartItem: this.initialCartItem,
      cartCounter: this.initQuantity,
      min: 1,
      max: 10,
      count: 1,
    }
  },
}
</script>

<style scoped>
.checkout-container {
  padding: 100px 20px;
}
</style>