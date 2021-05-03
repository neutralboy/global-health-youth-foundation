import Head from "next/head";

const AccBlock = ({ title, desc, points }) => (
    <div className="p-20">
        <div>
            <h1 className="text-6xl text-red-600 font-black">{title}</h1>
            <div className="pt-6">
                <p className="text-2xl text-white">
                    {desc}
                </p>
                {points &&
                    <div>
                        <p className="text-white">For example:</p>
                        <ul className="list-disc text-white">
                            {
                                points.map(i => <li>{i}</li>)
                            }
                        </ul>
                    </div>
                }
            </div>
        </div>
    </div>
);

const Accountability = ({ data }) => (
    <div className="bg-black">
        <Head>
            <title>Accountability | GHYF</title>
        </Head>
        <div className="pt-18">
            {
                data.map(e=>
                    <AccBlock {...e} />
                    )
            }
        </div>
    </div>
);

export async function getStaticProps(){
    const data = [
        {
            title: `A CULTURE OF TRANSPARENCY
            at Global Health Youth
            Foundation`,
            desc: `There’s an old saying that knowledge is power. That’s why transparency—or open access to information—is a key tenet that guides the work of the
            Global Health Youth Foundation Transparency is important not just for how citizens interact with powerful government and business interests, but
            also for organizations like ours that accept funding from a variety of donors. As Upton Sinclair once said, “It is difficult to get a man to understand
            something, when his salary depends on his not understanding it.” Understanding how an organization is funded helps observers to judge that
            organization’s independence.Without proper protections and transparency, donations could have undue influence on think tank research and policy
            recommendations.`
        },
        {
            title: `How Global Health Youth
            Foundation Practices Transparency`,
            desc: `That’s why Global Health Youth Foundation (GHYF) made the decision to be completely transparent about where its funding comes from, and how
            donations support the valuable work that we do.`,
            points: [
                `Information about GHYF’s funders is available on our website. With just two clicks from our homepage, any visitor can view a spreadsheet with a
                specific breakdown of donations ranked by size, covering 85 percent of our fiscal year 2020 funding. The remaining 15 percent comes from
                many small donors. The spreadsheet includes the name of the donor, the amount donated, and the program goal supported. In a separate
                document, we list all of our funders, including individuals who donated to GHYF`,
                `Many organizations place donations from corporate foundations in a “foundations” category. GHYF categorizes these donations as “corporate”
                funding, an extra step towards transparency.`,
                `GHYF also observes transparency in our internal communications. Transparency guides interactions between accounting and our program staff.
                For example, we share our financial results and indirect costs freely throughout our organization. And our leadership displays appropriate
                transparency in communications to staff and the public around major institutional decisions—including financial decisions.`
            ]
        },
        {
            title: `Transparency Matters for GHYF’s
            Reputation for Independence`,
            desc: `Transparency supports one of GHYF’s core values: independence. At GHYF, we believe that our ability to achieve our mission depends on research
            and program work that rises above partisan politics, institutional or personal allegiances, or sources of financial support. When accepting donations,
            we convey to our partners and funders our strict commitment to unbiased judgment in our research findings.GHYF works closely with corporate
            partners and takes corporate donations in part because the private sector moves faster and can be quite influential with the public sector. But GHYF
            
            makes clear to funders that our work product cannot be changed or require sign off from a donor—the integrity of our research and our on-the-
            ground projects always comes first.GHYF prides itself on rigorous, independent analysis. Financial transparency helps reinforce our reputation. This
            
            candor ensures our credibility, and helps build trust for GHYF as an independent organization that works to “turn big ideas into action.”`
        },
        {
            title: `Help GHYF Solve the World's Most
            Urgent Global Problems with a Gift
            Today`,
            desc: `Today’s environmental challenges are complex and global in nature. They call for visionary and ambitious action grounded in sound science and
            objective analysis - the kind of action that has distinguished GHYF’s record of effectiveness. Your gift to GHYF will support this work.
            GHYF is unique in its ability to create solutions that protect the Earth, and in doing so, improve people's lives. Thank you for supporting this critical
            work.
            To ensure accurate credit for your contribution, please fill out the form below as completely as possible. You can also login to pre-populate this form.
            You will receive an email confirming receipt of your gift`
        }
    ];
    return {
        props: { data }
    }
}

export default Accountability;