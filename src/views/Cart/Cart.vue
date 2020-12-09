<template>
<!--    <backwrap>-->
    <div class="wrap">
        <div style="margin-bottom: 16px">
            <span style="margin-left: 8px">
        <template v-if="hasSelected">
          {{ `已选择 ${selectedRowKeys.length} 项` }}
        </template>
      </span>
        </div>
        <a-table
                :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                :columns="columns"
                :data-source="data"
        />
        <!--在这那点是写那个右下角页码的哦，我觉得没得必要存在感觉在哪里有点突兀还影响布局-->
        <div class="wrap_push">
            <div class="SUM_number">
                {{SUM_Price}}
            </div>
            <button class="pay" onclick="alert(123456)">
                前往支付
            </button>
        </div>
    </div>
<!--    </backwrap>-->
</template>
<script>
    /*    import backwrap from  "../../assets/component/backwrap"*/
    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
        },
        {
            title: '单价/元',
            dataIndex: 'Price',
        },
        {
            title: '数量',
            dataIndex: 'number',
        },
        {
            title: '小计',
            dataIndex: 'Prices',
        },
        {
            title: '操作',
        },
    ];

    const data = [];
    for (let i = 0; i < 5/* x.length */; i++) {
        data.push({
            key: i,
            name: /*x[i].name*/ `${i}`,
            Price: 32,
            number:1,                             /*我这么去加按钮哦 还有点击事件*/
            Prices:32,
            action:'',                          /*我这么去加按钮哦 还有点击事件*/
        });
    }

    export default {
        data() {
            return {
                data,
                columns,
                selectedRowKeys: [], // Check here to configure the default column
                // 这我也不知道是干啥的
                loading: false,// 这我也不知道是干啥的
                SUM_Price:'¥'+32,
            };
        },
        computed: {
            hasSelected() {
                return this.selectedRowKeys.length > 0;
            },
        },
        methods: {
            onSelectChange(selectedRowKeys) {
                console.log('selectedRowKeys changed: ', selectedRowKeys);
                this.selectedRowKeys = selectedRowKeys;
            },
        },
        /*components: {
            backwrap
        },*/
    };
</script>
<style>
    .wrap{
        width: 1200px;
        margin: 0 auto;
    }
    .wrap_push{
        display: flex;
        justify-content:flex-end;
    }
    .SUM_number{
        color: red;
        font-size: 32px;
        font-family: "Arial Black",serif;
        margin: 1px 10px;
    }
    .pay{
        margin-left: 20px;
        font-size: 20px;
        padding: 6px;
        height: 48px;
        font-family: 黑体,serif;
    }
</style>