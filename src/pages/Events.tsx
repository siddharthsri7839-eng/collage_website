import { Sparkles, CalendarDays, Award } from 'lucide-react';

const events = [
  {
    title: 'Fresher Party',
    date: 'August 2026',
    type: 'Celebration',
    description: 'A grand welcome event for new students with cultural programs, speeches, and interaction with faculty and senior students.'
  },
  {
    title: 'College Function',
    date: 'December 2026',
    type: 'Academic',
    description: 'Annual academic function featuring awards, presentations, and celebrations of student achievements throughout the year.'
  },
  {
    title: 'International Yoga Day',
    date: 'June 21, 2026',
    type: 'Wellness',
    description: 'Special yoga and wellness sessions led by expert practitioners, promoting physical and mental health among students and staff.'
  },
  {
    title: 'Lamp Lighting & Oath Ceremony',
    date: 'October 2026',
    type: 'Ceremony',
    description: 'A traditional ceremony where students take the nursing oath, symbolizing their commitment to compassionate care and professional ethics.'
  },
];

const pastEvents = [
  'Nursing Leadership Workshop',
  'Community Health Camp',
  'Medical Awareness Seminar',
  'Paramedical Skills Competition',
];

export default function Events() {
  return (
    <main className="pt-20">
      <section className="relative h-[420px] md:h-[480px] overflow-hidden bg-gradient-to-br from-teal-deep via-[#0d2a3e] to-navy-deep flex items-center">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">Our <span className="text-gold">Events</span></h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl">Celebrating achievements, fostering community, and nurturing holistic growth beyond the classroom.</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">Upcoming <span className="text-teal-main">Events</span></h2>
            <p className="text-navy/50">Join us for celebrations, ceremonies, and community events that enrich student life.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {events.map((event) => (
              <div key={event.title} className="group bg-white rounded-[2.5rem] p-8 shadow-xl shadow-navy-deep/5 border border-stone/50 hover:shadow-2xl hover:-translate-y-2 hover:border-teal-main/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-soft to-transparent rounded-full -translate-y-1/3 translate-x-1/3 transition-transform duration-500 group-hover:scale-[2]" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-main to-teal-deep flex items-center justify-center shadow-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gold uppercase tracking-wider">{event.type}</span>
                      <h3 className="text-xl font-extrabold text-navy font-display">{event.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-teal-main font-medium mb-4">
                    <CalendarDays className="w-4 h-4" />
                    {event.date}
                  </div>
                  <p className="text-sm text-navy/50 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-cream relative overflow-hidden">
        <img src="/images/events-ceremony.jpg" alt="Event" className="absolute right-0 top-0 w-1/3 h-full object-cover opacity-[0.03] rounded-l-[3rem] hidden md:block" />
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="bg-gradient-to-br from-navy-deep to-[#0d2a3e] rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl shadow-navy-deep/15 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold/20 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Past Highlights</h3>
              <p className="text-white/50 mb-6">Some of our most memorable events and achievements.</p>
              <ul className="grid md:grid-cols-2 gap-3">
                {pastEvents.map((e) => (
                  <li key={e} className="flex items-center gap-3 text-sm text-white/70 bg-white/5 rounded-xl px-4 py-3 border border-white/5 hover:bg-white/10 transition-colors">
                    <Award className="w-4 h-4 text-gold shrink-0" />
                    {e}
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
