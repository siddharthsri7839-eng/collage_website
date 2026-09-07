import { Building2, Stethoscope, Monitor, Microscope, HeartPulse, ShieldCheck } from 'lucide-react';

const facilities = [
  { icon: Building2, title: 'Modern Classrooms', desc: 'Spacious, well-lit classrooms equipped with modern teaching aids, projectors, and comfortable seating designed for interactive learning.' },
  { icon: Stethoscope, title: 'Clinical Labs', desc: 'Fully equipped clinical simulation labs where students practice nursing procedures in a safe, supervised environment before clinical rotations.' },
  { icon: Monitor, title: 'Computer Labs', desc: 'State-of-the-art computer facilities with internet access, allowing students to access digital resources, research, and online learning platforms.' },
  { icon: Microscope, title: 'Science Labs', desc: 'Advanced science laboratories with modern instruments for anatomy, physiology, and paramedical studies with hands-on practical experience.' },
  { icon: HeartPulse, title: 'Simulation Center', desc: 'A high-fidelity simulation center providing realistic patient scenarios to build confidence and clinical decision-making skills.' },
  { icon: ShieldCheck, title: 'Library & Study Areas', desc: 'A well-stocked library with nursing and paramedical reference materials, journals, and quiet study spaces for focused learning.' },
];

export default function Facility() {
  return (
    <main className="pt-20">
      <section className="relative h-[420px] md:h-[480px] overflow-hidden bg-gradient-to-br from-teal-deep via-[#0d2a3e] to-navy-deep flex items-center">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">Our <span className="text-gold">Facilities</span></h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl">World-class infrastructure designed to support comprehensive nursing and paramedical education.</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {facilities.map((f) => (
              <div key={f.title} className="group bg-white rounded-[2rem] p-8 shadow-xl shadow-navy-deep/5 border border-stone/50 hover:shadow-2xl hover:-translate-y-2 hover:border-teal-main/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-soft to-transparent rounded-full -translate-y-1/2 translate-x-1/4 transition-transform duration-500 group-hover:scale-[2]" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-soft to-teal-muted flex items-center justify-center mb-6 shadow-md">
                    <f.icon className="w-7 h-7 text-teal-deep" />
                  </div>
                  <h3 className="text-xl font-extrabold text-navy font-display mb-3">{f.title}</h3>
                  <p className="text-sm text-navy/50 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-navy-deep/10">
              <img src="/images/facility-classroom.jpg" alt="Facility" className="w-full h-[380px] md:h-[460px] object-cover" />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">Clinical Training <span className="text-teal-main">Environment</span></h2>
              <p className="text-navy/60 leading-relaxed mb-6">
                Our institute is closely integrated with Vineeta Hospital Pvt. Ltd., providing students with direct access to real-world clinical environments. From ICU care to community health camps, our students gain hands-on experience under expert supervision.
              </p>
              <ul className="space-y-3">
                {[
                  'Modern simulation labs with high-fidelity mannequins',
                  'Direct clinical rotation at Vineeta Hospital',
                  'Dedicated skills training stations for procedures',
                  'Library with extensive nursing and medical literature',
                  'Computer labs with digital health resources',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-navy/60">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-main to-teal-deep flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3 h-3 text-white" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
