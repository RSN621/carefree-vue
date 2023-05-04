import { /* axiosRequest */ mockRequest, axiosRequest } from '../request';

/**
 * 获取验证码
 * @param phone - 手机号
 * @returns - 返回boolean值表示是否发送成功
 */
export function fetchSmsCode(phone: string) {
  return mockRequest.post<boolean>('/getSmsCode', { phone });
}

/**
 * 登录
 * @param userName - 用户名
 * @param password - 密码
 */
export function fetchLogin(userName: string, password: string) {
  return axiosRequest.post<ApiAuth.Token>('/user/login', { userName, password });
  // return mockRequest.post<ApiAuth.Token>('/login', { userName, password });
}

/** 获取用户信息 */
export function fetchUserInfo() {
  return axiosRequest.get<ApiAuth.UserInfo>('/user/getUserInfo');
  // return mockRequest.get<ApiAuth.UserInfo>('/getUserInfo');
}

/**
 * 获取用户路由数据
 * @param userId - 用户id
 * @description 后端根据用户id查询到对应的角色类型，并将路由筛选出对应角色的路由数据返回前端
 */
export function fetchUserRoutes(userId: string) {
  return axiosRequest.post<ApiRoute.Route>('/user/getUserRoutes', { userId });
}
type RoleType = keyof typeof import('@/enum').EnumUserRole;

export function fetchUserRoutesA(userRole: RoleType) {
  return mockRequest.post<ApiRoute.Route>('/getUserRoutesA', { userRole });
}

/**
 * 刷新token
 * @param refreshToken
 */
export function fetchUpdateToken(refreshToken: string) {
  return mockRequest.post<ApiAuth.Token>('/updateToken', { refreshToken });
}
