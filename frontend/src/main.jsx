import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import{
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom'

import Index from './routes';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Index/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)