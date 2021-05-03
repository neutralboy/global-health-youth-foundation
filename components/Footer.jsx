const Footer = () => (
    <div className="bg-red-600 p-24">
        <h3 className="text-4xl text-white font-extrabold">Contact Us</h3>
        <div className="grid grid-cols-2 space-x-3">
            <div className="col-span-1">
                <div className="mt-10">
                    <h4 className="text-3xl text-white">Email Address</h4>
                    <a href="mailto:ceo@ghyf.org" className="underline text-yellow-300 text-2xl">ceo@ghyf.org</a>
                </div>
                <div className="mt-10">
                    <h4 className="text-3xl text-white">Mailing Address</h4>
                    <p className="text-yellow-300 text-2xl">504, 5-1-666/2, D. V. Enclave Apts, Besides New Vision School, Near Dist. Court, Khammam-507001 , Telangana State, India</p>
                </div>
            </div>
            <div className="col-span-1">
                <div>
                    <h4 className="text-3xl text-white">Phone Number</h4>
                    <a className="text-yellow-300 text-2xl block">+91 (878) 2950190</a>
                    <a className="text-yellow-300 text-2xl">+1(516) 591 0876</a>
                </div>
            </div>
        </div>
    </div>
)

export default Footer;