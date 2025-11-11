import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">ALX Project 2 🚀</h1>
      <nav className="space-x-6">
        <Link href="/home" className="hover:text-gray-200">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-200">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
