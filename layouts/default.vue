<template>
  <v-app>
    <v-app-bar fixed app color="primary" class="white--text">
      <nuxt-link to="/"><v-toolbar-title v-text="title" /></nuxt-link>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      title: 'Lynxx Image Gallery',
    }
  },
}
</script>
<style>
.v-application .v-toolbar__title {
  color: white;
  text-decoration: none;
}
</style>
