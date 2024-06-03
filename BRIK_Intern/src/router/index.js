import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../pages/home.vue'
import AddProduct from '../pages/AddProductForm.vue';
import LoginPage from '../pages/login.vue'
import RegisterPage from '../pages/Register.vue'
import DetailPage from '../pages/Detail.vue'

const routes = [
    { 
        path: '/', 
        name: 'All Products Home Page',
        component: Home 
    },
    { 
        path: '/add-product', 
        name: 'Add Product Form Page',
        component: AddProduct 
    },
    {
        path: '/login',
        name: 'Login Page',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'Register Page',
        component: RegisterPage
    },
    {
        path: '/products/:id',
        name: 'Detail',
        component: DetailPage
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router