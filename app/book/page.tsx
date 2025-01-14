"use client";
import { Inter } from "next/font/google";
import { JSX, useState } from "react";
import Link from "next/link";
import { ChevronLeft, X } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

interface Service {
  icon: JSX.Element;
  title: string;
  duration: string;
  price: string;
  description: string;
  paymentInstructions: {
    venmo?: string;
    zelle?: string;
    paypal?: string;
  };
  type?: string;
}

export default function BookPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      ),
      title: "Digital Presence Check",
      duration: "48 hr",
      price: "$8",
      type: "Online Screening",
      description: "Dive into all publicly online information about yourself, analyzing your digital footprint. Please share all social media/online profile pages.",
      paymentInstructions: {
        venmo: "@kmprofsol",
        zelle: "281-967-0607",
        paypal: "dkalathoor0"
      }
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Resume Revision",
      duration: "48 hr",
      price: "$10",
      type: "Email Submission",
      description: "Professional resume review and feedback with detailed suggestions for improvement.",
      paymentInstructions: {
        venmo: "@kmprofsol",
        zelle: "281-967-0607",
        paypal: "dkalathoor0"
      }
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Resume Edit/Rewrite",
      duration: "48 hr",
      price: "$20",
      type: "Email Submission",
      description: "Send your resume in via email to kmprofsol@gmail.com for us to edit content and bullet points, rewriting sections where needed. Your resume will be sent back in 48 business hours. Please submit a MS Word or Google Doc.",
      paymentInstructions: {
        venmo: "@kmprofsol",
        zelle: "281-967-0607",
        paypal: "dkalathoor0"
      }
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Career Chat",
      duration: "1 hr",
      price: "$15",
      type: "MS Teams",
      description: "Talk through the broad world of business and technology, exploring career paths and education.",
      paymentInstructions: {
        venmo: "@kmprofsol",
        zelle: "281-967-0607",
        paypal: "dkalathoor0"
      }
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Mock Interview",
      duration: "1 hr",
      price: "$20",
      type: "MS Teams",
      description: "A 1 hour session to prepare for a behavioral interview, cycling through STAR and character assessment questions. Please make an appointment via the Calendly plugin on the booking page.",
      paymentInstructions: {
        venmo: "@kmprofsol",
        zelle: "281-967-0607",
        paypal: "dkalathoor0"
      }
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Mock Interview - Case Inclusive",
      duration: "1 hr 30 min",
      price: "$25",
      type: "MS Teams",
      description: "A 1.5 hour session to prepare for a behavioral and case interview, cycling through STAR, character assessment and scenario based questions. Please make an appointment via the Calendly plugin on the booking page.",
      paymentInstructions: {
        venmo: "@kmprofsol",
        zelle: "281-967-0607",
        paypal: "dkalathoor0"
      }
    }
  ];

  return (
    <main className={`min-h-screen bg-navy-blue text-white ${inter.className}`}>

      <div className="relative container mx-auto px-4 py-16">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ChevronLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-serif mb-16 text-center">Our Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white/5 backdrop-blur-sm text-white p-8 rounded-2xl flex flex-col items-center text-center cursor-pointer hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="mb-6 text-white/80 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    {service.duration}
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    {service.price}
                  </span>
                </div>
                <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                  Click to view details
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <h2 className="text-5xl font-serif mb-16 text-center">Schedule a Session</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <iframe 
                src="https://kmprofsol-wixsite-com.filesusr.com/html/aa20df_5e796fbe2dccc9e71a28a11c2b2deb36.html" 
                className="w-full h-screen rounded-lg" 
                title="Booking Page" 
              />
            </div>
          </div>
        </div>

        {selectedService && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
               onClick={(e) => e.target === e.currentTarget && setSelectedService(null)}>
            <div className="bg-navy-blue border border-white/10 text-white p-8 rounded-2xl max-w-2xl w-full relative animate-fade-up">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h2 className="text-3xl font-serif mb-8">{selectedService.title}</h2>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  {selectedService.duration}
                </div>
                <div className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  {selectedService.price}
                </div>
                {selectedService.type && (
                  <div className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    {selectedService.type}
                  </div>
                )}
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/5 p-6 rounded-xl">
                  <h3 className="text-xl font-medium mb-4">Service Description</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-xl">
                  <h3 className="text-xl font-medium mb-4">Payment Methods</h3>
                  <div className="space-y-3">
                    {selectedService.paymentInstructions.venmo && (
                      <div className="flex items-center gap-3 text-gray-300">
                        <span className="font-medium">Venmo:</span>
                        <span>{selectedService.paymentInstructions.venmo}</span>
                      </div>
                    )}
                    {selectedService.paymentInstructions.zelle && (
                      <div className="flex items-center gap-3 text-gray-300">
                        <span className="font-medium">Zelle:</span>
                        <span>{selectedService.paymentInstructions.zelle}</span>
                      </div>
                    )}
                    {selectedService.paymentInstructions.paypal && (
                      <div className="flex items-center gap-3 text-gray-300">
                        <span className="font-medium">PayPal:</span>
                        <span className="text-wrap">{selectedService.paymentInstructions.paypal}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}