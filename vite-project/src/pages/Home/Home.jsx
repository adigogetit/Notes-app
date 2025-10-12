import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Notecard from '../../components/Cards/Notecard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
import Modal from 'react-modal'

const Home = () => {

  const [openAddEditModal , setOpeanAddEditModal] = useState({
    isShown:false,
    type:'add',
    data:null,
  })


  return (
    <>
      <Navbar />

      <div className='container mx-auto px-8 py-4'>
        <div className='grid grid-cols-3 gap-4 mt-8 '>

          <Notecard
            title="My First Note"
            date="Oct 12, 2025"
            content="This is a sample note card component rendered on the Home page."
            tags="#React #Tailwind"
            isPinned={true}
            onEdit={() => { }}
            onDelete={() => { }}
            onPinNote={() => { }}
          />

        </div>
      </div>

    <button className='w-16 h-16 flex justify-center items-center rounded-2xl bg-primary hover:bg-blue-700 cursor-pointer absolute right-10 bottom-10' onClick={()=>{
      setOpeanAddEditModal({isShown:true, type:"add", data:null});
    }}>
      <MdAdd className='text-[32px] text-white'/>
    </button>


    <Modal
    isOpen={openAddEditModal.isShown}
    onRequestClose={()=>{}}
    style={{
      overlay:{
        backgroundColor:"rgba(0,0,0,0.2)",
      },
    }}
    contentLabel=""
    className="w-[40%] max-h-[75vh] bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
    >
      <AddEditNotes
      type={openAddEditModal.type}
        noteData={openAddEditModal.data}
        onClose={()=>{
          setOpeanAddEditModal({isShown:false , type:"add", data:null})
        }}
      />

    </Modal>
    </>
  )
}

export default Home
