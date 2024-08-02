import React from 'react'

const Header = () => {
  return (
    <div className="z-10 bg-white p-4 sticky top-0 shadow-md flex flex-row justify-between items-center">
        <div className="heading-font font-bold tracking-tighter text-2xl">SuperMic</div>
        <div className="flex flex-row gap-5">
            <span>Link 1</span>
            <span>Link 2</span>
            <span>Link 3</span>
        </div>
    </div>
  )
}

export default Header