<template>
  <div>
    <Header/>
    <Cart/>
    <Nuxt/>
  </div>
</template>

<script>
import Cart from "@/components/cart";
import Header from "@/components/nav-bar";

export default {
  components: {Header, Cart},
}
</script>
