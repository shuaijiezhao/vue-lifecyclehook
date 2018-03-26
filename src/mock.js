// let url = 'http://rapapi.org/mockjsdata/23334/index/hotList'
// axios 异步资源请求
// let axios = require('axios')

// axios.post(url, {
// 	pageNum: 1,
// 	pageSize: 10
// }).then(res => {
// 	console.log(res.data.lists)
// })


// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))