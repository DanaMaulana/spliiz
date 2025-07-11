import React from 'react';
import { Instagram, Twitter, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com',
    icon: <Instagram size={20} />,
    color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com',
    icon: <Twitter size={20} />,
    color: 'hover:bg-blue-500'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: <Linkedin size={20} />,
    color: 'hover:bg-blue-600'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com',
    icon: <Github size={20} />,
    color: 'hover:bg-gray-800'
  },
  {
    platform: 'Email',
    url: 'mailto:contact@example.com',
    icon: <Mail size={20} />,
    color: 'hover:bg-red-500'
  }
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="mt-8">
      <h3 className="text-white/80 text-center text-sm font-medium mb-4 uppercase tracking-wider">
        Connect With Me
      </h3>
      <div className="flex justify-center space-x-4">
        {socialLinks.map((social, index) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                       text-white hover:text-white hover:scale-110 transform transition-all duration-300 
                       hover:shadow-lg ${social.color} group`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {social.icon}
            <span className="sr-only">{social.platform}</span>
          </a>
        ))}
      </div>
    </div>
  );
};