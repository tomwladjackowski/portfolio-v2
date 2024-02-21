import { useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import Logo from "../assets/logo.png"
import NavLink from '../components/NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const NavBar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)")
  return (
    <nav id='navbar'>
      <div className='bg-background drop-shadow flex items-center justify-between fixed top-0 z-30 w-full py-2'>
        <div className='flex items-center justify-between mx-auto w-5/6'>
          <div className='flex items-center justify-between w-full gap-16'>
            <img alt='logo' src={Logo} className='w-16 h-16'/>
            {isAboveMediumScreens ? (
              <div className='flex items-center justify-between w-full'>
                <div className='flex items-center justify-between gap-8 text-xl mx-auto'>
                  <NavLink 
                    href="/"
                    name="Home"
                  />
                  <NavLink
                    href="/about"
                    name="About"
                  />
                  <NavLink
                    href="/projects"
                    name="Projects"
                  />
                  <NavLink
                    href="/contact"
                    name="Contact"
                  />
                </div>
              </div>
            ) : (
              <button 
                className='rounded-full bg-primary-light p-2'
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className='h-8 w-8 text-white' />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-content drop-shadow-xl'>
          <div className='flex justify-end p-12'>
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon 
                className='h-8 w-8 text-primary-dark'
              />
            </button>
          </div>
          <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
            <NavLink 
              href="/"
              name="Home"
            />
            <NavLink
              href="/about"
              name="About"
            />
            <NavLink
              href="/projects"
              name="Projects"
            />
            <NavLink
              href="/contact"
              name="Contact"
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar