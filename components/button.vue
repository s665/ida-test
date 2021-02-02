<template>
  <button :class="style.button">
    {{name}}
  </button>
</template>

<script>
export default {
  props: {
    name: String
  },
  computed: {
    style() {
      return this.$style
    }
  }
}
</script>

<style module lang="scss">
.button {
  width: 100%;
  display: block;
  background-color: $color-black;
  color: #fff;
  cursor: pointer;
  @include interaction-bs;
  &:hover {
    background-color: $color-grey;
  }
}
</style>
