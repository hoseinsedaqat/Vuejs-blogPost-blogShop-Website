<template>
  <div>
    <div class="header">
      <h3>Blog Post</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginHeader",
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background: #333;
  color: #fff;
  padding: 1.5rem;
}
h3 {
  margin-left: 3rem;
}
</style>
