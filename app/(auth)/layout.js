import React from 'react'

const layout = ({children}) => {
  return (
    <div
    className='flex flex-col min-h-screen items-center justify-center'
    >
        {children}
    </div>
  )
}

export default layout