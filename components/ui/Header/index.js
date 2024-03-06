import ThemeToogle from '@/components/ThemeToggle'
import { UserButton } from '@clerk/nextjs'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import React from 'react'

const Header = () => {
  return (
   <Navbar
   className='py-8'
   isBordered
   >
    <NavbarContent>
        <NavbarBrand>
            Your Personal Note Log
        </NavbarBrand>
    </NavbarContent>
    <NavbarContent
    justify='end'
    >
        <NavbarItem>
            <ThemeToogle />
        </NavbarItem>
        <NavbarItem>
            <UserButton afterSignOutUrl='/' />
        </NavbarItem>
    </NavbarContent>
   </Navbar>
  )
}

export default Header