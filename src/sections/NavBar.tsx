import { useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import Logo from "../assets/logo.png"
import NavLink from '../components/NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { MdOutlineFileDownload } from "react-icons/md";



const NavBar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)")

  const handleDownloadClick = () => {
    fetch("TomaszJackowskiCV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF fileå
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "TomaszJackowskiCV.pdf";
        alink.click();
      });
    });
  }
  return (
    <nav id='navbar'>
      <div className='bg-background bg-opacity-75 backdrop-filter backdrop-blur-sm flex items-center justify-between fixed top-0 z-30 w-full py-2'>
        <div className='flex items-center justify-between md:mx-auto w-full px-4 md:w-5/6'>
          <div className='flex items-center justify-between w-full gap-16'>
            <img alt='logo' src={Logo} className='w-16 h-16'/>
            {isAboveMediumScreens ? (
              <div className='flex items-center justify-between w-full'>
                <div className='flex items-center justify-between gap-8 text-xl mx-auto'>
                  <NavLink 
                    href="home"
                    name="Home"
                    offset={0}
                  />
                  <NavLink
                    href="about"
                    name="About"
                    offset={-80}
                  />
                  <NavLink
                    href="projects"
                    name="Projects"
                    offset={-80}
                  />
                  <NavLink
                    href="contact"
                    name="Contact"
                    offset={-80}
                  />
                  <button
                    className='flex items-center rounded-md border-2 border-primary-light shadow-[4px_4px_5px_2px_rgba(0,0,0,0.3)] p-2 text-md font-light text-primary-dark'
                    onClick={handleDownloadClick}
                  >
                    <MdOutlineFileDownload className='h-6 w-6 pr-2 shrink-0'/>
                    Get my resume
                  </button>
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
          <div className='flex flex-col justify-center items-center gap-10 text-2xl'>
            <NavLink 
              href="home"
              name="Home"
              offset={0}
            />
            <NavLink
              href="about"
              name="About"
              offset={-80}
            />
            <NavLink
              href="projects"
              name="Projects"
              offset={-80}
            />
            <NavLink
              href="contact"
              name="Contact"
              offset={-80}
            />
          </div>
          <div className='flex justify-center items-center mt-12'>
            <button
              className='flex items-center rounded-md border-2 border-primary-light shadow-[4px_4px_5px_2px_rgba(0,0,0,0.3)] p-2 text-md font-light text-primary-dark'
              onClick={handleDownloadClick}
            >
              <MdOutlineFileDownload className='h-6 w-6 pr-2 shrink-0'/>
              Get my resume
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar