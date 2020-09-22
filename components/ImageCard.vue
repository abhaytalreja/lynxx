<template>
  <v-lazy>
    <v-card class="ma-2">
      <nuxt-link :to="'/' + item.name" class="image-preview">
        <v-img
          :lazy-src="'https://portal-tb.lynxx.co/api-test/image/' + item.name"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          :height="fullSize ? '720px' : '350px'"
        >
          <v-card-title v-text="item.name"></v-card-title>
        </v-img>
      </nuxt-link>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn icon disabled>
          <v-icon v-if="item.favourite" right>mdi-heart</v-icon>
          <v-icon v-else right>mdi-heart-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-lazy>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    fullSize: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped>
.image-preview {
  text-decoration: none;
}
</style>
