<!--
 * @Description: 旭日图
 * @Author: Wangtr
 * @Date: 2021-02-04 09:47:27
 * @LastEditTime: 2021-02-04 11:01:39
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div ref="Sunburst" class="sunburst">
    </div>
</template>

<script>
const echart = require('echarts');
export default {
    name: 'ChartSunburst',
    props: {
        data: {
            type: Array,
            default: () => {
                return [
                    {
                        name: '作者1', // 作者名称
                        value: 77, // 浏览数，等于所有这个作者的书的浏览数总和
                        children: [
                            {
                                name: 'book1', // 书名
                                value: 20// 浏览数
                            },
                            {
                                name: 'book2', // 书名
                                value: 11// 浏览数
                            },
                            {
                                name: 'book3', // 书名
                                value: 14// 浏览数
                            },
                            {
                                name: 'book4', // 书名
                                value: 32// 浏览数
                            }
                        ]
                    }, {
                        name: '作者2', // 作者名称
                        value: 45, // 浏览数，等于所有这个作者的书的浏览数总和
                        children: [
                            {
                                name: 'book5', // 书名
                                value: 20// 浏览数
                            },
                            {
                                name: 'book6', // 书名
                                value: 11// 浏览数
                            },
                            {
                                name: 'book7', // 书名
                                value: 14// 浏览数
                            }
                        ]
                    }
                ];
            }
        }
    },
    data() {
        return {
        };
    },
    mounted() {
        const chart = echart.init(this.$refs.Sunburst);
        const option = {
            series: {
                radius: ['25%', '100%'],
                type: 'sunburst',
                sort: null,
                emphasis: {
                    // focus: 'ancestor'
                },
                data: this.data,
                label: {
                    rotate: 'tangential'
                },
                levels: [],
                itemStyle: {
                    // color: '#ddd',
                    borderWidth: 2,
                    borderRadius: 4
                }
            }
        };
        chart.setOption(option);
    }
};
</script>

<style lang="less" scoped>
.sunburst{
    width: 300px;
    height: 400px;
}
</style>
