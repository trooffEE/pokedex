import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import './styles/colors.css'
import { Provider } from 'react-redux';
import store from './redux/store';


let renderEntireTree = () => {
  ReactDOM.render(
      <BrowserRouter >
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    document.getElementById('root')
  );
}

store.getState()

renderEntireTree(store.getState());

serviceWorker.unregister();

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});

