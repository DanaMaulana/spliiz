import React from 'react';

interface ProfileHeaderProps {
  name: string;
  bio: string;
  avatar: string;
  location: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, bio, avatar, location }) => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-6 bg-green-400 rounded-full border-3 border-white shadow-lg animate-pulse"></div>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
        {name}
      </h1>
      
      <p className="text-white/80 text-lg mb-3 max-w-md mx-auto leading-relaxed">
        {bio}
      </p>
      
      <div className="flex items-center justify-center text-white/60 text-sm">
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        {location}
      </div>
    </div>
  );
};