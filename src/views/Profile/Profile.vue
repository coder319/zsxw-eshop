<!--
 * @Description: 用户个人界面
 * @Author: Wangtr
 * @Date: 2020-12-02 20:34:50
 * @LastEditTime: 2021-02-04 11:16:39
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
                    <section class="row first_row">
                        <sunburst></sunburst>
                        <chart-radar></chart-radar>
                    </section>
                    <section class="row">
                        <chart-line></chart-line>
                    </section>
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
// 表格导入
import Sunburst from './components/ChartSunburst';
import ChartLine from './components/ChartLine';
import ChartRadar from './components/ChartRadar';

export default {
    name: 'Profile',
    components: {
        AAvatar: Avatar,
        ATag: Tag,
        navBar,
        cmFooter,
        Sunburst,
        ChartLine,
        ChartRadar
    },
    data() {
        return {
        };
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
  overflow: hidden;
  .row{
      margin: 20px 0;
  }
  .first_row{
      padding-left: 110px;
      display: flex;
      justify-content: space-between;
  }
}
</style>
