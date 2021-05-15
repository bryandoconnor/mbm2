<template>
<div id="navbar" class="navContainer">
  <div class="col-12 p-0">

    <div class="navBar">

      <div class="navBrand">
        <a href="/">
          <img src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MyBetterMe-Logo.svg" alt="MyBetterMe logo" />
        </a>
      </div>

      <div class="nav-wrapper">
        <div class="nav">
          <router-link to="/" class="navLink">Home</router-link>
          <router-link to="/mbm" class="navLink">MBM</router-link>
          <router-link to="/resources" class="navLink">Resources</router-link>
          <router-link to="/contest" class="navLink">Contest</router-link>
          <router-link to="/contact" class="navLink">Contact</router-link>
          <router-link to="/about" class="navLink">About</router-link>
          <router-link to="/cart" class="navLink">
            <i class="fas fa-shopping-cart cart-icon-bg"></i>
            <span class="count-cart">Cart</span>
          </router-link>
          <!-- <div class="navLink p-0"><AuthNav /></div> -->
        </div>
      </div>

    </div>

    <div class="navBar-mobile">

      <div class="navBrand">
        <a href="/">
          <img src="https://mybetterme.s3-us-west-2.amazonaws.com/images/MyBetterMe-Logo.svg" alt="MyBetterMe logo" />
        </a>
      </div>

      <div>
        <div class="navHamburger" @click="hideMenuButton" v-if="menuButtonDisplays">Menu</div>
        <div class="navHamburger" @click="hideCloseButton" v-if="closeButtonDisplays">X</div>
      </div>

      <div class="nav-mobile w-100" v-if="mobileNavDisplays">
        <router-link to="/" class="navLink">Home</router-link>
        <router-link to="/mbm" class="navLink">MBM</router-link>
        <router-link to="/resources" class="navLink">Resources</router-link>
        <router-link to="/contest" class="navLink">Contest</router-link>
        <router-link to="/contact" class="navLink">Contact</router-link>
        <router-link to="/about" class="navLink">About</router-link>
        <router-link to="/cart" class="navLink">
          <i class="fas fa-shopping-cart"></i>
          <span class="count-cart">Cart</span>
        </router-link>
        <!-- <div class="navLink"><AuthNav /></div> -->
      </div>

    </div>
  </div>
</div>
</template>

<script>
import {
  ref
} from 'vue';

export default {
  name: 'Navbar',
  setup() {
    const closeButtonDisplays = ref(false);
    const menuButtonDisplays = ref(true);
    const mobileNavDisplays = ref(false);

    function toggleMobileNav() {
      mobileNavDisplays.value = !mobileNavDisplays.value;
    }

    function hideCloseButton() {
      closeButtonDisplays.value = false;
      menuButtonDisplays.value = true;
      toggleMobileNav();
    }

    function hideMenuButton() {
      closeButtonDisplays.value = true;
      menuButtonDisplays.value = false;
      toggleMobileNav();
    }

    return {
      closeButtonDisplays,
      menuButtonDisplays,
      hideMenuButton,
      hideCloseButton,
      mobileNavDisplays,
    };
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Average+Sans');

.cart-icon-bg {
  background-color: #fff;
}

.count-cart {
  padding: 0 5px;
}

.navBar {
  align-items: center;
  display: none;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 20px;
  padding: 2px 4px;
  position: relative;
}

.navBar-mobile {
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 20px;
  padding: 2px 4px;
  position: relative;
}

.navBrand img {
  height: 70px;
  padding: 10px;
}

.navContainer {
  background-color: #fff;
}

.navHamburger {
  background-color: #fff;
  border: solid 1px #888;
  border-radius: 7px;
  color: #000;
  font-family: 'Average Sans', sans-serif;
  margin: 0 20px;
  padding: 5px 10px;
}

.navHamburger:hover {
  background-color: #ff9406;
  border: none;
  border-radius: 7px;
  color: #fff;
  cursor: pointer;
  padding: 5px 10px;
  transition-duration: .4s;
}

.navLink {
  color: #000;
  cursor: pointer;
  display: block;
  font-size: 18px;
  padding: 10px 1.5rem;
}

.navLink:hover {
  color: #00ff04;
  text-decoration: none;
  transition-duration: .4s;
}

.nav-mobile {
  flex-direction: column;
}

@media (min-width: 576px) {
  .navLink {
    padding: 10px 1.5rem;
  }
}

@media (min-width: 768px) {
  .navBrand img {
    height: 50px;
  }

  .navBar {
    display: flex;
  }

  .navBar-mobile {
    display: none;
  }

  .navLink {
    padding: 10px 5px;
  }
}

@media (min-width: 992px) {
  .navBrand img {
    height: 60px;
  }

  .navLink {
    padding: 10px;
  }
}
</style>
