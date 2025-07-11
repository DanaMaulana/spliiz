import React from 'react';

interface LinkButtonProps {
  title: string;
  url: string;
  icon: React.ReactNode;
  description?: string;
  gradient?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ 
  title, 
  url, 
  icon, 
  description,
  gradient = "from-white/10 to-white/5"
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block w-full p-4 rounded-2xl bg-gradient-to-r ${gradient} 
                 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl 
                 transform hover:-translate-y-1 transition-all duration-300 
                 hover:border-white/30 hover:bg-white/20`}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 p-2 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-lg group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          {description && (
            <p className="text-white/70 text-sm mt-1 group-hover:text-white/90 transition-colors duration-300">
              {description}
            </p>
          )}
        </div>
        <div className="flex-shrink-0">
          <svg 
            className="w-5 h-5 text-white/50 group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-blue-500/0 
                      group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-blue-500/10 
                      transition-all duration-300 pointer-events-none"></div>
    </a>
  );
};