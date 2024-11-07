import React,{Suspense,lazy} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
const Home = lazy(() => import('./pages/Home'));
import RouterLoader from './components/Loader/RouterLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { path: '', element: <Home/> }
    ]
  }
])

function App() {

  return (
    <>
    <Suspense fallback={<RouterLoader/>}>
      <RouterProvider router={router}/>
    </Suspense>
    </>
  )
}

export default App
