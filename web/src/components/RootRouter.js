import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import {
  extraRoutesShipper,
  extraRoutesSupplierFTL,
  publicRoutes,
  shipperRoutes,
  supplierFTLRoutes,
  supplierPTLRoutes,
} from 'web/src/constants/routes';

import { PrivateRoutes } from 'components/PrivateRoutes';
import { NotFound404Screen } from 'screens/404.screen';

/**
 * @return {*[]}
 */
export const RootRouter = () => {
  switch ('private') {
    case null:
      return (
        <Router>
          {publicRoutes.map((Route, index) => {
            return <Route.Component path={Route.path} key={index.toString()} />;
          })}
          <NotFound404Screen default />
        </Router>
      );

    case 'private':
      return <PrivateRoutes routes={shipperRoutes} extraRoutes={extraRoutesShipper} />;

    case 'private1':
      return <PrivateRoutes routes={supplierFTLRoutes} extraRoutes={extraRoutesSupplierFTL} />;
    case 'private2':
      return <PrivateRoutes routes={supplierPTLRoutes} />;

    default:
      return null;
  }
};
