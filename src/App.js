import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader'; // Import animated loader component
import NotFound from './pages/NotFound'; // Import NotFound component

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contactus = lazy(() => import('./pages/Contact/Contactus'));

function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/singleservice" element={<Services />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="*" element={<NotFound />} /> {/* Not Found Route */}
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
