import Mock from "mockjs";

Mock.mock("/example", "get", {
  code: 2000,
  message: "成功请求到数据",
  "data|35": [
    {
      "id|+1": 1,
      name: "@cname",
      poster: "@dataImage",
      number: "equi-@first",
      type: "@range(1,5)",
    },
  ],
});

Mock.mock("/table", "get", {
  code: 2000,
  message: "数据返回成功",
  "data|80": [
    {
      "id|+1": 1,
      name: "@cname",
      poster: "https://www.juetan.cn/project/72.html",
      number: "equip-@first",
      spec: "ws-@last",
      type: "@natural(1,3)",
      status: "@natural(1,3)",
      manufacturer: "@cname",
      buyDate: "@date",
      mark: "无",
    },
  ],
});
