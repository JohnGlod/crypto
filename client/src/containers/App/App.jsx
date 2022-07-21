import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import { RequireAuth } from '../../hoc/RequireAuth';

import { Layout } from '../';

import {
  Item,
  Home,
  CreateItem,
  NotFound,
  Profile,
  Settings,
  Following,
} from '../../pages';

const App = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem('connectorId');
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path='profile'
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path='following'
            element={
              <RequireAuth>
                <Following />
              </RequireAuth>
            }
          />
          <Route
            path='create'
            element={
              <RequireAuth>
                <CreateItem />
              </RequireAuth>
            }
          />
          <Route
            path='settings'
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />
          <Route path='nft/:address/:id' element={<Item />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
