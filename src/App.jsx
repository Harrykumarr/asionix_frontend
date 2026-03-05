import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Outsourcing from './pages/Outsourcing';
import Login from './pages/Login';
import Register from './pages/Register';

// Service Pages
import AiMlTraining from './pages/services/AiMlTraining';
import AndroidDevelopment from './pages/services/AndroidDevelopment';
import BrandManagement from './pages/services/BrandManagement';
import PaymentGateway from './pages/services/PaymentGateway';
import CicdFramework from './pages/services/CicdFramework';
import CloudTraining from './pages/services/CloudTraining';
import ContentWriting from './pages/services/ContentWriting';
import CyberSecurity from './pages/services/CyberSecurity';
import DataScienceTraining from './pages/services/DataScienceTraining';
import DevopsTraining from './pages/services/DevopsTraining';
import EmailMarketing from './pages/services/EmailMarketing';
import ErpFramework from './pages/services/ErpFramework';
import FlutterDevelopment from './pages/services/FlutterDevelopment';
import FullstackTraining from './pages/services/FullstackTraining';
import IphoneDevelopment from './pages/services/IphoneDevelopment';
import MachineLearning from './pages/services/MachineLearning';
import NodejsDevelopment from './pages/services/NodejsDevelopment';
import Odoo from './pages/services/Odoo';
import PhpDevelopment from './pages/services/PhpDevelopment';
import PpcServices from './pages/services/PpcServices';
import ReactNative from './pages/services/ReactNative';
import ReactjsDevelopment from './pages/services/ReactjsDevelopment';
import Salesforce from './pages/services/Salesforce';
import SapAbap from './pages/services/SapAbap';
import SapBasis from './pages/services/SapBasis';
import SapFico from './pages/services/SapFico';
import SapMm from './pages/services/SapMm';
import SapS4hana from './pages/services/SapS4hana';
import SapSd from './pages/services/SapSd';
import Seo from './pages/services/Seo';
import SocialMediaMarketing from './pages/services/SocialMediaMarketing';
import VfxAnimation from './pages/services/VfxAnimation';
import WordpressDevelopment from './pages/services/WordpressDevelopment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="outsourcing" element={<Outsourcing />} />

          {/* Services routes */}
          <Route path="services/ai-ml-training" element={<AiMlTraining />} />
          <Route path="services/android-development" element={<AndroidDevelopment />} />
          <Route path="services/brand-management" element={<BrandManagement />} />
          <Route path="services/payment-gateway" element={<PaymentGateway />} />
          <Route path="services/cicd-framework" element={<CicdFramework />} />
          <Route path="services/cloud-training" element={<CloudTraining />} />
          <Route path="services/content-writing" element={<ContentWriting />} />
          <Route path="services/cyber-security" element={<CyberSecurity />} />
          <Route path="services/data-science-training" element={<DataScienceTraining />} />
          <Route path="services/devops-training" element={<DevopsTraining />} />
          <Route path="services/email-marketing" element={<EmailMarketing />} />
          <Route path="services/erp-framework" element={<ErpFramework />} />
          <Route path="services/flutter-development" element={<FlutterDevelopment />} />
          <Route path="services/fullstack-training" element={<FullstackTraining />} />
          <Route path="services/iphone-development" element={<IphoneDevelopment />} />
          <Route path="services/machine-learning" element={<MachineLearning />} />
          <Route path="services/nodejs-development" element={<NodejsDevelopment />} />
          <Route path="services/odoo" element={<Odoo />} />
          <Route path="services/php-development" element={<PhpDevelopment />} />
          <Route path="services/ppc-services" element={<PpcServices />} />
          <Route path="services/react-native" element={<ReactNative />} />
          <Route path="services/reactjs-development" element={<ReactjsDevelopment />} />
          <Route path="services/salesforce" element={<Salesforce />} />
          <Route path="services/sap-abap" element={<SapAbap />} />
          <Route path="services/sap-basis" element={<SapBasis />} />
          <Route path="services/sap-fico" element={<SapFico />} />
          <Route path="services/sap-mm" element={<SapMm />} />
          <Route path="services/sap-s4hana" element={<SapS4hana />} />
          <Route path="services/sap-sd" element={<SapSd />} />
          <Route path="services/seo" element={<Seo />} />
          <Route path="services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="services/vfx-animation" element={<VfxAnimation />} />
          <Route path="services/wordpress-development" element={<WordpressDevelopment />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
