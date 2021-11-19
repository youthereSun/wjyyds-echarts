## **wjyyds-echarts** 

#### 依赖基础：

*vue 2.5.X*

*echart @4.8.0*

*echart-wordcloud@1*

理论上非大版本可保证兼容





### **安装：**

***1.npm i wjyyds-echarts*** 

***2.yarn add wjyyds-echarts*** 



### 使用：

vue项目中安装完依赖后，在main.js中，使用

```vue
import * as echarts from 'echarts'
import 'echarts-wordcloud'
Vue.prototype.$echarts = echarts
import {PieChart,CloudChart,LineChart,BarChart,MapChart} from 'wjyyds-echarts'
Vue.use(PieChart).use(CloudChart).use(LineChart).use(BarChart).use(MapChart)
```



快速注册组件，

注意：*echarts-wordcloud 此依赖是在项目中有使用CloudChart 的情况下才需要引入，如不需要CloudChart ，则无需引入*

在.vue文件中使用如下：

柱状图：

```vue
<BarChart
    :data="barData"
    width="100%"
    height="400px"
    :colorArray="colorArray"
    :legendShow="true"
    :grid="grid"
    x-name="区域"
    y-name="值"
    :animation="true"
    barWidth="30%"
/>
```

  折线图：

```vue
<LineChart
    :data="barData"
    width="100%"
    height="400px"
    :colorArray="colorArray"
    :legendShow="true"
    :grid="grid"
    x-name="区域"
    y-name="值"
    :animation="false"
    barWidth="30%"
    smooth
    showSymbol
    :symbolSize="4"
/>
```

饼图：

```vue

<PieChart
      :data="pieData"
      width="50%"
      height="400px"
      :colorArray="colorArray"
      pie-style="circle"
      :legendShow="false"
      :radius="radius"
      legendPosition="top"
  />
```

词云：

```vue
<CloudChart
      :data="cloudData"
      width="80%"
      height="400px"
  />
```

地图：

```vue
<MapChart
  :geo-coord-map="geoCoordMap"
  :json-path="jsonPath"
  :data="mapData"
  height="800px"
  visual-map
  :visual-map-enabled="[0]"
  :visual-map-range="visualMapRange"
  :visual-map-color-range="visualMapColorRange"
/>
```

数据格式：

```js
barData: {
  xAxis: ['梁溪区', '滨湖区', '新吴区', '惠山区', '锡山区', '江阴市'],
  series: [
    {
      name: '2011',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    },
    {
      name: '2012',
      data: [19325, 23438, 31000, 121594, 134141, 681807]
    }
  ]
},
pieData: {
  name: 'Access From',
  series: [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' }
  ]
},
cloudData:{
  name:'热点分析',
  words:Array.from({length: 100}, (v, i) => ({
    name: `测试${i+1}`,
    value: 10+i
  }))
}
```
