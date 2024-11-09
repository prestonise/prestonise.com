"use client";

import { Typography } from "@material-tailwind/react";

const LINKS = [
  {name: "LinkedIn", url: "https://www.linkedin.com/in/prestonise"},
  {name: "GitHub", url: "https://www.github.com/prestonise"},
  {name: "Instagram", url: "https://www.instagram.com/prestonise"},
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 border-t border-gray-200 py-6 md:justify-between">
          <Typography variant="small" className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Michael Prestonise
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link.name}>
                <Typography
                  as="a"
                  href={link.url}
                  target="_blank"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link.name}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
