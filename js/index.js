// 有多个图表，为了防止变量命名污染，使用立即执行函数，减少命名冲突。在这个函数里的变量都是局部变量
// ()();

// (function(){
//     // 初始化echarts实例对象
//     var myChart=echarts.init(document.querySelector(".bar .chart"));
//     //指定图表的配置项和数据
//     var option={};
//     //使用刚刚指定的配置项和数据显示图表
//     myChart.setOption(option);
// //图表跟着屏幕自适应
// window.addEventListener("resize", function() {
//   myChart.resize();
// });
// })();

//柱状图-就业行业
(function () {
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      //触发类型
      trigger: "axis",
      //坐标轴指示配置器
      axisPointer: {
        type: "shadow", //line shadow
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        show: false,
        type: "category",
        data: [
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业",
        ],
        //坐标轴刻度
        axisTick: {
          //刻度线和标签对齐
          alignWithLabel: true,
        },
        // x轴的文字颜色和大小
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12",
        },
        //  x轴样式不显示
        axisLine: {
          show: false,
          // 如果想要设置单独的线条样式
          // lineStyle: {
          //    color: "rgba(255,255,255,.1)",
          //    width: 1,
          //    type: "solid"
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12",
        },
        axisLine: {
          show: false,
        },
        //分割线
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "60%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5,
        },
      },
    ],
  };
  myChart.setOption(option);
  //图表跟着屏幕自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//柱状图-技能掌握-横向柱状图
(function () {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
      // containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: false,//[0, 0.01]
      //不显示坐标轴 
      xAxis: {
        show: false,
      },
      splitLine:{
        show:false,
      },
    },
    //设置两个y轴
    yAxis: [
      {
        type: "category",
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        inverse:true,
        //不显示y轴线条
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#fff",
        },
      },
      {
        data:[702, 350, 610, 793, 664],
        inverse:true,
        //不显示y轴线条
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#fff",
          textStyle: {
            fontSize: 12,
          },
        },
      },
    ],
    series: [
      {
        name: "柱",
        type: "bar",
        data: [70, 34, 60, 78, 69],
        yAxisIndex: 0,//在单个图例中展示多个y轴时使用
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 柱子设为圆角
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            // 为每个柱子设置不同颜色：params 传进来的是柱子对象
            color: function (params) {
              // console.log(params);
              // dataIndex 是当前柱子的索引号
              return myColor[params.dataIndex];
            },
          },
        },
        // 图形上的文本标签c
        label: {
          normal: {
            show: true,
            // 图形内显示b
            position: "inside",
            // 文字的显示格式
            formatter: "{c}%",
          },
        },
      },
      {
        name: "框",
        type: "bar",
        data: [100, 100, 100, 100, 100],
        yAxisIndex: 1,//在单个图例中展示多个y轴使用
        barCategoryGap: 50, //柱间距离
        barWidth: 15,
        itemStyle: {
          //颜色无，边框有颜色，边框厚度为3
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15,
        },
      },
    ],
  };
  myChart.setOption(option);
  //图表跟着屏幕自适应
window.addEventListener("resize", function() {
  myChart.resize();
});
})();

