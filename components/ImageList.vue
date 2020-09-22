<template>
  <v-row dense>
    <v-col v-for="item in items" :key="item.name" cols="12" sm="6">
      <ImageCard :item="item" />
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      //   items: [
      //     {
      //       name: '1',
      //       resolution: { width: 1080, height: 720 },
      //       favourite: false,
      //     },
      //     {
      //       name: '2',
      //       resolution: { width: 1080, height: 720 },
      //       favourite: false,
      //     },
      //     {
      //       name: '3',
      //       resolution: { width: 1080, height: 720 },
      //       favourite: false,
      //     },
      //   ],
      // items: [
      //   {
      //     title: 'Pre-fab homes',
      //     src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      //     flex: 12,
      //   },
      //   {
      //     title: 'Favorite road trips',
      //     src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      //     flex: 6,
      //   },
      //   {
      //     title: 'Best airlines',
      //     src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      //     flex: 6,
      //   },
      //   {
      //     title: 'Favorite road trips',
      //     src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      //     flex: 6,
      //   },
      //   {
      //     title: 'Best airlines',
      //     src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      //     flex: 6,
      //   },
      //   {
      //     title: 'Favorite road trips',
      //     src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      //     flex: 6,
      //   },
      //   {
      //     title: 'Best airlines',
      //     src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      //     flex: 6,
      //   },
      // ],
    }
  },
}
</script>
