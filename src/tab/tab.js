import Vue from 'vue';
import Ap from './App';
import { render } from 'ejs';

new Vue({
    el: '#app',
    render: h=> h(App)
})