const attributes = {
  bar: [
    {
      propsName: 'option',
      des: '自定义的option设置，会覆盖内置的一些配置',
      type: 'object',
      options: '-',
      default: '{}'
    },
    {
      propsName: 'data',
      des: '用于渲染的数据',
      type: 'object',
      options: '          {\n' +
        '              xAxis: [\'梁溪区\', \'滨湖区\', \'新吴区\', \'惠山区\', \'锡山区\', \'江阴市\'],\n' +
        '              series: [\n' +
        '              {\n' +
        '              name: \'2099\',\n' +
        '              data: [25203, 53489, 69034, 54970, 11744, 60230]\n' +
        '              },\n' +
        '              {\n' +
        '              name: \'2088\',\n' +
        '              data: [19325, 23438, 31000, 121594, 134141, 681807]\n' +
        '              }\n' +
        '              ]\n' +
        '              },',
      default: '-'
    },
    {
      propsName: 'width',
      des: '图标的宽度',
      type: 'string',
      options: '百分比和px，百分比取图标容器的百分比',
      default: '100%'
    },
    {
      propsName: 'height',
      des: '图标的宽度',
      type: 'string',
      options: '百分比和px，百分比取图标容器的百分比',
      default: '300px'
    },
    {
      propsName: 'legend-show',
      des: '是否显示图例',
      type: 'boolean',
      options: 'true/false',
      default: 'true'
    },
    {
      propsName: 'color-array',
      des: '图标的调色盘，一个包含颜色的数组，按顺序匹配系列的颜色',
      type: 'array',
      options: '-',
      default: ' [\'#3197ce\']'
    },
    {
      propsName: 'x-name',
      des: 'x轴名称',
      type: 'string',
      options: '-',
      default: '-'
    },
    {
      propsName: 'y-name',
      des: 'y轴名称',
      type: 'string',
      options: '-',
      default: '-'
    },
    {
      propsName: 'animation',
      des: '是否开启数据渲染时动画',
      type: 'boolean',
      options: 'true/false',
      default: 'true'
    },
    {
      propsName: 'grid',
      des: '图表的上下左右到容器的边距',
      type: 'object',
      options: '-',
      default: '{top: "20%", right: "10%", bottom: "20%"}'
    },
    {
      propsName: 'bar-width',
      des: '柱的宽度，支持数字和百分比',
      type: 'number string',
      options: ' 20 50%',
      default: 'auto'
    },
    {
      propsName: 'stack',
      des: '是否开启堆叠模式',
      type: 'boolean',
      options: 'true/false',
      default: 'false'
    },
    {
      propsName: 'legend-x',
      des: '图例的x轴位置',
      type: 'string',
      options: '百分比 right left center ',
      default: 'center'
    },
    {
      propsName: 'legend-y',
      des: '图例的y轴位置',
      type: 'string',
      options: '百分比 top bottom',
      default: 'center'
    }
  ],
  line: [
    {
      propsName: 'option',
      des: '自定义的option设置，会覆盖内置的一些配置',
      type: 'object',
      options: '-',
      default: '{}'
    },
    {
      propsName: 'data',
      des: '用于渲染的数据',
      type: 'object',
      options: '          {\n' +
        '              xAxis: [\'梁溪区\', \'滨湖区\', \'新吴区\', \'惠山区\', \'锡山区\', \'江阴市\'],\n' +
        '              series: [\n' +
        '              {\n' +
        '              name: \'2099\',\n' +
        '              data: [25203, 53489, 69034, 54970, 11744, 60230]\n' +
        '              },\n' +
        '              {\n' +
        '              name: \'2088\',\n' +
        '              data: [19325, 23438, 31000, 121594, 134141, 681807]\n' +
        '              }\n' +
        '              ]\n' +
        '              },',
      default: '-'
    },
    {
      propsName: 'width',
      des: '图标的宽度',
      type: 'string',
      options: '百分比和px，百分比取图标容器的百分比',
      default: '100%'
    },
    {
      propsName: 'height',
      des: '图标的宽度',
      type: 'string',
      options: '百分比和px，百分比取图标容器的百分比',
      default: '300px'
    },
    {
      propsName: 'legend-show',
      des: '是否显示图例',
      type: 'boolean',
      options: 'true/false',
      default: 'true'
    },
    {
      propsName: 'color-array',
      des: '图标的调色盘，一个包含颜色的数组，按顺序匹配系列的颜色',
      type: 'array',
      options: '-',
      default: ' [\'#3197ce\']'
    },
    {
      propsName: 'x-name',
      des: 'x轴名称',
      type: 'string',
      options: '-',
      default: '-'
    },
    {
      propsName: 'y-name',
      des: 'y轴名称',
      type: 'string',
      options: '-',
      default: '-'
    },
    {
      propsName: 'animation',
      des: '是否开启数据渲染时动画',
      type: 'boolean',
      options: 'true/false',
      default: 'true'
    },
    {
      propsName: 'grid',
      des: '图表的上下左右到容器的边距',
      type: 'object',
      options: '-',
      default: '{top: "20%", right: "10%", bottom: "20%"}'
    },
    {
      propsName: 'smooth',
      des: '是否开启平滑曲线',
      type: 'boolean',
      options: 'true/false',
      default: 'false'
    },
    {
      propsName: 'area',
      des: '是否开启line与x轴之间的色块',
      type: 'boolean',
      options: 'true/false',
      default: 'false'
    },
    {
      propsName: 'show-symbol',
      des: '是否显示拐点标记',
      type: 'boolean',
      options: 'true/false',
      default: 'false'
    },
    {
      propsName: 'symbol-size',
      des: '拐点标记大小',
      type: 'number',
      options: '',
      default: '8'
    },
    {
      propsName: 'symbol',
      des: '标记样式',
      type: 'string',
      options: '\'circle\', \'rect\', \'roundRect\', \'triangle\', \'diamond\', \'pin\', \'arrow\', \'none\'',
      default: 'circle'
    }
  ],
  pie: [
    {
      propsName: 'option',
      des: '自定义的option设置，会覆盖内置的一些配置',
      type: 'object',
      options: '-',
      default: '{}'
    },
    {
      propsName: 'data',
      des: '用于渲染的数据',
      type: 'object',
      options: '{\n' +
        '        name: \'Access From\',\n' +
        '        series: [\n' +
        '          { value: 1048, name: \'Search Engine\' },\n' +
        '          { value: 735, name: \'Direct\' },\n' +
        '          { value: 580, name: \'Email\' },\n' +
        '          { value: 484, name: \'Union Ads\' },\n' +
        '          { value: 300, name: \'Video Ads\' }\n' +
        '        ]\n' +
        '      }',
      default: '-'
    },
    {
      propsName: 'width',
      des: '图标的宽度',
      type: 'string',
      options: '百分比和px，百分比取图标容器的百分比',
      default: '100%'
    },
    {
      propsName: 'height',
      des: '图标的宽度',
      type: 'string',
      options: '百分比和px，百分比取图标容器的百分比',
      default: '300px'
    },
    {
      propsName: 'legend-show',
      des: '是否显示图例',
      type: 'boolean',
      options: 'true/false',
      default: 'true'
    },
    {
      propsName: 'color-array',
      des: '图标的调色盘，一个包含颜色的数组，按顺序匹配系列的颜色',
      type: 'array',
      options: '-',
      default: ' [\'#3197ce\']'
    },
    {
      propsName: 'radius',
      des: '饼图半径',
      type: 'string',
      options: 'px 百分比',
      default: '60%'
    },
    {
      propsName: 'label',
      des: '是否开始label显示',
      type: 'boolean',
      options: 'true/false',
      default: 'true'
    },
    {
      propsName: 'emphasis-label',
      des: 'hover时是否强调label',
      type: 'boolean',
      options: 'true/false',
      default: 'true'
    },
    {
      propsName: 'label-position',
      des: 'label的位置',
      type: 'string',
      options: 'outside / inside / inner / center',
      default: 'outside'
    },
    {
      propsName: 'tooltip',
      des: '是否开启tooltip显示',
      type: 'boolean',
      options: 'true/false',
      default: 'true'
    },
    {
      propsName: 'animation',
      des: '是否开启数据渲染时动画',
      type: 'boolean',
      options: 'true/false',
      default: 'true'
    },
    {
      propsName: 'pie-style',
      des: '饼图的样式',
      type: 'string',
      options: 'normal circle rose',
      default: 'normal'
    },
    {
      propsName: 'legend-position',
      des: '图例位置',
      type: 'string',
      options: 'top/middle/bottom',
      default: 'bottom'
    },
    {
      propsName: 'show-percent',
      des: 'label上是否显示百分比',
      type: 'boolean',
      options: 'true/false',
      default: 'false'
    }
  ],
  cloud: [
    {
      propsName: 'option',
      des: '自定义的option设置，会覆盖内置的一些配置',
      type: 'object',
      options: '-',
      default: '{}'
    },
    {
      propsName: 'data',
      des: '用于渲染的数据',
      type: 'array',
      options: '[{name:"test",value:1},{name:"test1",value:2}]',
      default: '-'
    },
    {
      propsName: 'width',
      des: '图标的宽度',
      type: 'string',
      options: '百分比和px，百分比取图标容器的百分比',
      default: '100%'
    },
    {
      propsName: 'height',
      des: '图标的宽度',
      type: 'string',
      options: '百分比和px，百分比取图标容器的百分比',
      default: '300px'
    },
    {
      propsName: 'size-range',
      des: '字体的大小范围',
      type: 'array',
      options: '-',
      default: '[1, 100]'
    }
  ],
  map: [
    {
      propsName: 'option',
      des: '自定义的option设置，会覆盖内置的一些配置',
      type: 'object',
      options: '可以自定义title，visualMap等属性',
      default: '{}'
    },
    {
      propsName: 'data',
      des: '用于渲染的数据',
      type: 'array',
      options: '[{\n' +
        '        name: \'无锡傻子人数\',\n' +
        '        type: \'effectScatter\',\n' +
        '        data: [{ value: 1, name: \'新吴区\' }, { value: 10, name: \'锡山区\' }, { value: 50, name: \'惠山区\' }, {\n' +
        '          value: 60,\n' +
        '          name: \'锡山区\'\n' +
        '        }]\n' +
        '      }, {\n' +
        '        name: \'无锡各区域感染\',\n' +
        '        type: \'scatter\',\n' +
        '        data: [{ value: 18, name: \'江阴市\' }, { value: 22, name: \'梁溪区\' }, { value: 36, name: \'锡山区\' }]\n' +
        '      }, {\n' +
        '        name: \'无锡风景区散落\',\n' +
        '        type: \'map\',\n' +
        '        data: [{ value: 1, name: \'宜兴市\' }, { value: 10, name: \'梁溪区\' }, { value: 10, name: \'锡山区\' }]\n' +
        '      }]',
      default: '-'
    },
    {
      propsName: 'width',
      des: '图标的宽度',
      type: 'string',
      options: '百分比和px，百分比取图标容器的百分比',
      default: '100%'
    },
    {
      propsName: 'height',
      des: '图标的宽度',
      type: 'string',
      options: '百分比和px，百分比取图标容器的百分比',
      default: '300px'
    },
    {
      propsName: 'json-path',
      des: 'echart map 地理信息json文件，数据地址可参照https://github.com/youthereSun/echarts3-mapFile',
      type: 'string',
      options: '"./wuxi.json" json文件需要放在public文件夹内 ',
      default: ''
    },
    {
      propsName: 'geo-coord-map',
      des: 'json地图文件中的一些区县的位置经纬度标记',
      type: 'object',
      options: ' {\n' +
        '        梁溪区: [120.30297, 31.59597],\n' +
        '        新吴区: [120.36434, 31.49055],\n' +
        '        宜兴市: [119.82346, 31.39042]\n' +
        '      }',
      default: '{}'
    },
    {
      propsName: 'geo-label',
      des: '是否在地图上显示地区名',
      type: 'boolean',
      options: 'true/false',
      default: 'true'
    },
    {
      propsName: 'geo-label-color',
      des: '地图上显示的地区名的颜色',
      type: 'string',
      options: '',
      default: '#e7eff1'
    },
    {
      propsName: 'geo-label-font-size',
      des: '地图上显示的地区名的颜色的文字大小',
      type: 'number',
      options: '',
      default: 14
    },
    {
      propsName: 'geo-label-font-weight',
      des: '地图上显示的地区名的颜色的文字粗细',
      type: 'number',
      options: '400 500 600 800',
      default: 400
    },
    {
      propsName: 'roam',
      des: '是否开启地图缩放',
      type: 'boolean',
      options: 'true/false',
      default: 'true'
    },
    {
      propsName: 'roam-size',
      des: '初始化时候地图的缩放比例',
      type: 'number',
      options: '1.3  0.8',
      default: 1
    },
    {
      propsName: 'geo-normal-color',
      des: '地图区域板块在正常情况下的颜色',
      type: 'string',
      options: '',
      default: '#5fa1af'
    },
    {
      propsName: 'geo-normal-border-color',
      des: '地图区域板块边缘在正常情况下的颜色',
      type: 'string',
      options: '',
      default: '#5fa1af'
    },
    {
      propsName: 'geo-emphasis-color',
      des: '地图区域板块在鼠标悬浮情况下的颜色',
      type: 'string',
      options: '',
      default: '#13bde8'
    },
    {
      propsName: 'visual-map',
      des: '是否开启数据动态映射visualMap',
      type: 'boolean',
      options: 'true/false',
      default: 'false'
    },
    {
      propsName: 'visual-map-range',
      des: '数据映射范围，需要根据实际需要控制的系列的value范围来修改',
      type: 'array',
      options: '-',
      default: '[1, 100]'
    },
    {
      propsName: 'visual-map-color-range',
      des: '数据映射的多个颜色数组',
      type: 'array',
      options: '-',
      default: '[\'#e5eeb5\', \'#ff0031\']'
    },
    {
      propsName: 'visual-map-enabled',
      des: '需要进行数据映射的系列的一个数组，遵循data的系列顺序，visualMap开启时，为必传值参数，否则没有数据映射效果',
      type: 'array',
      options: '-',
      default: '[]'
    },
    {
      propsName: 'tooltip',
      des: '是否开启数据的tooltip效果',
      type: 'boolean',
      options: 'true/false',
      default: 'true'
    },
  ]
}

export default attributes
