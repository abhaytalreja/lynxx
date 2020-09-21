<template>
  <div>
    <v-btn color="blue-grey" class="ma-2 white--text mb-4" nuxt href="/">
      Go back home
      <v-icon right>mdi-home</v-icon>
    </v-btn>
    <ImageCard :item="item" :full-size="fullSize" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: {
        title: 'Pre-fab homes',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 12,
      },
      fullSize: true,
    }
  },
}
</script>
