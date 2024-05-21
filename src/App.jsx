import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DetailMengurai from './pages/DetailMengurai';
import DetailAntara from './pages/DetailAntara';
import DetailLow from './pages/DetailLow';
import DetailTransformasi from './pages/DetailTransformasi';
import DetailPro from './pages/DetailPro';
<<<<<<< HEAD
import DetailUpaya from './pages/DetailUpaya';
import IndrivePage from './pages/IndrivePage';
import GojekPage from './pages/GojekPage'
=======
import DetailUpaya from './pages/DetailUpaya'
import LandingPageLayout from './pages/LandingPageLayout'
>>>>>>> e166c5969c91f0cf1070302e525d63db0fa01c94

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
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
