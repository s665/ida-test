<template>
  <div class="menu">
    <ul>
      <li v-for="item in menu" :key="item.id">
        <nuxt-link :to="'/' + item.id" :class="{active: item.id === isActive}">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [],
    }
  },
  computed: {
    isActive() {
      return !!this.$route.params.id ? +this.$route.params.id : 1
    }
  },
  async fetch() {
    let response = await fetch('https://frontend-test.idaproject.com/api/product-category')
    this.menu = await response.json()
  }
}
</script>

<style lang="scss">
@import "assets/styles/variables";
.menu {
  width: 161px !important;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      line-height: 21px;
      margin-bottom: 16px;
      a {
        text-decoration: none;
        color: $color-grey-light;
        &:hover {
          color: $color-grey;
        }
        &.active {
          color: $color-black;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
