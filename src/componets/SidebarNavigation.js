import React from 'react'

const SidebarNavigation = () => {
    return (
        <div id='Sidebar' className=' hidden text-white  w-1/6 md:flex flex-col items-center justify-start'>
            <div className=' mt-40 sticky'>
                <p className=' px-10 py-8 text-3xl font-poppins text-slate-400 ease-out duration-100 hover:text-white hover:scale-105 cursor-pointer'>Channels</p>
                <p className=' px-10 py-8 text-3xl font-poppins text-slate-400 ease-out duration-100 hover:text-white hover:scale-105 cursor-pointer'>Languages</p>
                <p className=' px-10 py-8 text-3xl font-poppins text-slate-400 ease-out duration-100 hover:text-white hover:scale-105 cursor-pointer'>Genres</p>
            </div>
        </div>
    )
}

export default SidebarNavigation
