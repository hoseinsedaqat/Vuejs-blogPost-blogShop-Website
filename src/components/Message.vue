<template>
  <div>
    <!-- Simple chat UI for Taraning -->
    <app-header></app-header>
    <div class="container">
      <h3 class="mt-3 ml-2">Message:</h3>
      <div class="row no-gutters">
        <div class="col-md-4 mt-3">
          <div class="card">
            <div class="card-header p-4">5 Contact</div>
            <ul class="list-group">
              <li class="list-group-item m-0 d-flex flex-row justify-content-between p-3">
                <img
                  src="../assets/Dinesh_Chugtai.jpg"
                  alt=""
                  width="40"
                  height="40"
                  style="border-radius: 50%"
                />
                <p class="align-self-center">
                  Denish <i class="fas fa-circle" style="color: #333"></i>
                </p>
              </li>
              <li class="list-group-item m-0 d-flex flex-row justify-content-between p-3">
                <img
                  src="../assets/original.jpg"
                  alt=""
                  width="40"
                  height="40"
                  style="border-radius: 50%"
                />
                <p class="align-self-center">
                  Richard <i class="fas fa-circle" style="color: green"></i>
                </p>
              </li>
              <li class="list-group-item m-0 d-flex flex-row justify-content-between p-3">
                <img
                  src="../assets/Bertram_Gilfoyle.jpg"
                  alt=""
                  width="40"
                  height="40"
                  style="border-radius: 50%"
                />
                <p class="align-self-center">
                  Gilfoyle <i class="fas fa-circle" style="color: #333"></i>
                </p>
              </li>
              <li class="list-group-item m-0 d-flex flex-row justify-content-between p-3">
                <img
                  src="../assets/page-header.png"
                  alt=""
                  width="40"
                  height="40"
                  style="border-radius: 50%"
                />
                <p class="align-self-center">
                  Jian Yang <i class="fas fa-circle" style="color: green"></i>
                </p>
              </li>
              <li class="list-group-item m-0 d-flex flex-row justify-content-between p-3">
                <img
                  src="../assets/43a7d61519ec8605f47b32e45f62a813.jpg"
                  alt=""
                  width="40"
                  height="40"
                  style="border-radius: 50%"
                />
                <p class="align-self-center">
                  Erlich <i class="fas fa-circle" style="color: green"></i>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-8 mt-3">
          <div class="card">
            <div class="card-header d-flex flex-row justify-content-between">
              <p class="p-1">Messages for Erlich</p>
              <img
                src="../assets/43a7d61519ec8605f47b32e45f62a813.jpg"
                width="40"
                height="40"
                style="border-radius: 50%"
              />
            </div>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="13"
              class="form-control"
              disabled
            ></textarea>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Message"
                value="Hello erlich whats'app My Men?"
              />
              <div class="input-group-append">
                <button class="input-group-text bg-dark text-white" id="basic-addon2">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "Message",
  components: {
    "app-header": Header,
  },
};
</script>

<style></style>
