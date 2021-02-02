<template>
  <div :class="$style.productItem">
    <div :class="$style.rating">
      <Rating :rating="product.rating"/>
    </div>
    <div :class="$style.addCart">
      <button :class="{[this.$style.buttonCart]: true,
                       [this.$style.inCart]: inCart}"
              @click="addItem(product)"/>
    </div>
    <div :class="$style.info">
      <div :class="$style.image">
        <img :src="`https://frontend-test.idaproject.com` + product.photo" alt="img">
      </div>
      <span :class="$style.title">{{ transformName }}</span>
      <span :class="$style.price">{{ transformPrice }}</span>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Rating from "@/components/rating"

export default {
  components: {Rating},
  props: {
    product: Object
  },
  computed: {
    transformName() {
      const {name} = this.product
      if (name.length > 25) {
        return name.split('').slice(0, 23).join('') + '...'
      }
      return name
    },
    transformPrice() {
      const tPrice = this.product.price.toString()
      return tPrice.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ') + ' ₽'
    },
    inCart() {
      return this.$store.getters["cart/getAllCartItems"].findIndex(({id}) => id === this.product.id) > -1
    }
  },
  methods: {
    ...mapActions({
      addItem: "cart/addItemToCart"
    })
  }
}
</script>

<style module lang="scss">

.productItem {
  width: 264px;
  height: 272px;
  background-color: $color-white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  position: relative;
}

.info {
  padding: 18px 16px 16px 16px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 180px;

  img {
    max-width: 143px;
    max-height: 180px;
  }
}

.title {
  font-size: 14px;
  color: $color-grey;
}

.price {
  margin-top: 6px;
  font-size: 14px;
  font-weight: bold;
}

.rating {
  position: absolute;
  left: 20px;
  top: 20px;
  display: flex;
  align-items: center;
}

.addCart {
  position: absolute;
  top: 20px;
  right: 20px;
}

.buttonCart {
  outline: none;
  border: none;
  cursor: pointer;
  background-color: $color-grey-light;
  background-size: cover;
  mask-image: url("../assets/icon/basket.svg");
  mask-size: cover;
  width: 12px;
  height: 13px;

  &:hover {
    background-color: $color-black;
  }
}

.inCart {
  background-color: $color-black;
}

</style>
