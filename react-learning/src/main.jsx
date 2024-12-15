import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Provider } from 'react-redux';
import store from './redux/store/index.js';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)