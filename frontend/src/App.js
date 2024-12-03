import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // use Routes and Route for v6
import Home from "./pages/Home";
import AddCustomer from "./pages/AddCustomer";
import AddDestination from "./pages/AddDestination";
import AddTravelPackage from "./pages/AddTravelPackage";
import BookPackage from "./pages/BookPackage";
import EditAgent from "./pages/EditAgent";
import TravelAgents from "./pages/TravelAgents";
import ViewDestination from "./pages/ViewDestination";
import ViewPackage from "./pages/ViewPackage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include Navbar for all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/add-destination" element={<AddDestination />} />
        <Route path="/add-travel-package" element={<AddTravelPackage />} />
        <Route path="/book-package" element={<BookPackage />} />
        <Route path="/edit-agent/:id" element={<EditAgent />} />
        <Route path="/travel-agents" element={<TravelAgents />} />
        <Route path="/view-destination/:id" element={<ViewDestination />} />
        <Route path="/view-package/:id" element={<ViewPackage />} />
      </Routes>
      <Footer /> {/* Include Footer for all pages */}
    </Router>
  );
};

export default App;
