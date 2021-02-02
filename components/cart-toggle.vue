<template>
  <div :class="$style.cart">
    <img src="../assets/icon/basket.svg" alt="cart">
    <div :class="$style.cartIcon"
         v-if="!isCartEmpty">
      <span :class="$style.cartSum">{{ getCartAmount }}</span>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters('cart', ["isCartEmpty", "getCartAmount"]),
  },
}
</script>

<style module lang="scss">
.cart {
  cursor: pointer;
  position: relative;
}

.cartIcon {
  position: absolute;
  display: flex; //flex
  justify-content: center;
  align-items: center;
  right: -6px;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background-color: $color-grey-light;
}

.cartSum {
  font-size: 8px;
  font-weight: 700;
  color: $color-white;
  margin: 0;
  padding-left: 0;
}

</style>
