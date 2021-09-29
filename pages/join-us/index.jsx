import Head from "next/head";

const JoinUs = () => (
    <div>
        <Head>
            <title>Join Us | GHYF </title>
        </Head>
        <div className="grid grid-cols-12">
            <div className="col-span-9 bg-red-600 p-12 flex justify-center items-center lg:pb-28 lg:pt-32">
                <h1 className="text-5xl lg:text-9xl text-center font-extrabold text-white font-lato">Join Us</h1>
            </div>
            <div className="col-span-3 p-2 bg-black lg:p-12 flex flex-wrap justify-center items-center">
                <img src="inline-block m-auto" alt="" src="https://res.cloudinary.com/poorna/image/upload/v1620401032/ghyf/icons8-handshake-100.png" />
            </div>
        </div>
        <div className="p-8 lg:p-28 bg-black">
            <div>
                <h2 className="text-4xl lg:text-5xl text-red-600 font-black">Membership</h2>
                <div className="mt-6 text-white text-xl lg:text-2xl">
                    <p>
                        Global Health Youth Foundation strongly believes in a multidisciplinary, multisectoral, integrative and collaborative environment for
                        development of future Global Health Leaders. Hence Global Health Youth Foundation welcomes youth from all disciplines and sectors,
                        regardless of education background who are interested to expand their horizons and contribute to the future of Global Health in any
                        ways possible, to join us.
                    </p>
                    <p className="mt-4">
                        GHYF defines ‘Youth’ to be a person between the ages 15-30 years.
                    </p>
                </div>
            </div>

            <div className="mt-8 lg:mt-16">
                <h2 className="text-3xl lg:text-5xl text-red-600 font-black">How to Join?</h2>
                <div className="mt-6">
                    <a rel="nofollow" href="https://docs.google.com/forms/d/e/1FAIpQLSe5Wgl6IiXWRnMPA2E9nvpBLUUqg8lx-NmfhFrMrIhvwF64AA/viewform" className="button bg-yellow-300 p-2 lg:p-4 rounded-full text-lg lg:text-xl hover:bg-yellow-400">Click Here</a>
                </div>
            </div>

            <div className="mt-8 lg:mt-16">
                <h2 className="text-4xl lg:text-5xl text-red-600 font-black">Why be our Members?</h2>
                <div className="mt-6 text-white text-xl lg:text-2xl">
                    <p>
                        Global Health Opportunities are often unidirectional, and often not accessible to the Global South. Hence Global Health Youth Foundation (GHYF), a
                        principle Global South Youth-led Healthcare Think Tank, aims to provide sustainable, easily accessible and affordable opportunities for youth, all the
                        while empowering them to be Global Health Leaders of Tomorrow.
                    </p>
                    <p className="mt-4">
                        As a member, you will be able to be a part of and lead your own projects, access to be part of our working groups, work with us on policy, research
                        and workshop collaboration, get to be a part of our national and international delegations, get access to our community based-rural health and
                        education internships, conferences and various other opportunities as they arise.
                    </p>
                    <p className="mt-4">
                        Global Health Youth Foundation strongly believes in a multidisciplinary, multisectoral, integrative and collaborative environment for development of
                        future Global Health Leaders. Hence Global Health Youth Foundation welcomes youth from all disciplines and sectors, regardless of education
                        background, everyone who is interested in expanding their horizons and contributing to the future of Global Health in any ways possible, is welcome
                        to join us.
                    </p>
                </div>
            </div>

            <div className="mt-8 lg:mt-16">
                <h2 className="text-3xl lg:text-5xl text-red-600 font-black">Donate</h2>
                <div className="mt-6">
                    <a href="#" className="button bg-yellow-300 p-2 lg:p-4 rounded-full text-lg lg:text-xl hover:bg-yellow-400">Click Here</a>
                </div>
            </div>

        </div>
    </div>
);

export default JoinUs;