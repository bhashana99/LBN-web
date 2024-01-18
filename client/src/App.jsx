import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Jobs from "./pages/Jobs";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import CreateVacancy from "./pages/CreateVacancy";
import UpdateVacancy from "./pages/UpdateVacancy";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route element={<PrivateRoute/>} >
          <Route path="/profile" element={<Profile/>} />
          <Route path="/create-vacancy" element={<CreateVacancy/>} />
          <Route path="/update-vacancy/:id" element={<UpdateVacancy/>} />

        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
