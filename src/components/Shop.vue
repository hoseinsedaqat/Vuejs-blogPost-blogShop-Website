<template>
  <div>
    <app-header></app-header>
    <div class="container mt-4">
      <h3 class="mb-5">Welcome To BlogShop</h3>
      <p class="add">{{ addtocart }}</p>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img
              src="../assets/1.jpg"
              class="card-img-top img-fluid"
              style="height: 350px"
            />
            <hr />
            <div class="card-body">
              <h5 class="card-title">Blog Post Pencil</h5>
              <p class="card-text">Price: 5 $</p>
              Quantity:<input
                type="number"
                min="1"
                max="100"
                name=""
                id=""
                v-model="productOne.quantity"
                class="col-md-3 mr-3 ml-1"
              />
              <a class="btn btn-primary" @click="pencil()">Add to Cart</a>
              <router-link to="/Product/0" class="btn btn-dark d-block mt-2"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="../assets/2.jpg" class="card-img-top img-fluid" />
            <hr />
            <div class="card-body">
              <h5 class="card-title">Blog Post NoteBook</h5>
              <p class="card-text">Price: 10 $</p>
              Quantity:<input
                type="number"
                min="1"
                max="100"
                name=""
                id=""
                v-model="productTwo.quantity"
                class="col-md-3 mr-3 ml-1"
              />
              <a class="btn btn-primary" @click="noteBook()">Add to Cart</a>
              <router-link to="/Product/1" class="btn btn-dark d-block mt-2"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="../assets/3.jpg" class="card-img-top img-fluid" />
            <hr />
            <div class="card-body">
              <h5 class="card-title">Blog Post BackPack</h5>
              <p class="card-text">Price: 20 $</p>
              Quantity:<input
                type="number"
                min="1"
                max="100"
                name=""
                id=""
                v-model="productThree.quantity"
                class="col-md-3 mr-3 ml-1"
              />
              <a class="btn btn-primary" @click="backPack()">Add to Cart</a>
              <router-link to="/Product/2" class="btn btn-dark d-block mt-2"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { mapActions } from "vuex";
export default {
  name: "Shop",
  data() {
    return {
      // Pencil
      productOne: {
        number: 1,
        name: "Pencil",
        price: "5$",
        quantity: "1",
      },
      // NoteBook
      productTwo: {
        number: 2,
        name: "NoteBook",
        price: "10$",
        quantity: "1",
      },
      // BackPack
      productThree: {
        number: 3,
        name: "BackPack",
        price: "20$",
        quantity: "1",
      },
      addtocart: "Add To Cart",
    };
  },
  components: {
    "app-header": Header,
  },
  methods: {
    ...mapActions(["Products"]),
    pencil() {
      const { number, name, price, quantity } = this.productOne;
      const product = {
        product: {
          number,
          name,
          price,
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
    noteBook() {
      const { number, name, price, quantity } = this.productTwo;
      const product = {
        product: {
          number,
          name,
          price,
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
    backPack() {
      const { number, name, price, quantity } = this.productThree;
      const product = {
        product: {
          number,
          name,
          price,
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
};
</script>

<style scoped>
.add {
  background: green;
  color: #fff;
  padding: 0.6rem;
  border-radius: 6px;
  width: 350px;
  display: none;
}
</style>
