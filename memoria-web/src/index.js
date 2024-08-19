import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AllDiaries from "./pages/AllDiaries";
import NewDiary from "./pages/NewDiary";
import Diary from "./pages/Diary";
import EditDiary from "./pages/EditDiary";

const router = createBrowserRouter([
  {
    path: '/', element: <App/>, errorElement: <NotFound/>,
    children: [
      {index: true, element: <Home />},
      {path: 'diaries', element: <AllDiaries/>},
      {path: 'diaries/new', element: <NewDiary/>},
      {path: 'diaries/:diaryId', element: <Diary/>},
      {path: 'diaries/:diaryId/edit', element: <EditDiary/>}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
