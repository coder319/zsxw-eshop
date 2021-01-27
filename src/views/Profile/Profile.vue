<!--
 * @Description: 用户个人界面
 * @Author: Wangtr
 * @Date: 2020-12-02 20:34:50
 * @LastEditTime: 2021-01-27 15:29:03
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div>
        <nav-bar></nav-bar>
        <div class="cm_content">
            <div class="cm_main">
                <div class="pro_top">
                    <a-avatar :size="72"></a-avatar>
                    <span class="pro_name">用户名</span>
                    <a-tag color="green">Lv.1</a-tag>
                </div>
                <div class="charts_box">
                    <div ref="chart1" style="height:300px;width:calc(100% / 3);"></div>
                </div>
            </div>
        </div>
        <cm-footer></cm-footer>
    </div>
</template>

<script>
import navBar from 'components/FixedNav';
import cmFooter from 'components/Footer';
import { Avatar, Tag } from 'ant-design-vue';
const echart = require('echarts');

export default {
    name: 'Profile',
    components: {
        navBar,
        cmFooter,
        AAvatar: Avatar,
        ATag: Tag
    },
    data() {
        return {
        };
    },
    mounted() {
        const myEchart = echart.init(this.$refs.chart1);
        // 指定图表的配置项和数据
        const option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myEchart.setOption(option);
    }
};

</script>

<style lang="less">
.pro_top{
  padding: 15px 0;
  height:102px;
  border-bottom: 1px solid #dddddd;
  .ant-avatar{
    margin-top: -16px;
  }
  .pro_name{
    margin: 0 20px;
    font-size: 30px;
    line-height: 72px;
  }
}
.charts_box{
  margin: 30px 0;
}
</style>
