<template>
  <div>
    <AppHeader></AppHeader>

    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  name: 'App',
  components: {
    AppHeader
  },
  mounted(){
    // $('#imageContainer').unitegallery();
  },
  updated(){
    // $('#imageContainer').unitegallery();
  }
};
</script>

<style lang="scss">
@media screen and (max-width: 600px){
  .v-gallery {
    .blueimp-gallery-controls {
      a.next, a.prev {
        display: none !important;
      }
    }
  }
}

</style>
