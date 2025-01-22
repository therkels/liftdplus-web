import Link from 'next/link';


export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex">
        <li className="mr-6">
          <Link href="/" className="text-white hover:text-gray-400 font-bold">
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/about" className="text-white hover:text-gray-400 font-bold">
            About
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/contact" className="text-white hover:text-gray-400 font-bold">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
