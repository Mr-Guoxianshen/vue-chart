<template>
  <div>
    <div id="echarts">

    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'echartsBlend',
    data () {
      return {
        myChart: ''
      }
    },
    created () {
      //
    },
    mounted () {
      var dataMap = {}
      function dataFormatter (obj) {
        var pList = ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林']
        var temp
        for (var year = 2002; year <= 2011; year++) {
          var max = 0
          var sum = 0
          temp = obj[year]
          for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i])
            sum += temp[i]
            obj[year][i] = {
              name: pList[i],
              value: temp[i]
            }
          }
          obj[year + 'max'] = Math.floor(max / 100) * 100
          obj[year + 'sum'] = sum
        }
        return obj
      }

      dataMap.dataGDP = dataFormatter({
        // max : 60000,
        2011: [16251.93, 11307.28, 24515.76, 11237.55, 14359.88, 22226.7, 10568.83],
        2010: [14113.58, 9224.46, 20394.26, 9200.86, 11672, 18457.27, 8667.58],
        2009: [12153.03, 7521.85, 17235.48, 7358.31, 9740.25, 15212.49, 7278.75],
        2008: [11115, 6719.01, 16011.97, 7315.4, 8496.2, 13668.58, 6426.1],
        2007: [9846.81, 5252.76, 13607.32, 6024.45, 6423.18, 11164.3, 5284.69],
        2006: [8117.78, 4462.74, 11467.6, 4878.61, 4944.25, 9304.52, 4275.12],
        2005: [6969.52, 3905.64, 10012.11, 4230.53, 3905.03, 8047.26, 3620.27],
        2004: [6033.21, 3110.97, 8477.63, 3571.37, 3041.07, 6672, 3122.01],
        2003: [5007.21, 2578.03, 6921.29, 2855.23, 2388.38, 6002.54, 2662.08],
        2002: [4315, 2150.76, 6018.28, 2324.8, 1940.94, 5458.22, 2348.54]
      })

      dataMap.dataPI = dataFormatter({
        // max : 4000,
        2011: [136.27, 159.72, 2905.73, 641.42, 1306.3, 1915.57, 1277.44],
        2010: [124.36, 145.58, 2562.81, 554.48, 1095.28, 1631.08, 1050.15],
        2009: [118.29, 128.85, 2207.34, 477.59, 929.6, 1414.9, 980.57],
        2008: [112.83, 122.58, 2034.59, 313.58, 907.95, 1302.02, 916.72],
        2007: [101.26, 110.19, 1804.72, 311.97, 762.1, 1133.42, 783.8],
        2006: [88.8, 103.35, 1461.81, 276.77, 634.94, 939.43, 672.76],
        2005: [88.68, 112.38, 1400, 262.42, 589.56, 882.41, 625.61],
        2004: [87.36, 105.28, 1370.43, 276.3, 522.8, 798.43, 568.69],
        2003: [84.11, 89.91, 1064.05, 215.19, 420.1, 615.8, 488.23],
        2002: [82.44, 84.21, 956.84, 197.8, 374.69, 590.2, 446.17]
      })

      dataMap.dataSI = dataFormatter({
        // max : 26600,
        2011: [3752.48, 5928.32, 13126.86, 6635.26, 8037.69, 12152.15, 5611.48],
        2010: [3388.38, 4840.23, 10707.68, 5234, 6367.69, 9976.82, 4506.31],
        2009: [2855.55, 3987.84, 8959.83, 3993.8, 5114, 7906.34, 3541.92],
        2008: [2626.41, 3709.78, 8701.34, 4242.36, 4376.19, 7158.84, 3097.12],
        2007: [2509.4, 2892.53, 7201.88, 3454.49, 3193.67, 5544.14, 2475.45],
        2006: [2191.43, 2457.08, 6110.43, 2755.66, 2374.96, 4566.83, 1915.29],
        2005: [2026.51, 2135.07, 5271.57, 2357.04, 1773.21, 3869.4, 1580.83],
        2004: [1853.58, 1685.93, 4301.73, 1919.4, 1248.27, 3061.62, 1329.68],
        2003: [1487.15, 1337.31, 3417.56, 1463.38, 967.49, 2898.89, 1098.37],
        2002: [1249.99, 1069.08, 2911.69, 1134.31, 754.78, 2609.85, 943.49]
      })

      dataMap.dataTI = dataFormatter({
        // max : 25000,
        2011: [12363.18, 5219.24, 8483.17, 3960.87, 5015.89, 8158.98, 3679.91],
        2010: [10600.84, 4238.65, 7123.77, 3412.38, 4209.03, 6849.37, 3111.12],
        2009: [9179.19, 3405.16, 6068.31, 2886.92, 3696.65, 5891.25, 2756.26],
        2008: [8375.76, 2886.65, 5276.04, 2759.46, 3212.06, 5207.72, 2412.26],
        2007: [7236.15, 2250.04, 4600.72, 2257.99, 2467.41, 4486.74, 2025.44],
        2006: [5837.55, 1902.31, 3895.36, 1846.18, 1934.35, 3798.26, 1687.07],
        2005: [4854.33, 1658.19, 3340.54, 1611.07, 1542.26, 3295.45, 1413.83],
        2004: [4092.27, 1319.76, 2805.47, 1375.67, 1270, 2811.95, 1223.64],
        2003: [3435.95, 1150.81, 2439.68, 1176.65, 1000.79, 2487.85, 1075.48],
        2002: [2982.57, 997.47, 2149.75, 992.69, 811.47, 2258.17, 958.88]
      })

      dataMap.dataEstate = dataFormatter({
        // max : 3600,
        2011: [1074.93, 411.46, 918.02, 224.91, 384.76, 876.12, 238.61],
        2010: [1006.52, 377.59, 697.79, 192, 309.25, 733.37, 212.32],
        2009: [1062.47, 308.73, 612.4, 173.31, 286.65, 605.27, 200.14],
        2008: [844.59, 227.88, 513.81, 166.04, 273.3, 500.81, 182.7],
        2007: [821.5, 183.44, 467.97, 134.12, 191.01, 410.43, 153.03],
        2006: [658.3, 156.64, 397.14, 117.01, 136.5, 318.54, 131.01],
        2005: [493.73, 122.67, 330.87, 106, 98.75, 256.77, 112.29],
        2004: [436.11, 106.14, 231.08, 95.1, 73.81, 203.1, 97.93],
        2003: [341.88, 92.31, 185.19, 78.73, 61.05, 188.49, 91.99],
        2002: [298.02, 73.04, 140.89, 65.83, 51.48, 130.94, 76.11]
      })

      dataMap.dataFinancial = dataFormatter({
        // max : 3200,
        2011: [2215.41, 756.5, 746.01, 519.32, 447.46, 755.57, 207.65],
        2010: [1863.61, 572.99, 615.42, 448.3, 346.44, 639.27, 190.12],
        2009: [1603.63, 461.2, 525.67, 361.64, 291.1, 560.2, 180.83],
        2008: [1519.19, 368.1, 420.74, 290.91, 219.09, 455.07, 147.24],
        2007: [1302.77, 288.17, 347.65, 218.73, 148.3, 386.34, 126.03],
        2006: [982.37, 186.87, 284.04, 169.63, 108.21, 303.41, 100.75],
        2005: [840.2, 147.4, 213.47, 135.07, 72.52, 232.85, 83.63],
        2004: [713.79, 136.97, 209.1, 110.29, 55.89, 188.04, 77.17],
        2003: [635.56, 112.79, 199.87, 118.48, 55.89, 145.38, 73.15],
        2002: [561.91, 76.86, 179.6, 124.1, 48.39, 137.18, 75.45]
      })
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts'))
      // 绘制图表
      myChart.setOption({
        title: { text: 'ECharts 测试' },
        baseOption: {
          timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
              '2002-01-01', '2003-01-01', '2004-01-01',
              {
                value: '2005-01-01',
                tooltip: {
                  formatter: '{b} GDP达到一个高度'
                },
                symbol: 'diamond',
                symbolSize: 16
              },
              '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01',
              {
                value: '2011-01-01',
                tooltip: {
                  formatter: function (params) {
                    return params.name + 'GDP达到又一个高度'
                  }
                },
                symbol: 'diamond',
                symbolSize: 18
              }
            ],
            label: {
              formatter: function (s) {
                return (new Date(s)).getFullYear()
              }
            }
          },
          title: {
            subtext: '数据来自国家统计局'
          },
          tooltip: {},
          legend: {
            x: 'right',
            data: ['第一产业', '第二产业', '第三产业'],
            selected: {
              'GDP': false, '金融': false, '房地产': false
            }
          },
          calculable: true,
          grid: {
            top: 80,
            bottom: 100
          },
          xAxis: [
            {
              'type': 'category',
              'axisLabel': {'interval': 0},
              'data': [
                '北京', '\n天津', '河北', '\n山西', '内蒙古', '\n辽宁', '吉林'
              ],
              splitLine: {show: false}
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: 'GDP（亿元）',
              // max: 53500
              max: 15000
            }
          ],
          series: [
            {name: 'GDP', type: 'bar'},
            {name: '金融', type: 'bar'},
            {name: '房地产', type: 'bar'},
            {name: '第一产业', type: 'bar'},
            {name: '第二产业', type: 'bar'},
            {name: '第三产业', type: 'bar'},
            {
              name: 'GDP占比',
              type: 'pie',
              center: ['75%', '22%'],
              radius: '28%'
            }
          ]
        },
        options: [
          {
            title: {text: '2002全国宏观经济指标'},
            series: [
              {data: dataMap.dataGDP['2002']},
              {data: dataMap.dataFinancial['2002']},
              {data: dataMap.dataEstate['2002']},
              {data: dataMap.dataPI['2002']},
              {data: dataMap.dataSI['2002']},
              {data: dataMap.dataTI['2002']},
              {data: [
                {name: '第一产业', value: dataMap.dataPI['2002sum']},
                {name: '第二产业', value: dataMap.dataSI['2002sum']},
                {name: '第三产业', value: dataMap.dataTI['2002sum']}
              ]}
            ]
          },
          {
            title: {text: '2003全国宏观经济指标'},
            series: [
              {data: dataMap.dataGDP['2003']},
              {data: dataMap.dataFinancial['2003']},
              {data: dataMap.dataEstate['2003']},
              {data: dataMap.dataPI['2003']},
              {data: dataMap.dataSI['2003']},
              {data: dataMap.dataTI['2003']},
              {data: [
                {name: '第一产业', value: dataMap.dataPI['2003sum']},
                {name: '第二产业', value: dataMap.dataSI['2003sum']},
                {name: '第三产业', value: dataMap.dataTI['2003sum']}
              ]}
            ]
          },
          {
            title: {text: '2004全国宏观经济指标'},
            series: [
              {data: dataMap.dataGDP['2004']},
              {data: dataMap.dataFinancial['2004']},
              {data: dataMap.dataEstate['2004']},
              {data: dataMap.dataPI['2004']},
              {data: dataMap.dataSI['2004']},
              {data: dataMap.dataTI['2004']},
              {data: [
                {name: '第一产业', value: dataMap.dataPI['2004sum']},
                {name: '第二产业', value: dataMap.dataSI['2004sum']},
                {name: '第三产业', value: dataMap.dataTI['2004sum']}
              ]}
            ]
          },
          {
            title: {text: '2005全国宏观经济指标'},
            series: [
              {data: dataMap.dataGDP['2005']},
              {data: dataMap.dataFinancial['2005']},
              {data: dataMap.dataEstate['2005']},
              {data: dataMap.dataPI['2005']},
              {data: dataMap.dataSI['2005']},
              {data: dataMap.dataTI['2005']},
              {data: [
                {name: '第一产业', value: dataMap.dataPI['2005sum']},
                {name: '第二产业', value: dataMap.dataSI['2005sum']},
                {name: '第三产业', value: dataMap.dataTI['2005sum']}
              ]}
            ]
          },
          {
            title: {text: '2006全国宏观经济指标'},
            series: [
              {data: dataMap.dataGDP['2006']},
              {data: dataMap.dataFinancial['2006']},
              {data: dataMap.dataEstate['2006']},
              {data: dataMap.dataPI['2006']},
              {data: dataMap.dataSI['2006']},
              {data: dataMap.dataTI['2006']},
              {data: [
                {name: '第一产业', value: dataMap.dataPI['2006sum']},
                {name: '第二产业', value: dataMap.dataSI['2006sum']},
                {name: '第三产业', value: dataMap.dataTI['2006sum']}
              ]}
            ]
          },
          {
            title: {text: '2007全国宏观经济指标'},
            series: [
              {data: dataMap.dataGDP['2007']},
              {data: dataMap.dataFinancial['2007']},
              {data: dataMap.dataEstate['2007']},
              {data: dataMap.dataPI['2007']},
              {data: dataMap.dataSI['2007']},
              {data: dataMap.dataTI['2007']},
              {data: [
                {name: '第一产业', value: dataMap.dataPI['2007sum']},
                {name: '第二产业', value: dataMap.dataSI['2007sum']},
                {name: '第三产业', value: dataMap.dataTI['2007sum']}
              ]}
            ]
          },
          {
            title: {text: '2008全国宏观经济指标'},
            series: [
              {data: dataMap.dataGDP['2008']},
              {data: dataMap.dataFinancial['2008']},
              {data: dataMap.dataEstate['2008']},
              {data: dataMap.dataPI['2008']},
              {data: dataMap.dataSI['2008']},
              {data: dataMap.dataTI['2008']},
              {data: [
                {name: '第一产业', value: dataMap.dataPI['2008sum']},
                {name: '第二产业', value: dataMap.dataSI['2008sum']},
                {name: '第三产业', value: dataMap.dataTI['2008sum']}
              ]}
            ]
          },
          {
            title: {text: '2009全国宏观经济指标'},
            series: [
              {data: dataMap.dataGDP['2009']},
              {data: dataMap.dataFinancial['2009']},
              {data: dataMap.dataEstate['2009']},
              {data: dataMap.dataPI['2009']},
              {data: dataMap.dataSI['2009']},
              {data: dataMap.dataTI['2009']},
              {data: [
                {name: '第一产业', value: dataMap.dataPI['2009sum']},
                {name: '第二产业', value: dataMap.dataSI['2009sum']},
                {name: '第三产业', value: dataMap.dataTI['2009sum']}
              ]}
            ]
          },
          {
            title: {text: '2010全国宏观经济指标'},
            series: [
              {data: dataMap.dataGDP['2010']},
              {data: dataMap.dataFinancial['2010']},
              {data: dataMap.dataEstate['2010']},
              {data: dataMap.dataPI['2010']},
              {data: dataMap.dataSI['2010']},
              {data: dataMap.dataTI['2010']},
              {data: [
                {name: '第一产业', value: dataMap.dataPI['2010sum']},
                {name: '第二产业', value: dataMap.dataSI['2010sum']},
                {name: '第三产业', value: dataMap.dataTI['2010sum']}
              ]}
            ]
          },
          {
            title: {text: '2011全国宏观经济指标'},
            series: [
              {data: dataMap.dataGDP['2011']},
              {data: dataMap.dataFinancial['2011']},
              {data: dataMap.dataEstate['2011']},
              {data: dataMap.dataPI['2011']},
              {data: dataMap.dataSI['2011']},
              {data: dataMap.dataTI['2011']},
              {data: [
                {name: '第一产业', value: dataMap.dataPI['2011sum']},
                {name: '第二产业', value: dataMap.dataSI['2011sum']},
                {name: '第三产业', value: dataMap.dataTI['2011sum']}
              ]}
            ]
          }
        ]
      })
    },
    methods: {
      //
    }
  }
</script>

<style scoped>
  #echarts {
    position: relative;
    height: 80vh;
    width: 50vw;
  }
</style>
