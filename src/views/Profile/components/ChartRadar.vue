<!--
 * @Description:
 * @Author: Wangtr
 * @Date: 2021-02-04 10:44:55
 * @LastEditTime: 2021-02-04 11:17:11
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
    name: 'ChartRadar',
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
            title: {
                text: '基础雷达图'
            },
            tooltip: {},
            legend: {
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                indicator: [
                    { name: '销售（sales）', max: 6500 },
                    { name: '管理（Administration）', max: 16000 },
                    { name: '信息技术（Information Techology）', max: 30000 },
                    { name: '客服（Customer Support）', max: 38000 },
                    { name: '研发（Development）', max: 52000 },
                    { name: '市场（Marketing）', max: 25000 },
                    { name: '市场（Marketing）2', max: 25000 },
                    { name: '市场（Marketing）3', max: 25000 }
                ]
            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: [
                    {
                        value: [4300, 10000, 28000, 35000, 50000, 19000],
                        name: '预算分配（Allocated Budget）'
                    },
                    {
                        value: [5000, 14000, 28000, 31000, 42000, 21000],
                        name: '实际开销（Actual Spending）'
                    }
                ]
            }]
        };
        chart.setOption(option);
    }
};
</script>

<style lang="less" scoped>
.chart{
    width: 600px;
    height: 500px;
}
</style>
