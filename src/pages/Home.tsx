import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  GraduationCap,
  Users,
  Award,
  Stethoscope,
  HeartPulse,
  BookOpen,
  CheckCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Building2,
  ShieldCheck,
  MapPin,
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const heroSlides = [
  {
    id: 1,
    image: '/images/kling_20260907_IMAGE_Create_a_c_3916_0.jpg',
    alt: 'Ram Nihora Institute Banner',
  },
  {
    id: 2,
    image: '/images/course.jpeg',
    alt: 'Ram Nihora Institute Courses',
  },
  {
    id: 3,
    image: '/images/_Promotion.jpg',
    alt: 'Ram Nihora Institute Admissions Promotion',
  },
];

const stats = [
  { label: 'Years of Excellence', value: 18, suffix: '+', icon: Award },
  { label: 'Students Trained', value: 3000, suffix: '+', icon: Users },
  { label: 'Faculty Members', value: 45, suffix: '+', icon: GraduationCap },
  { label: 'Programs Offered', value: 6, suffix: '', icon: BookOpen },
];

const features = [
  {
    icon: Stethoscope,
    title: 'Clinical Excellence',
    desc: 'Hands-on training in real hospital settings with modern medical technology.',
  },
  {
    icon: HeartPulse,
    title: 'Compassionate Care',
    desc: 'Nurturing students to become caring, ethical healthcare professionals.',
  },
  {
    icon: Sparkles,
    title: 'Research & Innovation',
    desc: 'Active faculty engagement in research and academic advancement.',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <main>
      {/* Hero Section - Fullscreen Image Slider */}
      <section
        className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-[#071724]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fullscreen Slider Container */}
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center select-none"
                />
                {/* Subtle dark gradient overlay at top and bottom to ensure navbar & controls readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-transparent to-navy-deep/70 pointer-events-none" />
              </div>
            );
          })}

          {/* Slider Arrows */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-navy-deep/60 hover:bg-teal-deep/90 border border-white/20 hover:border-gold text-white flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-navy-deep/60 hover:bg-teal-deep/90 border border-white/20 hover:border-gold text-white flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
          </button>

          {/* Navigation Indicators & Apply Button Overlay */}
          <div className="absolute bottom-8 md:bottom-12 inset-x-0 z-20 flex flex-col items-center gap-4 pointer-events-none">
            {/* Apply Now Button */}
            <div className="pointer-events-auto">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-gold via-amber-400 to-amber-500 hover:from-amber-400 hover:to-gold text-navy-deep px-8 md:px-10 py-3.5 md:py-4 rounded-full text-base md:text-lg font-extrabold shadow-[0_10px_35px_rgba(201,162,39,0.5)] hover:shadow-[0_15px_45px_rgba(201,162,39,0.7)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 border border-white/40"
              >
                Apply Now <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </div>

            {/* Dot Indicators */}
            <div className="pointer-events-auto flex items-center gap-2 bg-navy-deep/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'w-8 bg-gold shadow-[0_0_12px_rgba(201,162,39,0.9)]'
                      : 'w-2.5 bg-white/40 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Ribbon */}
      <section className="relative z-20 overflow-hidden bg-teal-deep text-white shadow-lg shadow-navy-deep/10" aria-label="Admission announcement">
        <div className="marquee-track flex w-max items-center gap-10 py-3 text-sm font-semibold tracking-wide">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} className="flex items-center gap-3 whitespace-nowrap text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_rgba(201,162,39,0.9)]" />
              Admission Open 2026-27
              <span className="text-gold">Call 7897900066</span>
            </span>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative mt-12 mx-auto max-w-6xl px-5 md:px-8 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="effect-card bg-white rounded-2xl shadow-xl shadow-navy-deep/5 p-6 md:p-7 border border-stone/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <stat.icon className="w-7 h-7 text-teal-main mb-3" />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} className="block text-2xl md:text-3xl font-extrabold text-navy font-display" />
              <div className="text-xs md:text-sm text-navy/50 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About RINAP Overview Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden mt-8 border-b border-stone/80">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-soft/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-teal-soft text-teal-deep px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-teal-main animate-pulse" />
                About Ram Nihora Institute (RINAP)
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
                Pioneering Excellence in <span className="text-teal-main">Nursing & Paramedicals</span>
              </h2>

              <p className="text-navy/70 text-base md:text-lg leading-relaxed">
                <strong>Ram Nihora Institute of Nursing and Paramedicals (RINAP)</strong>, established in <strong>2008</strong>, is one of Uttar Pradesh's premier institutions dedicated to producing highly skilled, compassionate, and ethical healthcare professionals. Approved by the <strong>Indian Nursing Council (INC)</strong> and affiliated with the <strong>Uttar Pradesh State Medical Faculty</strong>.
              </p>

              {/* Highlight Pillars */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-cream rounded-2xl border border-stone/80 flex items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-teal-main text-white flex items-center justify-center shrink-0 shadow-md">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">INC & Govt. Approved</h4>
                    <p className="text-xs text-navy/60 mt-0.5">Approved by Indian Nursing Council & UP State Medical Faculty.</p>
                  </div>
                </div>

                <div className="p-4 bg-cream rounded-2xl border border-stone/80 flex items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-gold text-navy-deep flex items-center justify-center shrink-0 shadow-md">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">152-Bed Hospital Tie-Up</h4>
                    <p className="text-xs text-navy/60 mt-0.5">Clinical training at Vineeta Hospital with Cath Lab & ICUs.</p>
                  </div>
                </div>

                <div className="p-4 bg-cream rounded-2xl border border-stone/80 flex items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-navy-deep text-white flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Prime Highway Location</h4>
                    <p className="text-xs text-navy/60 mt-0.5">Phaphamau, Prayagraj-Lucknow National Highway (NH-24B).</p>
                  </div>
                </div>

                <div className="p-4 bg-cream rounded-2xl border border-stone/80 flex items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-teal-deep text-white flex items-center justify-center shrink-0 shadow-md">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">36+ Cashless Panels</h4>
                    <p className="text-xs text-navy/60 mt-0.5">Empanelled with Central & State Govt & corporate TPAs.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-main to-teal-deep hover:from-teal-deep hover:to-navy-deep text-white px-7 py-3 rounded-full text-sm font-bold shadow-lg shadow-teal-main/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Learn More About Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 bg-stone/70 hover:bg-stone text-navy px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                >
                  Explore Programs
                </Link>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-main to-gold rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
                <div className="relative bg-white p-3 rounded-[2.2rem] shadow-2xl shadow-navy-deep/10 border border-stone/60">
                  <img
                    src="/images/RINAP.jpg"
                    alt="RINAP Campus & Ceremony"
                    className="w-full h-[360px] md:h-[420px] object-cover rounded-[1.8rem] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-navy-deep/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-gold uppercase tracking-wider">Ram Nihora Institute</div>
                        <div className="text-sm font-semibold text-white">Shaping Healthcare Excellence Since 2008</div>
                      </div>
                      <span className="bg-teal-main text-[11px] font-bold px-2.5 py-1 rounded-lg uppercase">Prayagraj</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="/images/about-institute.jpg" alt="Campus" className="w-full rounded-[2.5rem] shadow-2xl shadow-navy-deep/10 object-cover h-[420px] md:h-[480px]" />
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-gradient-to-br from-teal-deep to-teal-main rounded-2xl p-6 shadow-2xl shadow-teal-deep/20 max-w-[200px]">
              <div className="text-3xl font-extrabold text-white font-display">2008</div>
              <div className="text-sm text-white/80">Established & Growing</div>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-teal-main text-xs font-bold uppercase tracking-[0.15em] mb-4">
              <span className="w-5 h-[1px] bg-teal-main" />
              About Our Institute
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Building Tomorrow's <span className="text-teal-main">Healthcare Leaders</span>
            </h2>
            <p className="text-navy/60 leading-relaxed mb-6">
              Ram Nihora Institute of Nursing and Paramedicals (RINAP) was established in 2008. Approved by the Indian Nursing Council (INC) and affiliated with the Uttar Pradesh State Medical Faculty, we have grown into one of the region's most trusted institutions for nursing and paramedical education.
            </p>
            <p className="text-navy/60 leading-relaxed mb-8">
              Our campus is strategically located on the Bypass Road in Prayagraj, easily accessible by rail and road, providing students with an ideal environment for focused study and clinical practice.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Approved by Indian Nursing Council (INC)',
                'Affiliated to Uttar Pradesh State Medical Faculty',
                'ISO 9001:2015 Certified Hospital & Institute',
                'Modern clinical facilities & simulation labs',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-navy/70">
                  <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 text-teal-deep font-semibold hover:text-teal-main transition-colors group">
              Read Our Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-cream to-white" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-soft/40 rounded-full -translate-y-1/3 translate-x-1/4 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-teal-main text-xs font-bold uppercase tracking-[0.15em] mb-4">
              <span className="w-5 h-[1px] bg-teal-main" />
              Our Programs
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">World-Class <span className="text-teal-main">Programs</span></h2>
            <p className="text-navy/50">Comprehensive nursing and paramedical courses designed to prepare students for dynamic roles in the healthcare sector.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'ANM', name: 'Auxiliary Nursing Midwifery', duration: '2 Years', eligibility: 'Intermediate Passed In Any Subject', icon: GraduationCap },
              { title: 'GNM', name: 'General Nursing Midwifery', duration: '2 Years', eligibility: 'Intermediate Passed In Any Subject', icon: HeartPulse },
              { title: 'DOT', name: 'Diploma in Occupational Therapy', duration: '2 Years', eligibility: 'Intermediate Passed In Science', icon: Stethoscope },
            ].map((course) => (
              <Link key={course.title} to="/courses" className="group bg-white rounded-3xl p-8 shadow-lg shadow-navy-deep/5 border border-stone/60 hover:shadow-2xl hover:-translate-y-1.5 hover:border-teal-main/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-soft to-transparent rounded-full -translate-y-1/2 translate-x-1/4 transition-transform duration-500 group-hover:scale-[2.5]" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-main to-teal-deep flex items-center justify-center shadow-lg shadow-teal-main/20 mb-6">
                    <course.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy font-display mb-1">{course.title}</h3>
                  <p className="text-sm text-navy/40 font-medium mb-4">{course.name}</p>
                  <div className="space-y-2 text-sm text-navy/60">
                    <div className="flex justify-between"><span>Duration</span> <span className="font-semibold text-navy">{course.duration}</span></div>
                    <div className="flex justify-between"><span>Eligibility</span> <span className="font-semibold text-navy text-xs">{course.eligibility}</span></div>
                  </div>
                  <div className="mt-6 pt-5 border-t border-stone flex items-center gap-2 text-sm font-semibold text-teal-main group-hover:text-teal-deep transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Preview */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-navy-deep via-[#0d1e30] to-navy-deep relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-main/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-teal-muted text-xs font-bold uppercase tracking-[0.15em] mb-4">
              <span className="w-5 h-[1px] bg-teal-muted" />
              Our Leaders
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Meet Our <span className="text-gold">Faculty</span></h2>
            <p className="text-white/40">Highly qualified professionals with deep clinical and academic expertise guiding every student.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Bindu Vishwakarma', role: 'Director', img: '/images/faculty-director.jpg', desc: 'A visionary leader with decades of experience in nursing education and clinical practice.' },
              { name: 'Dr. Vineeta Vishwakarma', role: 'Managing Director', img: '/images/faculty-md.jpg', desc: 'Passionate about shaping healthcare education with modern, student-centered approaches.' },
              { name: 'Ms. Divyani Dubey', role: 'Principal', img: '/images/faculty-principal.jpg', desc: 'Dedicated to fostering an inclusive and empowering learning environment.' },
            ].map((person) => (
              <Link key={person.name} to="/faculty" className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-navy-deep/20">
                <div className="relative mb-6">
                  <img src={person.img} alt={person.name} className="w-full h-[260px] object-cover rounded-2xl shadow-lg" />
                  <div className="absolute bottom-3 left-3 bg-gradient-to-r from-teal-main to-teal-deep rounded-full px-3 py-1 text-xs font-bold text-white shadow-lg">
                    {person.role}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white font-display mb-1">{person.name}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{person.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-gold group-hover:text-white transition-colors">
                  View Profile <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-3xl p-8 shadow-xl shadow-navy-deep/5 border border-stone/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-light to-gold/30 flex items-center justify-center mb-6">
                  <f.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-navy font-display mb-3">{f.title}</h3>
                <p className="text-sm text-navy/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Admission Banner */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-main/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Admission Open <span className="text-gold">2026-27</span></h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Begin your journey in nursing and paramedical sciences. Our doors are open for aspiring healthcare professionals who are ready to make a difference.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-amber-500 hover:from-amber-500 hover:to-amber-600 text-navy-deep px-9 py-4 rounded-full text-base font-extrabold shadow-2xl shadow-gold/30 hover:shadow-gold/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]">
            Apply Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
