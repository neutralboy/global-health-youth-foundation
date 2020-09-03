import Head from 'next/head';


const Join = () => (
    <>
    <Head>
        <title>Join Us | Global Health Youth Foundation | Reimagning Global Heath </title>
    </Head>
        <section className="section">
            <div className="container">
                <h1 className="is-size-1 has-text-black is-family-secondary">Join Us</h1><br/>

                <div>
                    <h2 className="is-size-3 is-family-secondary">Memberships</h2>
                    <div className="columns is-vcentered">
                        <div className="column is-two-thirds-desktop is-full-mobile">
                            <div className="content">
                                <p>
                                Global Health Opportunities are often unidirectional, and often not accessible to the Global South. Hence Global Health Youth Foundation (GHYF), a principle Global South Youth-led Healthcare Think Tank, aims to provide sustainable, easily accessible and affordable opportunities for youth, all the while empowering them to be Global Health Leaders of Tomorrow.
                                <br/><br/>
                                As a member, you will be able to be a part of and lead your own projects, access to be part of our working groups, work with us on policy, research and workshop collaboration, get to be a part of our national and international delegations, get access to our community based-rural health and education internships, conferences and various other opportunities as they arise.
                                </p>
                            </div>
                        </div>
                        <div className="column is-one-third-desktop is-full-mobile">
                            <img alt="membership" src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_370/v1591896253/doctor/20.png" />
                        </div>
                    </div>
                    <a href="https://rzp.io/l/ghyf-membership" className="button is-primary is-large is-fullwidth">Join Us</a>
                </div>
<br/>
                <div>
                    <h2 className="is-size-3 is-family-secondary">Sponsorship / Donate</h2>
                    <a className="is-size-4" href="mailto:ceo@ghfy.org">ceo@ghyf.org</a>
                </div>

            </div>
        </section>
    </>
)

export default Join;