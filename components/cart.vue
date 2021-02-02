<template>
  <div v-if="isCartShow">
    <div :class="$style.cartPanel">
      <div :class="$style.topCart">
        <h1 :class="$style.title">Корзина</h1>
        <div :class="$style.close"
             @click="toggleShowCart"></div>
      </div>
      <FormSuccess v-if="sendOrder"/>
      <div v-else>
        <div class="mt-2">
        <span v-if="isCartEmpty"
              :class="$style.emptyCart">
          Пока что вы ничего не добавили <br> в корзину
        </span>
          <span v-else
                :class="$style.inCart">
          Товары в корзине
        </span>
        </div>

        <div class="mt-3">
          <div v-if="!isCartEmpty">
            <CartList/>
            <FormCheckout/>
          </div>
        </div>

        <Button class="mt-2"
                name="Перейти к выбору"
                v-if="isCartEmpty"
                @click.native="toggleShowCart"/>
      </div>
    </div>

    <div :class="$style.cover" @click="toggleShowCart"></div>
  </div>
</template>

<script>
import Button from "@/components/button";
import {mapActions, mapGetters} from 'vuex'
import CartList from "@/components/cart-list";
import FormCheckout from "@/components/form-checkout"
import FormSuccess from "@/components/form-success";

export default {
  components: {FormSuccess, CartList, Button, FormCheckout},
  computed: {
    ...mapGetters("cart", ["isCartEmpty", "isCartShow", "sendOrder"]),
  },
  methods: {
    ...mapActions({
      toggleShowCart: "cart/toggleShowCart",
      loadStorage: "cart/loadStorage"
    })
  },
  mounted() {
    const data = localStorage.products
    console.log(data);
    if (data !== undefined) {
      this.loadStorage(data)
    }
  }
}
</script>

<style module lang="scss">

.cover {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.8;
  z-index: 4;
}

.cartPanel {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 460px;
  max-width: 100%;
  background-color: $color-white;
  z-index: 5;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0 0 8px;
  padding: 48px;
  box-sizing: border-box;
  overflow: auto;
}

.topCart {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 32px;
  color: #000;
  margin: 4px 0 0 0;
  line-height: 41px;
  padding: 0;
}

.close {
  width: 14px;
  height: 14px;
  position: relative;
  cursor: pointer;

  &::before, &::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: $color-grey;
    display: block;
    position: absolute;
  }

  &::before {
    top: 7px;
    transform: rotate(45deg);
  }

  &::after {
    bottom: 5px;
    transform: rotate(-45deg);
  }

  &:hover:before, &:hover:after {
    background-color: $color-black;
  }

}

.emptyCart {
  font-size: 22px;
  line-height: 28px;
}

.inCart {
  line-height: 23px;
  color: $color-grey;
  font-size: 18px;
}


</style>

