const faculty = [
  {
    name: 'Dr. Bindu Vishwakarma',
    role: 'Director',
    image: '/images/faculty-director.jpg',
    bio: 'A distinguished leader in nursing education with extensive clinical and academic experience. Dr. Vishwakarma guides the institute with a vision of excellence and compassion.',
    qualifications: ['Ph.D. in Nursing', 'M.Sc. Nursing', 'B.Sc. Nursing'],
  },
  {
    name: 'Dr. Vineeta Vishwakarma',
    role: 'Managing Director',
    image: '/images/faculty-md.jpg',
    bio: 'Passionate about advancing healthcare education through modern pedagogical methods. Dr. Vineeta oversees strategic development and academic innovation.',
    qualifications: ['Ph.D.', 'MBA in Healthcare Management', 'M.Sc. Nursing'],
  },
  {
    name: 'Ms. Divyani Dubey',
    role: 'Principal',
    image: '/images/faculty-principal.jpg',
    bio: 'Dedicated to fostering an inclusive and empowering learning environment for all students. Ms. Dubey ensures quality delivery of every program.',
    qualifications: ['M.Sc. Nursing', 'B.Sc. Nursing', 'Certificate in Education'],
  },
  {
    name: 'Dr. Ramesh Kumar',
    role: 'Head of Department - Nursing',
    image: '/images/faculty-director.jpg',
    bio: 'An expert in nursing education with over 15 years of experience in clinical practice and academic leadership.',
    qualifications: ['Ph.D.', 'M.Sc. Nursing', 'B.Sc. Nursing'],
  },
];

export default function Faculty() {
  return (
    <main className="pt-20">
      {/* Header Banner */}
      <section className="relative h-[420px] md:h-[480px] overflow-hidden bg-gradient-to-br from-teal-deep via-[#0d2a3e] to-navy-deep flex items-center">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">Our <span className="text-gold">Faculty</span></h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl">Meet the dedicated educators and mentors shaping the next generation of healthcare professionals.</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {faculty.map((person) => (
              <div key={person.name} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-navy-deep/5 border border-stone/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="grid md:grid-cols-[280px_1fr]">
                  <div className="relative h-[320px] md:h-auto overflow-hidden">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-deep to-teal-main rounded-full px-3 py-1.5 text-xs font-extrabold text-white shadow-lg">
                      {person.role}
                    </div>
                  </div>
                  <div className="p-7 md:p-8 flex flex-col justify-center">
                    <h3 className="font-display text-2xl font-bold text-navy mb-2">{person.name}</h3>
                    <p className="text-sm text-teal-main font-semibold mb-4">{person.role}</p>
                    <p className="text-sm text-navy/50 leading-relaxed mb-5">{person.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {person.qualifications.map((q) => (
                        <span key={q} className="text-[11px] font-medium px-3 py-1 rounded-full bg-stone text-navy/60 border border-stone/60">{q}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Attributes */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-cream to-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">Key <span className="text-teal-main">Attributes</span></h2>
            <p className="text-navy/50">What makes our faculty exceptional in nurturing healthcare excellence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Highly Qualified & Experienced', desc: 'Our faculty includes accomplished professionals with advanced degrees in nursing, paramedical sciences, and healthcare management. Many instructors have years of hands-on experience in hospitals and academic institutions.' },
              { title: 'Commitment to Student Success', desc: 'Our faculty members are deeply invested in every student. They provide personalized attention, guidance, and mentorship to ensure students excel in both theoretical and practical aspects of education.' },
              { title: 'Blend of Academic & Practical Knowledge', desc: 'Faculty members combine academic theory with real-world experience. Many work in clinical settings, ensuring students are exposed to the latest healthcare practices and innovations.' },
              { title: 'Engagement in Research & Innovation', desc: 'Our faculty is actively involved in research, contributing to advancements in nursing and paramedical sciences. This fosters a culture of critical thinking and innovation within the institution.' },
              { title: 'Continuous Professional Development', desc: 'Faculty members regularly attend workshops, conferences, and seminars to stay current with the latest trends, techniques, and research in the healthcare field.' },
              { title: 'Mentorship & Guidance', desc: 'Beyond academics, our faculty acts as mentors, helping students navigate challenges of healthcare education and professional development through strong personal relationships.' },
            ].map((attr) => (
              <div key={attr.title} className="bg-white rounded-3xl p-8 shadow-lg shadow-navy-deep/5 border border-stone/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-display text-xl font-bold text-navy mb-3">{attr.title}</h3>
                <p className="text-sm text-navy/50 leading-relaxed">{attr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
