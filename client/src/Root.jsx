import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MoralisProvider } from 'react-moralis';
import App from './App';

const appId = process.env.REACT_APP_APPID;
const serverUrl = process.env.REACT_APP_SERVER_URL;

export const Root = ({ store }) => (
  <BrowserRouter>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <Provider store={store}>
        <App />
      </Provider>
    </MoralisProvider>
  </BrowserRouter>
);
