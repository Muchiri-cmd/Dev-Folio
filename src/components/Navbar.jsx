import React,{ useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { navLinks } from "../info"
import { styles } from "../styles"
import { mainlogo, menu, close  } from "../assets"

const Navbar = () => {
  // keep track of which section were on in the viewport
  const [section, setSection] = useState("")
  //keep track of hamburger menu toggle status
  const [ toggled, setToggle ] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div
        className="w-full flex justify-between items-center max-w-[80%] mx-auto"
      >
       <Link to="/"
        className="flex items-center gap-5"
        onClick={() => {
          setSection("")
          window.scrollTo(0, 0)
        }}
       >
        <img src={mainlogo} alt="logo" 
        style={{ width: '60px', height: '60px' }} 
        className="object-contain"/>
        <p className="text-white text-[18px] font-bold cursor-pointer">Davis<span className=" hidden sm:block"> develops</span></p>
       </Link>
       <ul
        className="list-none hidden sm:flex flex-row gap-10"
       >
        {navLinks.map((link)=>(
          <li key={link.id}
            className={`${section == link.title 
              ? "text-yellow-400"
              : "text-white"
            } hover:text-[18px] font-medium cursor-pointer
            text-[16px]`}
            onClick={()=> {
              setSection(`${link.title}`)
            }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
       </ul>

       {/* Mobile Application Hamburger Menu */}
       <div
        className="sm:hidden flex flex-1 justify-end items-center"
       >
          <img src={ toggled ? close : menu } alt="menu" 
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggled) }
          />
          <div
            className={`${!toggled ? 'hidden' :'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my02 min-w-[140p] z-10 rounded-xl`}
          >
             <ul className="list-none flex justify-end items-start flex-col gap-6"
              >
                {navLinks.map((link)=>(
                  <li key={link.id}
                    className={`${section == link.title 
                      ? "text-yellow-400"
                      : "text-white"
                    } font-poppins font-medium text-[16px]`}
                    onClick={()=> {
                      setSection(`${link.title}`)
                      setToggle(!toggled)
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
             </ul>
          </div>
       </div>
      </div>
    </nav>
  )
}

export default Navbar