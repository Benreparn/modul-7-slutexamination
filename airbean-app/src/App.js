import './App.css';
import { Routes, Route } from 'react-router-dom';

import SplashPage from './views/SplashPage';
import OrderPage from './views/OrderPage';
import MenuPage from './views/MenuPage';
import ErrorPage from './views/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <SplashPage /> } exact />
      <Route path="/menu" element={ <MenuPage /> } />
      <Route path="/order" element={ <OrderPage /> } />
      <Route path="*" element={ <ErrorPage /> } />
    </Routes>
  );
}

export default App;
