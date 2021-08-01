import Home from '../components/Home.vue';
import Blog from '../components/Blog.vue';
import Login from '../components/Login.vue'
import ReadMore from '../components/ReadMore.vue'
import Shop from '../components/Shop.vue'
import Cart from '../components/Cart.vue'
import ReadMoreProduct from '../components/ReadMoreProduct.vue'
import Setting from '../components/Setting.vue'
import Message from '../components/Message.vue'
import ErrorPage from '../components/ErrorPage.vue'


export const router = [
    { path: '/', component: Login },
    { path: '/Home', component: Home },
    { path: '/Blog', component: Blog },
    { path: '/Blog/:id', component: ReadMore },
    { path: '/Shop', component: Shop },
    { path: '/Cart', component: Cart },
    { path: '/Product/:id', component: ReadMoreProduct },
    { path: '/Setting', component: Setting },
    { path: '/Message', component: Message },
    // Error 404
    { path: '*', component: ErrorPage }
]
