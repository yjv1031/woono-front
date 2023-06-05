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
    path: "/woono-front/photo/list",
    element: 
    <CommonLayout>
      <PhotoList />
    </CommonLayout>
,
  },
  {
    path: "/woono-front/photo/regist",
    element: 
    <CommonLayout>
      <PhotoRegist />
    </CommonLayout>,
  },
]);

export default router;