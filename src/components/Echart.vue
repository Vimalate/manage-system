<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-20 14:07:54
 * @LastEditTime: 2020-06-20 15:03:25
 * @Description: 
 * @FilePath: \vue-manage-system\src\components\Echart.vue
-->
<template>
  <div style="height:100%" ref="echart">echart</div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: []
        };
      }
    },
    // 是否有坐标
    isAxisChart: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption;
    }
  },
  data() {
    return {
      echart: null,
      axisOption: {}, //有坐标轴
      normalOption: {}
    };
  },
  methods: {
    initChart() {
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        console.log();
      } else {
        console.log();
      }
    }
  }
};
</script>
<style lang="scss" scoped></style>
