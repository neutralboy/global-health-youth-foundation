import Link from "next/link";

const Nav = () => (
    <nav className="flex justify-between p-4 sticky top-0 shadow-md w-full z-50 bg-white">
        <div className="flex flex-row">
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
                <Link href="/scope">
                    <a>Scope</a>
                </Link>
            </div>
            <div className="px-6 text-lg border-red-800 border-solid border-l-2">
                <p>Blog</p>
            </div>
            <div className="px-6 text-lg border-red-800 border-solid border-l-2">
                <Link href="/accountability">
                    <a>Accountabilty</a>
                </Link>
            </div>
        </div>
        <div className="flex flex-row">
            <div className="px-6 text-lg">
                Join Us
            </div>
            <div className="pl-6 text-lg border-red-800 border-solid border-l-2">
                <Link href="/donate"><a>Donate</a></Link>
            </div>
        </div>
    </nav>
);

export default Nav;