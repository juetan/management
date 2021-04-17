import Mock from "mockjs";

Mock.setup({
  timeout: 2000,
});
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

Mock.mock("/login", "post", (options) => {
  const data = JSON.parse(options.body);
  const username = data.username;
  if (username === "juetan") {
    return {
      code: 2000,
      message: "登录成功，即将跳转首页",
      token: "www.juetan.cn",
    };
  } else {
    return {
      code: 4000,
      message: "登录失败，请检查用户名和密码！",
    };
  }
});
