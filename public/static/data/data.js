export default [
    { title: "首页", path: '/Home/first' },
    { title: "订单管理", path: '/Home/daikuan', cout: [{ name: '贷款订单', path: '/Home/daikuan' }, { name: '转单订单', path: '/Home/zhuandan' }, { name: '保险订单', path: '/Home/baoxian' }] },
    { title: "财务管理", path: '/Home/daikuan', cout: [{ name: '总收入', path: '/Home/daikuan' }, { name: '总支出', path: '/Home/zhuandan' }, { name: '月损亏', path: '/Home/baoxian' }] },
    { title: "组织架构", path: '/Home/daikuan', cout: [{ name: '一级代理', path: '/Home/daikuan' }, { name: '二级代理', path: '/Home/zhuandan' }, { name: '三级代理', path: '/Home/baoxian' }] },
    { title: "数据统计", path: '/Home/daikuan', cout: [{ name: '已完成', path: '/Home/daikuan' }, { name: '未完成', path: '/Home/zhuandan' }, { name: '待审核', path: '/Home/baoxian' }] },
    { title: "商务管理", path: '/Home/daikuan', cout: [{ name: '管理一区', path: '/Home/daikuan' }, { name: '管理二区', path: '/Home/zhuandan' }, { name: '管理三区', path: '/Home/baoxian' }] }
]