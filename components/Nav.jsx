import Link from "next/link";

const Nav = () => (
    <nav className="flex justify-between p-4 sticky top-0 shadow-md w-full z-50 bg-white">
        <div className="flex flex-row">
            <div className="absolute float-left top-0">
                <div className="bg-white rounded-full p-2">
                    <img src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto,w_50/v1598529986/ghyf/KOSHA_-GHYF.png" alt="GHYF Logo" />
                </div>
            </div>
            <div className="ml-16">
                <p className="font-extrabold text-xl text-red-600">
                    <Link href="/">
                        <a>GHYF</a>    
                    </Link>
                </p>
            </div>
            <div className="px-6 text-lg">
                <Link href="/team"><a>Team</a></Link>
            </div>
            <div className="px-6 text-lg border-red-800 border-solid border-l-2">
                <p>Scope</p>
            </div>
            <div className="px-6 text-lg border-red-800 border-solid border-l-2">
                <p>Blog</p>
            </div>
            <div className="px-6 text-lg border-red-800 border-solid border-l-2">
                <p>Accountabilty</p>
            </div>
        </div>
        <div className="flex flex-row">
            <div className="px-6 text-lg">
                Join Us
            </div>
            <div className="pl-6 text-lg border-red-800 border-solid border-l-2">
                Donate
            </div>
        </div>
    </nav>
);

export default Nav;