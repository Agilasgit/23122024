import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (item: string) => {
    if (item === 'science') {
      navigate('/science');
    } else {
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button onClick={() => navigate('/')} className="text-2xl font-bold text-white">
              Mendley
            </button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Features', 'Reviews', 'Pricing', 'Science', 'Blog'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item.toLowerCase())}
                className="text-gray-300 hover:text-purple-500 transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('login')}
              className="text-gray-300 hover:text-purple-500 transition-colors text-sm font-medium"
            >
              Login
            </button>
            <button
              onClick={() => handleNavigation('signup')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Start Free Trial
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
            {['Features', 'Reviews', 'Pricing', 'Science', 'Blog', 'Login'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item.toLowerCase())}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-500"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('signup')}
              className="block w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-center mx-2"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
}