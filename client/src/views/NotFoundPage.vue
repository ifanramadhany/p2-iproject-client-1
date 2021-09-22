<template>
  <div class="page-not-found">
    <h1>PAGE is Not Found</h1>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<style scoped>
  .page-not-found {
    background-image: url('../assets/not-found.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
  h1 {
    padding: 35px;
  }
</style>