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
                                Global Health Youth Foundation strongly believes in a multidisciplinary, multisectoral, integrative and collaborative environment for development of future Global Health Leaders. Hence Global Health Youth Foundation welcomes youth from all disciplines and sectors, regardless of education background who are interested to expand their horizons and contribute to the future of Global Health in any ways possible, to join us.
                                <br/><br/>
                                GHYF defines ‘Youth’ to be a person between the ages 15-30 years.
                                </p>
                            </div>
                        </div>
                        <div className="column is-one-third-desktop is-full-mobile">
                            <img alt="membership" src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_370/v1591896253/doctor/20.png" />
                        </div>
                    </div>
                    <a className="button is-primary is-large is-fullwidth">COMING SOON</a>
                </div>
<br/>
                <div>
                    <h2 className="is-size-3 is-family-secondary">Sponsorship / Donate</h2>
                    <a className="is-size-4" href="mailto:ceo@ghfy.org">ceo@ghfy.org</a>
                </div>

            </div>
        </section>
    </>
)

export default Join;