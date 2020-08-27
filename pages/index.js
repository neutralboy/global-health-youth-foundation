import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
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

      <section className="section has-background-light">
        <div className="container">
        
        <div className="level">
          <div className="level-item">
            <p className="title">Trust</p> 
          </div>
          <div className="level-item">
            <p className="title">Dialogue</p> 
          </div>
          <div className="level-item">
            <p className="title">Health</p> 
          </div>
          <div className="level-item">
            <p className="title">Respect</p> 
          </div>
          <div className="level-item">
            <p className="title">Sustainability</p> 
          </div>
          <div className="level-item">
            <p className="title">Equality</p> 
          </div>
        </div>
        
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
          <div className="columns is-vcentered">
            <div className="column is-half-desktop is-full-mobile">
              <img style={{ height: "400px" }} src="https://res.cloudinary.com/poorna/image/upload/v1598461533/undraw_mission_impossible_bwa2.svg" alt="mission" />
            </div>
            <div className="column is-half-desktop is-full-mobile">
              <p className="is-size-4">
                A youth driven think and do tank which aims to foster Youth Engagement and provide a platform to empower young people to become global health leaders.
              </p><br/>
              <Link href="/join">
                <a className="button is-primary is-fullwidth">Become a Member</a>
              </Link>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
