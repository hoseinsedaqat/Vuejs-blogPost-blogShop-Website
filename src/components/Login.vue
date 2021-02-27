<template>
  <div>
    <div id="mySpinner" v-if="mySpinner">
      <div class="spinner-border" style="width: 3rem; height: 3rem" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-if="myContent">
      <login-header></login-header>
      <div class="login">
        <div class="container">
          <div class="row">
            <div class="col-md-10 mx-auto">
              <div class="panel">
                <h3 class="mb-3">Login</h3>
                <p class="error">{{ error }}</p>
                <div class="form-group">
                  <label for="username">User Name:</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    :class="{ active: validatorName === 'invalid' }"
                    v-model.trim="username"
                    @blur="userNameValid"
                    class="form-control col-md-10"
                  />
                  <p class="text-danger" v-if="validatorName === 'invalid'">
                    Enter a Valid User Name!
                  </p>
                </div>
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    :class="{ active: validatorPassword === 'invalid' }"
                    v-model.trim="password"
                    class="form-control col-md-10"
                    @blur="passwordValid"
                  />
                  <p class="text-danger" v-if="validatorPassword === 'invalid'">
                    Enter your Password!
                  </p>
                </div>
                <button class="btn btn-info btn-block col-md-10" @click="validate()">
                  Login
                </button>
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
import { mapState } from "vuex";
import LoginHeader from "./LoginHeader.vue";
import Footer from "./Footer.vue";
export default {
  name: "Login",
  components: {
    "login-header": LoginHeader,
    "app-footer": Footer,
  },
  data() {
    return {
      username: "",
      password: "",
      error: "Please Compeletd For Login!!",
      validatorName: null,
      validatorPassword: null,
      mySpinner: true,
      myContent: false,
    };
  },
  computed: {
    ...mapState(["myUserName"]),
  },
  methods: {
    validate() {
      if (this.username === "" || this.password === "") {
        document.querySelector(".error").style.display = "block";
      } else {
        this.$router.push("/Home");
      }
      setTimeout(() => {
        document.querySelector(".error").style.display = "none";
      }, 2000);
    },
    // New Validate
    userNameValid() {
      if (this.username === "") {
        this.validatorName = "invalid";
      } else {
        this.validatorName = "valid";
      }
    },
    passwordValid() {
      if (this.password === "") {
        this.validatorPassword = "invalid";
      } else {
        this.validatorPassword = "valid";
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.myContent = true;
      this.mySpinner = false;
    }, 4000);
  },
};
</script>

<style scoped>
.login {
  margin: 4rem 0 0 6rem;
}
.panel {
  border: 1px solid #6666;
  padding: 2rem;
}

.error {
  background: red;
  color: #fff;
  border: 1px solid red;
  padding: 0.6rem;
  border-radius: 6px;
  width: 400px;
  display: none;
}

.active {
  border: 1px solid red;
}

#mySpinner {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
