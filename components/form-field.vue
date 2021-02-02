<template>
  <div>
    <label>
      <input type="text"
             :class="$style.field"
             :placeholder="placeholder"
             :value="value"
             @input="$emit('input', $event.target.value)"
             >
    </label>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String
    },
    value: String
  }
}
</script>

<style module lang="scss">
.field {
  @include interaction-bs;
  background-color: $color-grey-extra-light;
  width: 100%;
  color: $color-black;
}
</style>
