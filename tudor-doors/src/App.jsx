import React, { Suspense, lazy } from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import Footer from "./Components/Footer/footer";
import Nav from "./Components/Nav/Nav";
import NavBar from "./Components/Navbar/NavBar";
import Loader from "./Components/Loader/loader";
import ScrollToTop from "./Components/scrolltotop";

// Lazy-loaded pages

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About us/About"));
const Catalogue = lazy(() => import("./pages/Catalogue/Catalogue"));
const Services = lazy(() => import("./pages/Services/Services"));
const Team = lazy(() => import("./pages/Our team/Our Team"));
const Contact = lazy(() => import("./pages/Contact us/Contact us"));
const Blog = lazy(() => import("./pages/Blog/blog"));

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Nav />

    

        <Routes>
          
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" exact element={<Suspense fallback={<Loader />}>  <Home/></Suspense>}/>
          <Route path="/about" exact element={<Suspense fallback={<Loader />}>  <About/></Suspense>}/>
          <Route path="/catalogue" exact element={<Suspense fallback={<Loader />}>  <Catalogue/></Suspense>}/>
          <Route path="/services" exact element={<Suspense fallback={<Loader />}>  <Services/></Suspense>}/>
          <Route path="/team" exact element={<Suspense fallback={<Loader />}>  <Team/></Suspense>}/>
          <Route path="/contact" exact element={<Suspense fallback={<Loader />}>  <Contact/></Suspense>}/>
          <Route path="/blog" exact element={<Suspense fallback={<Loader />}>  <Blog/></Suspense>}/>
        </Routes>
      <Footer />


    </>
  );
}

export default App;
