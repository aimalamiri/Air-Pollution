import { Link } from 'react-router-dom';
import leftArrow from '../assets/svg/left-arrow.svg';
import settingsGear from '../assets/svg/settings-gear.svg';
import microphone from '../assets/svg/microphone.svg';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-bl from-blue-300 to-blue-700 py-2 px-4">
      <Link to="/">
        <img src={leftArrow} alt="icon" className="h-4" />
      </Link>
      <span className="text-white font-lato">Select a City</span>
      <div className="flex gap-4">
        <img src={microphone} alt="icon" className="h-4" />
        <img src={settingsGear} alt="icon" className="h-4" />
      </div>
    </nav>
  );
}
