"use client";

import React from "react";
import Image from "next/image";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  DocumentTextIcon,
  UserGroupIcon,
  CodeBracketSquareIcon,
  CameraIcon,
  ChatBubbleLeftEllipsisIcon,
  MusicalNoteIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Blog",
    icon: DocumentTextIcon,
    href: "https://blog.prestonise.com",
  },
  {
    name: "LinkedIn",
    icon: UserGroupIcon,
    href: "https://www.linkedin.com/in/prestonise",
  },
  {
    name: "GitHub",
    icon: CodeBracketSquareIcon,
    href: "https://www.github.com/prestonise",
  },
  {
    name: "Instagram",
    icon: CameraIcon,
    href: "https://www.instagram.com/prestonise",
  },
];

const NAV_MENU_PROJECTS = [
  {
    name: "thnkr (AI learning)",
    icon: ChatBubbleLeftEllipsisIcon,
    href: "https://www.thnkr.co.uk",
  },
  {
    name: "T O R I I (generative music)",
    icon: MusicalNoteIcon,
    href: "https://open.spotify.com/artist/3PpclbrFix7shEw0J45EsR?si=CRKoxig5RmGPvNjRjBL4Sw",
  }
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href ? href : "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
        <Image
          width={24}
          height={24}
          alt="Michael Prestonise"
          src="/favicon.png"
          className="mr-3"
        />
          <Typography color="blue-gray" className="text-lg font-bold">
            Michael Prestonise
          </Typography>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
        <ul className="flex flex-col gap-4 mb-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <Typography variant="small" className="text-gray-500">
            Projects
          </Typography>
          <ul className="flex flex-col gap-4 my-4">
            {NAV_MENU_PROJECTS.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
