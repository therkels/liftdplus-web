import Link from 'next/link';


export default function NavBar() {
  return (
    <nav className="bg-primary p-4">
      <ul className="flex">
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
          <Link href="/FAQ" className="text-primaryText">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};
