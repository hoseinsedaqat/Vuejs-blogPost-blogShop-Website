import Vue from 'vue'
import Vuex from 'vuex'
import data from '../data/data.js'
import product from '../data/product.js'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        data,
        product
    },
    getters,
    mutations,
    actions
})