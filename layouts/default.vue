<template>
  <div>
    <header class="site-header">
      <nuxt-link to="/" class="site-logo">TestList</nuxt-link>
      <div class="basket">
        <img src="../assets/icon/basket.svg" alt="basket">
        <div class="basket-count">
          <span>3</span>
        </div>
      </div>
    </header>
    <Nuxt/>

  </div>
</template>

<style lang="scss">
@import "assets/variables";

html {
  font-family: 'PT Sans',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.site-header {
  width: 1440px;
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

  a.site-logo {
    text-decoration: none;
    font-size: 22px;
    color: $color-gray;
    font-weight: 700;
    &:hover {
      color: $color-black;
    }
  }

  .basket {
    cursor: pointer;
    position: relative;

    .basket-count {
      position: absolute;
      display: none; //flex
      justify-content: center;
      align-items: center;
      right: -6px;
      top: -6px;
      width: 12px;
      height: 12px;
      border-radius: 5px;
      background-color: $color-grey-light;

      span {
        font-size: 8px;
        font-weight: 700;
        color: $color-white;
        margin: 0;
        padding-left: 0;
      }
    }
  }

}

</style>
