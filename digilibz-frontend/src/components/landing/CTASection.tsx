import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function CTASection() {
  return (
    <section className="py-20 bg-linear-to-r from-primary-600 to-primary-800">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Join thousands of students and lecturers using DigiLibZ
        </p>
        <Link
          href="#"
          className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-primary-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all text-lg"
        >
          <span>Get Started Free</span>
          <FiArrowRight className="text-2xl" />
        </Link>
      </div>
    </section>
  );
}