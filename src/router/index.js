import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import IndexPage from '../views/Index.vue'
import ProductListPage from '../views/ProductList.vue'
//用户界面
import TelBinding from '../views/TelBinding.vue'
import LoginPage from '../views/Login.vue'
import UserIndexPage from '../views/UserIndex.vue'
import ActivityIndexPage from '../views/ActivityIndexPage.vue'
import ProductDetailPage from '../views/ProductDetail.vue'
import ApplyIndexPage from '../views/ApplyIndex.vue'
import ProductPage from '../views/Product.vue'

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: IndexPage },
        { path: '/products', component: ProductListPage },
        { path: '/products/:typeOf', component: ProductListPage },
        { path: '/product/:id', component: ProductPage },
        { path: '/user', component: UserIndexPage },
        { path: '/apply', component: ApplyIndexPage },
        { path: '/activity', component: ActivityIndexPage },
        { path: '/telbinding', component: TelBinding },
        { path: '/login', component: LoginPage },
        { path: '*', redirect: '/' }
    ]
})

