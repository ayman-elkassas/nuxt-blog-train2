<template>
  <div>
    <h1 v-if="error.statusCode===404">Route not found</h1>
    <h1 v-else>An error happened</h1>
  </div>
</template>

<script>
export default {
  name: "error",
  props:["error"],
  layout:"error-layout",
  mounted() {
    console.log(this.error);
  }
}
</script>

<style scoped>

</style>
