import React, { useState } from 'react'
import Taginput from '../../components/Input/Taginput'
import { MdClose, MdEditNote } from 'react-icons/md'

const AddEditNotes = ({noteData,type,onClose}) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState([])

    const [error,setError] = useState(null)

    // Add note
    const addNewNote = async ()=>{};

    // Edit note
    const editNote = async ()=>{};

    const handleAddNote = ()=>{
        if(!title){
            setError("Please enter the tilte")
            return;
        }
        if(!content){
            setError("Please enter the content")
            return;
        }
        setError("");
        
        if(type === 'edit'){
            editNote()
        }else{
            addNewNote()
        }
    }

    return (
        <div className='relative'>

            <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-blue-200 cursor-pointer' onClick={onClose}>
                <MdClose className='text-2xl text-blue-800' />
            </button>


            <div className='flex flex-col gap-2'>
                <label className='input-lable m-2 '>TITLE</label>
                <input
                    type="text"
                    className=" p-1 text-xl text-slate-950 border rounded ouline-none"
                    placeholder='Enter the Title'
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
                />
            </div>

            <div className='flex flex-col gap-2 mt-4'>
                <label className='input-lable '>CONTENT</label>
                <textarea
                    type="text"
                    className=" text-sm text-slate-950 ouline-none border mb-2 bg-slate-50 p-2 rounded"
                    placeholder='Write content'
                    rows={10}
                    value={content}
                    onChange={({ target }) => setContent(target.value)}
                />
            </div>

            <div>
                <label className='input-lable '>TAGS</label>
                <Taginput tags={tags} setTags={setTags} />
            </div>

            {error && <p className='text-red-500 text-xs pt-4'>{error}</p>}


            <button className='btn-primary font-medium mt-5 p-3' 
            onClick={handleAddNote}>
                ADD
            </button>


        </div>
    )
}

export default AddEditNotes
