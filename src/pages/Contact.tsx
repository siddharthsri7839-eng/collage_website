import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="pt-20">
      <section className="relative h-[420px] md:h-[480px] overflow-hidden bg-gradient-to-br from-teal-deep via-[#0d2a3e] to-navy-deep flex items-center">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">Contact <span className="text-gold">Us</span></h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl">Reach out for admissions, inquiries, or to schedule a campus visit.</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">Get in Touch</h2>
              <p className="text-navy/50 leading-relaxed mb-8">
                Whether you are a prospective student, parent, or healthcare partner, we are here to assist. Reach us through any of our contact channels below.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a href="mailto:ramnihorainstitute05@gmail.com" className="bg-white rounded-2xl p-6 shadow-lg shadow-navy-deep/5 border border-stone/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <Mail className="w-6 h-6 text-teal-main mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-navy text-sm mb-1">Email</h4>
                <p className="text-xs text-navy/40">ramnihorainstitute05@gmail.com</p>
              </a>
              <a href="tel:+917897900066" className="bg-white rounded-2xl p-6 shadow-lg shadow-navy-deep/5 border border-stone/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <Phone className="w-6 h-6 text-teal-main mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-navy text-sm mb-1">Phone</h4>
                <p className="text-xs text-navy/40">7897900066, 9389190710</p>
              </a>
            </div>

            <div className="bg-gradient-to-br from-teal-deep to-navy-deep rounded-[2rem] p-8 text-white shadow-2xl shadow-teal-deep/10">
              <h3 className="font-display text-xl font-bold mb-5">Visit Our Campus</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">10-3B Bypass Road, Phaphamau, Prayagraj, Uttar Pradesh</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm text-white/70">Mon - Sat: 9:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-navy-deep/5 border border-stone/50">
            <h3 className="font-display text-2xl font-bold text-navy mb-2">Send a Message</h3>
            <p className="text-sm text-navy/40 mb-8">We typically respond within 24 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-navy/50 uppercase tracking-wider mb-2">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-stone border border-stone text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal-main/20 focus:border-teal-main transition-all placeholder:text-navy/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-navy/50 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-stone border border-stone text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal-main/20 focus:border-teal-main transition-all placeholder:text-navy/20"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-navy/50 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-stone border border-stone text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal-main/20 focus:border-teal-main transition-all placeholder:text-navy/20 resize-none"
                  placeholder="Your inquiry..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-main to-teal-deep hover:from-teal-deep hover:to-navy-deep text-white py-4 rounded-2xl font-bold shadow-xl shadow-teal-main/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
              >
                {sent ? <><CheckCircle className="w-5 h-5" /> Message Sent</> : <><Send className="w-4 h-4" /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
