// 自动引入指定目录下的.js文件，并返回以文件名为key，文件内容为value的对象
function autoImport(path = "./modules") {
  // path = './modules'
  const moduleFiles = require.context(path, true, /\.js$/);
  // moduleFiles既是函数也是对象，此处作对象调用
  const modules = moduleFiles.keys().reduce((fileModules, modulePath) => {
    // 正则替换，例如将./user.js替换为user
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
    // 此处作函数调用，类似于import
    const module = moduleFiles(modulePath);
    // 将所有模块放在一个数组内
    fileModules[moduleName] = module.default;
    return fileModules;
  }, {});

  return modules;
}

export default autoImport;
