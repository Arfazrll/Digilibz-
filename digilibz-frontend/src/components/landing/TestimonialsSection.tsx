export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Computer Science Student',
      avatar: '👩‍🎓',
      content: 'DigiLibZ has transformed how I access academic resources. The interface is intuitive and the book collection is impressive!',
      rating: 5,
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Lecturer',
      avatar: '👨‍🏫',
      content: 'As a lecturer, I appreciate how easy it is to recommend books to students. The notification system is excellent.',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      role: 'Engineering Student',
      avatar: '👩‍💻',
      content: 'The best library management system I\'ve used. Finding and borrowing books has never been easier!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied students and lecturers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-primary-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}