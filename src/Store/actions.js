export default {
    addPost: ({ commit }, post) => {
        commit('appendPost', post)
    },
    deletedPost: ({ commit }, post) => {
        commit('removePost', post)
    },
    Products: ({ commit }, product) => {
        commit('addproducts', product)
    },
    removeProduct: ({ commit }, product) => {
        commit('deletedProduct', product)
    }
}