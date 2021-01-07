import Home from '../components/Home.vue'
import Blog from '../components/Blog.vue'
import Login from '../components/Login.vue'
import ReadMore from '../components/ReadMore.vue'
import Shop from '../components/Shop.vue'
import Cart from '../components/Cart.vue'


export const router = [
    { path: '/', component: Login },
    { path: '/Home', component: Home },
    { path: '/Blog', component: Blog },
    { path: '/Blog/:id', component: ReadMore },
    { path: '/Shop', component: Shop },
    { path: '/Cart', component: Cart }
]