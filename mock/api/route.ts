import type { MockMethod } from 'vite-plugin-mock';
import { routeModel, userModel } from '../model';
const apis: MockMethod[] = [
  {
    url: '/mock/getUserRoutes',
    method: 'post',
    response: (options: Service.MockOption): Service.MockServiceResult => {
      const { userId = undefined } = options.body;

      const routeHomeName: AuthRoute.LastDegreeRouteKey = 'dongtian_fudi';
      console.log(options.body);
      const role = userModel.find(item => item.userId === userId)?.userRole || 'user';
      console.log(`role${role}`);
      // const role =
      const filterRoutes = routeModel[role];
      console.log(`filterRoutes${filterRoutes}`);
      return {
        code: 200,
        message: 'ok',
        data: {
          routes: filterRoutes,
          home: routeHomeName
        }
      };
    }
  },

  {
    url: '/mock/getUserRoutesA',
    method: 'post',
    response: (options: Service.MockOption): Service.MockServiceResult => {
      const { userRole } = options.body;
      const routeHomeName: AuthRoute.LastDegreeRouteKey = 'dongtian_fudi';
      console.log(options.body);
      const userrole = userModel.find(item => item.userRole === userRole)?.userRole || 'user';
      const filterRoutes = routeModel[userrole];
      console.log(`filterRoutes${filterRoutes}`);
      return {
        code: 200,
        message: 'ok',
        data: {
          routes: filterRoutes,
          home: routeHomeName
        }
      };
    }
  }
];

export default apis;
