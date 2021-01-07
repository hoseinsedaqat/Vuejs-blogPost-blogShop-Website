<template>
  <div>
    <app-header></app-header>
    <div class="showcase">
      <h3>Writed In Blog Post</h3>
    </div>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <h5 class="mb-4">
            <span class="badge badge-dark">{{ counter }}</span> Posts:
          </h5>
          <ul v-for="(post, index) in data" :key="(post, index)">
            <div class="panel">
              <h4>{{ post.title }}</h4>
              <hr class="bg-dark" />
              <p>{{ post.text }}</p>
              <div @click="deletedPost(index)">
                <i class="fa fa-trash mt-4"></i>
              </div>
              <router-link tag="li" :to="`Blog/${index}`" class="float-right"
                ><a>ReadMore...</a></router-link
              >
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import Header from "./Header.vue";
export default {
  name: "Blog",
  components: {
    "app-header": Header,
  },
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    ...mapState(["data"]),
  },
  methods: {
    ...mapActions(["deletedPost"]),
  },
  mounted() {
    let numberofPost = this.data.length;
    this.counter = numberofPost;
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
.panel {
  border: 1px solid #6666;
  padding: 2rem;
  border-radius: 5px;
  margin-bottom: 2rem;
}
i {
  cursor: pointer;
  color: red;
}

.showcase {
  background: url("../assets/1513174401197_NotebookNotes_7730-xl.jpg") no-repeat center
    center/cover;
  height: 50vh;
  color: #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
