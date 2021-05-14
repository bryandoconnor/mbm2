<template>
<div class="container-fluid m-0 p-0">
  <div class="row m-0 p-0">
    <div class="col-md-12 p-0 m-0">
      <div id="Welcome-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content p-5">
            <div class="main-header text-center">
              <h1 class="welcome-heading butterfly-text">MyBetterMe</h1>
              <p class="text-black lg-p average-text">Want to simplify your life?</p>
              <p class="text-black lg-p average-text">Our analog booklet is a tool that's packed with hundreds of ideas on how to simplify and balance your life!</p>
              <div><router-link class="btn btn-link orange-button lg-button" role="button" to="/cart">$19.99 | Buy Now</router-link></div>
              <div><router-link class="btn btn-link orange-button lg-button" role="button" to="/mbm">Take a Tour</router-link></div>
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
  name: 'WelcomeModal',
}
</script>

<style scoped>

</style>
