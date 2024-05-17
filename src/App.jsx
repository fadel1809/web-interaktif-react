import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import DetailMengurangi from './pages/DetailMengurangi';
import DetailAntara from './pages/DetailAntara';
import DetailLow from './pages/DetailLow';
import DetailTransformasi from './pages/DetailTransformasi';
import DetailPro from './pages/DetailPro';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/detailMengurangi',
    element: <DetailMengurangi />,
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
