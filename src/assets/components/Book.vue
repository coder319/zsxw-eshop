<!--
 * @Description: 商品项样式一
 * @Author: Wangtr
 * @Date: 2020-12-10 15:01:07
 * @LastEditTime: 2021-03-01 12:45:50
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div class="cm_book" :style="{width:width,height:height}">
        <div class="top link" @click="routeTo()">
            <img src="../image/test_cover1.jpg" alt="cover" />
            <div class="desc f-oh2 \">
                {{ data.desc }}
            </div>
        </div>
        <div class="bottom">
            <p>{{ data.name }}</p>
            <!-- <p>标签</p> -->
            <a-tag color="cyan">
                {{ data.tag }}
            </a-tag>
            <p>
                ￥{{ data.price.toFixed(2) }}
            </p>
        </div>
    </div>
</template>

<script>
import { Tag } from 'ant-design-vue';

export default {
    name: 'Book',
    components: {
        ATag: Tag
    },
    props: {
        width: {
            type: String,
            default: '184px'
        },
        height: {
            type: String,
            default: '350px'
        },
        data: {
            type: Object,
            default: () => {
                return {
                    cid: 9999,
                    cover: require('../../assets/image/test_cover1.jpg'),
                    name: '书名',
                    desc: '简介',
                    author: '作者',
                    tag: '标签',
                    price: 19.80
                };
            }
        }
    },
    methods: {
        routeTo() {
            this.$router.push({
                name: 'Detail',
                query: {
                    cid: this.data.cid
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.cm_book{
    padding: 0 20px;
    .top{
        img{
            width: 144px;
            margin: 10px 0;
            object-fit: cover;
        }
        .desc{
            line-height: 20px;
        }
    }
    .bottom{
        p{
            margin: 5px 0;
        }
    }
}
</style>
