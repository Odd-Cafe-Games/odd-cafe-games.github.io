import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

type HeaderProps = {
  onToggleFunc: () => void;
  isNight: boolean;
};

const Header: React.FC<HeaderProps> = ({onToggleFunc, isNight}) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-transparent text-white" style={{zIndex: 10}}>
      <nav className="flex space-x-4">
        <button className="absolute top-6 right-6 hover:scale-110 transition" onClick={onToggleFunc}>
          {isNight ? <MoonIcon className="h-8 w-8"/> : <SunIcon className="h-8 w-8"/>}
        </button>
      </nav>
    </header>
  );
};

export default Header;