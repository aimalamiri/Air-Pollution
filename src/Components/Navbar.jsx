import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="text-blue-600 hover:text-blue-500">
        Back
      </Link>
    </nav>
  );
}
