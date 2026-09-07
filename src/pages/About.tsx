import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  CheckCircle,
  Stethoscope,
  HeartPulse,
  Activity,
  ShieldCheck,
  Building2,
  MapPin,
  Clock,
  Truck,
  Sparkles,
  Search,
  ArrowRight,
  Microscope,
  PhoneCall,
  Bed,
  Heart,
  UserCheck,
  Zap,
} from 'lucide-react';

interface EmpanelledOrg {
  id: number;
  name: string;
  category: 'govt' | 'insurance';
  badge: string;
  desc?: string;
}

const empanelledData: EmpanelledOrg[] = [
  { id: 1, name: 'C.G.H.S. (Central Government Health Scheme)', category: 'govt', badge: 'Central Govt' },
  { id: 2, name: 'E.C.H.S. (Ex-Contributory Health Scheme)', category: 'govt', badge: 'Defense Services' },
  { id: 3, name: 'CRPF (Central Reserve Police Force)', category: 'govt', badge: 'Paramilitary' },
  { id: 4, name: 'R.A.F. (Rapid Action Force)', category: 'govt', badge: 'Paramilitary' },
  { id: 5, name: 'BSF (Border Security Force)', category: 'govt', badge: 'Paramilitary' },
  { id: 6, name: 'ITBP (Indo Tibetan Border Police)', category: 'govt', badge: 'Paramilitary' },
  { id: 7, name: 'SSB (Sashastra Seema Bal)', category: 'govt', badge: 'Paramilitary' },
  { id: 8, name: 'NSG (National Security Guard)', category: 'govt', badge: 'Special Forces' },
  { id: 9, name: 'AR (Assam Rifles)', category: 'govt', badge: 'Paramilitary' },
  { id: 10, name: 'CISF (Central Industrial Security Force)', category: 'govt', badge: 'Paramilitary' },
  { id: 11, name: 'N.H.A (National Health Authority)', category: 'govt', badge: 'Govt Body' },
  { id: 12, name: 'Ayushman Bharat Cashless Scheme', category: 'govt', badge: 'Cashless Scheme' },
  { id: 13, name: 'Pt. Deen Dayal Upadhyay Rajya Karmchari Cashless Scheme', category: 'govt', badge: 'UP State Govt' },
  { id: 14, name: 'N.C.R. (North Central Railway)', category: 'govt', badge: 'Indian Railways' },
  { id: 15, name: 'E.S.I.C. (Employee State Insurance Corporation)', category: 'govt', badge: 'Statutory Body' },
  { id: 16, name: 'B.S.N.L (Bharat Sanchar Nigam Limited)', category: 'govt', badge: 'PSU' },
  { id: 17, name: 'L.I.C. (Life Insurance Corporation Of India)', category: 'govt', badge: 'PSU Insurance' },
  { id: 18, name: 'A.U.C.H.S (Allahabad University Contributory Health Scheme)', category: 'govt', badge: 'Central University' },
  { id: 19, name: 'M.N.N.I.T (Motilal Nehru National Institute Of Technology)', category: 'govt', badge: 'Institute of Eminence' },
  { id: 20, name: 'Uttar Pradesh Power Corporation Limited (UPPCL)', category: 'govt', badge: 'State PSU' },
  { id: 21, name: 'Uttar Pradesh Vidyut Utpadan Nigam Limited (UPRVUNL)', category: 'govt', badge: 'State PSU' },
  { id: 22, name: 'Dedicated Health Care Services T.P.A. (India) Private Limited', category: 'insurance', badge: 'TPA' },
  { id: 23, name: 'Medi Assist Insurance T.P.A. Private Limited', category: 'insurance', badge: 'TPA' },
  { id: 24, name: 'Apollo Munich Health Insurance Company', category: 'insurance', badge: 'Health Insurance' },
  { id: 25, name: 'E-Meditek Insurance T.P.A. Limited', category: 'insurance', badge: 'TPA' },
  { id: 26, name: 'Paramount Health Services T.P.A. Private Limited', category: 'insurance', badge: 'TPA' },
  { id: 27, name: 'MD India Health Services T.P.A. Private Limited', category: 'insurance', badge: 'TPA' },
  { id: 28, name: 'Raksha T.P.A. Private Limited', category: 'insurance', badge: 'TPA' },
  { id: 29, name: 'Future Generali India Insurance Company Limited', category: 'insurance', badge: 'Insurance' },
  { id: 30, name: 'Care Health Insurance', category: 'insurance', badge: 'Health Insurance' },
  { id: 31, name: 'Heritage Health T.P.A. Private Limited', category: 'insurance', badge: 'TPA' },
  { id: 32, name: 'S.B.I. General Insurance', category: 'insurance', badge: 'General Insurance' },
  { id: 33, name: 'Cholamandalam Insurance', category: 'insurance', badge: 'General Insurance' },
  { id: 34, name: 'Niva Bupa Health Insurance', category: 'insurance', badge: 'Health Insurance' },
  { id: 35, name: 'Star Health and Allied Insurance', category: 'insurance', badge: 'Health Insurance' },
  { id: 36, name: 'Ericson Insurance T.P.A. Private Limited', category: 'insurance', badge: 'TPA' },
];

