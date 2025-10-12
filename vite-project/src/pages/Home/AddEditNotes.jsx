import React from 'react'

const AddEditNotes = () => {
  return (
    <div>
      <div className='flex flex-col gap-2'>
        <label className='input-lable m-2'>TITLE</label>
        <input
            type="text"
            className=" p-1 text-xl text-slate-950 ouline-none"
            placeholder='Do your Work'
        />
      </div>

      <div className='flex flex-col gap-2 mt-4'>
        <label className='input-lable'>CONTENT</label>
        <textarea
            type="text"
            className=" text-sm text-slate-950 ouline-none bg-slate-50 p-2 rounded"
            placeholder='Write content'
            rows={10}
        />
      </div>

      <div>
        <label className='input-lable '>TAGS</label>
      </div>

      <button className='btn-primary font-medium mt-5 p-3' onClick={()=>{}}>
        ADD
      </button>


    </div>
  )
}

export default AddEditNotes
