import Head from 'next/head';

const Team = ({ data }) => (
    <>
    <Head>
        <title>Team | Global Health Youth Foundation | Reimagning Global Heath </title>
    </Head>
        <section className="section has-background-primary">
            <div className="container">
                <h1 className="is-size-1 is-family-secondary has-text-white">
                    Meet the Team
                </h1>
                <br/><br/>


                <div>
                    <div className="columns is-multiline">
                    {
                        data.map(e=>
                            <div key={Math.random()} className="column is-half-desktop is-full-mobile">
                                <div className="box">
                                    <div className="has-text-centered">
                                        <img alt={e.name} src={e.image} />
                                    </div>
                                    <h3 className="is-size-3 has-text-black is-family-secondary">{e.name}</h3>
                                    <div className="content">
                                        <p>
                                            {e.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            )
                    }
                        
                    </div>
                </div>



            </div>
        </section>
    </>
)

export async function getStaticProps() {
    let data = [
        {
            name: "HARI",
            image: "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_400/v1598531736/ghyf/IMG_6500.png",
            content: `Sri Hari Govind is the Founder of GHYF. A final year med student having worked extensively with various grass-root level organisations in various capacities, his main interests lie in Global Health Policy and Advocacy along with Medical Anthropology. He is a UN Youth delegate and has worked with the Ministry of Health of Vietnam and also interned at Harvard Medical School Centre for Global Health Delivery. He will be working towards External Representation of the organization focusing on Policy and Advocacy.`
        },
        {
            name: "NEHAL",
            image: "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_400/v1598531721/ghyf/Screenshot_2020-07-27_at_9.54.00_PM.png",
            content: `Fazlur Rehman Khan is a  co-founder and Head of Financial Operations. He works for his start-up "Max" as Chief Executive officer and Chief financial officer. A financial whiz in the making. He develops annual operating budget for review and approval by the board of governors. He also prepares monthly financial reports and analysis, and contributes to the maintenance of an accurate , up-to-date ledger.`
        },
        {
            name: "KATYAYANI GOSWAMI",
            image: "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_400/v1598531722/ghyf/96c08be9-ef2a-4df9-b959-f5942f5197cc.jpg",
            content: `An honorary scholarship recipient at Madras Medical College, She is an aspiring Neurosurgeon in her third year of undergraduate study. A fierce proponent of Refugee rights and peace also having undergone an International Training on Disaster Management, she's been working on several projects including driving ahead a trans-national activity on Disaster medicine and Refugee rights. `
        },
        {
            name: "AJAZ",
            image: "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_400/v1598531723/ghyf/WhatsApp_Image_2020-07-27_at_10.54.55_PM_1.jpg",
            content: `Mirza Azaz Baig, a college dropout (yes our very own Mark Zuckerburg) is the founder and CEO of two successful startups in the automotive industry. His main interests lie in Global Business, Trading and Financing.`
        },
        {
            name: "ASH",
            image: "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_400/v1598531719/ghyf/IMG_E3507.jpg",
            content: `Aishwarya Mani is a final year medical Student with a firm interest in Global Surgery and Orthopaedics. She believes that medicine can be revolutionised from its traditional practices into a field which includes creativity, music and art. New practices such as music therapy , art therapy , clowning are her forte for research and she plans to globalise this in a large scale in future for the betterment of  global health . She believes in gender equality and uses sustainability as her go to mantra.            `
        },
    ]
    return {
      props: {
          data
      },
    }
  }


export default Team;