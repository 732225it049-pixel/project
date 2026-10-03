import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { AppProvider } from './context/AppContext';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SendMoney from './pages/SendMoney';
import BillPayments from './pages/BillPayments';
import GroupFunds from './pages/GroupFunds';
import CreateGroupFund from './pages/CreateGroupFund';
import FundDetails from './pages/FundDetails';
import TemporaryQR from './pages/TemporaryQR';
import ContributionFlow from './pages/ContributionFlow';
import AIAssistant from './pages/AIAssistant';
import Transactions from './pages/Transactions';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="send" element={<SendMoney />} />
            <Route path="bills" element={<BillPayments />} />
            <Route path="group-funds" element={<GroupFunds />} />
            <Route path="group-funds/create" element={<CreateGroupFund />} />
            <Route path="group-funds/:id" element={<FundDetails />} />
            <Route path="group-funds/:id/qr" element={<TemporaryQR />} />
            <Route path="contribute/:id" element={<ContributionFlow />} />
            <Route path="group-funds/:id/ai" element={<AIAssistant />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
