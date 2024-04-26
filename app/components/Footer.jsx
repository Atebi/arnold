"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Newsletter from "./Newsletter";

const Footer = () => {
  const currentPath = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <section
      // id="newsletter"
      className="mx-auto max-w-screen-2xl bg-global-bg bg-cover bg-fixed bg-center"
    >
      <Newsletter />
      {/* FOOTER */}
      <footer className="container_pad bg-white pb-10 pt-20 text-center text-darkBlue">
        {/* Logo n name */}
        <div className="mx-auto flex w-fit gap-0.5">
          <Image
            src="/logo.svg"
            alt="Arnold Peckham's Logo"
            width={28}
            height={24}
          />
          <span className="text-2xl font-medium">ARNOLD PECKHAM</span>
        </div>
        {/* title */}
        <h5 className="mt-4 text-lg font-light">
          Finance and Innovation Writer, Speaker and Advisor
        </h5>
        {/* social-icons */}
        <div className="mx-auto flex w-full max-w-56 justify-center gap-5 rounded bg-white px-3 py-5">
          <Link href="#" className="hover:opacity-65 active:opacity-100">
            <Image
              src="/facebook.svg"
              alt="Facebook icon"
              width={40}
              height={40}
              // sizes="100vw (max-width: 896px) 45vw"
              // className="mx-auto h-auto w-full max-w-[240px] md:mx-0 lg:max-w-xs"
              // priority={true}
            />
          </Link>
          <Link href="#" className="hover:opacity-65 active:opacity-100">
            <Image
              src="/x.svg"
              alt="Twitter-X icon"
              width={40}
              height={40}
              // sizes="100vw (max-width: 896px) 45vw"
              // className="mx-auto h-auto w-full max-w-[240px] md:mx-0 lg:max-w-xs"
              // priority={true}
            />
          </Link>
          <Link href="#" className="hover:opacity-65 active:opacity-100">
            {" "}
            <Image
              src="/instagram.svg"
              alt="Instagram icon"
              width={40}
              height={40}
              // sizes="100vw (max-width: 896px) 45vw"
              // className="mx-auto h-auto w-full max-w-[240px] md:mx-0 lg:max-w-xs"
              // priority={true}
            />
          </Link>
        </div>

        {/* LINKS */}
        <ul
          className={`mx-auto mt-2 flex w-full max-w-fit flex-wrap justify-center gap-2 p-4 font-medium uppercase md:space-x-4 rtl:space-x-reverse`}
        >
          <li>
            <Link
              href="/"
              className={`${currentPath === "/" ? "text-primary" : "hover:text-primary hover:opacity-60 active:opacity-100"} block rounded px-3 py-2`}
              // aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/books"
              className={`${currentPath === "/books" ? "text-primary" : "hover:text-primary hover:opacity-60 active:opacity-100"} block rounded px-3 py-2`}
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${currentPath === "/about" ? "text-primary" : "hover:text-primary hover:opacity-60 active:opacity-100"} block rounded px-3 py-2`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="contact"
              className={`${currentPath === "/contact" ? "text-primary" : "hover:text-primary hover:opacity-60 active:opacity-100"} block rounded px-3 py-2`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="#newsletter"
              className="block rounded bg-primary px-3 py-2 text-white ring-1 ring-sky-300 hover:bg-darkBlue focus:ring-4 md:border-0"
            >
              Sign up
            </Link>
          </li>
        </ul>

        {/* copyright */}
        <div className="mb-2 mt-32 flex justify-center">
          <Link href="/" className="hover:opacity-60 active:opacity-100">
            <Image
              src="/logo.svg"
              alt="Arnold Peckham's Logo"
              width={20}
              height={16}
            />
          </Link>
          <span className="text-sm">ARNOLD PECKHAM {currentYear}©</span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
