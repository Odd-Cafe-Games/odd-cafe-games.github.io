import React from 'react';

type HeaderProps = {
  onToggleFunc: () => void;
};

const Header: React.FC<HeaderProps> = ({onToggleFunc}) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-transparent text-white" style={{zIndex: 10}}>
      <nav className="flex space-x-4">
        <button className="px-4 py-2 rounded-md hover:bg-neutral-900 transition" onClick={onToggleFunc}>
          Odd Cafe Games
        </button>
        <a href="#Projects" className="px-4 py-2 rounded-md hover:bg-neutral-900 transition">
          Projects
        </a>
      </nav>
    </header>
  );
};

export default Header;