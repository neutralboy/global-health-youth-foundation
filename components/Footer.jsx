const Footer = () => (
    <>
    <div className="bg-red-600 p-4 pt-12 lg:p-24">
        <h3 className="text-4xl text-white font-extrabold">Contact Us</h3>
        <div className="grid space-y-3 lg:grid-rows-1 lg:space-y-0 lg:grid-cols-2 lg:space-x-3">
            <div className="col-span-1">
                <div className="mt-10">
                    <h4 className="text-2xl text-white">Email Address</h4>
                    <a href="mailto:ceo@ghyf.org" className="underline text-yellow-300 text-xl">ceo@ghyf.org</a>
                </div>
                <div className="mt-10">
                    <h4 className="text-2xl text-white">Mailing Address</h4>
                    <p className="text-yellow-300 text-xl">504, 5-1-666/2, D. V. Enclave Apts, Besides New Vision School, Near Dist. Court, Khammam-507001 , Telangana State, India</p>
                </div>
            </div>
            <div className="col-span-1">
                <div>
                    <h4 className="text-2xl text-white">Phone Number</h4>
                    <a className="text-yellow-300 text-xl block">+91 (878) 2950190</a>
                </div>
                <div className="mt-10">
                    <div className="flex flex-row text-white text-xl">
                        <a className="underline" href="/privacy_policy.pdf">Privacy Policy</a>
                        <a className="ml-6 underline" href="/Terms and Conditions.pdf" >Terms and Conditions</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div className="pt-4 pb-4 bg-red-600">
            <div className="text-center flex flex-col space-y-4 lg:space-y-0 lg:flex-row justify-evenly">
                <p className="text-white underline">All Rights Reserved 2021-Present GHYF</p>
                <a rel="nofollow" href="https://www.poorna.dev/" className="text-white underline">Made with ♥ by Poorna </a>
            </div>
        </div>
    </>
)

export default Footer;