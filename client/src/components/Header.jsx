import { Link,useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "./../assets/images/LBN.png";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

export default function Header() {
  const [showMenu, setShowMenu] = useState(true);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';
  const isJobsPage = location.pathname === '/jobs';
  const isContactPage = location.pathname === '/contact';

  const handleMenu = () =>{
    setShowMenu(!showMenu);
  }

  const handleClick = () =>{
    setShowMenu(!showMenu)
  }
  return (
    <header className=" bg-slate-200 relative shadow-2xl left-0 right-0 top-0 z-20 ">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <Link to="/" className="z-20">
          <div className="  flex items-center gap-3">
            <div>
              <img src={logo} alt="LBN LOGO" className="w-10 h-10" />
            </div>
            <div className="text-sm sm:text-xl font-bold">
              <h1 className="flex flex-col">
                <span className="text-red-500 companyName ">
                  LBN KEY RESOURCE (PVT) LTD
                </span>
                <span className="companyH1 text-sm flex justify-end text-black">
                  The Head Hunters
                </span>
              </h1>
            </div>
          </div>
        </Link>
        <ul className="hidden md:flex gap-4 min-w-3xl uppercase headerList">
          <Link  to="/" className={`sm:inline ${isHomePage ? 'text-slate-600 text-2xl font-semibold ' : "text-slate-900"}  hover:underline`}><li>Home</li></Link>
          <Link to='/jobs' className={`sm:inline ${isJobsPage ? 'text-slate-600 text-2xl font-semibold' : "text-slate-900"}  hover:underline`}><li>Jobs</li></Link>
          <Link  to='/about' className={`sm:inline ${isAboutPage ? 'text-slate-600 text-2xl font-semibold' : "text-slate-900"}  hover:underline`}><li>About</li></Link>
          <Link to='/contact' className={`sm:inline ${isContactPage ? 'text-slate-600 text-2xl font-semibold' : "text-slate-900"}  hover:underline`}><li >Contact</li></Link>
        </ul>
        <div onClick={handleMenu} className="block md:hidden">
          {!showMenu ? <AiOutlineClose size={30}  /> : <AiOutlineMenu size={30}/> }
        </div>
        
        <div className={!showMenu ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900  bg-slate-200 ease-in-out duration-500 ' : 'fixed left-[-100%] '}>
          
          <ul className="pt-24 uppercase headerList">
          <Link to='/' onClick={handleClick}><li className="p-3 border-b border-slate-50">Home</li></Link>
          <Link to='jobs' onClick={handleClick}><li className="p-3 border-b border-slate-50">Jobs</li></Link>
          <Link to='about' onClick={handleClick}><li className="p-3 border-b border-slate-50">About</li></Link>
          <Link to='contact' onClick={handleClick}><li className="p-3 border-b border-slate-50">Contact</li></Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
