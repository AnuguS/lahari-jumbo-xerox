import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b-4 border-orange-500 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Lahari Jumbo Xerox</h1>
            </div>
            <nav className="flex space-x-8">
              <a href="/" className="text-gray-900 hover:text-orange-600 font-medium transition-all duration-300 hover:scale-105 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/services" className="text-gray-900 hover:text-orange-600 font-medium transition-all duration-300 hover:scale-105 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/contact" className="text-gray-900 hover:text-orange-600 font-medium transition-all duration-300 hover:scale-105 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-orange-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Welcome to <span className="block">Lahari Jumbo Xerox</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your one-stop solution for all printing and xerox needs in Hyderabad. Quality service with fast turnaround times and modern technology.
            </p>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-semibold text-orange-600">📍 Location:</span> Plot No.82/1, Shopping Complex, 6-7-60/1, near SBI Road, opposite Gandhi Statue, Phase I, Vanasthalipuram, Hyderabad, Telangana 500070, India
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-blue-600">📞 Phone:</span> +91 62813 04374
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/services"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Our Services
              </a>
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative animate-fade-in-right">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Modern printing equipment and services"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-blue-500/20 rounded-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Service</h3>
            <p className="text-gray-600">Quick turnaround times with efficient processing and delivery.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Printing</h3>
            <p className="text-gray-600">High-quality prints with vibrant colors and sharp details.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Affordable Prices</h3>
            <p className="text-gray-600">Competitive pricing with great value for your money.</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
          {[
            { stat: '1000+', label: 'Happy Customers' },
            { stat: '20+', label: 'Years Service' },
            { stat: '50+', label: 'Services' },
            { stat: '24/7', label: 'Support' },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold mb-2">{item.stat}</div>
              <p className="text-orange-100">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Customers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Kumar', role: 'Student', text: 'Got my thesis bound perfectly! Great quality and affordable.', rating: 5 },
              { name: 'Priya Singh', role: 'Business Owner', text: 'Best printing service in the area. Always delivers on time!', rating: 5 },
              { name: 'Ahmed Hassan', role: 'Architect', text: 'Excellent large format printing. Perfect for my technical drawings.', rating: 5 },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex mb-4">{[...Array(testimonial.rating)].map((_, i) => <span key={i} className="text-yellow-400">⭐</span>)}</div>
                <p className="text-gray-600 mb-4 italic">\"{testimonial.text}\"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900\">Why Choose Lahari Jumbo Xerox?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '✓', title: 'Latest Technology', desc: 'State-of-the-art printing equipment' },
              { icon: '✓', title: 'Expert Staff', desc: 'Trained professionals with years of experience' },
              { icon: '✓', title: 'Quick Turnaround', desc: 'Fastest service in the market' },
              { icon: '✓', title: 'Premium Quality', desc: 'High-quality results guaranteed' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="text-2xl text-green-500 flex-shrink-0 font-bold">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-4xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 text-orange-100">Experience the best printing and xerox services in Hyderabad</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition-colors">View Services</a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">Get in Touch</a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: 'What are your business hours?', a: 'We are open Monday to Saturday from 9:00 AM to 8:00 PM. Sunday is closed. For urgent needs, please call us.' },
              { q: 'How fast can you complete an order?', a: 'Most orders can be completed within 24-48 hours. Urgent orders may be possible with rush charges.' },
              { q: 'Do you offer discounts for bulk orders?', a: 'Yes! We offer competitive discounts for bulk orders. Please contact us for customized quotes.' },
              { q: 'What payment methods do you accept?', a: 'We accept cash, UPI, and all major debit/credit cards. Payment can be made on-site or online.' },
              { q: 'Can I place orders online?', a: 'Currently, we accept orders in-store or by phone. Feel free to call +91 62813 04374 for inquiries.' },
              { q: 'Do you provide home delivery?', a: 'Yes, we offer delivery for large orders. Contact us for delivery charges and details.' },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-300">
                <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">❓</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 ml-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
