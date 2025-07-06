import google from "../assets/images/google.png";
import { Mail, Phone, LocateIcon, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="bg-[#6A7282] px-4 py-12" id="form">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start justify-between">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-4">Get in touch</h1>

            {/* Email */}
            <div className="flex items-start space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Mail className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-white font-bold">Email</h2>
                <p className="text-white">ayimaahtheodora@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Phone className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-white font-bold">Phone</h2>
                <p className="text-white">+233 596020268</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <LocateIcon className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-white font-bold">Location</h2>
                <p className="text-white">Accra, Ghana</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl text-white font-bold mb-2">Why choose us</h2>
            <ul className="list-disc list-inside text-white space-y-1 font-medium">
              <li>5+ years of industry experience</li>
              <li>500+ successful projects delivered</li>
              <li>24/7 support and maintenance</li>
              <li>Agile development methodology</li>
            </ul>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow p-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-1">Contact TechKura</h2>
          <p className="text-center text-gray-600 text-sm mb-6">
            Let's connect. We'd love to hear from you!
          </p>

          <form action="https://formspree.io/f/mzzgqvkw" method="POST" className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Theodora Asare"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="theo@techkura.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-full transition duration-300"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
