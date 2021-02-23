## 商品获取

### 获取指定商品信息

接口描述：根据商品信息查询商品，参数不全为空

请求方式：post

请求地址：ip:port/api/eshop/goods

请求参数：

| 参数成员 | 类型   | 描述     | 举例 | 必填 |
| -------- | ------ | -------- | ---- | ---- |
| type     | string | 商品分类 | 文学 | 否   |
| name     | string | 商品名称 | 蛙   | 否   |
| author   | string | 商品作者 | 莫言 | 否   |
| sellerId | string | 卖家id   | 123  | 否   |

响应体：

````json
{
  "code": 200,	--响应状态
  "msg": "操作成功!",		--响应信息
  "success": true,	--操作是否成功
  "data": {
    "currentPage": 1,	--当前页码
    "pageSize": 10,	--每页展示条数
    "total": 1234,	--总条数
    "pages": 162,	--总页数
    "list": [
  			{
          "cid": 0001,	--商品id
          "name": "蛙",	--小说名称
          "cover": "base64",	--小说封面
          "author": "莫言",	--小说作者
          "desc": "描述",	--小说描述
   				"tag": '标签', --小说标签
          "price": 64.20	--小说价格
				},
      　{
          "cid": 0001,	--商品id
          "name": "蛙",	--小说名称
          "cover": "base64",	--小说封面
          "author": "莫言",	--小说作者
          "desc": "描述",	--小说描述
         	"tag": '标签', --小说标签
          "price": 64.20	--小说价格
       }
    ]
  }
}
````



### 获取推荐商品信息

接口描述：根据用户浏览记录、历史小说阅读等信息获取推荐商品信息

请求方式：get

请求地址：ip:port/api/eshop/goods

响应体：

````json
{
  "code": 200,	--响应状态
  "msg": "操作成功!",		--响应信息
  "success": true,	--操作是否成功
  "data": [
    {
      "cid": 0001,	--商品id
      "name": "蛙",	--小说名称
      "cover": "base64",	--小说封面
      "author": "莫言",	--小说作者
      "desc": "描述",	--小说描述
      "tag": '标签', --小说标签
      "price": 64.20	--小说价格
    },
    {
      "cid": 0001,	--商品id
      "name": "蛙",	--小说名称
      "cover": "base64",	--小说封面
      "author": "莫言",	--小说作者
      "desc": "描述",	--小说描述
      "tag": '标签', --小说标签
      "price": 64.20	--小说价格
    }
  ]
}
````



### 根据id获取指定商品详细信息

接口描述：根据商品id查询指定商品

请求方式：get

请求地址：ip:port/api/eshop/goods/{cid}

响应体：

````json
{
  "code": 200,	--响应状态
  "msg": "操作成功!",		--响应信息
  "success": true,	--操作是否成功
  "data": {
    "cid": 0001,	--商品id
    "name": "蛙",	--小说名称
    "cover": "base64",	--小说封面
    "author": "莫言",	--小说作者
    "desc": "描述",	--小说描述
  	"tag": '标签', --小说标签
    "price": 64.20,	--小说价格
  	"pics": [	--书籍图片
      "pid": 1234,	--图片1
      "pid": 1111		--图片2
    ],
  	"seller": "卖家",	--卖家名字
  	"sellerId": 1234,	--卖家id
  	"stock": 12,	--库存数量
  	"monthlySales": 1,	--月销量
  	"totalSales": 10	--总销量
  }
}
````





## 购买相关

### 查询购物车详细列表

接口描述：获取用户购物车信息

请求方式：get

请求地址：ip:port/api/eshop/shoppingcar

响应体：

````json
{
  "code": 200,	--响应状态
  "msg": "操作成功!",		--响应信息
  "success": true,	--操作是否成功
  "data": [
    {
      "cid": 0001,	--商品id
      "name": "蛙",	--小说名称
      "cover": "base64",	--小说封面
      "author": "莫言",	--小说作者
      "desc": "描述",	--小说描述
      "price": 64.20,	--小说价格
      "tag": '标签', --小说标签
      "num": 123, --小说数量
      "seller": "卖家",	--卖家名字
      "sellerId": 1234, --卖家id
      "time": 2020-12-12	--放入购物车的时间
    },
    {
      "cid": 0001,	--商品id
      "name": "蛙",	--小说名称
      "cover": "base64",	--小说封面
      "author": "莫言",	--小说作者
      "desc": "描述",	--小说描述
      "tag": '标签', --小说标签	
      "num": 123, --小说数量
      "price": 64.20,	--小说价格
      "seller": "卖家",	--卖家名字
      "sellerId": 1234, --卖家id
      "time": 2020-12-12	--放入购物车的时间
    }
  ]
}
````



### 修改购物车商品数量

接口描述：修改购物车中商品数量

请求方式：post

请求地址：ip:port/api/eshop/shoppingcar

请求参数：

| 参数成员 | **类型** | **描述** | 举例 | 是否必填 |
| -------- | -------- | -------- | ---- | -------- |
| cid      | string   | 商品id   | 1111 | 是       |
| newNum   | Integer  | 当前数量 | 120  | 是       |

