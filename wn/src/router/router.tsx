import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App';
import PhotoList from '../pages/photo/PhotoList';
import { CommonLayout } from '../components/commonLayout';
import PhotoRegist from '../pages/photo/PhotoRegist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/photo/list",
    element: 
    <CommonLayout>
      <PhotoList />
    </CommonLayout>
,
  },
  {
    path: "/photo/regist",
    element: 
    <CommonLayout>
      <PhotoRegist />
    </CommonLayout>,
  },
]);

export default router;