import { useState } from 'react'

function HamburgerMenu () {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <div className='md:hidden'>
      <div className='' onClick={toggleModal}>
        {modalOpen ? <svg xmlns='http://www.w3.org/2000/svg' width='18' height='19'><g fill='#2D314D' fill-rule='evenodd'><path d='M.868.661l16.97 16.97-.706.708L.162 1.369z' /><path d='M.161 17.632L17.131.662l.708.706-16.97 16.97z' /></g></svg> : <svg xmlns='http://www.w3.org/2000/svg' width='24' height='11'><g fill='#2D314D' fill-rule='evenodd'><path d='M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z' /></g></svg>}
      </div>
      {modalOpen && (
        <div className='mt-16 fixed inset-0 px-6 bg-DarkBlue/10'>
          <div className='flex flex-col items-center justify-between mt-4 h-56 w-full text-DarkBlue bg-White p-6 rounded shadow-[0px_0px_100px_40px_#1A2933]'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <a href='#'>Blog</a>
            <a href='#'>Careers</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu
