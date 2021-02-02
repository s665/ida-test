<template>
  <div :class="$style.filter">
    <span>Сортировать по:</span>
    <a href="/" @click.prevent="toggleShowList">{{ currentFilter.name }}</a>
    <div/>
    <div :class="{[$style.filterList]: true, [$style.visible]: isShow}">
      <ul>
        <li v-for="filter in filterList"
            :key="filter.key">
          <a href="" @click.prevent="setFilter(filter)">
            По {{ filter.name }}
          </a>
        </li>

      </ul>
    </div>
    <div :class="$style.cover"
         v-if="isShow"
         @click="toggleShowList"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    toggleShowList() {
      this.isShow = !this.isShow
    },
    setFilter(filter) {
      this.$store.dispatch("shop/setFilter", filter)
      this.$store.dispatch("shop/sortData", filter.key)
      this.isShow = false
    }
  },
  computed: {
    ...mapGetters({
      filterList: "shop/filterList",
      currentFilter: "shop/currentFilter"
    })
  },
  mounted() {
    this.$store.dispatch("shop/setFilter", this.filterList[0])
  }
}
</script>

<style module lang="scss">

.filter {
  color: $color-black;
  display: inline-block;
  position: relative;
  margin-right: 13px;

  span {
    margin-right: 6px;
  }

  & > a {
    text-decoration: none;
    display: inline-block;
    color: $color-grey;

    &::after {
      content: '';
      display: inline-block;
      margin-left: 4px;
      width: 5px;
      height: 5px;
      background-image: url("../assets/icon/filter-arrow.svg");
      background-repeat: no-repeat;
    }

    &:hover {
      color: $color-black;
    }
  }
}

.filterList {
  position: absolute;
  display: none; //block
  background-color: $color-white;
  left: 0;
  right: 0;
  z-index: 2;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-top: 6px;

  ul {
    list-style: none;
    margin: 0;
    padding: 8px 0;
    width: 100%;

    li > a {
      text-decoration: none;
      font-size: 14px;
      color: $color-grey-light;
      display: block;
      padding: 4px 0 4px 12px;

      &:hover {
        color: $color-black;
        background-color: $color-grey-extra-light;
      }
    }
  }
}

.visible {
  display: block;
}

.cover {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
}

</style>
