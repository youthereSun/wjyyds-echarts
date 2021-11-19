import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
import 'echarts-wordcloud'
import {PieChart,CloudChart,LineChart,BarChart,MapChart} from 'wjyyds-echarts'
Vue.use(PieChart).use(CloudChart).use(LineChart).use(BarChart).use(MapChart)
Vue.use(Element)


new Vue({
  render: (h) => h(App)
}).$mount('#app')
