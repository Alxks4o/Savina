import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Index from './routes';
import About from './routes/about';
import Work from './routes/work';
import MovingImage from './routes/movingImage';
import Photography from './routes/photography';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Index />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/work',
      element: <Work />
    },
    {
      path: '/movingimage',
      element: <MovingImage />
    },
    {
      path: '/photography',
      element: <Photography />
    },
    {
      path: '*',
      element: <Index />   
    }
  ],
  {
    basename: '/Savina'
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)