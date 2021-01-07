<template>
  <div>
    <app-header></app-header>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <h3 class="mb-4">Welcome To Blog Post</h3>
          <p class="lead badge badge-success">Everythings Your Mind Post it...</p>
          <div class="form-group">
            <label for="title">Post Title:</label>
            <input type="text" v-model="posts.title" class="form-control col-md-10" />
          </div>
          <div class="form-group">
            <label for="text">Whats Your Mind?</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="form-control col-md-10"
              v-model="posts.text"
            ></textarea>
          </div>
          <button @click="add()" class="btn btn-info">Posted</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
import Header from "./Header.vue";
export default {
  name: "Home",
  components: {
    "app-header": Header,
  },
  data() {
    return {
      posts: {
        id: "",
        title: "",
        text: "",
      },
    };
  },
  computed: {
    ...mapState(["data"]),
  },
  methods: {
    ...mapActions(["addPost"]),
    add() {
      const { id, title, text } = this.posts;
      const posts = {
        post: {
          id,
          title,
          text,
        },
      };
      if (title === "" || text === "") {
        alert("Are you sure completed ?");
      } else {
        this.addPost(posts);
        (this.posts.title = ""), (this.posts.text = "");
      }
    },
  },
};
</script>

<style scoped></style>
