import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link
            href="/"
            className="text-white text-lg font-semibold hover:text-gray-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/greeting"
            className="text-white text-lg font-semibold hover:text-gray-200"
          >
            Greeting
          </Link>
        </li>
      </ul>
    </nav>
  );
}
