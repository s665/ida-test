<template>
  <div>
    <HeaderPage title="Каталог">
      <FilterCatalog/>
    </HeaderPage>
    <div class="container mt-2">
      <div :class="$style.catalog">
        <Menu/>
        <div :class="$style.productList">
          <ProductItem v-for="product in products"
                       :key="product.id"
                       :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/product-item"
import Menu from "@/components/product-menu"
import HeaderPage from "@/components/top-page";
import FilterCatalog from "@/components/product-filter";

export default {
  components: {HeaderPage, ProductItem, Menu, FilterCatalog},
  data() {
    return {
      filter: 'price'
    }
  },
  async fetch({store, route}) {
    const category = route.params.id
    await store.dispatch('shop/fetch', category)
  },
  computed: {
    products() {
      return this.$store.getters["shop/products"]
    },
  }
}
</script>

<style module lang="scss">
.catalog {
  display: flex;
  justify-content: space-between;
}

.productList {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  grid-gap: 16px 16px;
}
</style>


