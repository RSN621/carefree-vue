// 后端接口返回的数据类型

/** 后端返回的用户权益相关类型 */
declare namespace ApiAuth {
  /** 返回的token和刷新token */
  interface Token {
    token: string;
    refreshToken: string;
  }
  /** 返回的用户信息 */
  type UserInfo = Auth.UserInfo;
  /*	export interface ResponseData<T> {
		token: string;
		refreshToken: string;
		userInfo: T;
	} */
}

/** 后端返回的路由相关类型 */
declare namespace ApiRoute {
  /** 后端返回的路由数据类型 */
  interface Route {
    /** 动态路由 */
    routes: AuthRoute.Route[];
    /** 路由首页对应的key */
    home: AuthRoute.AllRouteKey;
  }
}
declare namespace ApiItemManagement {
  interface Item {
    /** 商品id */
    id: string;
    /** 商品名 */
    name: string | null;
    /** 商品介绍 */
    description: string | null;
    /** 商品价格 */
    price: string;
    /** 商品图片路径 */
    image_url: string;
  }
}