const milestones = [
  { year: '2008', title: 'RINAP Established', desc: 'Ram Nihora Institute of Nursing & Paramedicals founded with a mission to deliver world-class healthcare education.' },
  { year: '2010', title: 'INC & State Approval', desc: 'Accredited by Indian Nursing Council (INC) & affiliated with Uttar Pradesh State Medical Faculty.' },
  { year: '2015', title: 'Super Specialty Expansion', desc: 'Clinical tie-up with Vineeta Hospital Pvt. Ltd., adding state-of-the-art modular OTs and Cath Lab.' },
  { year: '2019', title: 'ISO 9001:2015 & QCI Approval', desc: 'Achieved ISO quality benchmarks & Quality Council of India recognition for excellence in hospital care.' },
  { year: '2026', title: 'Present & Beyond', desc: '152-bedded multi-super specialty infrastructure, 36+ cashless empanelments, and top-tier clinical training.' },
];

export default function About() {
  const [filterCategory, setFilterCategory] = useState<'all' | 'govt' | 'insurance'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEmpanelled = useMemo(() => {
    return empanelledData.filter((item) => {
      const matchesCat = filterCategory === 'all' || item.category === filterCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(item.id).includes(searchQuery);
      return matchesCat && matchesSearch;
    });
  }, [filterCategory, searchQuery]);

  return (
    <main className="pt-20 bg-cream">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-deep via-[#0b2436] to-navy-deep py-20 md:py-28 text-white">
        {/* Glow & Pattern Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-main/15 rounded-full blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '36px 36px' }}
        />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5 mb-6 text-xs md:text-sm font-medium text-white/90">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>Est. 2008 &bull; INC Approved &bull; ISO 9001:2015 Certified</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              About <span className="text-gold">RINAP</span> &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-muted via-white to-gold-light">
                Vineeta Hospital
              </span>
            </h1>
            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8">
              Pioneering excellence in medical education and super-specialty healthcare on the sacred banks of River Ganga in Prayagraj, Uttar Pradesh.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#rinap-section"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-[#e0b838] text-navy-deep px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-gold/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Institute <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#hospital-section"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
              >
                Vineeta Hospital <Building2 className="w-4 h-4 text-teal-muted" />
              </a>
              <a
                href="#empanelment-section"
                className="inline-flex items-center gap-2 bg-teal-main/30 border border-teal-muted/30 hover:bg-teal-main/50 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
              >
                36+ Empanelled Schemes <ShieldCheck className="w-4 h-4 text-gold" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Strip */}
      <section className="bg-white border-y border-stone/80 py-6">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-stone/80">
            <div className="p-2">
              <div className="text-2xl md:text-3xl font-extrabold text-navy font-display">2008</div>
              <div className="text-xs md:text-sm text-navy/60 font-medium mt-1">Established Year</div>
            </div>
            <div className="p-2">
              <div className="text-2xl md:text-3xl font-extrabold text-teal-main font-display">INC &amp; UP State</div>
              <div className="text-xs md:text-sm text-navy/60 font-medium mt-1">Govt. Recognitions</div>
            </div>
            <div className="p-2">
              <div className="text-2xl md:text-3xl font-extrabold text-navy font-display">152 Beds</div>
              <div className="text-xs md:text-sm text-navy/60 font-medium mt-1">Multi Super Specialty Hospital</div>
            </div>
            <div className="p-2">
              <div className="text-2xl md:text-3xl font-extrabold text-gold font-display">36+</div>
              <div className="text-xs md:text-sm text-navy/60 font-medium mt-1">Cashless &amp; Corporate Panels</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: RAM NIHORA INSTITUTE (RINAP) */}
      <section id="rinap-section" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-teal-main text-xs font-bold uppercase tracking-[0.18em]">
                <span className="w-6 h-[2px] bg-teal-main" />
                Ram Nihora Institute of Nursing and Paramedicals
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
                Shaping the Next Generation of <span className="text-teal-main">Healthcare Leaders</span>
              </h2>

              <p className="text-navy/80 text-base md:text-lg leading-relaxed">
                <strong>Ram Nihora Institute of Nursing and Paramedicals (RINAP)</strong> was established in <strong>2008</strong> with a visionary mandate to empower healthcare education. It is approved by the <strong>Indian Nursing Council (INC)</strong> and affiliated with the <strong>Uttar Pradesh State Medical Faculty</strong>.
              </p>

              <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone/80 shadow-lg shadow-navy-deep/5 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-soft flex items-center justify-center shrink-0 text-teal-main">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg">Prime Campus Location</h3>
                    <p className="text-navy/70 text-sm mt-1 leading-relaxed">
                      The campus of Ram Nihora Institute of Nursing and Paramedicals – RINAP is located along the <strong>Bypass Road (Prayagraj-Lucknow National Highway), Phaphamau, Uttar Pradesh</strong>. The Institute can be reached with great ease either by <strong>rail</strong> or by <strong>road</strong>.
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-stone" />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center shrink-0 text-gold">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg">Our Noble Mission</h3>
                    <p className="text-navy/70 text-sm mt-1 leading-relaxed">
                      The mission of RINAP is to contribute to the nation and society at the <strong>highest international levels of excellence</strong> and to stand on the same scaffold with other universities of eminence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Features Pill Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-stone shadow-sm">
                  <CheckCircle className="w-5 h-5 text-teal-main shrink-0" />
                  <span className="text-sm font-semibold text-navy">Approved by Indian Nursing Council (INC)</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-stone shadow-sm">
                  <CheckCircle className="w-5 h-5 text-teal-main shrink-0" />
                  <span className="text-sm font-semibold text-navy">Affiliated to UP State Medical Faculty</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-stone shadow-sm">
                  <CheckCircle className="w-5 h-5 text-teal-main shrink-0" />
                  <span className="text-sm font-semibold text-navy">Extensive Hands-on Hospital Training</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-stone shadow-sm">
                  <CheckCircle className="w-5 h-5 text-teal-main shrink-0" />
                  <span className="text-sm font-semibold text-navy">Modern Smart Classrooms &amp; Labs</span>
                </div>
              </div>
            </div>

            {/* Right Image Display with RINAP.jpg */}
            <div className="lg:col-span-5">
              <div className="relative group">
                {/* Glow Background */}
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-main via-gold to-teal-deep rounded-[2.5rem] opacity-30 blur-xl group-hover:opacity-50 transition duration-500" />
                
                <div className="relative bg-white p-3 md:p-4 rounded-[2.2rem] shadow-2xl shadow-navy-deep/15 border border-white">
                  <div className="relative overflow-hidden rounded-[1.8rem] aspect-[4/3] bg-navy-deep">
                    <img
                      src="/images/RINAP.jpg"
                      alt="Ram Nihora Institute of Nursing and Paramedicals Lamp Lighting & Oath Taking Ceremony"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Badge on Image */}
                    <div className="absolute bottom-4 left-4 right-4 bg-navy-deep/85 backdrop-blur-md text-white p-3.5 rounded-2xl border border-white/10 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gold font-bold uppercase tracking-wider">RINAP Heritage</div>
                          <div className="text-sm font-bold text-white font-display">Lamp Lighting &amp; Oath Taking Ceremony</div>
                        </div>
                        <span className="px-2.5 py-1 bg-teal-main text-[11px] font-bold rounded-lg uppercase">Phaphamau</span>
                      </div>
                    </div>
                  </div>

                  {/* Supporting Information Box under Image */}
                  <div className="mt-4 p-4 bg-cream rounded-2xl border border-stone text-xs text-navy/70 leading-relaxed flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-teal-main animate-pulse" />
                      <span className="font-semibold text-navy">RINAP Campus &amp; Clinical Centre</span>
                    </div>
                    <span className="text-navy/50 font-medium">NH-24B Prayagraj-Lucknow</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: VINEETA HOSPITAL PVT. LTD. (PARENT SUPER SPECIALTY HOSPITAL) */}
      <section id="hospital-section" className="py-20 md:py-28 bg-gradient-to-b from-white to-cream border-t border-stone/80">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 text-teal-main text-xs font-bold uppercase tracking-[0.18em] mb-3">
              <span className="w-6 h-[2px] bg-teal-main" />
              Parent Super Specialty Hospital
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
              Vineeta Hospital Pvt. Ltd.
            </h2>
            <p className="text-navy/70 text-base md:text-lg mt-3">
              One of its kind, super specialty hospital of Prayagraj situated at the banks of holy Ganga River at Phaphamau, on the Prayagraj-Lucknow National Highway, Uttar Pradesh, India.
            </p>
          </div>

          {/* Hospital Stats Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            <div className="bg-white p-6 rounded-3xl border border-stone shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-teal-soft flex items-center justify-center text-teal-main mb-4">
                <Bed className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-navy font-display">152 Beds</div>
              <div className="text-sm font-semibold text-teal-main mt-0.5">100 Operational &bull; 52 Non-Op</div>
              <p className="text-xs text-navy/60 mt-2">Comprehensive inpatient and outpatient capacity with intensive care backup.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold mb-4">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-navy font-display">ISO 9001:2015</div>
              <div className="text-sm font-semibold text-navy mt-0.5">QCI Approved Hospital</div>
              <p className="text-xs text-navy/60 mt-2">Certified quality management systems and high-standard clinical safety protocols.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 mb-4">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-navy font-display">Cardiac Cath Lab</div>
              <div className="text-sm font-semibold text-red-600 mt-0.5">ICCU &amp; DM Cardiology Team</div>
              <p className="text-xs text-navy/60 mt-2">24/7 Angiography, Angioplasty, CABG, Stent Implantation &amp; Valve Replacement.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-navy font-display">24/7 Care</div>
              <div className="text-sm font-semibold text-blue-600 mt-0.5">Emergency &bull; Trauma &bull; Pharmacy</div>
              <p className="text-xs text-navy/60 mt-2">Round the clock emergency, road traffic accident care, ambulance, and medicine store.</p>
            </div>
          </div>

          {/* Detailed Hospital Information Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Card 1: Super Specialty Treatments & Surgeries */}
            <div className="bg-white rounded-3xl p-7 md:p-8 border border-stone shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-soft flex items-center justify-center text-teal-main">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy font-display">Super Specialties &amp; Surgery</h3>
                  <p className="text-xs text-navy/50">Comprehensive surgical &amp; clinical disciplines</p>
                </div>
              </div>

              <ul className="space-y-2.5 text-sm text-navy/75">
                {[
                  'Neuro Surgery & Spine Procedures',
                  'Orthopedic & Joint Replacement Surgery',
                  'Laparoscopic Surgery & Minimal Invasive Procedures',
                  'Lithotripsy Procedure in Modular Operation Theatres',
                  'General Medicine & Emergency Medicines',
                  'Obstetrics & Gynecology (Obstetrical care & Deliveries)',
                  'Pediatrics, Pediatric Surgery & Neonatology',
                  'Ophthalmology & ENT Specialist Care',
                  'Respiratory Medicine & Nephrology with Dialysis',
                  'Oncology (Chemotherapy) and Oncosurgery',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-main shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Special Laser Treatment Callout */}
              <div className="mt-6 p-4 rounded-2xl bg-teal-soft/60 border border-teal-muted/40">
                <div className="flex items-center gap-2 text-teal-deep font-bold text-xs uppercase tracking-wider mb-1">
                  <Zap className="w-4 h-4 text-gold" /> Advanced Laser Equipment
                </div>
                <p className="text-xs text-navy/80 leading-relaxed">
                  Specialized laser treatment for <strong>fissure, fistula, and hemorrhoids</strong>. Advanced <strong>Laser Cosmetic Gynecology</strong> procedures performed with high precision.
                </p>
              </div>
            </div>

            {/* Card 2: Cardiac, Intensive Care & 24/7 Emergency */}
            <div className="bg-white rounded-3xl p-7 md:p-8 border border-stone shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy font-display">Cardiac, ICUs &amp; Emergency</h3>
                  <p className="text-xs text-navy/50">Life-saving intensive facilities</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-navy/75">
                <div className="p-4 bg-cream rounded-2xl border border-stone">
                  <h4 className="font-bold text-navy text-xs uppercase tracking-wider text-teal-main mb-2">
                    Cath Lab &amp; Cardiac Care
                  </h4>
                  <p className="text-xs text-navy/80 leading-relaxed mb-2">
                    Advanced Cath Lab (Cardiac &amp; Vascular) with fully equipped ICCU for:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Angiography', 'Angioplasty (Blocked Artery)', 'CABG', 'Stent Implantation', 'PTCA', 'Valve Replacement'].map((t, i) => (
                      <span key={i} className="text-[11px] bg-white px-2.5 py-1 rounded-md border border-stone text-navy/80 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-teal-deep font-semibold mt-2.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold" /> 24-hour Heart Emergency under DM Cardiology Team
                  </p>
                </div>

                <div className="p-4 bg-cream rounded-2xl border border-stone">
                  <h4 className="font-bold text-navy text-xs uppercase tracking-wider text-teal-main mb-2">
                    Multi-Tier Intensive Care Units
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-navy">
                    <div className="bg-white p-2 rounded-xl border border-stone text-center">ICU (Intensive Care)</div>
                    <div className="bg-white p-2 rounded-xl border border-stone text-center">ICCU (Cardiac Care)</div>
                    <div className="bg-white p-2 rounded-xl border border-stone text-center">Surgical ICU (SICU)</div>
                    <div className="bg-white p-2 rounded-xl border border-stone text-center">NICU (Neonatal Care)</div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-navy/80">
                  <li className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-teal-main" /> 24/7 Road traffic accident &amp; trauma emergency
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-main" /> 24-hour Medical store (Pharmacy) on-premises
                  </li>
                  <li className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-teal-main" /> Dialysis facilities for kidney disease patients
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Advanced Diagnostic & Investigation Facilities */}
            <div className="bg-white rounded-3xl p-7 md:p-8 border border-stone shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
                  <Microscope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy font-display">Diagnostic &amp; Investigations</h3>
                  <p className="text-xs text-navy/50">All diagnostic facilities under one roof</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-navy/75">
                <div className="p-3.5 bg-cream rounded-2xl border border-stone">
                  <div className="text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-teal-main" /> Radiology &amp; Imaging
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {['CT Scan', 'Digital X-Ray', 'Ultra Sonography (USG)', '2-D Echo Color Doppler'].map((d, idx) => (
                      <span key={idx} className="bg-white px-2 py-1 rounded-md border border-stone text-navy/80 font-medium">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 bg-cream rounded-2xl border border-stone">
                  <div className="text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Microscope className="w-3.5 h-3.5 text-teal-main" /> Fully Automatic Pathology Lab
                  </div>
                  <ul className="grid grid-cols-1 gap-1 text-xs text-navy/80">
                    <li>&bull; Hematology Analyzer (Cell Counter)</li>
                    <li>&bull; Biochemical Analyzer</li>
                    <li>&bull; Electrolyte Analyzer</li>
                    <li>&bull; Hormone Analyzer &amp; A.B.G. Analyzer</li>
                    <li>&bull; Molecular PFT &amp; Biopsy Facilities</li>
                  </ul>
                </div>

                <div className="p-3.5 bg-cream rounded-2xl border border-stone">
                  <div className="text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <HeartPulse className="w-3.5 h-3.5 text-teal-main" /> Cardiopulmonary Testing
                  </div>
                  <p className="text-xs text-navy/80">
                    Twelve Channel ECG and computerized Stress Testing Machine (TMT) for real-time cardiac evaluations.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Hospital Management & Team Info Strip */}
          <div className="mt-12 bg-gradient-to-r from-teal-deep to-navy-deep rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-4 h-4" /> Multidisciplinary Healthcare Governance
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-display">
                Managed by Specialists, Super Specialists &amp; Professional Leadership
              </h3>
              <p className="text-white/70 text-sm max-w-2xl">
                The Hospital is managed by a team of specialist &amp; super specialist doctors, qualified paramedical staff, Chartered Accountants, and healthcare administrators.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-deep px-6 py-3 rounded-full text-sm font-bold shadow-lg transition-all"
              >
                Contact Hospital Desk <PhoneCall className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: EMPANELLED SCHEMES & CORPORATE TIE-UPS (36 ORGANIZATIONS) */}
      <section id="empanelment-section" className="py-20 md:py-28 bg-stone/40 border-t border-stone">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-teal-main text-xs font-bold uppercase tracking-[0.18em] mb-3">
              <span className="w-6 h-[2px] bg-teal-main" />
              Empanelled Organizations &amp; Cashless Schemes
              <span className="w-6 h-[2px] bg-teal-main" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
              36+ Recognized Partners &amp; Insurance Panels
            </h2>
            <p className="text-navy/70 text-sm md:text-base mt-3">
              Vineeta Hospital Pvt. Ltd. has been empanelled by numerous Central &amp; State Government schemes, Paramilitary &amp; Defense forces, Public Sector Undertakings, and leading Health Insurance / TPA companies to provide seamless cashless treatments.
            </p>
          </div>

          {/* Search and Category Filters */}
          <div className="bg-white p-4 md:p-6 rounded-3xl border border-stone shadow-lg mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              
              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setFilterCategory('all')}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                    filterCategory === 'all'
                      ? 'bg-teal-main text-white shadow-md'
                      : 'bg-stone text-navy/70 hover:bg-stone/80'
                  }`}
                >
                  All Panels ({empanelledData.length})
                </button>
                <button
                  onClick={() => setFilterCategory('govt')}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                    filterCategory === 'govt'
                      ? 'bg-teal-main text-white shadow-md'
                      : 'bg-stone text-navy/70 hover:bg-stone/80'
                  }`}
                >
                  Govt &amp; Defense (21)
                </button>
                <button
                  onClick={() => setFilterCategory('insurance')}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                    filterCategory === 'insurance'
                      ? 'bg-teal-main text-white shadow-md'
                      : 'bg-stone text-navy/70 hover:bg-stone/80'
                  }`}
                >
                  Insurance &amp; TPAs (15)
                </button>
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-navy/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search scheme or insurer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs md:text-sm bg-stone/50 border border-stone rounded-full focus:outline-none focus:border-teal-main focus:bg-white transition-all text-navy"
                />
              </div>

            </div>
          </div>

          {/* Empanelled Grid Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {filteredEmpanelled.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-2xl border border-stone shadow-sm hover:shadow-md hover:border-teal-main/30 transition-all duration-300 flex items-start gap-3.5 group"
              >
                <div className="w-8 h-8 rounded-xl bg-teal-soft group-hover:bg-teal-main group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 font-display font-bold text-sm text-teal-deep">
                  {item.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-main bg-teal-soft/80 px-2 py-0.5 rounded-md">
                      {item.badge}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-gold shrink-0 opacity-80" />
                  </div>
                  <h4 className="text-sm font-semibold text-navy leading-snug group-hover:text-teal-deep transition-colors">
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {filteredEmpanelled.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-stone">
              <p className="text-navy/50 text-sm">No empanelled scheme matched your search term "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setFilterCategory('all'); }}
                className="mt-3 text-xs font-bold text-teal-main underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* Assuring statement box */}
          <div className="mt-12 text-center p-8 bg-white rounded-3xl border border-stone shadow-sm max-w-3xl mx-auto">
            <Sparkles className="w-8 h-8 text-gold mx-auto mb-3" />
            <h3 className="font-display text-2xl font-bold text-navy">
              Assuring You the Best Medical Care and Services Always and Every Time
            </h3>
            <p className="text-teal-main font-semibold text-base mt-2">
              Wish you good health &bull; Team RINAP &amp; Vineeta Hospital Pvt. Ltd.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4: INSTITUTIONAL MILESTONES TIMELINE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-teal-main text-xs font-bold uppercase tracking-[0.18em] mb-3">
              <span className="w-6 h-[2px] bg-teal-main" />
              Our Journey
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
              Milestones of Growth &amp; Excellence
            </h2>
            <p className="text-navy/70 text-base mt-2">
              From our inception in 2008 to evolving into a premier nursing institute and super specialty hospital in Eastern Uttar Pradesh.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={m.year}
                className="relative bg-cream p-6 rounded-3xl border border-stone hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-teal-main text-white font-display font-extrabold flex items-center justify-center text-sm shadow-md">
                    {idx + 1}
                  </div>
                  <div className="text-xl font-bold text-gold font-display">{m.year}</div>
                  <h3 className="text-base font-bold text-navy">{m.title}</h3>
                  <p className="text-xs text-navy/65 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-teal-deep via-[#0c2a3d] to-navy-deep text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Begin Your Medical Career with RINAP
          </h2>
          <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto mb-8">
            Join Ram Nihora Institute of Nursing and Paramedicals for comprehensive academic training with direct super specialty clinical experience at Vineeta Hospital.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/courses"
              className="bg-gold hover:bg-gold-light text-navy-deep px-8 py-3.5 rounded-full text-sm font-bold shadow-xl transition-all"
            >
              View Nursing &amp; Paramedical Programs
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all"
            >
              Get in Touch with Admissions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
