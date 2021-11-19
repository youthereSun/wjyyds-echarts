<template>
  <div id="demo">
    <div class="main-content">
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
        legend-y="top"
      />
      <BarChart
        :data="barData"
        :option="extraOption"
        width="100%"
        height="400px"
        :colorArray="colorArray"
        :legendShow="true"
        :grid="grid"
        x-name="区域"
        y-name="值"
        :animation="true"
        barWidth="30%"
        legend-y="top"
      />
      <BarChart
        :data="barDataStack"
        stack
        width="100%"
        height="400px"
        :colorArray="colorArray"
        :legend-show="true"
        :grid="grid"
        :animation="true"
        barWidth="50%"
      />
      <attributes-table :data="attributes.bar"/>
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
        :symbolSize="8"
        symbol="diamond"
      />
      <attributes-table :data="attributes.line"/>
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
      <PieChart
        :data="pieData"
        width="50%"
        height="400px"
        :colorArray="colorArray"
        pie-style="rose"
        :legendShow="false"
        legendPosition="top"
      />
      <PieChart
        :data="pieData"
        width="100%"
        height="400px"
        show-percent
        :colorArray="colorArray"
        :legendShow="false"
        legendPosition="top"
      />
      <attributes-table :data="attributes.pie"/>
      <CloudChart
        :data="cloudData"
        width="80%"
        height="400px"
      />
      <attributes-table :data="attributes.cloud"/>
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
      <MapChart
        json-path="./china.json"
        geo-normal-color="#28924C"
        geo-emphasis-color="#C66A64"
        height="800px"
        :roam="false"
        :roam-size="1.2"
        geo-label-color="red"
      />
      <attributes-table :data="attributes.map"/>
    </div>
  </div>
</template>

<script>

import AttributesTable from './AttributesTable'
import attributes from './attributes'

export default {
  name: 'Demo',
  components: {
    AttributesTable,
  },
  data() {
    return {
      grid: {
        top: '20%',
        right: '10%',
        bottom: '20%',
        left: '10%'
      },
      geoCoordMap: {
        梁溪区: [120.30297, 31.59597],
        江阴市: [120.28432, 31.85919],
        惠山区: [120.29834, 31.68096],
        锡山区: [120.45761, 31.62649],
        滨湖区: [120.28429, 31.52853],
        新吴区: [120.36434, 31.49055],
        宜兴市: [119.82346, 31.39042]
      },
      jsonPath: './wuxi.json',
      visualMapRange: [1, 10],
      visualMapColorRange: ['#f5b400', '#0052e2', '#ff0025'],
      mapData: [
        {
          name: '无锡傻子人数',
          type: 'effectScatter',
          data: [
            {
              value: 1,
              name: '新吴区'
            },
            {
              value: 10,
              name: '锡山区'
            },
            {
              value: 50,
              name: '惠山区'
            },
            {
              value: 60,
              name: '锡山区'
            }
          ]
        },
        {
          name: '无锡各区域感染',
          type: 'scatter',
          data: [
            {
              value: 18,
              name: '江阴市'
            },
            {
              value: 22,
              name: '梁溪区'
            },
            {
              value: 36,
              name: '锡山区'
            }
          ]
        },
        {
          name: '无锡风景区散落',
          type: 'map',
          data: [
            {
              value: 1,
              name: '宜兴市'
            },
            {
              value: 10,
              name: '梁溪区'
            },
            {
              value: 10,
              name: '锡山区'
            }
          ]
        }
      ],
      data1: [{
        name: '无锡傻子人数',
        type: 'effectScatter',
        data: [{value: 1, name: '新吴区'}, {value: 10, name: '锡山区'}, {value: 50, name: '惠山区'}, {
          value: 60,
          name: '锡山区'
        }]
      }, {
        name: '无锡各区域感染',
        type: 'scatter',
        data: [{value: 18, name: '江阴市'}, {value: 22, name: '梁溪区'}, {value: 36, name: '锡山区'}]
      }, {
        name: '无锡风景区散落',
        type: 'map',
        data: [{value: 1, name: '宜兴市'}, {value: 10, name: '梁溪区'}, {value: 10, name: '锡山区'}]
      }],
      attributes,
      sizeRange: [5, 20],
      radius: '60%',
      colorArray: ['#b419e8', '#1A86C1', '#d01919', '#9ea5c6', '#1032DC'],
      barData: {
        xAxis: ['梁溪区', '滨湖区', '新吴区', '惠山区', '锡山区', '江阴市'],
        series: [
          {
            name: '2099',
            data: [25203, 53489, 69034, 54970, 11744, 60230]
          },
          {
            name: '2088',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      },
      extraOption: {
        tooltip: {
          backgroundColor: 'rgba(206,176,176,0.9)', //设置背景图片 rgba格式
          padding: [20, 20, 20, 20],
          textStyle: {
            color: 'rgb(222,234,52)'
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: true//默认关闭y轴的line
          },
          splitLine: {
            lineStyle: {
              type: 'solid'//默认分割线为虚线
            }
          }
        },
        legend: {
          show: true,
          type: 'scroll',
          width: '70%',
          right: '10%',
          top: '10%'
        }
      },
      pieData: {
        name: 'Access From',
        series: [
          {value: 1048, name: 'Search Engine'},
          {value: 735, name: 'Direct'},
          {value: 580, name: 'Email'},
          {value: 484, name: 'Union Ads'},
          {value: 300, name: 'Video Ads'}
        ]
      },
      barDataStack: {
        xAxis: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        series: [
          {
            name: '新增',
            data: [250, 534, 6903, 5497, 1174, 6023, 534, 6903, 5497, 1174, 6023]
          },
          {
            name: '总量',
            data: [1932, 2343, 11000, 12194, 1314, 68187, 23438, 31000, 12159, 13441, 68807]
          }
        ]
      },
      cloudData: {
        name: '热点分析',
        words: Array.from({length: 100}, (v, i) => ({
          name: `测试${i + 1}`,
          value: 10 + i
        }))
      }
    }
  }
}
</script>

<style scoped lang="less">
#demo {
  width: 100%;
  padding: 50px 0;

  .main-content {
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 1024px;
    margin: 0 auto;
    position: relative;
  }
}
</style>
