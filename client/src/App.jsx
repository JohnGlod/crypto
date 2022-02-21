import { Routes, Route } from 'react-router-dom';

import { Layout } from './components';
import { Home, Item, Profile, CreateItem, NotFound } from './pages';
import { RequireAuth } from './hoc/RequireAuth';

const App = () => {
  return (
    <div className='page h-full min-h-max bg-white dark:bg-dark'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='items/:id' element={<Item />} />
          <Route
            path='items/new'
            element={
              <RequireAuth>
                <CreateItem />
              </RequireAuth>
            }
          />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
