'use client'
import React from 'react'
import {FiHome, FiPlus} from "react-icons/fi"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/', icon: <FiHome /> },
    {
      name: 'Create',
      href: '/create',
      icon: <FiPlus />,
    },
  ];
const SideLinks = () => {
    const pathname = usePathname();

  return (
    <>
          {links.map((link) => {
        return (
          <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-gray-100 hover:text-orange-400 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              ' text-primary': pathname === link.href,
            },
          )}
        >
            {link.icon}
          <p className="hidden md:block">{link.name}</p>
        </Link>
        );
      })}
    </>
  )
}

export default SideLinks