import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import '@fontsource-variable/inter';
import './index.css';
import App from './components/App';
import ErrorPage from './routes/error-page';
import Root from './routes/root';
import About from './routes/about';
import Leather from './routes/leather';
import Work from './routes/work';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/leather',
        element: <Leather />,
      },
      {
        path: '/work',
        element: <Work />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
