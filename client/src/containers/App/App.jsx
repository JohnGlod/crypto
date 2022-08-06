import { Routes, Route } from 'react-router-dom';
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