响应体：

````json
{
  "code": 200,	--响应状态
  "data": null,
  "msg": "修改成功",	--响应信息
  "success": true	--响应是否成功
}
````



### 提交购买订单

接口描述：提交订单

请求方式：post

请求地址：ip:port/api/eshop/buy

请求参数：

````json
[
	{
    "cid": 1111,	--商品id
    "number": 12	--购买数量
  },
  {
    "cid": 1111,
    "number": 12
  }
]
````

响应体：

````json
{
  "code": 200,	--响应状态
  "data": null,
  "msg": "提交成功",	--响应信息
  "success": true	--响应是否成功
}
````



## 个人信息

### 获取浏览数-作者

接口描述：浏览记录-根据书的作者，主要为了表现用户最喜欢的作者

请求方式：get

请求地址：ip:port/api/history/author

响应体：

````json
{
  "code": 200,	--响应状态
  "msg": "提交成功",	--响应信息
  "success": true	--响应是否成功
  "data": [
    {
      "name": "String",//作者名称
      "value": 1234,//浏览数，等于所有这个作者的书的浏览数总和
      "children": [
        {
          "name": "String",//书名
          "value": 1111//浏览数
        }
   		]
    },
    {
      "name": "String",//作者名称
      "value": 2222,//浏览数，等于所有这个作者的书的浏览数总和
      "children": [
        {
          "name": "String",//书名
          "value": 1111//浏览数
        }
      ]
    }
  ]
}
````



### 获取浏览数-每日

接口描述：获取最近7天每日阅读量

请求方式：get

请求地址：ip:port/api/history/week

响应体：

````json
{
  "code": 200,	--响应状态
  "msg": "提交成功",	--响应信息
  "success": true	--响应是否成功
  "data": [
  	{
  		"day": "2020-01-01",	--日期
  		"number": 12	--阅读量
		},
		{
      "day": "2020-01-01",
  		"number": 12
    }
  ]
}
````



### 获取浏览数-类型

接口描述：获取每种小说类型阅读量

请求方式：get

请求地址：ip:port/api/history/category

响应体：

````json
{
  "code": 200,	--响应状态
  "msg": "提交成功",	--响应信息
  "success": true	--响应是否成功
  "data": [
  	{
  		"category": "玄幻魔法",	--小说类型
  		"number": 12	--阅读量
		},
		{
  		"category": "玄幻魔法",	--小说类型
  		"number": 12
    }
  ]
}
````



### 获取收件人信息

接口描述：获取当前用户收件信息

请求方式：get

请求地址：ip:port/api/user/info/address

响应体：

````json
{
  "code": 200,	--响应状态
  "msg": "提交成功",	--响应信息
  "success": true	--响应是否成功
  "data": [
  	{
  		"addressId": 111,	--收件人信息id
  		"desc": "家",	--地址描述
  		"address": "xx市xx区xxx",	--详细地址
  		"receiver":	"xxx", --收件人
  		"phone": 1521,	--收件人电话
  		"defalut": true	--是否默认
		},
		{
      "addressId": 222,	--收件人信息id
  		"desc": "学校",	--地址描述
  		"address": "xx市xx区xxx",	--详细地址
  		"receiver":	"xxx", --收件人
  		"phone": 1521,	--收件人电话
  		"defalut": false	--是否默认
    }
  ]
}
````



### 修改收件人信息

接口描述：修改当前用户收件信息，

请求方式：post

请求地址：ip:port/api/user/info/address

请求参数：

| 参数成员  | **类型** | **描述**                       | 举例   | 是否必填 |
| --------- | -------- | ------------------------------ | ------ | -------- |
| desc      | String   | 地址描述                       | 1111   | 否       |
| address   | String   | 详细地址                       | 重庆市 | 是       |
| receiver  | String   | 收件人                         | 刘先生 | 是       |
| phone     | Integer  | 收件人电话                     | 1521   | 是       |
| addressId | Integer  | 收件人信息id（不填则代表新增） | 1111   | 否       |

响应体：

````json
{
  "code": 200,	--响应状态
  "msg": "提交成功",	--响应信息
  "success": true	--响应是否成功
  "data": null
}
````



### 删除收件人信息

接口描述：获取当前用户收件信息

请求方式：post

请求地址：ip:port/api/user/info/address/{addressId}

响应体：

````json
{
  "code": 200,	--响应状态
  "msg": "提交成功",	--响应信息
  "success": true	--响应是否成功
  "data": null
}
````



### 修改默认收件地址

接口描述：修改默认收件地址

请求方式：post

请求地址：ip:port/api/user/info/address/default/{addressId}

响应体：

````json
{
  "code": 200,	--响应状态
  "msg": "提交成功",	--响应信息
  "success": true	--响应是否成功
  "data": null
}
````



## 图片相关

### 获取图片

接口描述：根据图片id获取图片

请求方式：get

请求地址：ip:port/api/picture/{pid}

返回体类型：文件流