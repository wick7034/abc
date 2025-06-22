import React, { useState } from 'react';
import { 
  Shield, 
  Flame, 
  Droplets, 
  CreditCard, 
  Lock, 
  Eye,
  Clock,
  UserCheck,
  ArrowRight,
  Check,
  Star,
  ChevronLeft,
  ChevronRight,
  Mail,
  Twitter,
  Github,
  Linkedin,
  Binary
} from 'lucide-react';
import BipBinary from './components/BipBinary';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'bip-binary'>('home');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Steelphrase gives me complete peace of mind. The build quality is exceptional and it fits perfectly in my wallet.",
      author: "Alex Chen",
      role: "Crypto Investor"
    },
    {
      text: "Finally, a seed phrase storage solution that doesn't compromise on security or convenience. Highly recommended.",
      author: "Sarah Williams",
      role: "Blockchain Developer"
    },
    {
      text: "The premium titanium version is absolutely bulletproof. Worth every penny for protecting my digital assets.",
      author: "Michael Rodriguez",
      role: "Portfolio Manager"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (currentPage === 'bip-binary') {
    return <BipBinary onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Steelphrase
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-slate-300 hover:text-cyan-400 transition-colors">Features</a>
              <a href="#products" className="text-slate-300 hover:text-cyan-400 transition-colors">Products</a>
              <a href="#how-it-works" className="text-slate-300 hover:text-cyan-400 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-slate-300 hover:text-cyan-400 transition-colors">Reviews</a>
              <button 
                onClick={() => setCurrentPage('bip-binary')}
                className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Binary className="h-4 w-4" />
                <span>BIP Binary</span>
              </button>
            </nav>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Cold Hard
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Storage
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                Steelphrase is an indestructible stainless steel plate for offline seed phrase storage. 
                Protect your crypto assets with military-grade durability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Secure My Steelphrase</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border border-slate-600 hover:border-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-slate-800/50">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg p-6 shadow-2xl">
                  <div className="bg-slate-800 rounded p-4 border border-slate-600">
                    <div className="text-cyan-400 font-mono text-sm space-y-2">
                      <div>word1 word2 word3 word4</div>
                      <div>word5 word6 word7 word8</div>
                      <div>word9 word10 word11 word12</div>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-slate-300 text-sm">
                    Steelphrase™ Premium
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Built for Eternity
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Engineered with premium materials and precision manufacturing for maximum security and durability.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:transform hover:scale-105">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-lg w-fit mb-6 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all">
                <Flame className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fireproof & Waterproof</h3>
              <p className="text-slate-300 leading-relaxed">
                Withstands extreme temperatures up to 1,400°C and complete submersion. 
                Your seed phrase survives natural disasters and accidents.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:transform hover:scale-105">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-lg w-fit mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tamper-evident & Durable</h3>
              <p className="text-slate-300 leading-relaxed">
                Precision-etched stainless steel construction with tamper-evident seals. 
                Built to last centuries without degradation.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:transform hover:scale-105">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-lg w-fit mb-6 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Credit-card Sized & Portable</h3>
              <p className="text-slate-300 leading-relaxed">
                Fits perfectly in your wallet or safe. Discreet, portable, and always accessible 
                when you need to recover your crypto assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* In-context Photo */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-900 to-amber-800 rounded-2xl p-12 shadow-2xl">
                <div className="bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-slate-800 rounded p-3 m-2 border border-slate-600">
                    <div className="text-cyan-400 font-mono text-xs space-y-1">
                      <div>word1 word2 word3</div>
                      <div>word4 word5 word6</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Fits seamlessly
                </span>
                <br />
                <span className="text-white">into your life</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Designed to integrate naturally with your daily carry. Store it in your wallet, 
                safe, or anywhere you keep your most important documents.
              </p>
              <div className="flex items-center space-x-4 text-slate-300">
                <Check className="h-5 w-5 text-green-400" />
                <span>TSA-friendly travel</span>
              </div>
              <div className="flex items-center space-x-4 text-slate-300">
                <Check className="h-5 w-5 text-green-400" />
                <span>Wallet-compatible thickness</span>
              </div>
              <div className="flex items-center space-x-4 text-slate-300">
                <Check className="h-5 w-5 text-green-400" />
                <span>Discreet and professional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cold Storage */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Why Cold Storage?
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The most secure way to protect your cryptocurrency investments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-full w-fit mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Offline</h3>
              <p className="text-slate-300 text-sm">Completely disconnected from the internet and digital threats</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all text-center group">
              <div className="bg-gradient-to-br from-red-500 to-pink-500 p-3 rounded-full w-fit mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Hack-proof</h3>
              <p className="text-slate-300 text-sm">No software vulnerabilities or remote access points</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all text-center group">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-full w-fit mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Permanent</h3>
              <p className="text-slate-300 text-sm">Lasts centuries without maintenance or updates</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-3 rounded-full w-fit mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all">
                <UserCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Private</h3>
              <p className="text-slate-300 text-sm">Only you have access to your recovery phrase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Options */}
      <section id="products" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Choose Your Protection Level
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From essential security to ultimate protection, we have a Steelphrase for every need.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Standard</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">$79</div>
                <p className="text-slate-300">Essential Protection</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">304 Stainless Steel</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">12/24 Word Capacity</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">Etching Tool Included</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">Lifetime Warranty</span>
                </li>
              </ul>
              <button className="w-full bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold transition-all">
                Choose Standard
              </button>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border-2 border-cyan-400 rounded-xl p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">$149</div>
                <p className="text-slate-300">Advanced Security</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">316L Marine Grade Steel</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">24 Word Capacity</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">Precision Engraving Kit</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">Tamper-evident Seals</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">Premium Leather Case</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-6 py-3 rounded-lg font-semibold transition-all">
                Choose Premium
              </button>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Titanium</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">$299</div>
                <p className="text-slate-300">Ultimate Protection</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">Grade 5 Titanium</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">24 Word Capacity</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">Laser Engraving Service</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">Biometric Lock Case</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">White Glove Setup</span>
                </li>
              </ul>
              <button className="w-full bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold transition-all">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Three simple steps to ultimate seed phrase security
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Buy</h3>
              <p className="text-slate-300 leading-relaxed">
                Choose your Steelphrase model and receive it with premium packaging and setup instructions.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Etch/Punch</h3>
              <p className="text-slate-300 leading-relaxed">
                Use the included precision tools to permanently etch your seed phrase into the steel plate.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Store Securely</h3>
              <p className="text-slate-300 leading-relaxed">
                Place in your safe, bank deposit box, or anywhere secure. Your crypto is now protected forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Trusted by Crypto Investors
            </h2>
            <p className="text-xl text-slate-300">
              See what our customers say about their Steelphrase experience
            </p>
          </div>
          <div className="relative">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-center text-slate-300 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="text-center">
                <div className="font-bold text-white text-lg">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-cyan-400">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-slate-800 hover:bg-slate-700 p-3 rounded-full border border-slate-600 transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-slate-800 hover:bg-slate-700 p-3 rounded-full border border-slate-600 transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-cyan-400' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-cyan-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Steelphrase
                </span>
              </div>
              <p className="text-slate-300">
                Cold Hard Storage for Your Crypto. Protecting digital assets with physical security.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Products</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Standard</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Premium</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Titanium</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Setup Guide</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Warranty</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-slate-300 mb-4">Stay updated on crypto security best practices</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-slate-800 border border-slate-600 rounded-l-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-4 py-2 rounded-r-lg transition-all">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm">
              © 2024 Steelphrase. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-slate-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;