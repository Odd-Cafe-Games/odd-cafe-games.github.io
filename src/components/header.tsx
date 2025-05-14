import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-transparent text-white">
      <nav className="flex space-x-4">
        <div className="px-4 py-2 rounded-md transition">
          Odd Cafe Games
        </div>
        <a href="#Projects" className="px-4 py-2 hover:bg-neutral-900 transition">
          Projects
        </a>
      </nav>
    </header>
  );
};

export default Header;