import React from 'react'
import { getInitials } from '../../utlis/helper'

const Profileinfo = ({onLogout}) => {
    return (
        <div className='flex items-center gap-3'>
            <div className='w-10 h-10 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-200'>
                {getInitials("Aditya Singh")}
            </div>
            
            <div>
                <p className='text-sm font-medium'>Aditya Singh</p>
                <button className='text-sm text-slate-700 underline cursor-pointer' onClick={onLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Profileinfo
