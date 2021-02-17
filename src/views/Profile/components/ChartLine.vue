<!--
 * @Description: 折线图
 * @Author: Wangtr
 * @Date: 2021-02-04 10:16:16
 * @LastEditTime: 2021-02-04 11:03:10
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div ref="Chart" class="chart">
    </div>
</template>

<script>
const echart = require('echarts');
export default {
    name: 'ChartLine',
    props: {
        data: {
            type: Object,
            default: () => {
                return {
                    date: ['2021-01-30', '2021-01-31', '2021-02-01', '2021-02-02', '2021-02-03', '2021-02-04', '2021-02-05'], // 七天对应的日期
                    value: [15, 22, 3, 27, 0, 1, 3]// 七天对应的浏览数
                };
            }
        }
    },
    data() {
        return {
        };
    },
    mounted() {
        const chart = echart.init(this.$refs.Chart);
        const option = {
            label: {
                show: true
            },
            xAxis: {
                type: 'category',
                data: this.data.date
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                type: 'line',
                data: this.data.value
            }]
        };
        chart.setOption(option);
    }
};
</script>

<style lang="less" scoped>
.chart{
    width: 100%;
    height: 500px;
}
</style>
