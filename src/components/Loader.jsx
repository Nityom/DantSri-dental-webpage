import { motion } from 'framer-motion';
import './Loader.scss'; // Import styles

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div 
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <p className="loading-text">Loading, please wait...</p>
    </div>
  );
};

export default Loader;
