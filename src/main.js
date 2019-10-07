// 入口文件
import Vue from 'vue';
import App from './App.vue';
import 'mint-ui/lib/style.css';
import {Header} from 'mint-ui';
import '../src/lib/mui/css/mui.css';
import '../src/lib/mui/css/icons-extra.css'
// 导入路由的包
import VueRouter from 'vue-router';
// 安装路由
// 导入自己的路由模块
import router from './router.js';
// 轮播图
import {Swipe, SwipeItem} from 'mint-ui';
// 导入vue-resource
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


let vm = new Vue({
    el: '#app',
    render: c => c(App),
    // 挂载路由对象到VM实例上
    router
});
