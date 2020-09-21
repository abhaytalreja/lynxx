<template>
  <v-card class="ma-2">
    <v-img
      :src="item.src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      :height="fullSize ? '720px' : '350px'"
    >
      <v-card-title v-text="item.title"></v-card-title>
    </v-img>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
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
