import { Clock, Users, GraduationCap } from 'lucide-react';

const courses = [
  {
    title: 'ANM',
    name: 'Auxiliary Nursing Midwifery',
    duration: '2 Years',
    eligibility: 'Intermediate Passed In Any Subject',
    icon: GraduationCap,
    description: 'The ANM program prepares students for community-level nursing care, focusing on maternal and child health, basic nursing skills, and public health practices.',
    features: ['Community Health Practice', 'Midwifery Fundamentals', 'Child Health Care', 'Nutritional Counseling'],
  },
  {
    title: 'GNM',
    name: 'General Nursing Midwifery',
    duration: '2 Years',
    eligibility: 'Intermediate Passed In Any Subject',
    icon: Users,
    description: 'A comprehensive nursing program combining theory with extensive clinical practice, preparing students for professional nursing roles in hospitals and healthcare settings.',
    features: ['Advanced Nursing Practice', 'Clinical Rotation', 'Community Health', 'Healthcare Management'],
  },
  {
    title: 'DOT',
    name: 'Diploma in Occupational Therapy',
    duration: '2 Years',
    eligibility: 'Intermediate Passed In Science',
    icon: Clock,
    description: 'Train to help patients recover from injuries and disabilities through therapeutic activities, improving their ability to perform daily tasks and work.',
    features: ['Rehabilitation Techniques', 'Therapeutic Activities', 'Pediatric Therapy', 'Geriatric Care'],
  },
  {
    title: 'DPT',
    name: 'Diploma in Physiotherapy',
    duration: '2 Years',
    eligibility: 'Intermediate Passed In Science',
    icon: GraduationCap,
    description: 'Learn to treat physical conditions and improve movement through manual therapy, exercise programs, and rehabilitation techniques.',
    features: ['Manual Therapy', 'Exercise Programs', 'Sports Rehabilitation', 'Electrotherapy'],
  },
  {
    title: 'CBNCC',
    name: 'Community Based Nursing & Care',
    duration: '6 Months',
    eligibility: '5th Class Passed',
    icon: Users,
    description: 'A focused short-term program providing foundational nursing skills for community-level health care delivery and support.',
    features: ['Basic Nursing Care', 'First Aid & Emergency', 'Community Outreach', 'Home Care Basics'],
  },
  {
    title: 'DOPT',
    name: 'Diploma in Occupational Therapy Practice',
    duration: '2 Years',
    eligibility: 'Intermediate Passed In Science',
    icon: Clock,
    description: 'Advanced diploma program focusing on specialized occupational therapy practices, including clinical placements and patient-centered care.',
    features: ['Advanced Therapy', 'Clinical Placements', 'Specialized Care', 'Research Methods'],
  },
];

export default function Courses() {
  return (
    <main className="pt-20">
      <section className="relative h-[420px] md:h-[480px] overflow-hidden bg-gradient-to-br from-teal-deep via-[#0d2a3e] to-navy-deep flex items-center">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">Our <span className="text-gold">Courses</span></h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl">Explore our comprehensive nursing and paramedical programs designed for real-world success.</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.title} className="group bg-white rounded-[2.5rem] p-8 shadow-xl shadow-navy-deep/5 border border-stone/50 hover:shadow-2xl hover:-translate-y-2 hover:border-teal-main/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-teal-soft to-transparent rounded-full -translate-y-1/3 translate-x-1/4 transition-transform duration-500 group-hover:scale-[2.5]" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-main to-teal-deep flex items-center justify-center shadow-lg shadow-teal-main/20 mb-6">
                    <course.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy font-display mb-1">{course.title}</h3>
                  <p className="text-sm text-navy/40 font-medium mb-2">{course.name}</p>
                  <div className="flex gap-3 text-xs font-semibold text-teal-main mb-5">
                    <span className="bg-teal-soft px-2.5 py-1 rounded-full">{course.duration}</span>
                  </div>
                  <p className="text-sm text-navy/50 leading-relaxed mb-5">{course.description}</p>
                  <div className="mb-5">
                    <span className="text-[11px] uppercase tracking-widest font-extrabold text-navy/30 mb-2 block">Eligibility</span>
                    <span className="text-sm text-navy font-medium">{course.eligibility}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.features.map((f) => (
                      <span key={f} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-stone text-navy/40">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
