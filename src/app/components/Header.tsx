import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

export function Header({ onNavigate, currentPath }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Platforms', path: '/platforms' },
    { label: 'Projects', path: '/projects' },
    { label: 'Traders', path: '/traders' },
    { label: 'Builders', path: '/builders' },
    { label: 'Communities', path: '/communities' },
  ];

  const handleNavigation = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div
              onClick={() => handleNavigation('/')}
              className="font-semibold text-xl text-gray-900 cursor-pointer"
            >
              Predex
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`text-sm cursor-pointer ${
                    currentPath === link.path ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm text-blue-600 hover:text-blue-700 font-medium">
              Submit entry
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`text-sm cursor-pointer py-2 ${
                    currentPath === link.path ? 'text-gray-900 font-medium' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium text-left py-2">
                Submit entry
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}