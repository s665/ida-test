<template>

</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push('/1')
    }
  },
  created() {
    this.redirect()
  }
}
</script>
