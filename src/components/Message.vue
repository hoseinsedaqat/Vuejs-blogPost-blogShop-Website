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
              <li
                class="list-group-item m-0 d-flex flex-row justify-content-between p-3"
                v-for="(contact, index) in myContact"
                :key="(contact, index)"
              >
                <img
                  :src="contact.image"
                  alt=""
                  width="40"
                  height="40"
                  style="border-radius: 50%"
                />
                <p class="align-self-center">
                  {{ contact.name }}
                  <i class="fas fa-circle" :style="{ color: contact.color }"></i>
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
// import Images for Contact
import denish from "../assets/Dinesh_Chugtai.jpg";
import richard from "../assets/original.jpg";
import gilfoyle from "../assets/Bertram_Gilfoyle.jpg";
import jianyang from "../assets/page-header.png";
import erlich from "../assets/43a7d61519ec8605f47b32e45f62a813.jpg";
import Header from "./Header.vue";
export default {
  name: "Message",
  data() {
    return {
      myContact: [
        { image: denish, name: "Denish", color: "#333" },
        { image: richard, name: "Richard", color: "green" },
        { image: gilfoyle, name: "Gilfoyle", color: "#333" },
        { image: jianyang, name: "Jian Yang", color: "green" },
        { image: erlich, name: "Erlich", color: "green" },
      ],
    };
  },
  components: {
    "app-header": Header,
  },
};
</script>

<style scoped></style>
