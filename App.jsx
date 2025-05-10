import { Routes, Route } from 'react-router-dom';
import SignupForm from './SignupForm';
import LoginPage from './Login';
import HomeLayout from './HomeLayout';
import Services from './Services';

import ServiceDetail from './ServiceDetail';
import PaymentPage from './PaymentPage';
import SuccessPage from './SuccessPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignupForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomeLayout />} />
      
       <Route path="/" element={<Services />} />
        
        <Route path="/services/:serviceName" element={<ServiceDetail />} />
        <Route path="/payment/:serviceName" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}

export default App;




