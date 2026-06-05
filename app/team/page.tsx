'use client';

const members = [
  { name: 'Alex Johnson',  role: 'CEO & Founder',             initials: 'AJ' },
  { name: 'Sarah Lee',     role: 'Chief Operations Officer',  initials: 'SL' },
  { name: 'Marcus Rivera', role: 'Head of Sustainability',    initials: 'MR' },
  { name: 'Priya Kapoor',  role: 'Lead Consultant',           initials: 'PK' },
  { name: 'David Chen',    role: 'Digital Strategy Director', initials: 'DC' },
  { name: 'Emma White',    role: 'Marketing Manager',         initials: 'EW' },
];

export default function Team() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Meet the passionate people behind Earth Group.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map(({ name, role, initials }) => (
          <div key={name} className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-20 h-20 rounded-full bg-brand-100 text-brand-700 text-2xl font-bold flex items-center justify-center mx-auto mb-4">
              {initials}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500 mt-1">{role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
