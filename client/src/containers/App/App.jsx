import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import { RequireAuth } from '../../hoc/RequireAuth';

import { Layout } from '../Layout';
import { CreateItemPage } from '../CreateItemPage';
import { FollowingPage } from '../FollowingPage';
import { HomePage } from '../HomePage';
import { ItemPage } from '../ItemPage';
import { NotFoundPage } from '../NotFoundPage';
import { ProfilePage } from '../ProfilePage';

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
          <Route index element={<HomePage />} />
          <Route
            path='profile'
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          />
          <Route
            path='following'
            element={
              <RequireAuth>
                <FollowingPage />
              </RequireAuth>
            }
          />
          <Route
            path='create'
            element={
              <RequireAuth>
                <CreateItemPage />
              </RequireAuth>
            }
          />
          <Route path='nft/:address/:id' element={<ItemPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
