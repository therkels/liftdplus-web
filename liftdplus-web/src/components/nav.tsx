import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="bg-white p-4 fixed top-0 left-0 right-0">
      <ul className="flex">
        <li>
          <Link href="/" className="text-primaryText">
          <Image
                src="/logo_black.svg"
                width={50}
                height={50}
                alt="test"
              />
          </Link>
        </li>
        <li className="ml-auto mr-6">
          <Link href="/" className="text-primaryText">
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/about" className="text-primaryText">
            About
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/faq" className="text-primaryText">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};
