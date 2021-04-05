<template>
  <div class="alert alert-danger">{{ msg }}</div>
</template>

<script>
export default {
name: "Error",
  props: ['msg']
}
</script>

<style scoped>
.alert-danger{
  background-color: red;
  color: white;
}
</style>