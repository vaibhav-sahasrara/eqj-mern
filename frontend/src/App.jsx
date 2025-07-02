import Footer from "./components/Footer";
// import MainContent from './components/MainContent';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* <Navbar /> */}
//       {/* Other content here */}
//       <MainContent/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CaseBoard from "./pages/CaseBoard";
import CourtActions from "./components/court/CourtActions";
// import CourtSection from "./components/court/CourtSection";
import PlainLayout from "./components/PlainLayout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="court-actions" element={<CourtActions />} />
          <Route path="case-board" element={<CaseBoard />} />
          {/* <Route path="/court-section" element={<CourtSection />} /> */}
          <Route element={<Footer />} />
        </Route>

        {/* 🔹 Full-width no-header layout for CaseBoard */}
        {/* <Route element={<PlainLayout />}>
          <Route path="/case-board" element={<CaseBoard />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
