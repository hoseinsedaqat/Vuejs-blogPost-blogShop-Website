<template>
  <div>
    <app-header></app-header>
    <button @click="back()" class="btn mt-3 ml-2">
      <i class="fa fa-long-arrow-left mr-1"></i>Back
    </button>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul v-for="(myProduct, index) in moreProduct" :key="(myProduct, index)">
            <h3>
              Product Name:
              <span class="badge badge-light text-dark">{{ myProduct.name }}</span>
            </h3>
            <hr />
            <div class="row">
              <div class="col-md-6">
                <img
                  :src="require(`../assets/${myProduct.number + '.jpg'}`)"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="col-md-6">
                <h3>About Product:</h3>
                <li>
                  {{ myProduct.aboutPorduct }}
                </li>
                <h4 class="mt-4">Buy Product:</h4>
                <li class="d-flex flex-row justify-content-between card p-4 mt-3">
                  <button class="btn btn-primary mt-2" @click="buyProduct()">
                    <i class="fa fa-shopping-cart mr-1"></i> Add to Cart
                  </button>
                  <div class="align-self-center">
                    Quantity:
                    <input
                      type="number"
                      min="1"
                      max="100"
                      name=""
                      v-model="readMore[0].quantity"
                      id=""
                      class="col-md-6 ml-3"
                    />
                  </div>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "ReadMoreProduct",
  data() {
    return {
      // For each Product
      moreProduct: [],
      // For Send product at ReadMore to Cart
      readMore: [],
    };
  },
  components: {
    "app-header": Header,
  },
  computed: {
    ...mapState(["readmoreProduct"]),
  },
  methods: {
    ...mapActions(["Products"]),
    back() {
      this.$router.go(-1);
    },
    buyProduct() {
      // In any page on time page is mounted array is 0 is important key
      const { name , number , price , quantity } = this.readMore[0]
      const product = {
        product: {
          name,
          number,
          price,
          quantity,
        },
      };
      this.Products(product);
    },
  },
  mounted() {
    // For load Data Product in any Page
    let readmoreforProduct = this.readmoreProduct[this.$route.params.id];
    this.moreProduct.push(readmoreforProduct);
    // For Read More Product
    let forReadMore = this.readmoreProduct[this.$route.params.id]["product"];
    this.readMore.push(forReadMore);
  },
};
</script>

<style scoped>
ul li {
  list-style: none;
}

img {
  border: 1px solid #6666;
  padding: 1rem;
  border-radius: 5px;
}
</style>
