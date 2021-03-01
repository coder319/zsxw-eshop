<!--
 * @Description: 用户个人界面
 * @Author: Wangtr
 * @Date: 2020-12-02 20:34:50
 * @LastEditTime: 2021-03-01 17:47:23
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div>
        <nav-bar></nav-bar>
        <div class="cm_content">
            <div class="cm_main">
                <div class="pro_top">
                    <a-avatar :src="user.headImg" :size="72"></a-avatar>
                    <span class="pro_name">{{ user.username }}</span>
                    <a-tag color="green">Lv.{{ user.level }}</a-tag>
                </div>
                <div class="charts_box">
                    <section class="row first_row">
                        <sunburst></sunburst>
                        <chart-radar :data="radarData"></chart-radar>
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
import login from '@/mixin/login';
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
    mixins: [login],
    data() {
        return {
            user: {
                // id: 0,
                // username: '',
                // email: '',
                // sex: '',
                // headImg: '',
                // eMail: '',
                // exp: 0,
                // introduce: '',
                // level: 0,
                // recommend: 0
            },
            lineData: {},
            sunburstData: [],
            radarData: {
                name: [],
                value: []
            }
        };
    },
    created() {
        this.user = this.$store.state.USER_INFO;
        this.$http.getRadarData().then(res => {
            res.data.forEach(val => {
                // console.log(val);
                this.radarData.name.push({ name: val.categoryName, max: 500 });
                this.radarData.value.push(val.number);
            });
            console.log(typeof this.radarData.name);
        });
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
