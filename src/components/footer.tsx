import React from 'react';
import { Twitter, Globe } from 'lucide-react'; // Twitter icon + a placeholder for Bluesky

type FooterProps = {
  isNight: boolean
}

const Footer: React.FC<FooterProps> = ({isNight}) => {
  return (
    <footer className={`w-full py-12 px-6 ${isNight ? 'dark-footer': 'light-footer'}`}>
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
        <div className={`text-sm text-center md:text-right ${isNight ? 'text-gray-400' : 'text-gray-800'}`}>
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