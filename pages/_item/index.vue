<template>
  <div>
    <TheHeader />
    <ImageCard :item="item" :full-size="fullSize" />
  </div>
</template>
<script>
export default {
  asyncData({ store, params, payload }) {
    if (payload) {
      // eslint-disable-next-line no-console
      console.log('got Payload', payload.item)
      return {
        item: payload.item,
      }
    } else if (store.state.items) {
      const items = store.getters.getItems
      const item = items.find((item) => item.name === params.item)
      return { item }
    } else {
      return store.dispatch('getItems').then((items) => {
        const item = items.find((item) => item.name === params.item)
        return {
          item,
        }
      })
    }
  },
  data() {
    return {
      fullSize: true,
    }
  },
}
</script>
