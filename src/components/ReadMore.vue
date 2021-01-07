<template>
  <div>
    <app-header></app-header>
    <button class="btn mt-3 ml-2" @click="back()">
      <i class="fa fa-long-arrow-left"></i> Back
    </button>
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto mt-4">
          <p class="badge badge-info">Post Title:</p>
          <h3>{{ readPost.title }}</h3>
          <hr />
          <p class="text">{{ readPost.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./Header.vue";
export default {
  name: "ReadMore",
  components: {
    "app-header": Header,
  },
  data() {
    return {
      readPost: [],
    };
  },
  computed: {
    ...mapState(["data"]),
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    let post = this.data[this.$route.params.id];
    this.readPost = post;
  },
};
</script>

<style scoped></style>
