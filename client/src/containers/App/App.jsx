import React from 'react';
import { Routes, Route } from 'react-router-dom';


import { RequireAuth } from '../../hoc/RequireAuth';
import { Layout } from '../Layout';
import {
  Home,
  Item,
  Profile,
  CreateItem,
  NotFound,
  Following,
} from '../../pages';

const App = () => {
  return (
    <div className='page h-full min-h-max bg-white dark:bg-dark'>
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
            path='items/new'
            element={
              <RequireAuth>
                <CreateItem />
              </RequireAuth>
            }
          />
          <Route path='items/:id' element={<Item />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
