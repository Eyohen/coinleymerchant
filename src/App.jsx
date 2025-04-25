import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import NotFoundPage from './pages/NotFoundPage';
import { CartProvider } from './context/CartContext';
import TestCoinley from './pages/TestCoinley';
import QuickDemo from './QuickDemo';
import TestQRCode from './pages/TestQRCode';
import StandaloneTest from './pages/StandaloneTest';
import Register from './pages/Register';
import VerifyEmail from './pages/VerifyEmail';
import RegistrationSuccess from './pages/RegistrationSuccess';


import DashboardLayout from './components/dashboard/DashboardLayout';



import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Payments from './pages/Payments';
import Profile from './pages/Profile';
import Settings from './pages/Settings';





function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Routes>
          <Route path="/standalone" element={<StandaloneTest />} />
          <Route path="/testqrcode" element={<TestQRCode />} />
          <Route path="/quickdemo" element={<QuickDemo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/registration-success" element={<RegistrationSuccess />} />


          {/* 
            Protected routes with dashboard layout  */}

          <Route path="/dashboard" element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          } />

          <Route path="/transactions" element={
            <DashboardLayout>
              <Transactions />
            </DashboardLayout>
          } />

          <Route path="/payments" element={
            <DashboardLayout>
              <Payments />
            </DashboardLayout>
          } />

          <Route path="/profile" element={
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          } />


          <Route path="/settings" element={
            <DashboardLayout>
              <Settings />
            </DashboardLayout>
          } />



          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/test-coinley" element={<TestCoinley />} />
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>

  );
}

export default App;


