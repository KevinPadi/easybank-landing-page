import Button from './Button'
import logo from '../assets/images/logo.svg'

function Nav () {
  return (
    <header className='md:sticky md:top-0 md:w-full md:h-24 bg-White md:z-50'>
      <nav className='h-full md:px-64 md:flex md:items-center md:justify-between'>
        <img src={logo} alt='Easybank Logo' />
        <ol className='md:flex md:gap-8 md:items-center md: h-full'>
          <li>
            <a className='text-GrayishBlue md:align-middle md:flex md:items-center md:hover:border-b-4 md:hover:border-LimeGreen md:hover:text-DarkBlue md:h-24' href='#'>Home</a>
          </li>
          <li>
            <a className='text-GrayishBlue md:align-middle md:flex md:items-center md:hover:border-b-4 md:hover:border-LimeGreen md:hover:text-DarkBlue md:h-24' href='#'>About</a>
          </li>
          <li>
            <a className='text-GrayishBlue md:align-middle md:flex md:items-center md:hover:border-b-4 md:hover:border-LimeGreen md:hover:text-DarkBlue md:h-24' href='#'>Contact</a>
          </li>
          <li>
            <a className='text-GrayishBlue md:align-middle md:flex md:items-center md:hover:border-b-4 md:hover:border-LimeGreen md:hover:text-DarkBlue md:h-24' href='#'>Blog</a>
          </li>
          <li>
            <a className='text-GrayishBlue md:align-middle md:flex md:items-center md:hover:border-b-4 md:hover:border-LimeGreen md:hover:text-DarkBlue md:h-24' href='#'>Careers</a>
          </li>
        </ol>
        <Button />
      </nav>
    </header>
  )
}

export default Nav
