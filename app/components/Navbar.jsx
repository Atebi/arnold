"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import React, { useRef, useEffect, useState } from "react";

const Navbar = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navRef = useRef(null);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  // This useEffect makes the Navbar to show when scrolling up and not show when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrollingDown(prevScrollPos < currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  //Handle open and closing of our nav at sm: and maybe md:
  const handleClick = () => {
    // document.body.classList.toggle("overflow-hidden");
    // "overflow-hidden" is set to prevent the page from scrolling in the background while the side menu is open
    if (isOpen) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }

    setIsOpen(!isOpen);
  };

  // User clicks on a NAV link
  const handleLink = (e) => {
    e.preventDefault();
    const href = e.target.href;
    document.body.classList.remove("overflow-hidden");
    router.push(href);
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`${isScrollingDown ? "-translate-y-full transform" : "translate-y-0"} fixed left-0 right-0 top-0 z-50 border-gray-200 bg-white text-darkBlue shadow`}
    >
      <div className="container_pad mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center space-x-0.5 hover:opacity-60 active:opacity-100 rtl:space-x-reverse"
        >
          <Image
            src="/logo.svg"
            alt="Arnold Peckham's Logo"
            width={32}
            height={24}
          />
          <span className="self-end whitespace-nowrap text-2xl font-semibold leading-none">
            Arnold
          </span>
        </Link>

        <button
          ref={btnRef}
          onClick={handleClick}
          className="flex flex-col items-center justify-center md:hidden"
        >
          <span
            className={`block h-0.5 w-6 rounded-sm bg-gray-500 
                    transition-all duration-300 ease-out ${isOpen ? "animate-spin-fast-stop translate-y-1 rotate-45" : "-translate-y-0.5"}`}
          ></span>
          <span
            className={`my-0.5 block h-0.5 w-6 rounded-sm 
                    bg-gray-500 transition-all duration-300 ease-out ${isOpen ? "animate-spin-fast-stop opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`block h-0.5 w-6 rounded-sm bg-gray-500 
                    transition-all duration-300 ease-out ${isOpen ? "animate-spin-fast-stop -translate-y-1 -rotate-45" : "translate-y-0.5"}`}
          ></span>
        </button>

        <div
          onClick={handleClick}
          className={`${isOpen ? "fixed left-0 right-0 top-[59px] z-30 block h-screen bg-gray-500/75" : "hidden"} w-full uppercase md:static md:block md:h-auto md:w-auto  md:bg-transparent`}
          id="navbar-default"
        >
          <ul
            ref={menuRef}
            onClick={(e) => e.stopPropagation()}
            className={`${isOpen ? "ml-auto h-full w-[80vw] animate-slideInRight" : ""} flex flex-col gap-2 border border-gray-100 bg-gray-100 p-4 font-semibold md:mt-0 md:w-auto md:animate-none md:flex-row md:gap-0 md:space-x-4 md:border-0 md:bg-white md:p-0 md:font-medium rtl:space-x-reverse`}
          >
            <li>
              <Link
                href="/"
                onClick={handleLink}
                className={`${currentPath === "/" ? "text-primary" : "hover:text-primary hover:underline hover:decoration-primary/65 hover:decoration-4 hover:underline-offset-[12px] hover:opacity-60 active:opacity-100 "} block rounded px-3 py-2`}
                // aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/books"
                onClick={handleLink}
                className={`${currentPath === "/books" ? "text-primary" : "hover:text-primary hover:underline hover:decoration-primary/65 hover:decoration-4 hover:underline-offset-[12px] hover:opacity-60 active:opacity-100 "} block rounded px-3 py-2`}
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={handleLink}
                className={`${currentPath === "/about" ? "text-primary" : "hover:text-primary hover:underline hover:decoration-primary/65 hover:decoration-4 hover:underline-offset-[12px] hover:opacity-60 active:opacity-100 "} block rounded px-3 py-2`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={handleLink}
                className={`${currentPath === "/contact" ? "text-primary" : "hover:text-primary hover:underline hover:decoration-primary/65 hover:decoration-4 hover:underline-offset-[12px] hover:opacity-60 active:opacity-100 "} block rounded px-3 py-2`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#newsletter"
                onClick={handleLink}
                className="block rounded bg-primary px-3 py-2 text-white ring-1 ring-sky-300 hover:bg-darkBlue focus:ring-4 md:border-0"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
