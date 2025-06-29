import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import PatientList from './components/PatientTable/PatientList';
import CampaignList from './components/Campaign/CampaignList';
import PaymentList from './components/Payment/PaymentList';
import Header from './components/Header';
import OutreachForm from './components/Outreach/OutreachForm';
import DoctorList from './components/DoctorTable/DoctorList';
import AppointmentBooking from './components/Appointment/AppointmentBooking';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import PaymentForm from './components/Payment/PaymentForm';
import DetailsData from './pages/DetailsData';
import NoShowAnalytics from './components/Dashboard/NoShowAnalytics';
import Clinic from './components/Clinics/Clinic';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<Services />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/doctors' element={ <DoctorList/>}/>
         <Route path="/patients" element={<PatientList />} />
        <Route path="/campaigns" element={<CampaignList />} />
        <Route path="/payments" element={<PaymentList />} />
        <Route path="/paymentForm" element={<PaymentForm />} />
        <Route path="/outreach" element={<OutreachForm />} />
        <Route path="/noShow" element={<NoShowAnalytics />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/detailsData" element={<DetailsData />} />
        <Route path="/clinic" element={<Clinic />} />
        <Route path="/appointmentBooking" element={<AppointmentBooking />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
