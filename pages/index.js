import Head from 'next/head';

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Global Health Youth Foundation | Reimagning Global Heath </title>
      </Head>
    <section style={{ backgroundImage: "url('https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_1400/v1598456297/edwin-andrade-4V1dC_eoCwg-unsplash.png')", height: "60vh", backgroundRepeat: "no-repeat" }} className="section is-paddingless has-text-centered">
    <div className="container" style={{ paddingTop: "20vh" }}>
      <h1 className="is-size-1 family-secondary bg-text"  >Global Health Youth Foundation</h1>
      <br/><br/>
      <h2 className="is-size-3 bg-text-black">Re-imagining Global Health</h2>
    </div>
    </section>

    <section className="has-background-light section">
      <div className="has-text-centered">
        <h3 className="is-size-5">Global Health Youth Foundation is a non-partisan, non- profit, youth run Think Tank to empower Youth to work as future Global Health Leaders</h3>
      </div>
    </section>

      <section className="section">
        <div className="container">
          <div className="header">
            <h2 className="is-size-2 is-family-secondary">
              Mission
            </h2>
          </div>
          <br/>
            <p className="is-size-5">
            GHYF aims to form a youth-driven Think Tank to engage youth in the policy making process and inspire to lead a platform for students and young professionals in the field of global health to engage, network and build capacity through innovative ideas, professional development and discussions to promote youth to enact tangible changes, in improving global health and achieving health equity by fostering quality and ethical research, education, advocacy, leadership, and community action, while building a peer and mentorship network in the process.
            </p><br/>
        </div>
      </section>
      <section className="section has-background-primary">
        <div className="container">
        <h2 className="has-text-white is-size-2 is-family-secondary">Values.</h2><br/>
        <div className="columns is-multiline">
          {
            data.map(e=>
                <div key={Math.random()} className="column has-text-centered is-half-desktop is-full-mobile">
                  <div className=" box "><p className="is-size-4">{e}</p></div>
                </div>
              )
          }
        </div>
        </div>
      </section>


    </>
  )
}
export async function getStaticProps() {
  let data = [
    "Enhance Critical Thinking",
    "Youth Dialogue and Partnership",
    "Health and Equity",
    "Sustainability, Ideation and Innovation"
  ]
  return {
    props: {
        data
    },
  }
}
