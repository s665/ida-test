<template>
  <section>
    <div class="container mt-1"
         :class="$style.headerPage">
      <h1 :class="$style.title">
        {{ title }}
      </h1>
      <slot/>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true
    }
  }
}
</script>

<style module lang="scss">
.headerPage {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  margin: 0;
}
</style>
