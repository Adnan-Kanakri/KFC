import { Navigate, useRoutes } from 'react-router-dom';

const GenerateRoutes = (structure: any) => {
  const {
    isAuthenticated = false,
    anonymousStructure = {},
    authorizedStructure = {},
    unAuthorizedStructure = {},
    userRole = 'admin',
  } = structure || {};

  const dynamicRoutes = [];
  if (authorizedStructure) {
    dynamicRoutes.push(
      ...routesGenerator(
        isAuthenticated,
        authorizedStructure,
        'authorized',
        isAuthenticated ? userRole : null,
      ),
    );
  }

  return useRoutes(dynamicRoutes);
};

/**
 * path: string
 * component: React.Component
 * routeProps: Object -----> To override route props
 * userRole: string -----> To override route props
 * redirectPath: String ----> To redirect to specific location
 * showRouteIf: to override when to show the component or when to [ Navigate ]
 */
const routesGenerator = (
  isAuthenticated: boolean = false,
  routeSet: any = {},
  type: string = 'anonymous',
  userRole: any,
) => {
  const generatedRoutes: Array<any> = [];
  const { fallbackPath = '' } = routeSet || {};
  const isAnonymous = type === 'anonymous';
  const isAuthorized = type === 'authorized';
  if (routeSet?.routes) {
    const routes = routeSet.routes;
    if (Array.isArray(routes) && routes.length > 0) {
      routes.forEach((route /*index*/) => {
        const {
          path = '',
          permittedRole = '',
          redirectPath = '',
          showRouteIf = true,
        } = route || {};
        if (showRouteIf) {
          if (path) {
            if (isAuthorized) {
              const renderCondition = isAuthorized
                ? isAuthenticated
                : !isAuthenticated;

              if (Array.isArray(route.path)) {
                route.path.map((path: any) => {
                  generatedRoutes.push(
                    renderCondition
                      ? userRole.indexOf(permittedRole) > -1
                        ? {
                          element: route.element,
                          path: path,
                          permittedRole: route.permittedRole ?? 'admin',
                        }
                        : {
                          path: path,
                          element: routeSet.unAuthorizedComponent,
                        }
                      : {
                        path: path,
                        element: (
                          <Navigate
                            to={redirectPath || fallbackPath}
                            replace
                          />
                        ),
                      },
                  );
                });
              } else {
                generatedRoutes.push(
                  renderCondition
                    ? userRole.indexOf(permittedRole) > -1
                      ? route
                      : {
                        path: route.path,
                        element: routeSet.unAuthorizedComponent,
                      }
                    : {
                      path: route.path,
                      element: (
                        <Navigate to={redirectPath || fallbackPath} replace />
                      ),
                    },
                );
              }

              return generatedRoutes;
            }
            const renderCondition = isAuthorized
              ? isAuthenticated
              : !isAuthenticated;
            if (Array.isArray(route.path)) {
              route.path.map((path: any) => {
                generatedRoutes.push(
                  renderCondition
                    ? {
                      element: route.element,
                      path: path,
                      permittedRole: route.permittedRole,
                    }
                    : {
                      path: path,
                      element: (
                        <Navigate to={redirectPath || fallbackPath} replace />
                      ),
                    },
                );
              });
            } else {
              generatedRoutes.push(
                renderCondition
                  ? route
                  : {
                    path: route.path,
                    element: (
                      <Navigate to={redirectPath || fallbackPath} replace />
                    ),
                  },
              );
            }

            return generatedRoutes;
          }
        }
      });
    }
  } else {
    console.log(`[routes] prop can't be found in ${type}Structure Object`);
  }
  return generatedRoutes;
};

export default GenerateRoutes;
