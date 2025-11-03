'use client';

import Link from 'next/link';
import { FiArrowRight, FiBook } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-primary-50 via-blue-50 to-cyan-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Your Gateway to
              <span className="block bg-linear-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent mt-2">
                Digital Learning
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Modern library management system designed for students, lecturers, and administrators. Access thousands of books with just a click.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#"
                className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-linear-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl shadow-lg"
              >
                <span>Start Free Trial</span>
                <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl border-2 border-primary-200 shadow-md"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-linear-to-br from-primary-500 to-cyan-500 rounded-3xl flex items-center justify-center">
                <FiBook className="text-6xl text-white" />
              </div>
              
              <div className="space-y-4">
                {['📚 Browse 10,000+ Books', '⚡ Instant Access', '🔒 Secure & Private'].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}