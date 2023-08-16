import Button from './Button'
import logo from '../assets/images/logo.svg'

function Nav () {
  return (
    <header className='sticky top-0 w-full lg:h-24 bg-White'>
      <nav className='h-full lg:flex lg:items-center lg:justify-around'>
        <img src={logo} alt='Easybank Logo' />
        <ol className='lg:flex lg:gap-8 lg:items-center lg: h-full'>
          <li>
            <a className='text-GrayishBlue lg:align-middle lg:flex lg:items-center lg:hover:border-b-4 lg:hover:border-LimeGreen lg:hover:text-DarkBlue lg:h-24' href='#'>Home</a>
          </li>
          <li>
            <a className='text-GrayishBlue lg:align-middle lg:flex lg:items-center lg:hover:border-b-4 lg:hover:border-LimeGreen lg:hover:text-DarkBlue lg:h-24' href='#'>About</a>
          </li>
          <li>
            <a className='text-GrayishBlue lg:align-middle lg:flex lg:items-center lg:hover:border-b-4 lg:hover:border-LimeGreen lg:hover:text-DarkBlue lg:h-24' href='#'>Contact</a>
          </li>
          <li>
            <a className='text-GrayishBlue lg:align-middle lg:flex lg:items-center lg:hover:border-b-4 lg:hover:border-LimeGreen lg:hover:text-DarkBlue lg:h-24' href='#'>Blog</a>
          </li>
          <li>
            <a className='text-GrayishBlue lg:align-middle lg:flex lg:items-center lg:hover:border-b-4 lg:hover:border-LimeGreen lg:hover:text-DarkBlue lg:h-24' href='#'>Careers</a>
          </li>
        </ol>
        <Button />
      </nav>
    </header>
  )
}

export default Nav