import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Chatbot from "../components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lahari Jumbo Xerox",
  description: "Professional printing and xerox services in Hyderabad. Binding, color printing, document scanning, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}      suppressHydrationWarning    >
      <body className="min-h-full flex flex-col">
        {children}
        <Chatbot />
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 mt-auto border-t-4 border-orange-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="animate-fade-in-up">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                    <span className="text-white font-bold">L</span>
                  </div>
                  <h3 className="text-xl font-bold">Lahari Jumbo Xerox</h3>
                </div>
                <p className="text-gray-400">
                  Your trusted partner for all printing and xerox services in Hyderabad. Quality, speed, and affordability guaranteed.
                </p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
                <ul className="space-y-3">
                  <li><a href="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"><span className="mr-2">→</span> Home</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"><span className="mr-2">→</span> Services</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"><span className="mr-2">→</span> Contact</a></li>
                </ul>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-lg font-semibold mb-4 text-blue-400">Our Services</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="hover:text-orange-400 transition-colors">✓ Professional Binding</li>
                  <li className="hover:text-orange-400 transition-colors">✓ Color & Digital Printing</li>
                  <li className="hover:text-orange-400 transition-colors">✓ Document Scanning</li>
                  <li className="hover:text-orange-400 transition-colors">✓ Xerox & Copying</li>
                </ul>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-lg font-semibold mb-4 text-green-400">Contact Info</h3>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    <span className="text-orange-400">📍</span><br />
                    Plot No.82/1, Shopping Complex<br />
                    Vanasthalipuram, Hyderabad<br />
                    Telangana 500070
                  </p>
                  <p className="text-gray-300">
                    <span className="text-orange-400">📱</span> +91 62813 04374
                  </p>
                  <p className="text-gray-300">
                    <span className="text-orange-400">🕐</span> Mon-Sat: 9 AM - 8 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-6 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-xl border border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">1000+</div>
                <p className="text-gray-400 text-sm">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">20+</div>
                <p className="text-gray-400 text-sm">Years of Service</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">50+</div>
                <p className="text-gray-400 text-sm">Services Available</p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 mb-4 md:mb-0">
                  © 2026 Lahari Jumbo Xerox. All rights reserved.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
                  <span className="text-gray-600">•</span>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</a>
                  <span className="text-gray-600">•</span>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
