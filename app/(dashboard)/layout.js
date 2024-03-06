import Header from '@/components/ui/Header'
import Sidebar from '@/components/ui/Sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">

    <div className="w-full flex-none md:w-64">
        <Sidebar />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
      <Header />
        {children}</div>
    </div>
  )
}

export default layout