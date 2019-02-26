<template>
  <div class="text-center">
    <div v-if="isLoggedIn" id="imageContainer" class="image-container">
      <v-gallery :images="allImages" :dark="true" :caption="true" >
        <a href="javascript:void(0);"
           :data-image="img.link"
           :title="img.title"
           v-for="img in allImages" :key="img.id">
            <div class="bgbox">
                <img :src="img.link">
                <span class="dark-overlay"></span>
            </div>
            <!-- <div class="img-title" v-html="img.title"></div> -->
        </a>
      </v-gallery>
      <!-- <a v-for="image in allImages" :key="image.id" :href="image.link"><img :src="image.link" alt=""></a> -->
    </div>
    <h2 v-else>Log in to get started!</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


export default {
  name: 'ImageList',
  computed: mapGetters(['allImages', 'isLoggedIn']),
  methods: mapActions(['fetchImages']),
  data(){
    return {
      index: null
    }
  },
  created() {
    this.fetchImages();
  },
  mounted() {
    console.log(this.allImages);
  },
  updated() {
    // console.log(this.allImages);
  }
};
</script>

<style scoped lang="scss">
.image-container {
  column-count: 3;
  column-gap: 0;
  @media screen and (max-width: 900px) {
    column-count: 2;
  }
  @media screen and (max-width: 600px) {
    column-count: 1;
  }
}
img {
  max-width: 100%;
  padding: 5px;
}
.v-gallery{
  display: flex;
  width: 100%;
  .lightBoxGallery{
    a {
      display: inline-block;
      margin: 5px;
      border-radius: 5px;
      z-index: 1;
      position: relative;
      transition: all .3s ease-in-out;
      .bgbox {
        position: relative;
        img {
          border-radius: 5px;
        }
        .dark-overlay {
          background-color: rgba(0,0,0,0.3);
          opacity: 1;
          position: absolute;
          border-radius: 5px;
          -webkit-transition: all 0.2s ease-in-out;
          -moz-transition: all 0.2s ease-in-out;
          -o-transition: all 0.2s ease-in-out;
          -ms-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
      }
      &:hover {
        box-shadow: 1px 2px 3px darkgrey;
        transform: scale3d(1.2, 1.2, 1);
        @media screen and (max-width: 900px) {
          transform: scale3d(1.1,1.1,1);
        }
        @media screen and (max-width: 600px) {
          transform: scale3d(1,1,1);
        }
        z-index: 2;
        background: darkgrey;
        img{
          transition: all .3s ease-in-out;
          z-index: 2;
          border-radius: 5px;
        }
        .dark-overlay {
          opacity: 0;
          z-index: 0;
        }
      }
    }
  }
}





</style>
