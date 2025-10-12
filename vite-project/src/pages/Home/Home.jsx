import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Notecard from '../../components/Cards/Notecard'
import { MdAdd } from 'react-icons/md'

const Home = () => {
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

    <button className='w-16 h-16 flex justify-center items-center rounded-2xl bg-primary hover:bg-blue-700 absolute right-10 bottom-10' onClick={()=>{}}>
      <MdAdd className='text-[32px] text-white'/>
    </button>

    </>
  )
}

export default Home
