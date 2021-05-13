import Head from 'next/head';
import dynamic from "next/dynamic";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Splide = dynamic(
  () => import('@splidejs/react-splide/dist/js/components/Splide'),
  {ssr: false}
);

const SplideSlide = dynamic(
  () => import('@splidejs/react-splide/dist/js/components/SplideSlide'),
  {ssr: false}
)

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Home | GHYF</title>
      </Head>
      <div className="flex flex-col lg:grid lg:grid-cols-12">
        <div className="col-span-9 bg-black block">


        <div className="p-12 pr-12 lg:pt-32">
          <h1 className="text-6xl lg:text-9xl text-red-600 font-extrabold">
            Global <span className="text-white">Health</span> Youth Foundation
          </h1>

          <h2 style={{ fontFamily: "Mr Dafoe", transform: "rotate(-6deg)" }} className="text-yellow-300 text-3xl lg:text-6xl pt-6 lg:hidden">(R)Evolutionising Global Health</h2>

            <div style={{ top: "10%" }} className="text-center bg-white rounded-full p-6 border-8 flex flex-wrap flex-col border-red-600 h-48 w-48 lg:h-64 lg:w-64 content-center lg:float-right mt-10 lg:mt-0">
              <div>
                <img className="inline-block m-auto object-contain h-24 lg:h-40" alt="GHYF Logo" src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto,w_150/v1598529986/ghyf/KOSHA_-GHYF.png" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">GHYF</h3>
              </div>
            </div>

          <h2 style={{ fontFamily: "Mr Dafoe", transform: "rotate(-6deg)" }} className="text-yellow-300 text-3xl lg:text-6xl pt-6 lg:flex hidden">(R)Evolutionising Global Health</h2>
        </div>


        </div>
        <div className="col-span-3 bg-red-600 lg:pt-32 p-10">
          <p className=" text-2xl lg:text-4xl text-white ">
            A youth driven think tank which aims to foster youth engagement and provide platform to Empower Young People to become Global Health Leaders
          </p>
        </div>
      </div>

      <div className="bg-black block">
        <div className="p-12 lg:p-32">


          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">
            <div className="col-span-1 flex flex-wrap">
              <img className="m-auto mt-10 lg:mt-0 align-middle" src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto,w_600/v1600608690/ghyf/yingchou-han-IJrIeCs3D4g-unsplash.png" alt="Youth" />
            </div>
            <div className="col-span-1 text-center">
              <h2 className="text-red-600 text-6xl lg:text-8xl font-extrabold flex items-center justify-center font-lato">Mission</h2>
              <div className="content text-white text-xl lg:text-3xl mt-6 lg:p-6 items-center">
                <p>
                To form a youth-driven Think Tank to engage
                youth in the policy making process and inspire to
                lead a platform for students and young
                professionals in the field of Global Health to
                engage, network and build capacity through
                innovative ideas, professional development and
                discussions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:mt-48">
            <div className="col-span-1 text-center flex items-center justify-center">
              <div className="content text-white text-xl lg:text-3xl mt-6 lg:p-6 items-center">
                <p>
                To Promote youth to enact Tangible changes, in
                improving Global Health and achieving Health
                Equity by fostering quality and ethical research,
                education, advocacy, leadership, and community
                action, while building a peer and mentorship
                network in the process
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-wrap">
              <img className="align-middle m-auto mt-10 lg:mt-0" src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto,w_600/ghyf/hannah-olinger-NXiIVnzBwZ8-unsplash.png" alt="Youth" />
            </div>
          </div>

    </div>

      </div>

      <div className="bg-black">
        <div style={{ background: "linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(220,38,38,1) 50%, rgba(220,38,38,1) 50%)" }} className="pt-12 lg:pl-36 lg:pr-36 p-10 lg:p-28">
          <div className="header text-center">
            <h2 className="text-6xl lg:text-8xl text-white font-extrabold font-lato">Values</h2>
          </div>
          <div className="grid grid-rows-4 grid-cols-1 px-4 lg:grid-cols-4 lg:grid-rows-1 lg:space-x-4 mt-12">

            {
              [
                {text: "Enhance Critical Thinking", icon: "https://res.cloudinary.com/poorna/image/upload/v1619855802/ghyf/streamline-icon-light-bulb-shine_200x200.png"},
                {text:"Youth Dialogue and Partnership", icon: "https://res.cloudinary.com/poorna/image/upload/v1619856232/ghyf/streamline-icon-presentation_200x200.png"},
                {text:"Health and Equity", icon: "https://res.cloudinary.com/poorna/image/upload/v1619856312/ghyf/streamline-icon-insurance-hands_200x200.png"},
                {text:"Sustainability and Innovation", icon: "https://res.cloudinary.com/poorna/image/upload/v1619856347/ghyf/streamline-icon-recycling-sign_200x200.png"}
              ].map(e=>
                <div key={Math.random()} className="lg:col-span-1 p-1 lg:p-3">
                <div className="shadow bg-white p-4 lg:p-6 rounded-md flex flex-wrap justify-center items-center minHCard">
                  <img className="mx-auto" src={e.icon} alt={e.text} />

                  <div className="text-center mx-auto p-1 lg:p-4 mt-6 block">
                    <p className="text-1xl uppercase font-extrabold text-center">{e.text}</p>
                  </div>
                </div>
              </div>
                )
            }
          </div>
        </div>
      </div>


      <div className="bg-black">
        <div style={{ background: "linear-gradient(180deg, rgba(220,38,38,1) 50%, rgba(220,38,38,1) 50%, rgba(0,0,0,1) 50%" }} className="pt-12 lg:pl-36 lg:pr-36 p-10 lg:p-28">
          <div className="header text-center">
            <h2 className="text-6xl lg:text-8xl text-white font-extrabold font-lato">Our Partners</h2>
          </div>
          <div className="mt-12">
            <Splide options={{
              rewind: true,
              gap: '1rem'
            }}>
                {
                  [
                    {icon: "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto,w_500/v1619869910/ghyf/partners/UNMGCY_Logo.png"},
                    {icon: "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto,w_500/v1619869910/ghyf/partners/GI_Labs.png"},
                    {icon: "https://res.cloudinary.com/poorna/image/upload/v1619869910/ghyf/partners/APHN_Logo.png"},
                    {icon: "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto,w_500/v1619869910/ghyf/partners/Pondi_Govt_Logo.png"},
                    {icon: "https://res.cloudinary.com/poorna/image/upload/c_scale,w_500/v1619869910/ghyf/partners/un-logo.png"},
                    {icon: "https://res.cloudinary.com/poorna/image/upload/v1619869910/ghyf/partners/SIMSA_Logo.jpg"},
                    {icon: "https://res.cloudinary.com/poorna/image/upload/v1619869910/ghyf/partners/SAC_logo.jpg"}
                  ].map(e=>
                    <SplideSlide key={Math.random()}>
                      <img className="mx-auto max-h-28" src={e.icon} alt="" />
                    </SplideSlide>
                    )
                }
            </Splide>
          </div>
        </div>
      </div>

    </div>
  )
}