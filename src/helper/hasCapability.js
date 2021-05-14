import store from "@/store";
import roleConfig from "@/config/role.config.js";

function hasCapability(capability) {
  // 是否有权限(boolean)
  let isCapabilitied = false;
  // 如果需要权限则判断一下权限
  if (capability) {
    // 遍历当前用户角色
    store.state.user.role.forEach((userRole) => {
      // 获取角色的权限表
      const roleCapabilities = roleConfig[userRole];
      // 如果对应的权限在用户权限表上为true则返回true
      if (
        roleCapabilities[capability] &&
        roleCapabilities[capability] === true
      ) {
        isCapabilitied = true;
      }
    });
  } else {
    // 没有声明权限的话默认为公共权限，任何角色都可访问
    isCapabilitied = true;
  }
  return isCapabilitied;
}

export default hasCapability;
