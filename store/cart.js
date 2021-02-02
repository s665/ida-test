const initialState = {
  showCart: false,
  shoppingCart: [],
  sendOrder: false
}

export const state = () => (initialState)

export const getters = {
  getCartAmount: s => s.shoppingCart.length,
  isCartEmpty: s => s.shoppingCart.length === 0,
  isCartShow: s => s.showCart,
  getAllCartItems: s => s.shoppingCart,
  sendOrder: s => s.sendOrder
}

export const mutations = {
  toggleShowCart(state) {
    state.showCart = !state.showCart
  },
  addItemToCart(state, payload) {
    state.shoppingCart.push(payload)
  },
  deleteItem(state, payload) {
    const {shoppingCart} = state
    const idx = shoppingCart.findIndex(({id}) => id === payload)
    state.shoppingCart = [
      ...shoppingCart.slice(0, idx),
      ...shoppingCart.slice(idx + 1)
    ]
  },
  sendOrder(state, status) {
    state.sendOrder = status
  },
  clearOrder(state) {
    state.shoppingCart = []
  }
}

export const actions = {
  toggleShowCart({commit, state}) {
    if (state.sendOrder) {
      commit('sendOrder', false)
    }
    commit('toggleShowCart')
  },
  loadStorage({commit}, payload) {
    JSON.parse(payload).forEach(item => {
      commit("addItemToCart", item)
    })
  },
  addItemToCart({commit, state}, payload) {
    commit('addItemToCart', payload)
    localStorage.clear()
    localStorage.setItem('products', JSON.stringify(state.shoppingCart))
  },
  deleteItem({commit, state}, payload) {
    commit('deleteItem', payload)
    localStorage.clear()
    if (state.shoppingCart.length !== 0){
      localStorage.setItem('products', JSON.stringify(state.shoppingCart))
    }
  },
  sendOrder({commit}, payload) {
    //send order logic
    //payload is JSON
    //if status = ok => return status = true
    const status = true
    commit('clearOrder')
    localStorage.clear()
    commit('sendOrder', status)
  }
}
