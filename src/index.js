import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './Components/Index/App';
import About from './Components/About/About';
import RegisterPage from './Components/Register'
import registerServiceWorker from './registerServiceWorker';
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './Store/configureStore';
import 'bootstrap/dist/css/bootstrap.css';

const history = createHistory()
const store = configureStore({},history);

ReactDOM.render(
	<Provider store={store}>
			<ConnectedRouter history={history}>
				 <div>
					 <Route exact path="/" component={App}/>
					 <Route path="/about" component={About}/>
					 <Route path="/register" component={RegisterPage}/>
				 </div>
			 </ConnectedRouter>
    </Provider>
	, document.getElementById('root'));
registerServiceWorker();
