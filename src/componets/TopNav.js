import { React, useState } from 'react'
import { BsSearch } from "react-icons/bs"
import { FaBars, FaTimes } from 'react-icons/fa'
import { list } from '../datalists/data'


const TopNav = () => {

    const [nav, setNav] = useState(false)

    return (
        <div className='navbar w-full h-14 p-2 text-slate-300 flex justify-between shadow-md shadow-slate-600 fixed z-50 bg-neutral-950'>
            {/* LOGO  */}
            <div id="logo" className='ml-2 h-full w-24 bg-gradient-to-tr from-slate-800 via-black to-red-600 flex justify-center items-center rounded-2xl'>
                <p className=' uppercase text-xl font-normal'>Pro ott</p>
            </div>
            {/* DESKTOP  */}
            {/* NAVIGATION LINKS */}
            <ul id="navigation_links_container" className='w-1/3 h-full items-center justify-between hidden md:flex '>
                {list.map(items => {
                    const { id, list_name } = items
                    return (
                        <div key={id} className=' font-light text-lg hover:text-white ease-out duration-75 hover:scale-105 capitalize'>
                            <li>{list_name}</li>
                        </div>
                    )
                })}
            </ul>

            {/* INPUT  */}
            <div id="input" className='hidden md:flex w-1/5 h-full justify-around items-center'>
                <input
                    type="text"
                    placeholder='Search...'
                    className='bg-slate-900 text-slate-800 p-1 rounded-lg focus:outline-none focus:text-slate-400'
                />

                <BsSearch size={20} className='ease-out duration-100 hover:scale-105 hover:text-white cursor-pointer' />
            </div>

            {/* SUBSCRIBE AND LOGIN BUTTONS  */}
            <div id="subscribe_login" className='hidden md:flex h-full w-1/4 justify-around items-center'>
                <div id="subscribe" className='relative pl-2 pr-2 pt-1 pb-1 bg-gradient-to-tr from-red-800 to-emerald-800 via-black text-xl w-28 rounded-md duration-75 ease-out hover:text-white hover:scale-105'>
                    <button type="submit">Subscribe</button>
                </div>
                <div id="login" className='relative pl-2 pr-2 pt-1 pb-1 bg-gradient-to-br from-red-800 to-emerald-800 via-black text-xl w-24 rounded-md duration-75 ease-out text-slate-300 hover:text-white hover:scale-105 flex justify-center items-center '>
                    <button type='submit' >Login</button>
                </div>
            </div>

            {/* MOBILE  */}
            <div onClick={() => setNav(!nav)} className='cursor-pointer text-slate-400 z-30 absolute right-2 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav &&
                <ul className='flex flex-col justify-center items-center top absolute top-0 left-0 w-full h-screen bg-neutral-950 md:hidden z-20'>
                    <div id="input" className='flex md:hidden w-2/3 justify-around mb-5 items-center'>
                        <input
                            type="text"
                            placeholder='Search...'
                            className='bg-slate-900 text-slate-800 p-4  rounded-lg focus:outline-none focus:text-slate-400'
                        />
                        <BsSearch size={30} className='ease-out duration-100 hover:scale-105 hover:text-white cursor-pointer' />

                    </div>
                    {list.map(({ id, list_name }) => {
                        return (
                            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl text-stone-400 hover:scale-105 hover:text-white duration-200  hover:after:w-[50%] font-poppins'>
                                {list_name}
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default TopNav
