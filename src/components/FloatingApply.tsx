import { Link } from 'react-router-dom';
import { Phone, Send } from 'lucide-react';

export default function FloatingApply() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href="tel:+917897900066"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-teal-deep shadow-2xl shadow-navy-deep/15 ring-1 ring-stone transition-all duration-300 hover:-translate-y-1 hover:text-teal-main"
        aria-label="Call RINAP"
      >
        <span className="absolute inset-0 rounded-full bg-teal-main/20 animate-ping-slow" />
        <Phone className="relative h-5 w-5" />
      </a>
      <Link
        to="/contact"
        className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold to-amber-500 px-4 py-3 text-sm font-extrabold text-navy-deep shadow-2xl shadow-gold/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold/50"
      >
        <span className="absolute inset-y-0 -left-10 w-8 rotate-12 bg-white/40 blur-sm transition-all duration-700 group-hover:left-[120%]" />
        <Send className="relative h-4 w-4" />
        <span className="relative hidden sm:inline">Apply</span>
      </Link>
    </div>
  );
}