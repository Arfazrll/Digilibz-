import Link from 'next/link';
import { FiBook, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function LandingFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FiBook className="text-3xl text-primary-500" />
              <span className="text-2xl font-bold text-white">DigiLibZ</span>
            </div>
            <p className="text-sm">Modern library management system for digital learning</p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary-500">Home</a></li>
              <li><a href="#features" className="hover:text-primary-500">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-primary-500">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-primary-500">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FiMail />
                <span>info@digilibz.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiPhone />
                <span>+62 123 4567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMapPin />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-primary-500">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary-500">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary-500">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2025 DigiLibZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}