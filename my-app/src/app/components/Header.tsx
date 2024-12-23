"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container mx-auto pt-8 flex justify-between items-center">
      <p className="text-5xl text-white font-semibold">PORTFOLIO</p>

      {/* Desktop Menu */}
      <ul className="flex space-x-6 gap-8 md:gap-12 lg:gap-16 hidden md:flex">
        <li>
          <Link href="/" className="text-white hover:text-purple-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-purple-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/skills" className="text-white hover:text-purple-400">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-white hover:text-purple-400">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-purple-400">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white text-3xl focus:outline-none"
        >
          {isMenuOpen ? (
            <span>&#10005;</span> // Close icon
          ) : (
            <span>&#9776;</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 right-0 w-64 bg-purple-800 text-white p-6 rounded-lg shadow-lg">
          <ul className="space-y-6">
            <li>
              <Link href="/" className="hover:text-purple-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/skills" className="hover:text-purple-400">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-purple-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
