import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MoralisProvider } from 'react-moralis';

import {APP_ID, SERVER_URL} from './utils/constants'
import App from './containers/App';

const Root = ({ store }) => (
  <BrowserRouter>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </MoralisProvider>
  </BrowserRouter>
);

export default Root