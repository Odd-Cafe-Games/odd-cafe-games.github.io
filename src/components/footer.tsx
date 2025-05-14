import React from 'react';
import { Twitter, Globe } from 'lucide-react'; // Twitter icon + a placeholder for Bluesky

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Left side: Social links with icons */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Twitter size={20} />
            <a
              href="https://twitter.com/OddCafeGames"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              Twitter
            </a>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Globe size={20} />
            <a
              href="https://bsky.app/profile/oddcafegames.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              Bluesky
            </a>
          </div>
        </div>

        {/* Right side: Email */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>
            Email:{" "}
            <a
              href="mailto:OddCafeGames@gmail.com"
              className="hover:text-blue-300 transition"
            >
              OddCafeGames@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;