// Packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Files/Components
import '@fontsource-variable/inter';
import './index.css';
import App from './components/App';
import ErrorPage from './routes/error-page';
import About from './routes/about';
import Leather from './routes/leather';
import Work from './routes/work';
import Header from './components/Header';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <>
          <Header />
          <AnimatePresence>
            <Outlet />
          </AnimatePresence>
        </>
      }
    >
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path='/leather' element={<Leather />} />
      {/* TODO: Add a 'work' route */}
      <Route path='/*' element={<App />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
