import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import ProfileModal from './ProfileModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ProfileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex-shrink-0 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                    alt="Profile"
                    className="h-10 w-10 rounded-full object-cover border-2 border-primary"
                  />
                  <span className="text-2xl font-bold text-primary">
                    Ayoub
                  </span>
                </div>
              </motion.div>
              <div className="ml-4 hidden md:block">
                <div className="text-sm text-text/70">
                  <Typewriter
                    options={{
                      strings: ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 50,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#contact" className="nav-link">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-text">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background">
              <a href="#home" className="mobile-nav-link">Home</a>
              <a href="#about" className="mobile-nav-link">About</a>
              <a href="#projects" className="mobile-nav-link">Projects</a>
              <a href="#contact" className="mobile-nav-link">Contact</a>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}