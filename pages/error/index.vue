<template>
  <v-layout column justify-center align-center>
    <v-container fluid>
      Welcome to Lynxx Image Gallery
      <TheHeader />
      <v-alert v-if="error && !items" type="error">
        There was an error fetching the images
      </v-alert>
      <ImageList v-else :items="items" />
    </v-container>
  </v-layout>
</template>
<script>
export default {
  asyncData({ store }) {
    return store.dispatch('getItemsError').then((items) => {
      if (items.isError) {
        return {
          error: items.isError,
          items: null,
        }
      }
      return {
        items,
        error: null,
      }
    })
  },
}
</script>
