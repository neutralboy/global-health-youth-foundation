import Head from 'next/head';

const Scope = ({data}) => (
    <>
    <Head>
        <title>Scope of Work | Global Health Youth Foundation | Reimagning Global Heath </title>
    </Head>
        <section className="section">
            <div className="container">
                <h1 className="is-size-1 has-text-black is-family-secondary">
                    Scope of Work
                </h1><br/>

                <div>
                {
                    data.map(e=>
                        <div key={Math.random()} className="box">
                            <h2 className="is-size-2">{e.title}</h2>   
                            <div className="columns is-vcentered">
                                <div className="column is-one-third-desktop is-full-mobile" >
                                    <img src={e.image} alt={e.title} />
                                </div>
                                <div className="column is-two-thirds-desktop is-full-mobile" >
                                    <div className="content">
                                        <p dangerouslySetInnerHTML={{ __html: e.content }} />
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        )
                }
                    
                </div>
            </div>
        </section>
    </>
)

export async function getStaticProps() {
    let data = [
        {
            title: "Community Based Comprehensive Rural - Health and Education Internships",
            content: `Most Global Health Opportunities tend to be unidirectional. Hence GHYF has worked hard to bring about accessible, affordable and sustainable opportunities in the Global South.<br/>
            This Comprehensive Community based rural health internship offered by GHYF will include concentrations on Rural Health Policy, Advocacy, Health Education, Capacity Development, Program Management, Leadership etc.<br/>
            While we welcome interns year round, the internships are tailored for the busy schedule of a medical/healthcare student. Hence, the interns get to choose between 3 options. <br/>
            A two week internship, a month long internship or for a duration of three months with extensions.
            We seek individuals who want to gain work experience and exposure to development in a very rural and sometimes challenging setting.These positions offer the opportunity to learn about the inner workings of rural health and life all the while being exposed to fundraising, programming, and evaluation in areas of rural public health, health education, medicine, women’s rights, and economic and community development.<br/>
            As GHYF envisions to empower people and communities to eliminate injustices through integrated and collaborative efforts in health and development. The internship is not restricted only to healthcare majoring students, but instead open to any youth from 18-35 years, from anywhere in the globe.`,
            image: "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_400/v1591896254/doctor/2.png"
        }
    ]
    return {
      props: {
          data
      },
    }
  }

export default Scope;