<template>
  <div :class="$style.cartItem">
    <img :src="imageUrl + product.photo" alt="img">
    <div :class="$style.info">
      <div :class="$style.Headerinfo">
      <span :class="$style.name">
        {{ product.name }}
      </span>
        <span :class="$style.price">
        {{ transformPrice }}
      </span>
      </div>
      <Rating :rating="product.rating"/>
    </div>
    <div :class="$style.remove">
      <button :class="$style.buttonRemove"
              @click="deleteItem(product.id)"></button>
    </div>
  </div>
</template>

<script>
import Rating from "@/components/rating";
import {mapActions} from 'vuex'

export default {
  components: {Rating},
  data() {
    return {
      imageUrl: 'https://frontend-test.idaproject.com'
    }
  },
  props: {
    product: Object
  },
  computed: {
    transformPrice() {
      const tPrice = this.product.price.toString()
      return tPrice.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ') + ' ₽'
    },
  },
  methods: {
    ...mapActions({
      deleteItem: "cart/deleteItem"
    }),
  }
}
</script>

<style module lang="scss">
.cartItem {
  @include cart-bs;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  padding: 12px;
  box-sizing: border-box;
  margin-bottom: 12px;

}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  width: 170px;
}

.name {
  color: $color-grey;
  display: block;
}

.price {
  font-weight: bold;
  margin-top: 6px;
}

.remove {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.buttonRemove {
  box-sizing: border-box;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: $color-grey-light;
  width: 20px;
  height: 22px;
  mask-image: url("../assets/icon/remove.svg");
  mask-size: cover;

  &:hover {
    background-color: $color-black;
  }
}
</style>
