import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout/Layout';
import Login from './pages/Login';
import Home from './pages/Home'
import News from './pages/News';
import InvestmentPartner from './pages/InvestmentPartner';
import Recommend from './pages/Recommend';
import Settings from './pages/Settings';
import EditProfile from './pages/EditProfile';
import ChangePassword from './pages/ChangePassword';
import InvestmentQuestion from './pages/InvestmentQuestion';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import TermsConditions from './pages/TermsConditions';
import AuthLayout from './components/Layout/AuthLayout';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/investment-partner" element={<InvestmentPartner />} />
            <Route path="/recommendation" element={<Recommend />} />
            <Route path="/settings">
              <Route index element={<Settings />} />
              <Route path="edit-profile" element={<EditProfile />} />
              <Route path="change-password" element={<ChangePassword />} />
              <Route path="investment-questionnaire" element={<InvestmentQuestion />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="terms-conditions" element={<TermsConditions />} />
            </Route>
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
