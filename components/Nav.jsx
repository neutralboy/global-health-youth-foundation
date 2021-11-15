import { useState } from "react";
import Link from "next/link";

const Nav = () => {
    
    const [open, setOpen] = useState(false);

    return(
        <>
    <nav className={`flex justify-between p-3 lg:p-4 sticky top-0 shadow-md w-full z-50 bg-white `}>


        {/* MOBILE NAV */}
        <div className="flex flex-row lg:hidden">
            <Link href="/">
                <a>
                    <div className="absolute float-left top-0 z-20">
                        <div className="bg-white rounded-full p-1 flex flex-wrap justify-center items-center">
                            <img className="w-12 m-auto" src="https://res.cloudinary.com/poorna/image/upload/v1619950978/ghyf/GHYF.svg" alt="GHYF Logo" />
                        </div>
                    </div>
                </a>
            </Link>
        </div>
        <div className="flex flex-row lg:hidden">
            <button onClick={()=>setOpen(!open)} className="px-2">
                <img src="https://img.icons8.com/metro/26/000000/menu.png"/>
            </button>
        </div>



        {/* DESKTOP NAV */}
        <div className="flex-row hidden lg:flex">
            <Link href="/">
            <a>
                <div className="absolute float-left top-0 z-20">
                    <div className="bg-white rounded-full p-2 flex flex-wrap justify-center items-center">
                        <img className="w-16 m-auto" src="https://res.cloudinary.com/poorna/image/upload/v1619950978/ghyf/GHYF.svg" alt="GHYF Logo" />
                    </div>
                </div>
            </a>
            </Link>
            <div className=" ml-16 px-6 text-lg">
                <Link href="/team"><a>Team</a></Link>
            </div>
            <div className="px-6 text-lg border-red-800 border-solid border-l-2">
                <a href="https://blog.ghyf.org/scope-of-work/">
                    <a>Scope</a>
                </a>
            </div>
            <div className="px-6 text-lg border-red-800 border-solid border-l-2">
                <a rel="noopener noreferrer nofollow" href="https://blog.ghyf.org" >Blog</a>
            </div>
            <div className="px-6 text-lg border-red-800 border-solid border-l-2">
                <Link href="/accountability">
                    <a>Accountabilty</a>
                </Link>
            </div>
        </div>
        <div className="flex-row hidden lg:flex">
            <div className="px-6 text-lg">
                <Link href="/join-us">
                    <a>Join Us</a>
                </Link>
            </div>
            {/* <div className="pl-6 text-lg border-red-800 border-solid border-l-2">
                <Link href="/donate"><a>Donate</a></Link>
            </div> */}
        </div>
    </nav>

    <div onClick={()=>setOpen(false)} className={` ${ open ? "flex flex-col": "hidden" } top-12 bg-white sticky z-50 w-full shadow-sm m-nav-bg`}>
        <div className="p-2 px-6">


            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <div className="text-center">
                        <div className="p-2">
                            <Link href="/team">
                                <a className="p-1 bg-yellow-300">Team</a>
                            </Link>
                        </div>
                        <div className="p-2">
                            <a href="https://blog.ghyf.org/scope-of-work/" className="bg-yellow-300 p-1">Scope</a>
                        </div>
                        <div className="p-2">
                            <Link href="/accountability">
                                <a className="bg-yellow-300 p-1">Accountability</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="text-center">
                        {/* <div className="p-2">
                            <Link href="/donate">
                                <a className="bg-yellow-300 p-1">Donate</a>
                            </Link>
                        </div> */}
                        <div className="p-2">
                            <Link href="/join-us">
                                <a className="bg-yellow-300 p-1">Join Us</a>
                            </Link>
                        </div>
                        <div className="p-2">
                            <a href="https://blog.ghyf.org/" rel="nofollow noopener" className="bg-yellow-300 p-1">Blog</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    </>
)};

export default Nav;
