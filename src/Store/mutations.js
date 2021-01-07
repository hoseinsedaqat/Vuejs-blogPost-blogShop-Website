export default {
    appendPost: (state, { post }) => {
        state.data.unshift(post)
    },
    removePost: (state, index) => {
        state.data.splice(index, 1)
    },
    addproducts: (state, { product }) => {
        state.product.unshift(product)
    },
    deletedProduct: (state, index) => {
        state.product.splice(index, 1)
        document.querySelector('.removeAtCart').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.removeAtCart').style.display = 'none'
        }, 2000);
    }
}