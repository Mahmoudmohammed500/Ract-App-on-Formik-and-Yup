import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Root from './Components/Root';
import Categories from './Pages/Categories';
import NewCollections from './Pages/NewCollections';
import Login from './Pages/Login';
import Register from './Pages/Register';


const routes = createBrowserRouter([
  {
    path: "/", element: <Root />,
  //  errorElement: <Errorpage />,
    children: [
      { index: true, element: <Home /> },
      { path: "categories", element: <Categories /> },
      { path: "newcollections", element: <NewCollections /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> }
    ]
  }
]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
