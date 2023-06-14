import React from 'react'
import { recommended } from '../datalists/data'

const Recommended = () => {
    return (
        <div id='Recommended' className='flex flex-col my-16 w-full relative h-auto md:h-96'>
            <div className='text-slate-400 text-3xl font-poppins capitalize'>
                <p className='px-2'>Recommended for you</p>
            </div>
            <div className=' max-md:flex-wrap max-md:mx-auto md:flex  justify-around mt-5 relative'>

                {recommended.map(({ id, image, title }) => {
                    return (
                        <div key={id} className='card max-md:my-6 h-96 w-80 relative rounded-md text-white'>
                            <div className='card_image h-2/3 w-full rounded-md'>
                                <img src={image} alt='' className='h-full w-full rounded-md' />
                            </div>
                            <p className=' py-4 px-2 text-3xl text-center'>{title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Recommended
