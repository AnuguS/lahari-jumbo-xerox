'use client';

import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! 👋 Welcome to Lahari Jumbo Xerox. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      // Simulate a slight delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getLocalResponse(userInput),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat Error:', error);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getLocalResponse(userInput),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getLocalResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();

    // Service specific queries
    if (input.includes('price') || input.includes('cost') || input.includes('how much') || input.includes('charges') || input.includes('rate')) {
      return '💰 **Our Pricing:**\n• THERMAL BINDING: From ₹250\n• BLACK BINDING: From ₹120\n• Color Printing: Competitive rates per page\n• Photo Printing: From ₹5 per photo\n• Scanning: From ₹10 per page\n• Custom rates available for bulk orders!\nContact us at +91 62813 04374 for exact quotes! 📞';
    }

    if (input.includes('address') || input.includes('location') || input.includes('where') || input.includes('directions')) {
      return '📍 **Our Location:**\nPlot No.82/1, Shopping Complex, 6-7-60/1\nnear SBI Road, opposite Gandhi Statue\nPhase I, Vanasthalipuram\nHyderabad, Telangana 500070, India\n\nEasy to find and accessible by public transport! 🚗';
    }

    if (input.includes('phone') || input.includes('call') || input.includes('contact') || input.includes('reach') || input.includes('whatsapp')) {
      return '📞 **Contact Us:**\n📱 Phone: +91 62813 04374\n🕐 Available during business hours\n⏰ We respond quickly to inquiries\n💬 Feel free to call or visit us anytime! ';
    }

    if (input.includes('binding') || input.includes('thermal') || input.includes('black binding') || input.includes('project') || input.includes('thesis')) {
      return '📚 **Binding Services:**\n✓ THERMAL BINDING (₹250+) - Professional & durable\n✓ BLACK BINDING (₹120+) - Classic & affordable\n✓ COLLEGE PROJECT BINDING - Perfect for students\n✓ Thesis & Report Binding - High-quality finishes\n\nAll bindings available with quick turnaround! ⚡';
    }

    if ((input.includes('printing') || input.includes('print')) && !input.includes('photo') && !input.includes('large')) {
      return '🖨️ **Printing Services:**\n✓ Color Printing - Vibrant & professional\n✓ Business Document Printing\n✓ Digital Printing - Latest technology\n✓ Custom Printing - Personalized solutions\n✓ A3 Colour Printing - Large format\n✓ Letterpress Printing - Premium quality\n\nHigh-quality prints guaranteed! 🎨';
    }

    if (input.includes('xerox') || input.includes('copy') || input.includes('photocopy') || input.includes('copying')) {
      return '📋 **Copy & Xerox Services:**\n✓ Regular Xerox/Copying\n✓ Jumbo Xerox - Large format copying\n✓ Quick turnaround on bulk orders\n✓ High-quality reproduction\n✓ B&W and Color copying available\n\nPerfect for documents, forms, and more! ✨';
    }

    if (input.includes('scan') || input.includes('scanning') || input.includes('digital')) {
      return '📄 **Document Scanning:**\n✓ Convert physical docs to digital\n✓ High-resolution scanning\n✓ Bulk scanning available\n✓ Fast turnaround\n✓ Professional quality guaranteed\n\nModernize your documents today! 💻';
    }

    if (input.includes('photo') && !input.includes('photocopy')) {
      return '📸 **Photo Printing Services:**\n✓ Photo Printing - All sizes\n✓ JUMBO SIZE PHOTO PRINTING - Extra large\n✓ Professional quality prints\n✓ Quick delivery\n✓ Affordable rates\n\nBring your photos to life! 🌟';
    }

    if (input.includes('jumbo') && (input.includes('xerox') || input.includes('copy') || input.includes('size') || input.includes('print'))) {
      return '🎯 **Jumbo Xerox & Large Format Printing:**\n✓ AO Size Printing - Technical drawings\n✓ Layout Printing - Architectural plans\n✓ Large format copying\n✓ Perfect for posters & displays\n✓ Professional quality guaranteed\n\nContact us for bulk quotes! 📞';
    }

    if (input.includes('lamination')) {
      return '🛡️ **Lamination Service:**\n✓ Document protection & durability\n✓ Glossy & Matte finishes\n✓ All sizes available\n✓ Quick turnaround\n✓ Perfect for certificates & IDs\n\nProtect your important documents! ✨';
    }

    if (input.includes('card') || input.includes('pvc') || input.includes('id')) {
      return '🎴 **PVC Card Printing:**\n✓ ID Cards - Professional quality\n✓ Membership Cards - Customizable\n✓ Loyalty Cards - High-quality printing\n✓ Quick production\n✓ Bulk discounts available\n\nCustom cards for your business! 🏢';
    }

    if (input.includes('application') || input.includes('job') || input.includes('admission')) {
      return '📋 **Online Applications:**\n✓ Help with job applications\n✓ Admission form assistance\n✓ Document preparation\n✓ Guidance & support\n✓ Quick processing\n\nWe\'re here to help you succeed! 🌟';
    }

    if (input.includes('typing')) {
      return '⌨️ **Typing Services:**\n✓ Fast & accurate typing\n✓ Document data entry\n✓ Form filling\n✓ Professional formatting\n✓ Quick turnaround\n\nAll typing needs covered! 📝';
    }

    if (input.includes('hours') || input.includes('timing') || input.includes('open') || input.includes('closed') || input.includes('working')) {
      return '🕐 **Working Hours:**\n📅 Monday - Saturday: 9:00 AM - 8:00 PM\n🚫 Sunday: Closed\n☎️ For urgent needs, call +91 62813 04374\n\nWe\'re here when you need us! ⏰';
    }

    if (input.includes('discount') || input.includes('offer') || input.includes('bulk') || input.includes('deal')) {
      return '🎉 **Offers & Discounts:**\n✓ Bulk order discounts available\n✓ Regular customer benefits\n✓ Special rates for institutions\n✓ Seasonal offers\n\nCall us for the best deals! 📞 +91 62813 04374';
    }

    if (input.includes('quality') || input.includes('best') || input.includes('premium') || input.includes('excellent')) {
      return '⭐ **Our Quality Promise:**\n✓ Latest technology & equipment\n✓ Expert, trained professionals\n✓ Premium materials only\n✓ Quality checks on every order\n✓ 100% satisfaction guaranteed!\n\nYour satisfaction is our priority! 💯';
    }

    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('greetings')) {
      return '👋 Hello! Welcome to Lahari Jumbo Xerox! \n\nI\'m here to help you with:\n✓ Service information\n✓ Pricing & rates\n✓ Location & hours\n✓ Any other questions\n\nWhat can I help you with today? 😊';
    }

    if (input.includes('thank') || input.includes('thanks') || input.includes('thankyou') || input.includes('appreciate')) {
      return '😊 You\'re very welcome! We appreciate your business.\n\nFeel free to ask anything else or visit us at:\n📍 Plot No.82/1, Shopping Complex, Vanasthalipuram\n📱 +91 62813 04374\n\nHappy to serve you! 🙌';
    }

    if (input.includes('bye') || input.includes('goodbye') || input.includes('see you') || input.includes('later')) {
      return '👋 Thank you for choosing Lahari Jumbo Xerox!\n\nWe look forward to serving you soon! 😊\n📍 Visit us: Plot No.82/1, Shopping Complex\n📱 Call: +91 62813 04374\n\nHave a great day! ✨';
    }

    // Default helpful response
    return '🤔 Great question! \n\nHere are some things I can help you with:\n✓ Our services & pricing\n✓ Binding options\n✓ Printing services\n✓ Location & contact\n✓ Working hours\n✓ Special offers\n\nFeel free to ask me anything! 😊';
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-blue-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center text-white text-2xl hover:scale-110 transform animate-pulse-glow"
          aria-label="Open chat"
        >
          {isOpen ? '✕' : '💬'}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[32rem] bg-white rounded-3xl shadow-2xl flex flex-col z-50 transition-all duration-300 ease-out transform animate-slide-up border-2 border-orange-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 rounded-t-3xl p-6 flex justify-between items-center shadow-lg">
            <div>
              <h3 className="text-white font-bold text-lg">Lahari Chat Support</h3>
              <p className="text-orange-100 text-sm flex items-center">
                <span className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></span>
                Online & Ready to Help
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-all duration-300 hover:scale-110"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-blue-50">
            {messages.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <div className="text-4xl mb-2">👋</div>
                <p className="font-semibold">Hello! How can we help you?</p>
                <p className="text-sm mt-2">Ask us about our services, pricing, or location</p>
              </div>
            )}
            
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                } animate-slide-up`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl shadow-md transition-all hover:shadow-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-br-none'
                      : 'bg-white text-gray-900 rounded-bl-none border border-gray-200'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                  <span className={`text-xs opacity-70 mt-1 block ${message.sender === 'user' ? 'text-orange-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-900 px-4 py-3 rounded-2xl rounded-bl-none shadow-md border border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t-2 border-gray-200 p-4 bg-gradient-to-b from-white to-gray-50 rounded-b-3xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-4 py-2 rounded-xl transition-all font-medium transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}