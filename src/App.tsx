import React, { useState, useEffect } from 'react';
import { ProfileHeader } from './components/ProfileHeader';
import { LinkButton } from './components/LinkButton';
import { SocialLinks } from './components/SocialLinks';
import { ContactModal } from './components/ContactModal';
import { 
  Globe, 
  Briefcase, 
  BookOpen, 
  Camera, 
  Music, 
  MessageCircle,
  Coffee,
  Heart,
  Sparkles
} from 'lucide-react';

const profileData = {
  name: "Valerie Pola",
  bio: "Creative Designer & Digital Artist • Building beautiful experiences",
  avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
  location: "San Francisco, CA"
};

const links = [
  {
    title: "Portfolio Website",
    url: "https://example.com/portfolio",
    icon: <Globe size={24} className="text-white" />,
    description: "View my creative work and projects",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Design Services",
    url: "https://example.com/services",
    icon: <Briefcase size={24} className="text-white" />,
    description: "Professional design consultations",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Photography",
    url: "https://example.com/photography",
    icon: <Camera size={24} className="text-white" />,
    description: "Capturing moments and memories",
    gradient: "from-green-500/20 to-teal-500/20"
  },
  {
    title: "Creative Blog",
    url: "https://example.com/blog",
    icon: <BookOpen size={24} className="text-white" />,
    description: "Thoughts on design and creativity",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Music Playlist",
    url: "https://spotify.com/playlist",
    icon: <Music size={24} className="text-white" />,
    description: "My current creative inspirations",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    title: "Buy Me Coffee",
    url: "https://buymeacoffee.com/example",
    icon: <Coffee size={24} className="text-white" />,
    description: "Support my creative journey",
    gradient: "from-yellow-500/20 to-amber-500/20"
  }
];

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)`
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-float-delayed"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-md">
        <ProfileHeader {...profileData} />
        
        <div className="space-y-4 mb-8">
          {links.map((link, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <LinkButton {...link} />
            </div>
          ))}
          
          <div className="animate-slide-up" style={{ animationDelay: `${links.length * 100}ms` }}>
            <button
              onClick={() => setIsContactOpen(true)}
              className="group relative block w-full p-4 rounded-2xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 
                         backdrop-blur-md border border-white/30 shadow-lg hover:shadow-2xl 
                         transform hover:-translate-y-1 transition-all duration-300 
                         hover:border-white/40 hover:from-purple-500/40 hover:to-pink-500/40"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 p-2 rounded-xl bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-lg group-hover:text-white transition-colors duration-300">
                    Get In Touch
                  </h3>
                  <p className="text-white/70 text-sm mt-1 group-hover:text-white/90 transition-colors duration-300">
                    Let's collaborate on something amazing
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Heart size={20} className="text-pink-400 group-hover:text-pink-300 group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>
            </button>
          </div>
        </div>

        <SocialLinks />

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-2 text-white/50 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-pink-400 animate-pulse" />
            <span>using React & Tailwind</span>
          </div>
          <div className="flex items-center justify-center space-x-1 mt-2 text-white/30 text-xs">
            <Sparkles size={12} />
            <span>© 2025 Valerie Pola. All rights reserved.</span>
            <Sparkles size={12} />
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}

export default App;