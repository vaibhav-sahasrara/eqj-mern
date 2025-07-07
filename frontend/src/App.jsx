// import Footer from "./components/Footer";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import CaseBoard from "./pages/CaseBoard";
// import CourtActions from "./components/court/CourtActions";
// // import CourtSection from "./components/court/CourtSection";
// // import PlainLayout from "./components/PlainLayout";


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="login" element={<Login />} />
//           <Route path="court-actions" element={<CourtActions />} />
//           <Route path="case-board" element={<CaseBoard />} />
//           {/* <Route path="/court-section" element={<CourtSection />} /> */}
//           <Route element={<Footer />} />
//         </Route>

//         {/* 🔹 Full-width no-header layout for CaseBoard */}
//         {/* <Route element={<PlainLayout />}>
//           <Route path="/case-board" element={<CaseBoard />} />
//         </Route> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CaseBoard from "./pages/CaseBoard";
import CourtActions from "./components/court/CourtActions";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="court-actions" element={<CourtActions />} />
              <Route path="case-board" element={<CaseBoard />} />
              <Route element={<Footer />} />
            </Route>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
