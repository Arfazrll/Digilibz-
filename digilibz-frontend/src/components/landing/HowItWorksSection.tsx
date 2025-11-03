export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Create Account',
      description: 'Sign up as a student or lecturer in just a few clicks',
      icon: '👤',
    },
    {
      number: '02',
      title: 'Browse Books',
      description: 'Search and explore our vast collection of books',
      icon: '🔍',
    },
    {
      number: '03',
      title: 'Borrow Instantly',
      description: 'Select books and submit your borrowing request',
      icon: '📚',
    },
    {
      number: '04',
      title: 'Enjoy Reading',
      description: 'Pick up your books and start your learning journey',
      icon: '✨',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-4">{step.icon}</div>
                <div className="text-primary-600 font-bold text-lg mb-2">STEP {step.number}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="text-4xl text-primary-300">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}