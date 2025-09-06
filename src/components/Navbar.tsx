import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            onClick={closeMobileMenu}
            aria-label="Kalam NGO Home"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <img 
                src="/ngo_icon/ngo_icon.jpg" 
                alt="Kalam NGO Logo" 
                className="w-10 h-10 rounded-full object-cover border-2 border-primary-100"
              />
              <div>
                <div className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-primary-600" : "text-primary-600"
                }`}>
                  Kalam
                </div>
                <span className={`text-xs transition-colors duration-300 ${
                  isScrolled ? "text-gray-600" : "text-gray-600"
                } block`}>
                  Ek Swakchik Sanstha
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
                  location.pathname === item.path
                    ? "text-primary-600 bg-primary-50"
                    : isScrolled
                    ? "text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                }`}
                aria-current={
                  location.pathname === item.path ? "page" : undefined
                }
              >
                <span className="relative z-10">{item.name}</span>

                {/* Hover underline effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Active indicator */}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2 border border-gray-200"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`block px-4 py-3 font-medium transition-all duration-300 rounded-lg mx-2 ${
                        location.pathname === item.path
                          ? "text-primary-600 bg-primary-50 border-l-4 border-primary-600"
                          : "text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                      }`}
                      aria-current={
                        location.pathname === item.path ? "page" : undefined
                      }
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
