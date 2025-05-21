import './App.scss';

// React Router
import { Routes, Route } from 'react-router-dom';

// Helmet for SEO
import { HelmetProvider } from 'react-helmet-async';

// React
import { lazy, Suspense } from 'react';

// Components
import Loader from './components/Loader';
import NotFound from './pages/NotFound';

// Lazy-loaded Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ContactPage = lazy(() => import('./pages/Contact/Contactus'));

function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/singleservice" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
