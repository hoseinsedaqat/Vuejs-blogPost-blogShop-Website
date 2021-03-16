<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card p-4 mt-5 border-danger">
            <h3>Error 404 Page is Not Found</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "ErrorPage",
  components: {
    "app-header": Header,
  },
};
</script>
