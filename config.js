// 配置
window.Config = {

    // 站点名
    SiteName: "包子' s Monitor",

    // 站点链接
    SiteUrl: 'https://monitor.bugjava.cn',

    // UptimeRobot Api 域名
    // 只需填写域名部分，默认为官网域名
    // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
    // 详见 https://github.com/yb/uptime-status/ 说明
    ApiDomain: 'monitorapi.bugjava.cn',

    // UptimeRobot Api Keys
    // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
    ApiKeys: [
    'm788116906-07a614a69128fadf372e9d0c',
    'm787156656-e04a7a7c80b5898421238175',
    'm788053251-cacfbbfeffeca935e66211af',
    'm788116879-b556e55b9b32e1b62290638f',
    'm788053244-49fbf168d382c84178afeb88',
    'm788116920-519781a4be82f1932a48641f',
    'm788053176-a744575a41c4d0cdf8247f4a',
  ],

    // 是否显示监测站点的链接
    ShowLink: true,

    // 日志天数
    // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
    // 不过时间不要设置太长，容易卡，接口请求也容易失败
    CountDays: 60,

    // 导航栏菜单
    Navi: [
        {
            text: 'Blog',
            url: 'https://blog.bugjava.cn/'
    },
        {
            text: 'API',
            url: 'https://api.bugjava.cn/',
    }
  ]
};
