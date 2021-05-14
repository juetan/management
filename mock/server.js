import Mock from "mockjs";

// MOCKJS配置
Mock.setup({
  // 延迟返回数据
  timeout: 800,
});

// 表格数据
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

// 登录请求
Mock.mock("/login", "post", (options) => {
  const data = JSON.parse(options.body);
  const username = data.username;
  const password = data.password;
  // 管理账号
  if (username === "admin" && password === "admin") {
    return {
      code: 2000,
      message: "登录成功，即将跳转首页",
      token: "user_admin_token",
    };
  } else if (username === "juetan" && password === "juetan") {
    // 编辑账号
    return {
      code: 2000,
      message: "登录成功，即将跳转首页",
      token: "user_juetan_token",
    };
  } else {
    return {
      code: 4000,
      message: "登录失败，请检查用户名和密码！",
    };
  }
});

// 用户信息
Mock.mock("/userinfo", "post", (options) => {
  const data = JSON.parse(options.body);
  const token = data.token;
  if (token === "user_admin_token") {
    return {
      code: 2000,
      message: "数据请求成功",
      data: {
        username: "admin",
        description: "风",
        avatar: "https://avatars.githubusercontent.com/u/36595085?v=4",
        role: ["admin"],
      },
    };
  } else if (token === "user_juetan_token") {
    return {
      code: 2000,
      message: "数据请求成功",
      data: {
        username: "绝弹",
        description: "鱼塘里的鱼",
        avatar: "https://avatars.githubusercontent.com/u/36595085?v=4",
        role: ["editor"],
      },
    };
  }
});
