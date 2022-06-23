import { Link } from 'react-router-dom';
import leftArrow from '../assets/svg/left-arrow.svg';
import settingsGear from '../assets/svg/settings-gear.svg';
import microphone from '../assets/svg/microphone.svg';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-pink-600 py-2 px-4">
      <Link to="/" className="text-blue-600 hover:text-blue-500">
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
