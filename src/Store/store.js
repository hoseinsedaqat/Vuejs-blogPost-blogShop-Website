import Vue from 'vue'
import Vuex from 'vuex'
import data from '../data/data.js'
import product from '../data/product.js'
import readmoreProduct from '../data/readmoreProduct.js'
import ProductData from '../data/ProductData.js'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        data,
        product,
        readmoreProduct,
        ProductData,
    },
    getters,
    mutations,
    actions
})
