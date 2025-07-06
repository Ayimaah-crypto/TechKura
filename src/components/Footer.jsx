

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Send
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Teckura</h2>
          <p className="text-gray-400">
            At Teckura, we connect people with top-notch electronics services
            and trusted professionals. Your tech, our priority.
          </p>
          <div className="flex gap-4 mt-4">
            <Facebook className="hover:text-blue-500 cursor-pointer" />
            <Twitter className="hover:text-blue-400 cursor-pointer" />
            <Instagram className="hover:text-pink-400 cursor-pointer" />
            <Linkedin className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#aboutUs" className="hover:text-white">About Us</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#works" className="hover:text-white">How We Work</a></li>
            <li><a href="#goals" className="hover:text-white">Goals</a></li>
            <li><a href="#form" className="hover:text-white">Contacts</a></li>
          </ul>
        </div>

        {/* Subscription */}
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold mb-3">Stay Updated</h2>
          <p className="text-gray-400 mb-4">
            Subscribe to get the latest updates and offers.
          </p>
          <form className="flex items-center max-w-md">
            <div className="relative w-full">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-12 py-2 rounded-full bg-gray-800 text-white focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Teckura. All rights reserved.
      </div>
    </footer>
  );
}
