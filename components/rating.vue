<template>
  <div :class="$style.ratingWrap">
    <div :class="$style.star1"></div>
    <span :class="$style.ratingValue">{{ rating }}</span>
  </div>
</template>

<script>

export default {
  props: {
    rating: Number,
    require: true,
    default: 0
  },

}
</script>

<style module lang="scss">
.ratingWrap {
  display: flex;
  align-items: center;
}

@mixin star {
  display: inline-block;
  background: url("../assets/icon/star.svg");
  width: 14px;
  height: 14px;
}

.star1 {
  @include star
}

.ratingValue {
  color: #F2C94C;
  font-size: 10px;
  font-weight: 700;
  margin-left: 3px;
}
</style>
