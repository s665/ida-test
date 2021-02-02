<template>
  <div>
    <div v-for="product in getAllCartItems">
      <CartListItem :key="product.key"
                    :product="product"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ProductListItem from "@/components/product-item";
import CartListItem from "@/components/cart-list-item";

export default {
  components: {CartListItem, ProductListItem},
  computed: {
    ...mapGetters("cart", ["getAllCartItems"])
  },
}
</script>
