// 入口文件
import Vue from 'vue';
import App from './App.vue';
import 'mint-ui/lib/style.css';
import {Header} from 'mint-ui';
import '../src/lib/mui/css/mui.css';

Vue.component(Header.name, Header);

let vm = new Vue({
    el: '#app',
    render: c => c(App)
});
