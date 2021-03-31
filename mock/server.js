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