//折线图---人员变化---有一个事件待完成
(function(){
    // 初始化echarts实例对象
    var myChart=echarts.init(document.querySelector('.line .chart'));
    //指定图表的配置项和数据
    var option = {
      //设置两条线的颜色
      color: ['#00f2f1', '#ed3f35'],
      tooltip: {
        trigger: 'axis'
      },
      //图例组件
      legend: {
        textStyle:{color:'#4c9bfd'},
        right:'10%' // 距离右边10%
      },
      grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        show:true,//显示边框
        borderColor:'#012f4a',//边框颜色
        containLabel: true,//显示刻度文字
      },
      xAxis: {
        //坐标轴类型
        type: 'category',
        boundaryGap: false,//左边起点是否与y轴有间隙
        axisTick:{show:false},//去除刻度线
        axisLabel:{color:'#4c9bfd' },//文本颜色
        axisLine:{show:false},//去除轴线
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      },
      yAxis: {
        type: 'value',
        axisTick:{show:false},//去除刻度线
        axisLabel:{color:'#4c9bfd' },//文本颜色
        axisLine:{show:false},//去除轴线
        splitLine:{
          //分割线
          lineStyle:{color:'#012f4a'},
        }
      },
      series: [
        {
          name: '新增粉丝',
          smooth: true,
          type: 'line',
          data:  [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        },
        {
          name: '新增游客',
          smooth: true,
          type: 'line',
          data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79], 
        },
      ]
    };;
    //使用刚刚指定的配置项和数据显示图表
    myChart.setOption(option);
//图表跟着屏幕自适应
window.addEventListener("resize", function() {
  myChart.resize();
});
//后台传入的axios数据
var yearData = [
  {
    year: '2021',  // 年份
    data: [  // 两个数组是因为有两条线
         [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
         [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
  },
  {
    year: '2022',  // 年份
    data: [  // 两个数组是因为有两条线
         [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
     [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
  }
 ];
})();

//折线图--播放量
(function(){
    // 初始化echarts实例对象
    var myChart=echarts.init(document.querySelector(".line1 .chart"));
    //指定图表的配置项和数据
    var option = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        top:'0%',
        textStyle:{
          color:'rgba(255,255,255,.5)',
          fontSize:'12',
        }
      },
      grid: {
        left: "10",
        top: "30",
        right: "10",
        bottom: "10",
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          //坐标轴标签
          axisLabel:{
            textStyle:{
              color:"rgba(255,255,255,.6)",
              fontSize:12,
            },
          },
          //x轴轴线--颜色设置
          axisLine:{
            lineStyle: {
              color: "rgba(255,255,255,.2)"
            },
          },
          data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12
            }
          },
       // 修改分割线的颜色
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: '播放量',
          type: 'line',
          smooth: true,
          //设置数据点--拐点样式、大小、颜色和边框
          symbol:'circle',
          symbolSize:8,
          itemStyle:{
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12,
          },
          showSymbol:false,//开始不显示拐点，鼠标经过显示
          //区域填充--渐变色填充
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.4)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.1)"
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
        },
        {
          name: '转发量',
          type: 'line',
          smooth: true,
          //设置数据点--拐点样式、大小、颜色和边框
          symbol:'circle',
          symbolSize:8,
          itemStyle:{
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12,
          },
          showSymbol:false,//开始不显示拐点，鼠标经过显示
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
        },

      ]
    };;
    //使用刚刚指定的配置项和数据显示图表
    myChart.setOption(option);
//图表跟着屏幕自适应
window.addEventListener("resize", function() {
  myChart.resize();
});
})();

//饼状图--基本
(function(){
  
    // 初始化echarts实例对象
    var myChart=echarts.init(document.querySelector(".pie .chart"));
    //指定图表的配置项和数据
    var option = {
      color: [
         "#065aab","#066eab","#0682ab","#0696ab","#06a0ab",],
         tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
      legend: {
        bottom: '0%',
        left:'0%',
        itemWidth: 10,
        itemHeight: 10,
        itemGap:0,
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "11"
        },
        data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
      },
      series: [
        {
          name: '年龄分布',
          type: 'pie',
          radius: ['40%', '60%'],//饼图大小
          center: ["45%", "40%"],//饼图位置
          avoidLabelOverlap: false,
          label:{show: false},//图形上的文字
          labelLine: { show: false },//图形和文字的连接线
          data: [
                { value: 1, name: "0岁以下" },
                { value: 4, name: "20-29岁" },
                { value: 2, name: "30-39岁" },
                { value: 2, name: "40-49岁" },
                { value: 1, name: "50岁以上" }
            ] ,          
        }
      ]
    };
    //使用刚刚指定的配置项和数据显示图表
    myChart.setOption(option);
//图表跟着屏幕自适应
window.addEventListener("resize", function() {
  myChart.resize();
});
})();

//饼形图--南丁格尔玫瑰图
(function(){
    // 初始化echarts实例对象
    var myChart=echarts.init(document.querySelector(".pie1 .chart"));
    //指定图表的配置项和数据
    var option = {
      color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },   
      series: [
        {
          name: 'Area Mode',
          type: 'pie',
          radius: ['10%', '70%'],//圆的大小：内圆半径  外圆半径
          center: ['50%', '50%'],
          roseType: 'radius',
          itemStyle: {borderRadius: 5},
          //文字大小
          label: { fontSize: 10},
          // 引导线设置 连接图表6px  连接文字 8 px
          labelLine:{length: 6,length2: 8},
          data: [
            { value: 20, name: '云南' },
            { value: 26, name: '北京' },
            { value: 24, name: '山东' },
            { value: 25, name: '河北' },
            { value: 20, name: '江苏' },
            { value: 25, name: '浙江' },
            { value: 30, name: '四川' },
            { value: 42, name: '湖北' }
          ]
        }
      ]
    };
    //使用刚刚指定的配置项和数据显示图表
    myChart.setOption(option);
//图表跟着屏幕自适应
window.addEventListener("resize", function() {
  myChart.resize();
});
})();