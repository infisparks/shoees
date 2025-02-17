import { Zap, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 sm:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-6">Stay updated with our latest collections and exclusive offers.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Zap className="h-6 w-6 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl font-bold text-gray-900">StridePro</span>
            </Link>
            <p className="text-gray-600">Your destination for premium footwear, delivering style and comfort to every step.</p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["New Arrivals", "Men", "Women", "Sale", "Blog"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Customer Service</h3>
            <ul className="space-y-4">
              {[
                "Track Order",
                "Size Guide",
                "Returns Policy",
                "FAQs",
                "Terms & Conditions"
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span>123 Fashion Street, Style City, 110001</span>
                </a>
              </li>
              <li>
                <a href="tel:+911234567890" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+91 123 456 7890</span>
                </a>
              </li>
              <li>
                <a href="mailto:support@stridepro.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>support@stridepro.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} StridePro. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}