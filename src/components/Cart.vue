<template>
  <div>
    <app-header></app-header>
    <div class="container mt-5">
      <p class="removeAtCart">{{ removeAtCart }}</p>
      <div class="row">
        <div class="col-md-10 mx-auto">
          <h3 class="mb-5">Card</h3>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col" v-for="colName in tableName" :key="(colName, index)">
                  {{ colName.name }}
                </th>
                <th v-for="(withOutCol,index) in tableNameWithOutCol" :key="(withOutCol,index)">{{withOutCol.name}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart, index) in product" :key="(cart, index)">
                <th>{{ index + 1 }}</th>
                <td>
                  <img
                    :src="`${cart.img}`"
                    class="img-fluid"
                    style="width: 50px; height: 30px"
                  />
                </td>
                <td>{{ cart.name }}</td>
                <td>{{ cart.price }}</td>
                <td>{{ cart.quantity }}</td>
                <td>
                  <i
                    class="fas fa-minus"
                    style="color: red; cursor: pointer"
                    @click="removeProduct(index)"
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
          <hr class="bg-dark" />
          <p class="bg-light text-dark p-4">
            Total Count: <b>{{ totalCount }}$</b>
            <button class="btn btn-dark float-right">Payment</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      removeAtCart: "Remove Product ",
      tableName: [{ name: "Count" },{ name: "Product" },{ name: "Name" },{ name: "Price" }],
      tableNameWithOutCol:[{name:'Quantity'},{name:''}]
    };
  },
  components: {
    "app-header": Header,
  },
  computed: {
    ...mapState(["product"]),
    totalCount() {
      let total = 0;
      for (let x of this.product) {
        total += parseInt(x.price) * parseInt(x.quantity);
      }
      return total;
    },
  },
  methods: {
    ...mapActions(["removeProduct"]),
  },
};
</script>

<style scoped>
.removeAtCart {
  background: red;
  color: #fff;
  padding: 0.6rem;
  border-radius: 6px;
  width: 350px;
  margin-left: 5.8rem;
  display: none;
}
</style>
