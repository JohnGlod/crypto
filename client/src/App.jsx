import { Routes, Route} from 'react-router-dom';

import { Layout } from './components';
import {Home, Item, Profile, CreateItem, NotFound} from './pages';
;


const App = () => {
  return (
    <div className='page h-full min-h-max'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile/>} />
          <Route path='item' element={<Item/>}/>
          <Route path='create-item' element={<CreateItem/>}/>
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
};

export default App;
