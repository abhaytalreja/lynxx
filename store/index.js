export const state = () => ({})

export const mutations = {
  setItems(state, items) {
    state.items = items
  },
}

export const actions = {
  getItems(vuexContext) {
    // eslint-disable-next-line no-console
    return this.$axios
      .get('https://portal-tb.lynxx.co/api-test/image/list')
      .then((items) => {
        vuexContext.commit('setItems', items.data)
        return items.data
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e)
        return { isError: true }
      })
  },
  getItemsError(vuexContext) {
    // eslint-disable-next-line no-console
    return this.$axios
      .get('https://portal-tb.lynxx.co/api-test/image/lisst')
      .then((items) => {
        vuexContext.commit('setItems', items.data)
        return items.data
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e)
        return { isError: true }
      })
  },
}

export const getters = {
  getItems(state) {
    return state.items
  },
}
