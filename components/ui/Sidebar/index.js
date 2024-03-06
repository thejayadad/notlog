'use client'
import Link from 'next/link'
import React from 'react'
import SideLinks from './SideLinks'

const Sidebar = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
    <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md border  p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-primary md:w-40">
          NoteLog
        </div>
      </Link> 
      <div className="flex grow bg-transparent flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2  border border-r-1">
        <SideLinks />
        <div className="hidden h-auto w-full grow rounded-md  md:block"></div>
      
    </div>       
    </div>
  )
}

export default Sidebar