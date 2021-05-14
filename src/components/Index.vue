<template>
<div>
  <IndexMain />
  <IndexCarousel />
  <ContestBanner />
  <WelcomeModal />
  <SocialMedia />
</div>
</template>

<script>
import IndexMain from './IndexMain.vue';
import IndexCarousel from './IndexCarousel.vue';
import ContestBanner from './ContestBanner.vue';
import WelcomeModal from './WelcomeModal.vue';
import SocialMedia from './SocialMedia.vue';

export default {
  name: 'Index',
  components: {
    IndexMain,
    IndexCarousel,
    ContestBanner,
    WelcomeModal,
    SocialMedia,
  },
}
</script>

<style scoped>

</style>
