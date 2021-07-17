<template>
  <div>
    <div id="mySpinner" v-if="mySpinner">
      <div class="spinner-border" style="width: 3rem; height: 3rem" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-if="myContent">
      <app-header></app-header>
      <div class="container">
        <div class="row">
          <div class="col-md-12 mx-auto">
            <div class="card p-5 mt-4">
              <h3>Setting Pages:</h3>
              <p>Allow register Your Data For Better Help In Chosses for You:</p>
              <div class="form-group">
                <input type="radio" checked /> Yes
              </div>
              <div class="form-group"><input type="radio"/> No</div>
              <!-- Another Setting -->
              <p>Perfer Save your Data:</p>
              <div class="form-group"><input type="radio" name="" i /> Yes</div>
              <div class="form-group">
                <input type="radio" name="" id="" checked /> No
              </div>
            </div>
          </div>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  name: "Setting",
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  data() {
    return {
      mySpinner: true,
      myContent: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.mySpinner = false;
      this.myContent = true;
    }, 3000);
  },
};
</script>

<style scoped>
#mySpinner {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
