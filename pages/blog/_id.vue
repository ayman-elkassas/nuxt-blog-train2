<template>
  <div><h1>{{$route.params.id}}</h1></div>
</template>

<script>
export default {
  name: "_id",
  validate({params}){
    return !isNaN(params.id);
  }
}
</script>

<style scoped>

</style>
