import Image from "next/image";

export default function Services() {
  const services = [
    { name: "Binding", image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Professional document binding services" },
    { name: "THERMAL BINDING (From 250.00)", image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "High-quality thermal binding for reports and documents" },
    { name: "Binding Services", image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Complete binding solutions for all your needs" },
    { name: "BLACK BINDING (From 120.00)", image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Affordable black binding options" },
    { name: "Business document printing", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Professional business document printing" },
    { name: "Color printing", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Vibrant color printing services" },
    { name: "Copy services", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "High-quality copying services" },
    { name: "Custom printing", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Customized printing solutions" },
    { name: "Digital printing", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Modern digital printing technology" },
    { name: "Document scanning", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Fast and accurate document scanning" },
    { name: "Legal documents", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Legal document printing and copying" },
    { name: "Letterpress printing", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Traditional letterpress printing" },
    { name: "Photo printing", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Professional photo printing services" },
    { name: "Jumbo Xerox", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Large format xerox services" },
    { name: "AO Size Printing", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "AO size printing for large documents" },
    { name: "Layout Printing", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Layout and design printing" },
    { name: "A3 Colour Printing", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "A3 size color printing" },
    { name: "PVC Card Printing", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "PVC card printing and lamination" },
    { name: "JUMBO SIZE PHOTO PRINTING", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Extra large photo printing" },
    { name: "ONLINE APPLICATION FOR JOB AND ADMISSIONS", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Online application form printing" },
    { name: "TYPING", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Professional typing services" },
    { name: "LAMINATION", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "Document lamination services" },
    { name: "COLLEGE PROJECT BINDING", image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", description: "College project binding and printing" }
  ];

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
              <a href="/services" className="text-orange-600 font-medium">Services</a>
              <a href="/contact" className="text-gray-900 hover:text-orange-600 font-medium transition-all duration-300 hover:scale-105 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-orange-600 to-blue-600 bg-clip-text text-transparent mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of printing and xerox services to meet all your needs. From binding to digital printing, we've got you covered with quality and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 via-transparent to-blue-500/20 rounded-xl"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-orange-600 text-sm">✨</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">{service.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <div className="w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Need Custom Services?</h3>
            <p className="text-xl mb-6 opacity-90">We offer personalized printing solutions tailored to your specific requirements.</p>
            <a
              href="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}