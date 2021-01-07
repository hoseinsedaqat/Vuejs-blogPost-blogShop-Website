<template>
  <div>
    <div id="main-footer">
      <p>Blog Post 2021&copy;  ❤ <i class="fab fa-vuejs" style="color:lightgreen;"></i></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#main-footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  margin-top: 5rem;
  background: #333;
  color: #fff;
}
</style>
