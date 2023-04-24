import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import DashHome from "./pages/DashHome";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";
import Notifications from "./pages/Notifications";
import Userlist from "./pages/Admin/Userlist";
import DoctorList from "./pages/Admin/DoctorsList";
import Profile from "./pages/Doctor/Profile";
import BookAppointment from "./pages/BookAppointment";
import Appointments from "./pages/Appointments";
import Appointmentslist from "./pages/Admin/AppointmentsList";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
import Dashboard from "./dashboard/";
import DoctorP1 from "./components/DoctorP/DoctorP1"
import DoctorP2 from "./components/DoctorP/DoctorP2"
import DoctorP3 from "./components/DoctorP/DoctorP3"
import DoctorP4 from "./components/DoctorP/DoctorP4"
import DoctorP5 from "./components/DoctorP/DoctorP5"
import DoctorP6 from "./components/DoctorP/DoctorP6"
import Search from "./components/Search";
import BehaviourT from "./components/BehaviourT/BehaviourT";
import ChildTher from "./components/ChildTher/ChildTher";
import ClinicalT from "./components/ClinicalT/ClinicalT"
import Contact from "./components/Contact/Contact"
import AdminHome from "./pages/Admin/AdminHome";
import OldHome from "./components/Home/Home"
import OurServices from "./components/OurServices/OurServices";
import OurCounsellors from "./components/OurCounsellors/OurCounsellors";

// import Det from "./components/count";
function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <div>
      <BrowserRouter>
        {loading && (
          <div className="spinner-parent">
            <div class="spinner-border" role="status"></div>
          </div>
        )}
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/oldhome"
            element={
                <OldHome/>
            }
          />
          <Route
            path="/search"
            element={
                <Search/>
            }
          />
          <Route
            path="/ourservice"
            element={
                <OurServices/>
            }
          />
          <Route
            path="/contact"
            element={
              // <PublicRoute>
                <Contact/>
              // </PublicRoute>
            }
          />
               <Route path="/profile1" element={<DoctorP1/>} />
                <Route path="/profile2" element={<DoctorP2/>} />
                <Route path="/profile3" element={<DoctorP3/>} />
                <Route path="/profile4" element={<DoctorP4/>} />
                <Route path="/profile5" element={<DoctorP5/>} />
                <Route path="/profile6" element={<DoctorP6/>} />
                <Route path="/bt" element={<BehaviourT/>}/>
                <Route path="/clinical" element={<ClinicalT/>} />
                <Route path="/child" element={<ChildTher/>}/>
                      <Route
            path="/ourcounsellors"
            element={
                <OurCounsellors/>
            }
          />

          <Route
            path="/register"
            element={
                <Register />
            }
          />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashHome />
              </ProtectedRoute>
            }
          />
           <Route
            path="/adhome"
            element={
                <AdminHome />
            }
          />
          <Route
            path="/apply-doctor"
            element={
              <ProtectedRoute>
                <ApplyDoctor />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/dash"
            element={
                <Dashboard />
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/userslist"
            element={
              <ProtectedRoute>
                <Userlist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/appointmentslist"
            element={
              <ProtectedRoute>
                <Appointmentslist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/doctorslist"
            element={
              <ProtectedRoute>
                <DoctorList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctor/profile/:userid"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/book-appointment/:doctorId"
            element={
              <ProtectedRoute>
                <BookAppointment />
              </ProtectedRoute>
            }
          />

          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <Appointments />
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctor/appointments"
            element={
              <ProtectedRoute>
                <DoctorAppointments />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
// module.exports= App;
