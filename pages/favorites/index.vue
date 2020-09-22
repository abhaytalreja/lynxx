<template>
  <v-layout column justify-center align-center>
    <v-container fluid>
      <TheHeader />
      <ImageList v-if="favoriteItems" :items="favoriteItems" />
    </v-container>
  </v-layout>
</template>
<script>
export default {
  asyncData({ store }) {
    return store.dispatch('getItems').then((items) => {
      return {
        items,
      }
    })
  },
  computed: {
    favoriteItems() {
      const items = this.items
      const favoriteItems = items.filter((item) => item.favourite)
      return favoriteItems
    },
  },
}
</script>
