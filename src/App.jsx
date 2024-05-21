import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import DetailMengurai from './pages/DetailMengurai';
import DetailAntara from './pages/DetailAntara';
import DetailLow from './pages/DetailLow';
import DetailTransformasi from './pages/DetailTransformasi';
import DetailPro from './pages/DetailPro';
import DetailUpaya from './pages/DetailUpaya';
import IndrivePage from './pages/IndrivePage';
import GojekPage from './pages/GojekPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/detailUpaya',
    element: <DetailUpaya />,
  },
  {
    path: '/detailMengurai',
    element: <DetailMengurai />,
  },
  {
    path: '/detailAntara',
    element: <DetailAntara />,
  },
  {
    path: '/detailPro',
    element: <DetailPro />,
  },
  {
    path: '/detailLow',
    element: <DetailLow />,
  },
  {
    path: '/detailTransformasi',
    element: <DetailTransformasi />,
  },
  {
    path: '/indrivePage',
    element: <IndrivePage />,
  },
  {
    path: '/gojekPage',
    element: <GojekPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
