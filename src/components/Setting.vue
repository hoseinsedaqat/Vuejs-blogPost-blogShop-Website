<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-12 mx-auto">
          <div class="card p-5 mt-4">
            <h3>Setting Pages:</h3>
            <p>Allow register Your Data For Better Help In Chosses for You:</p>
            <div class="form-group"><input type="radio" name="" id="" checked /> Yes</div>
            <div class="form-group"><input type="radio" name="" id="" /> No</div>
            <!-- Another Setting -->
            <p>Perfer Save your Data:</p>
            <div class="form-group"><input type="radio" name="" id="" /> Yes</div>
            <div class="form-group"><input type="radio" name="" id="" checked /> No</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "Setting",
  components: {
    "app-header": Header,
  },
};
</script>

<style></style>
