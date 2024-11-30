import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import AdminRoute from './components/AdminRoute.jsx';
import UserScreen from './screens/UserScreen.jsx';

import AcceptableUsePolicy from './screens/AcceptableUsePolicy.jsx';
import DMCANoticeTakeDownPolicy from './screens/DMCANoticeTakeDownPolicy.jsx';
import SecurityPrivacyPolicy from './screens/SecurityPrivacyPolicy.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>
      <Route path='' element={<AdminRoute />}>
        <Route path='/users' element={<UserScreen />} />
      </Route>
      <Route path='/AcceptableUsePolicy' element={<AcceptableUsePolicy />} />
      <Route path='/DMCANoticeTakeDownPolicy' element={<DMCANoticeTakeDownPolicy />} />
      <Route path='/SecurityPrivacyPolicy' element={<SecurityPrivacyPolicy />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
