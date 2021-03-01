<!--
 * @Description:
 * @Author: Wangtr
 * @Date: 2021-02-04 10:44:55
 * @LastEditTime: 2021-03-01 17:54:22
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
                    // date: ['2021-01-30', '2021-01-31', '2021-02-01', '2021-02-02', '2021-02-03', '2021-02-04', '2021-02-05'], // 七天对应的日期
                    // value: [15, 22, 3, 27, 0, 1, 3]// 七天对应的浏览数
                    name: [],
                    value: []
                };
            }
        }
    },
    data() {
        return {
            // listData: {
            //     name: [],
            //     value: []
            // }
        };
    },
    created() {
        // this.$http.getRadarData().then(res => {
        //     res.data.forEach(val => {
        //         // console.log(val);
        //         this.listData.name.push({ name: val.categoryName, max: 500 });
        //         this.listData.value.push(val.number);
        //     });
        // });
        // console.log(typeof this.data.value);
    },
    mounted() {
        const chart = echart.init(this.$refs.Chart);
        const option = {
            title: {
                text: '各类型小说浏览量'
            },
            tooltip: {},
            legend: {
                data: ['我爱看']
            },
            radar: {
                shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                indicator:
                    // this.data.name
                    // [
                    //     { name: '玄幻魔法', max: 6500 },
                    //     { name: '武侠修真', max: 16000 },
                    //     { name: '都市言情', max: 30000 },
                    //     { name: '历史军事', max: 38000 },
                    //     { name: '恐怖灵异', max: 52000 },
                    //     { name: '科幻小说', max: 25000 },
                    //     { name: '职场校园', max: 25000 },
                    //     { name: '美文名著', max: 25000 }
                    // ]
                    [
                        { name: '玄幻魔法', max: 200 },
                        { name: '武侠修真', max: 200 },
                        { name: '都市言情', max: 200 }
                    ]

            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: [
                    {
                        // value: [4300, 10000, 28000, 35000, 50000, 19000, 13000, 20000],
                        // value: this.data.value,
                        value: [123, 32, 55],
                        name: '我爱看'
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
