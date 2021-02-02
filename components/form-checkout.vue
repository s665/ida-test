<template>
  <form class="mt-1" @submit.prevent="sendCart">
    <span :class="$style.title">Оформить заказ</span>
    <FormField class="mt-2"
               placeholder="Ваше имя"
               v-model="name"/>
    <FormField class="mt-2"
               placeholder="Телефон"
               v-mask="'+7 (###) ###-##-##'"
               v-model="phone"
    />
    <FormField class="mt-2"
               placeholder="Адрес"
               v-model="address"
               />
    <Button class="mt-2"
            name="Отправить"
            @click.native.prevent="sendOrder"/>
  </form>

</template>

<script>
import FormField from '@/components/form-field'
import Button from '@/components/button'

export default {
  data() {
    return {
      name: '',
      phone: '',
      address: '',
    }
  },
  methods: {
    sendOrder() {
      const {name, phone, address} = this.$data
      const data = {
        product: this.$store.getters["cart/getAllCartItems"],
        contact: {name, address, phone}
      }

      if (name.length > 2 && phone.length === 18 && address.length > 2){
        this.$store.dispatch('cart/sendOrder', JSON.stringify(data))
      }
    },
  },
  components: {FormField, Button}
}
</script>

<style module lang="scss">
.title {
  font-size: 18px;
  color: $color-grey;
}
.warning {
  margin-top: 24px;
  color: orange;
  display: block;
}
</style>
