import React from 'react';
import { initialUrl } from '../shared/constant';
import { errorPagesConfigs } from './errorPages';
import HomePage from './homepage';
import ProductDetails from './product-details';


const authorizedStructure = {
  fallbackPath: '/homePage',
  unAuthorizedComponent: <></>,
  routes: [
    {
      path: '/homePage',
      element: HomePage,
    },
    {
      path: '/product/:id',
      element: ProductDetails,
    },
  ],
};

const unAuthorizedStructure = {
  fallbackPath: initialUrl,
};

const anonymousStructure = {
  routes: errorPagesConfigs.concat([
    {
      path: '*',
      element: <div />,
    },
  ]),
};

export { authorizedStructure, unAuthorizedStructure, anonymousStructure };
