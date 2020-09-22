<template>
  <v-layout column justify-center align-center>
    <v-container fluid>
      Welcome to Lynxx Image Gallery
      <TheHeader />
      <ImageList v-if="items" :items="items" />
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
}
</script>
