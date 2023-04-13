import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App';
import PhotoList from '../pages/photo/PhotoList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/photo",
    element: <PhotoList />,
  },
]);

export default router;