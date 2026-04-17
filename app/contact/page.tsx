import Image from "next/image";

export default function Contact() {
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
              <a href="/contact" className="text-orange-600 font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-orange-600 to-blue-600 bg-clip-text text-transparent mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for all your printing needs. We're here to help with fast and reliable service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-white text-xl">📍</span>
              </div>
              Visit Our Location
            </h3>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                <strong className="text-orange-600">Address:</strong><br />
                Plot No.82/1, Shopping Complex,<br />
                6-7-60/1, near SBI Road,<br />
                opposite Gandhi Statue,<br />
                Phase I, Vanasthalipuram,<br />
                Hyderabad, Telangana 500070, India
              </p>
              <p className="text-lg">
                <strong className="text-blue-600">Phone:</strong> +91 62813 04374
              </p>
              <p className="text-lg">
                <strong className="text-green-600">Hours:</strong> Monday - Saturday, 9 AM - 8 PM
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-white text-xl">🖼️</span>
              </div>
              Our Services
            </h3>
            <p className="text-gray-600 mb-6">
              We provide comprehensive printing and xerox services including binding, color printing, document scanning, and much more. Bring your documents and let us handle the rest with our modern equipment and expert staff.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm font-semibold text-blue-700">Fast Service</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                <div className="text-2xl mb-2">🎨</div>
                <div className="text-sm font-semibold text-orange-700">Quality Prints</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in-up">
          <Image
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Professional printing equipment and workspace"
            width={800}
            height={400}
            className="rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 mx-auto"
          />
          <div className="mt-8">
            <a
              href="/services"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mr-4"
            >
              View All Services
            </a>
            <a
              href="tel:+916281304374"
              className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl text-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Call Now 📞
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}