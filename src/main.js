import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.use(ElementUI);
Vue.config.productionTip = false //关闭生产提示

new Vue({
	el:'#app',
	render:h => h(App)
})