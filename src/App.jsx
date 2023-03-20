import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Experiences from "./pages/Experiences/Experiences";
import Groups from "./pages/Groups/Groups";
import Spaces from "./pages/Spaces/Spaces";
import './App.scss'
import Signin from "./pages/Signin/Signin";
import Layout from "./components/Layout";
import Favorites from "./pages/Favorites/Favorites";
import Signup from "./pages/Signup/Signup";
import CreateGroup from "./pages/CreateGroup/CreateGroup";
import PartnerForm from "./pages/PartnerForm/PartnerForm";
import FormLayout from "./components/FormLayout/FormLayout";
import FormLanding from "./pages/FormLanding/FormLanding";
import SpaceForm from "./pages/SpaceForm/SpaceForm";
import GroupForm from "./pages/GroupForm/GroupForm";
import ExperiencecForm from "./pages/ExperienceForm/ExperiencecForm";
import SpacePage from "./pages/SpacePage/SpacePage";
import BookingDetails from "./pages/BookingDetails/BookingDetails";
import PaymentDetails from "./pages/PaymentDetails/PaymentDetails";
import ConfirmDetails from "./pages/ConfirmDetails/ConfirmDetails";
import BookingLayout from "./components/BookingLayout/BookingLayout";
import BookingForm from "./pages/BookingForm/BookingForm";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/spaces" element={<Spaces />}/>
        <Route path="/experiences" element={<Experiences />}/>
        <Route path="/groups" element={<Groups />}/>
        <Route path="/space/:id" element={<SpacePage />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Route>

      <Route element={<FormLayout />}>
        <Route path="/form-landing" element={<FormLanding />}/>
        <Route path="/partner-form" element={<PartnerForm />}/>
        <Route path="/space-form" element={<SpaceForm />}/>
        <Route path="/experience-form" element={<ExperiencecForm />}/>
        <Route path="/group-form" element={<GroupForm />}/>
      </Route>
      
      <Route path="/booking-form" element={<BookingLayout />}/>

      {/* <Route element={<BookingLayout />}>
        <Route path="/booking-details" element={<BookingDetails />}/>
        <Route path="/payment-details" element={<PaymentDetails />}/>
        <Route path="/confirm-details" element={<ConfirmDetails />}/>
        <Route path="/booking-form" element={<BookingForm />}/>
      </Route> */}

      <Route path="/signin" element={<Signin />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/create-group" element={<CreateGroup />}/>
    </Routes>
  )
}

export default App;
