import { FiBook, FiSearch, FiClock, FiShield, FiBell, FiUsers } from 'react-icons/fi';

export default function FeaturesSection() {
  const features = [
    {
      icon: FiBook,
      title: 'Vast Collection',
      description: 'Access over 10,000 books across various categories and genres'
    },
    {
      icon: FiSearch,
      title: 'Smart Search',
      description: 'Find books instantly with our advanced search algorithm'
    },
    {
      icon: FiClock,
      title: 'Easy Borrowing',
      description: 'Borrow and return books with just a few clicks'
    },
    {
      icon: FiShield,
      title: 'Secure System',
      description: 'Your data is protected with enterprise-grade security'
    },
    {
      icon: FiBell,
      title: 'Smart Notifications',
      description: 'Get reminders for due dates and new arrivals'
    },
    {
      icon: FiUsers,
      title: 'Multi-User Support',
      description: 'Perfect for students, lecturers, and administrators'
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your library effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-linear-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}