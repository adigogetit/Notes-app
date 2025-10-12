import React from 'react'
import { PiPushPinSimpleFill  } from 'react-icons/pi'
import { MdCreate,MdDelete } from 'react-icons/md'

const Notecard = ({title,date,content,tags,isPinned,onEdit,onDelete,onPinNote}) => {
  return (
    <div className='border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out ml-6'>
        <div className='flex items-center justify-between'>
            <div>
                <h6 className='text-sm font-medium'>{title}</h6>
                <span className='text-xs text-slate-700'>{date}</span>
            </div>

            <PiPushPinSimpleFill  className={`icon-btn ${isPinned?'text-primary':'text-slate-400'}`} onClick={onPinNote} />
        </div>

        <p className='text-xs text-slate-800 mt-2'>{content?.length > 60 ? content.slice(0, 60) + '…' : content}</p>

        <div className='flex items-center justify-between mt-2'>
            <div className='text-xs text-slate-600'>{tags}</div>

            <div className='flex items-center gap-2'>
                <MdCreate className="icon-btn hover:text-green-600" onClick={onEdit}/>
                <MdDelete className="icon-btn hover:text-red-600" onClick={onDelete}/>
            </div>
        </div>
    </div>
  )
}

export default Notecard
