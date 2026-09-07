import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Courses', path: '/courses' },
  { label: 'Events', path: '/events' },
  { label: 'Facility', path: '/facility' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_2px_30px_rgba(13,33,55,0.06)] py-3'
          : 'bg-gradient-to-b from-navy-deep/90 via-navy-deep/60 to-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="logo-mark nav-logo h-12 w-12 shrink-0 rounded-full transition-transform duration-500 group-hover:scale-105">
            <img
              src="/images/rinap-logo.svg"
              alt="RINAP logo"
              className="relative z-10 h-full w-full rounded-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className={`text-base md:text-lg font-extrabold tracking-tight transition-colors duration-300 font-display ${scrolled ? 'text-navy' : 'text-white'}`}>
              RINAP
            </div>
            <div className={`text-[10px] md:text-[11px] font-medium tracking-wide transition-colors duration-300 ${scrolled ? 'text-teal-main' : 'text-white/90'}`}>
              NURSING & PARAMEDICALS
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active
                    ? scrolled
                      ? 'text-teal-deep bg-teal-soft'
                      : 'text-white bg-white/15 backdrop-blur-sm'
                    : scrolled
                      ? 'text-navy-deep hover:text-teal-main hover:bg-stone/60'
                      : 'text-white/95 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
            scrolled ? 'text-navy hover:bg-stone' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 bg-white/95 backdrop-blur-xl border-t border-stone shadow-lg shadow-navy-deep/5">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    active ? 'text-teal-deep bg-teal-soft' : 'text-navy hover:bg-stone hover:text-teal-main'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
