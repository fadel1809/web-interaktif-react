import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DetailMengurai from './pages/DetailMengurai';
import DetailAntara from './pages/DetailAntara';
import DetailLow from './pages/DetailLow';
import DetailTransformasi from './pages/DetailTransformasi';
import DetailPro from './pages/DetailPro';
import DetailUpaya from './pages/DetailUpaya'
import LandingPageLayout from './pages/LandingPageLayout'
import GojekPage from './pages/GojekPage'
import IndrivePage from './pages/IndrivePage'
import GrabPage from './pages/GrabPage'
import MaximPage from './pages/MaximPage'

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
  {
    path: '/maximPage',
    element: <MaximPage />,
  },
  {
    path: '/grabPage',
    element: <GrabPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
