import Head from 'next/head';

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Global Health Youth Foundation | Reimagning Global Heath </title>
      </Head>
    <section style={{ backgroundImage: "url('https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_1300/v1600607663/ghyf/group-of-diverse-youth-hands-joined-EDZ7UNW.png')",  backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="section is-paddingless has-text-centered">
    <div className="container" style={{ paddingTop: "8rem", paddingBottom: "8rem" }} >

      <div className="columns is-vcentered">
        <div className="column is-half-desktop is-full-mobile">
              <div className="columns is-vcentered">
                <div className="column is-one-quarter-desktop is-full-mobile">
                  <img src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_50/v1598529986/ghyf/KOSHA_-GHYF.png" alt="logo" />
                  <h2 className="is-size-2 has-text-white">GHFY</h2>
                </div>
                <div className="column is-three-quarters-desktop is-full-mobile">
                  <h1 className="is-size-1 has-text-primary family-secondary">
                    Global Health Youth Foundation
                  </h1>
                </div>
              </div>
        </div>
        <div className="column is-half-desktop is-full-mobile has-background-grey-lighter">
          <h3 className="is-size-5">
              A youth driven think tank which aims to foster youth engagement and provide a platform to Empower Young People to become Global Health Leaders
          </h3>
        </div>
      </div>


    </div>
    </section>

    <section className="section">
      <div className="columns is-multiline is-gapless">
        {
          data.map(e=>
              <div key={Math.random()} className="column has-text-centered is-one-quarter-desktop is-full-mobile">
                <div className="box same-height" style={{ backgroundColor: e.color }} >
                  <img src={e.img} />
                  <p style={{ paddingTop: "2rem" }} className="is-size-4 has-text-light">{e.title}</p>
                </div>
              </div>
            )
        }
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
                <p className="is-size-5">
                    To form a youth-driven Think Tank to engage youth in the policy making process and inspire to lead a platform for students and young professionals in the field of Global Health to engage, network and build capacity through innovative ideas, professional development and discussions
                </p><br/>
              </div>
              <div className="column is-half-desktop is-full-mobile">
                <img alt="youth driven" src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_600/v1600608690/ghyf/yingchou-han-IJrIeCs3D4g-unsplash.png" />
              </div>
            </div>
            <div className="columns is-vcentered">
              <div className="column is-half-desktop is-full-mobile">
                <img alt="youth driven" src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_600/v1600608994/ghyf/hannah-olinger-NXiIVnzBwZ8-unsplash.png" />
              </div>
              <div className="column is-half-desktop is-full-mobile">
                <p className="is-size-5">
                To Promote youth to enact Tangible changes, in improving Global Health and achieving Health Equity by fostering quality and ethical research, education, advocacy, leadership, and community action, while building a peer and mentorship network in the process
              </p><br/>
              </div>
            </div>

        </div>
      </section>

    </>
  )
}
export async function getStaticProps() {
  let data = [
    { title: "Enhance Critical Thinking", img: "https://img.icons8.com/dusk/64/000000/blunt-bulb.png", color: "#ba0f26"},
    {title: "Youth Dialogue and Partnership", img: "https://img.icons8.com/ultraviolet/80/000000/user-group-woman-woman.png", color: "#38b6ff"},
    {title: "Health and Equity", img: "https://img.icons8.com/dusk/64/000000/mental-health.png", color: "#008037"},
    {title: "Sustainability, Ideation and Innovation", img: "https://img.icons8.com/dusk/64/000000/recycle-sign.png", color: "#ffde59"}
  ]
  return {
    props: {
        data
    },
  }
}
