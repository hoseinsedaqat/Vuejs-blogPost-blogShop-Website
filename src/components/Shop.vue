<template>
  <div>
    <app-header></app-header>
    <div class="container mt-4">
      <h3 class="mb-5">Welcome To BlogShop</h3>
      <div id="mySpinner" v-if="mySpinner">
        <div class="spinner-border" style="width: 2rem; height: 2rem" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <p class="mt-3 ml-4">Product Loading...</p>
      </div>
      <div v-if="myContent">
        <p class="add">{{ addtocart }}</p>
        <div class="row">
          <div
            class="col-md-4"
            v-for="(myproduct, index) in ProductData"
            :key="(myproduct, index)"
          >
            <div class="card">
              <img
                :src="`${myproduct.img}`"
                class="card-img-top img-fluid"
                style="height: 350px"
              />
              <hr />
              <div class="card-body">
                <h5 class="card-title">{{ myproduct.name }}</h5>
                <p class="card-text">Price:{{ myproduct.price }}</p>
                Quantity:<input
                  type="number"
                  min="1"
                  max="100"
                  name=""
                  id=""
                  v-model="myproduct.quantity"
                  class="col-md-3 mr-3 ml-1"
                />
                <a class="btn btn-primary" @click="BuyProduct(index)">Add to Cart</a>
                <router-link :to="`/Product/${index}`" class="btn btn-dark d-block mt-2"
                  >Read More</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "Shop",
  data() {
    return {
      addtocart: "Add To Cart",
      mySpinner: true,
      myContent: false,
    };
  },
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  computed: {
    ...mapState(["ProductData"]),
  },
  methods: {
    ...mapActions(["Products"]),
    BuyProduct(index) {
      const { name, price, img, quantity } = this.ProductData[index];
      const product = {
        product: {
          name,
          price,
          img,
          quantity,
        },
      };
      if (product.product.quantity < 1) {
        alert("The Quantity of Product not Be Zero!!!");
      } else {
        this.Products(product);
        this.timeOutforcart();
      }
    },
    timeOutforcart() {
      document.querySelector(".add").style.display = "block";
      setTimeout(() => {
        document.querySelector(".add").style.display = "none";
      }, 3000);
    },
  },
