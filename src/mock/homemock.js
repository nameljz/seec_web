let Mock = require("mockjs")
let dayjs = require("dayjs")
//  /aa拦截
let arr = [{
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-04",
    name: "刘晓全",
    address: "上海市普陀区金沙江路 1517 弄",
  },
  {
    date: "2016-05-01",
    name: "王老虎",
    address: "上海市普陀区金沙江路 1519 弄",
  },
  {
    date: "2016-05-03",
    name: "赵天赐",
    address: "上海市普陀区金沙江路 1516 弄",
  }]
// 请求
Mock.mock("/api/all","get",(options)=>{
    // console.log(options)
    return {
        status:200,
        message:"success",
        tabledata:arr
    }
})
// 增加数据
Mock.mock("/api/add","post",(options)=>{
    // console.log(34,options)
    let body = JSON.parse(options.body)
    // console.log(body)
    body.date = dayjs(new Date(body.date)).format("YYYY-MM-DD");
    // "YYYY-MM-DD"
    arr.push(body)
    let {date,name,address} = body
    return {
        status:200,
        message:"success",
        data:arr
    }
})
// 删除  "/api/delete?index=0"
Mock.mock(/\/api\/delete\?index=\d/,"delete",(options)=>{
    // console.log(43,options)
    // {url: '/api/delete?index=0', type: 'DELETE', body: null}
    let url = options.url
    let index = url.split("=")[1]
    // console.log(index)
    let newarr = arr.splice(index,1)
    // console.log(arr) //删除后的数据
    return {
        status:200,
        message:"删除成功",
        data:arr
    }
})
// 修改
Mock.mock("/api/update","put",(options)=>{
    // console.log(58,options)
    let body = JSON.parse(options.body)
    // console.log(body)
    let {date,name,address,index} = body
    arr[index].date = date
    arr[index].name = name
    arr[index].address = address
    return {
        status:200,
        message:"success",
        data:arr
    }
})