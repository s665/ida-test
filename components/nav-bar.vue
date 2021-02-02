<template>
  <header :class="$style.headerMenu">
    <nuxt-link to="/" :class="$style.logo">TestList</nuxt-link>
    <CartButton @click.native="toggleShowCart"/>
  </header>
</template>

<script>
import {mapActions} from 'vuex'
import CartButton from "@/components/cart-toggle";

export default {
  components: {CartButton},
  methods: {
    ...mapActions({
      toggleShowCart: "cart/toggleShowCart"
    }),
  }
}
</script>

<style module lang="scss">
.headerMenu {
  max-width: 1440px;
  height: 66px;
  margin: 0 auto;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  padding-left: 88px;
  padding-right: 102px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  text-decoration: none;
  font-size: 22px;
  color: $color-grey;
  font-weight: 700;

  &:hover {
    color: $color-black;
  }
}

</style>





