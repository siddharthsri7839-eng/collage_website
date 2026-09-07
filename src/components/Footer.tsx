import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-teal-main via-gold to-teal-main w-full" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="logo-mark footer-logo h-14 w-14 shrink-0 rounded-full">
                <img
                  src="/images/rinap-logo.svg"
                  alt="RINAP logo"
                  className="relative z-10 h-full w-full rounded-full object-contain"
                />
              </div>
              <div className="leading-tight">
                <div className="text-xl font-extrabold tracking-tight font-display">RINAP</div>
                <div className="text-[10px] font-medium tracking-wider text-teal-muted">NURSING & PARAMEDICALS</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Shaping the future of healthcare with excellence in nursing and paramedical education since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Faculty', path: '/faculty' },
                { label: 'Courses', path: '/courses' },
                { label: 'Events', path: '/events' },
                { label: 'Facility', path: '/facility' },
                { label: 'Contact', path: '/contact' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-white/50 hover:text-gold text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Programs</h4>
            <ul className="space-y-3">
              {[
                'ANM - Auxiliary Nursing Midwifery',
                'GNM - General Nursing Midwifery',
                'DOT - Diploma in Occupational Therapy',
                'DPT - Diploma in Physiotherapy',
                'CBNCC',
                'DOPT',
              ].map((course) => (
                <li key={course}>
                  <span className="text-white/50 text-sm">{course}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm leading-relaxed">
                  10-3B Bypass Road, Phaphamau, Prayagraj U.P.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span className="text-white/50 text-sm">7897900066, 9389190710</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span className="text-white/50 text-sm">ramnihorainstitute05@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">Mon - Sat: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <span>© 2026 Ram Nihora Institute of Nursing and Paramedicals (RINAP). All rights reserved.</span>
          <span>Designed with care for students.</span>
        </div>
      </div>
    </footer>
  );
}
