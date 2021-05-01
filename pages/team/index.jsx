import Head from "next/head";

import TeamMember from "./../../components/TeamMember";

const Team = ({ data }) => {
    return(
        <div>
            <Head>
                <title>Team | GHYF</title>
            </Head>
        <div className="grid grid-cols-12">
            <div className="col-span-9 bg-red-600 pt-32 p-12 flex justify-center items-center pb-28">
                <h1 className="text-9xl text-center font-extrabold text-white">Team</h1>
            </div>
            <div className="col-span-3 bg-black p-12 flex flex-wrap justify-center items-center">
                <img src="inline-block m-auto" alt="" src="https://res.cloudinary.com/poorna/image/upload/v1619872911/ghyf/streamline-icon-team-meeting_200x200.png" />
            </div>
        </div>

        <div>
            {
                data.map(e=>
                    <TeamMember key={Math.random()} {...e} />
                    )
            }
        </div>

        </div>
    )
}

export default Team;

export async function getStaticProps(ctx){
    const teamData = [{
        name: "Sri Hari Govind",
        role: "Director",
        image: "https://res.cloudinary.com/poorna/image/upload/c_scale,w_600/ghyf/IMG_6500.png",
        description: `
        A med student having worked extensively with various grass-root level organisations in various capacities, his main
                interests lie in Global Health Policy and Advocacy along with
                Medical Anthropology. He is a UN Youth delegate of India, is
                currently working with UN MGCY in their Health and Gender
                Taskforce and has worked with the Ministry of Health of
                Vietnam and also interned at Harvard Medical School Centre
                for Global Health Delivery. He will be working towards
                External Representation of the organization focusing on
                Policy and Advocacy.`
        },
        {
            name: "Fazlur Rehman Khan",
            role: "Chief Executive Officer",
            image: "https://res.cloudinary.com/poorna/image/upload/c_scale,w_600/v1619874740/ghyf/Screenshot_2020-07-27_at_9.54.00_PM.png",
            description: `Develops an annual operating budget for review and approval by the
            board of governors. He also prepares monthly financial reports and
            
            analysis, and contributes to the maintenance of an accurate , up-to-
            date ledger.
            
            His areas of interest include public policy, public finance, public
            infrastructure, urban and rural local bodies, urban development,
            agriculture & rural development, poverty alleviation, welfare,
            education and skill development, health, environment and sustainable
            development, ICT in development, and issues in good governance
            with specific focus on accountability and public service delivery`
        },
        {
            name: "Leah Sarah Peer",
            role: "Head of Growth",
            image: "",
            description: `A medical student at Saint James School of Medicine and a graduate
            of Concordia University, Specialization in Biology, Minor in Human
            Rights in Montreal, Quebec, Canada. Through her interactions with
            vulnerable populations in Costa Rica, South Africa, Canada and
            Anguilla, Leah was inspired to embark on her own advocacy journey.
            Mingling her passion for medicine with her human rights endeavours
            she aspires to serve humanity. Alongside her medical studies, Leah
            loves voicing her thoughts through writing as she believes being
            publicly vocal on issues that matter is the first step of committing to
            change.`
        },
        {
            name: "Aishwarya Mani",
            role: "Head of Arts in Health",
            image: "https://res.cloudinary.com/poorna/image/upload/c_scale,w_600/v1619874779/ghyf/IMG_E3507.png",
            description: `A medical Student with a firm interest in Global Surgery and
            Orthopaedics. She believes that medicine can be revolutionised from
            its traditional practices into a field which includes creativity, music
            and art. New practices such as music therapy , art therapy , Medi
            clowning are her forte for research and she plans to globalise this in a
            large scale in future for the betterment of global health . She believes
            in gender equality and uses sustainability as her go to mantra.`
        },
        {
            name: "Siddhi Rangari",
            role: "Head of Social Media and Marketing",
            image: "",
            description: `A medical student working on designing and increasing the social
            reach.
            Is self taught designer who believes that medical students can
            always be more and do more.`
        },
        {
            name: "Srinay Yareshimi",
            role: "Deputy Head of Communication",
            image: "",
            description: `A medical student who enjoys gaming, traveling and watching
            anime shows in my leisure time, furthermore I am an avid
            environmentalist whose interest lies in the conservation of the
            flora and fauna of the world.`
        },
        {
            name: "Katyayani Goswami",
            role: "Head of Member Engagement",
            image: "https://res.cloudinary.com/poorna/image/upload/c_scale,w_600/v1619874896/ghyf/96c08be9-ef2a-4df9-b959-f5942f5197cc.png",
            description: `An honorary scholarship recipient at Madras Medical College, She is an aspiring
            Neurosurgeon in her third year of undergraduate study. She's been a part of several
            NGOs and student run organizations. Her keen interest in arts has gathered her
            multiple national and state level awards. She loves playing football and is also a part
            of her College's Women Futsal team.
            n the administrative front, she's acted as the school head and is currently the
            Scientific secretary in the college council.
            An active participant of co-curriculars happening around her, she's won several
            awards in singing, dancing and culinary.
            A fierce proponent of Refugee rights and peace, she's been working on several
            projects including driving ahead a trans-national activity on Disaster medicine and
            Refugee rights. She has also undergone an International Training on Disaster
            Management.`
        },
        {
            name: "Stuti Chakraborty",
            role: "Editor-in-Chief (Blog)",
            image: "",
            description: `Currently working at Christian Medical College, Vellore. She is a country representative for Healthcare
            Information for All; part of the SDG 3 as well as Science Policy working group for the United Nations Major
            Group for Children and Youth; a country correspondent for YourCommonwealth; a communications team
            correspondent for the Global Healthcare Workforce Network and a country correspondent for IHP Global.
            She recently started working with Global Health Mentorships as a content facilitator and has also been a
            pioneer member for the launch of the India Chapter of Women in Global Health as a Chapter Officer. She
            was also a youth speaker from India to shed light on the topic of ‘Gender Equity in the Healthcare Sector’
            for the GHWN Youth Hub Online Conference hosted in December 2019. She has represented her country
            across several platforms including being a youth representative from the UN MGCY at the Global
            Conference on Primary Healthcare held in Astana in 2018. In her work, she advocates for young people's
            health with a special focus on the rights of Persons with Disabilities. She wishes to pursue research in the
            field of neurosciences in the near future and recently joined the International Youth Neuroscience
            Association and Sci4Teens as a mentor. She has authored a paper on addressing the existing gaps
            between the developed and developed world, published jointly by the JSPG and UN MGCY in the Special
            Issue on Emerging Technologies which was presented in May 2020 at the United Nations Commission on
            Science and Technology for Development and was also a panelist for the Public Interest in Technology
            (PIT-UN) webinar organised by New America and JSPG to talk about the same`
        },
];
    return{
        props: { data: teamData }
    }
}