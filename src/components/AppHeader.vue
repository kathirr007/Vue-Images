<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="item">
      Image Storage
    </router-link>

    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/galleries" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a class="item" @click="logout">Logout</a>
      </div>

      <a v-else href="#" class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login', 'logout'])
};
</script>

<style scoped lang="scss">
.horizontal {
  display: flex;
  flex-direction: row;
}
.router-link-exact-active{
    background-color: transparent !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border-color: #1b1c1d !important;
    font-weight: 700 !important;
    color: rgba(0,0,0,.95) !important;
}
</style>
