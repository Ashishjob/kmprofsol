"use client";
import { Inter } from "next/font/google";
import { useState, FormEvent } from "react";
import { SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { Mail, Clock, ChevronLeft } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={`min-h-screen bg-navy-blue ${inter.className}`}>
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative container mx-auto px-4 py-16">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ChevronLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <div>
            <div className="mb-12">
              <h1 className="text-8xl font-serif text-white mb-4">KM</h1>
              <div className="h-1 w-24 bg-white/20"></div>
            </div>
            
            <h2 className="text-4xl font-serif text-white mb-12">Customer Service</h2>
            
            <div className="space-y-8 text-lg">
              <a 
                href="https://www.linkedin.com/company/k-m-professional-solutions" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <SiLinkedin className="w-5 h-5" />
                </div>
                <span>K.M. Professional Solutions</span>
              </a>
              
              <a 
                href="mailto:kmprofsol@gmail.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>kmprofsol@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <span>Monday - Thursday<br />9:00am - 4:00pm CST</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                    First name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                    Last name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-white text-navy-blue rounded-lg font-medium hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>

              {typeof window !== 'undefined' && submitStatus === 'success' && (
                <div className="text-green-400 text-center bg-green-400/10 p-4 rounded-lg">
                  Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}
              {typeof window !== 'undefined' && submitStatus === 'error' && (
                <div className="text-red-400 text-center bg-red-400/10 p-4 rounded-lg">
                  Failed to send message. Please try again or email us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}