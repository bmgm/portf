"use client";
import { useState } from "react";
import { navLinksData } from "../data/data.js";
import Link from "next/link.js";
import NavLink from "./NavLink.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-12 bg-teal-600 flex justify-between items-center px-4 sm:px-8 md:px-20, lg:px-48 relative">
      {/* Logo */}
      <div className="z-40">
        <Link href="/">✨MB</Link>
      </div>
      <mgmLink></mgmLink>
      <mguk />
      {/* desktop menu */}
      <div className="hidden md:flex gap-4">
        {navLinksData.map((link) => {
          return <NavLink link={link} key={link.id} />;
        })}
      </div>

      {/* Responsive menu - Nav links */}
      <div className="md:hidden">
        <button
          className="flex flex-col gap-2 relative z-50"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <div className="w-7 h-0.5 bg-white rounded-lg"></div>
          <div className="w-7 h-0.5 bg-white rounded-lg"></div>
          <div className="w-7 h-0.5 bg-white rounded-lg"></div>
        </button>
        {open && (
          <div className="h-screen w-screen absolute top-0 left-0 bg-gray-900 items-center justify-center flex flex-col gap-12 text-2xl">
            {navLinksData.map((l) => {
              return (
                <Link key={l.id} href={l.url}>
                  {l.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
