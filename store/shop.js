export const state = () => ({
  products: [],
  currentFilter: {
    key: 'price',
    name: 'цене'
  },
  filterList: [
    {
      key: 'price',
      name: 'цене'
    },
    {
      key: 'rating',
      name: 'рейтингу'
    }
  ]
})

export const getters = {
  products: s => s.products,
  filterList: s => s.filterList,
  currentFilter: s => s.currentFilter
}

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  setFilter(state, filter) {
    state.currentFilter = filter
  },
  sortData(state, sortBy) {
    state.products = state.products.sort((prev, next) => next[sortBy] - prev[sortBy])
  }
}

export const actions = {
  async fetch({commit}, category) {
    const res = await fetch(`https://frontend-test.idaproject.com/api/product?category=${category}`)
    const data = await res.json()
    commit('setProducts', data)
  },
  setFilter({commit}, payload) {
    commit('setFilter', payload)
  },
  sortData({commit, store}, sortBy) {
    commit('sortData', sortBy)
  }
}
