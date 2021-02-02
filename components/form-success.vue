<template>
  <div :class="$style.successSend">
    <img src="../assets/icon/success-cart.svg" alt="успешно отправлено">
    <div class="mt-2">
      <h3 :class="$style.title">Заявка успешно отправлена</h3>
    </div>
    <span :class="$style.description">Вскоре наш менеджер свяжется с Вами</span>
  </div>
</template>

<style module lang="scss">
.successSend {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
}
.title {
  font-size: 24px;
  line-height: 31px;
  font-weight: bold;
  color: #000;
  margin: 0;
}
.description {
  font-size: 16px;
  line-height: 21px;
  color: $color-grey;

}
</style>
