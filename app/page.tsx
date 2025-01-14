import { Inter } from "next/font/google";
import { Mail } from "lucide-react";
import Image from "next/image";
import { SiLinkedin } from 'react-icons/si';
import { FaUsers, FaSeedling, FaHandshake, FaLightbulb, FaHandPaper } from 'react-icons/fa';
const inter = Inter({ subsets: ["latin"] });

interface TeamMember {
  name: string;
  role: string;
  image: string;
  offers: number;
  interviews: number;
  linkedin: string;
  description: string;
}

export default function Home() {

  const teamMembers: TeamMember[] = [
    {
      name: "DANIEL KALATHOOR",
      role: "Co-Founder",
      image: "/daniel.svg",
      offers: 9,
      interviews: 40,
      linkedin: "https://www.linkedin.com/in/danielkalathoor0/",
      description: "Hello! I'm currently a senior in the UH Bauer Honors program majoring in MIS. Currently, I'm interning at BMC Software in the IT Assurance function. Previously, I was an IT Analyst Intern for Apache Corporation - Summer 2024 where I rotated between Data Analytics, Database Administration, IT Services, and Network Teams. Post-graduation, I will return to Apache as a full-time IT Analyst I. I co-founded KM Professional Solutions due to my innate desire to help people. I hope to see everyone achieve their professional goals and with KM, we provide the resources for them to do just that."
    },
    {
      name: "GRANT MOON",
      role: "Co-Founder",
      image: "/grant.svg",
      offers: 7,
      interviews: 30,
      linkedin: "https://www.linkedin.com/in/grant-moon/",
      description: "Hey everyone! I am studying at the University of Houston in Management Information Systems aiming to graduate in Fall 2025. I have done 3 internships with a fourth starting in the Summer of 2025 as a Tech Consultant Intern for Microsoft. I have received interviews with all the Big Four companies and received offers from the ones I accepted interviews with. Through the journey of my professional growth, I gained knowledge and a love for professional development and began to help others close to my circle. Co-founding K.M Professional Solutions allowed me to help those who want to achieve what I thought was impossible for me."
    }
  ];

  return (
    <main className={`min-h-screen ${inter.className}`}>
      <section className="bg-gray-100 py-20" style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4 h-screen flex flex-col justify-center">
          <div className="text-center mb-12">
        <h1 className="text-9xl font-serif mb-4 text-navy-blue">KM</h1>
        <p className="text-4xl font-semibold text-navy-blue">PROFESSIONAL SOLUTIONS</p>
          </div>
          <div className="flex justify-center gap-4">
            <a href="/book" rel="noopener noreferrer">
            <button className="bg-navy-blue text-white px-8 py-3 rounded-full hover:bg-white hover:text-navy-blue border-2 border-navy-blue hover:animate-pulse">
              Book Now
            </button>
          </a>
          <a href="/contact" rel="noopener noreferrer">
            <button className="bg-navy-blue text-white px-8 py-3 rounded-full hover:bg-white hover:text-navy-blue hover:border-2 border-navy-blue hover:animate-pulse">
              Contact Us
            </button>
          </a>
          </div>
        </div>
      </section>

      <section className="bg-navy-blue text-white py-20">
        <div className="container mx-auto px-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="mb-16 last:mb-0">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-64 h-64 rounded-lg overflow-hidden bg-gray-200">
                  <Image src={member.image} alt={member.name} className="w-full h-full object-cover" width={100} height={100} />
                  <div className="w-full h-full bg-gray-300" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-row gap-4">
                    <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <SiLinkedin size={24} className="mt-1" />
                    </a>
                  </div>
                  <div className="flex gap-16 mb-4">
                    <div>
                      <div className="text-6xl font-bold">{member.offers}</div>
                      <div className="text-xl">OFFERS</div>
                    </div>
                    <div>
                      <div className="text-6xl font-bold">{member.interviews}</div>
                      <div className="text-xl">PLUS INTERVIEWS</div>
                    </div>
                  </div>
                  <p className="text-gray-200">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif mb-8 text-navy-blue">The K.M. Story</h2>
            <p className="text-gray-700 mb-16">
              The idea for KM came to life during a late-night brainstorming session between two friends who shared an innate passion for helping others and professional growth. Observing the lack of resources and inefficiencies in the world of professional development, they realized there was a gap in the market for a real-world, modern and practical method of helping college students meet their professional goals. With their combined expertise in corporate recruiting and professional experience, they decided to launch KM Professional Solutions, offering numerous services including career chats, resume reviews as well as mock interviews.
            </p>
            
            <h2 className="text-4xl font-serif mb-8 text-navy-blue">The K.M. Mission</h2>
            <p className="text-gray-700 text-left mb-16">
              Empowering individuals to unlock their full potential and achieve their dream careers by providing personalized, expert-driven services that transform job seekers into confident, standout candidates
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              {[
              { icon: FaUsers, label: "Community" },
              { icon: FaSeedling, label: "Growth" },
              { icon: FaHandshake, label: "Commitment" },
              { icon: FaLightbulb, label: "Innovation" },
              { icon: FaHandPaper, label: "Accountability" }
              ].map(({ icon: Icon, label }) => (
              <div key={label} className="text-center text-navy-blue w-24">
                <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                <Icon size={24} />
                </div>
                <div className="text-sm">{label}</div>
              </div>
              ))}
            </div>

            <p className="text-gray-700 text-left mb-8">
              Our mission is to empower business students by providing tailored professional development and career preparation resources. As current college students who have navigated the same challenges, we are committed to helping our peers confidently establish themselves in the professional world.
            </p>
            <p className="text-gray-700 text-left">
              Through community-driven support, shared knowledge, and a commitment to growth, we aim to equip the next generation of professionals with the tools and skills needed to unlock career opportunities and succeed in their chosen fields
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-navy-blue text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex sm:flex-col md:flex-row justify-between gap-8">
            <a href="https://www.linkedin.com/company/k-m-professional-solutions" className="flex items-center gap-2 text-xs">
              <SiLinkedin size={24} />
              K.M. PROFESSIONAL SOLUTIONS
            </a>
            <a href="mailto:kmprofsol@gmail.com" className="flex items-center gap-2 text-xs">
              <Mail size={24} />
              KMPROFSOL@GMAIL.COM
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
