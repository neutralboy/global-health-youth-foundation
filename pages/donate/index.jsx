import Head from "next/head";

const Donate = () =>(
    <div>
        <Head>
            <title>Donate | GHYF</title>
        </Head>
        <div className="grid grid-cols-12">
            <div className="col-span-9 bg-red-600 p-12 flex justify-center items-center lg:pb-28 lg:pt-32">
                <h1 className="text-5xl lg:text-9xl text-center font-extrabold text-white font-lato">Donate</h1>
            </div>
            <div className="col-span-3 p-2 bg-black lg:p-12 flex flex-wrap justify-center items-center">
                <img src="inline-block m-auto" alt="" src="https://res.cloudinary.com/poorna/image/upload/q_auto/v1620133657/ghyf/streamline-icon-love-it-hand-give_200x200.png" />
            </div>
        </div>
        <div className="bg-black">


            <div className="p-6 lg:p-14 pt-10 lg:pt-20">
                <h2 className="text-4xl lg:text-5xl font-black text-red-600 font-lato">Ways to Give</h2>
                <div className="pt-3 lg:pt-6 text-lg lg:text-2xl">
                    <p className="text-white">
                    Your support helps GHYF to advance the rapid, systemic changes that the world needs to slow climate change, improve livelihoods and get on a path to a
                    sustainable, prosperous future. GHYF works with decision makers and other partners around the world to transform societies and economies, applying
                    our “count it, change it, scale it” approach to advance fresh solutions to seven urgent global challenges: Food, Forests, Water, Energy, Cities, Climate and
                    the Ocean.
                    </p>
                    <p className="text-white">
                    We guarantee to put your gift to highly effective use.We want to make it easy for you to support GHYF! You can make a gift now by visiting our DONATE
                    page. Additional options are described below.
                    </p>
                </div>
            </div>

            <div className="p-6 lg:p-14">
                <h2 className="text-4xl lg:text-5xl font-black text-red-600 font-lato">The Annual Fund: Make a Gift</h2>
                <div className="pt-3 lg:pt-6 ttext-lg lg:text-2xl">
                    <p className="text-white">
                    Gifts from individuals and family foundations provide a pool of critical unrestricted funds that support GHYF’s daily operations. These
                    unrestricted dollars support ongoing activities ranging from research and analysis to the outreach needed to put our products in the hands of
                    decision makers around the world. <br/>The Annual Fund also provides support for new initiatives each year.
                    </p>
                    <ul className="text-white list-disc pl-10">
                        <li>Make an Annual Gift: Support GHYF with a tax-deductible contribution.</li>
                        <li>Make a Matching Gift: Many companies match gifts made by employees to non-profit organizations. Increase the impact of your gift by
                            asking your employer to match your contributions to GHYF. <u>GHYF’s PAN No : AADTG6539P</u></li>
                        <li>Make a Recurring Gift: Support GHYF with a monthly, quarterly or annually recurring gift. Each January GHYF will send a tax receipt confirming your total
                            contributions made during the previous calendar year.</li>
                    </ul>
                </div>
            </div>

            <div className="p-6 lg:p-14">
                <h2 className="text-4xl lg:text-5xl font-black text-red-600 font-lato">Sustainer’s Circle: Become a Member</h2>
                <div className="pt-3 lg:pt-6 text-lg lg:text-2xl">
                    <p className="text-white">
                        Join the Sustainer’s Circle: The Sustainer’s Circle is a group of individuals whose support of ₹100,000 or more helps GHYF respond to emerging
                        opportunities, seed new work and invest in innovation. Members are invited to informative, exciting events and briefings, and receive weekly
                        updates on GHYF’s work.
                    </p>
                    <div>
                        <p className="text-yellow-300">TO ENSURE PROPER CREDIT, PLEASE NOTIFY US WHEN YOU MAKE A GIFT:</p>
                        <div className="pl-10 text-white">
                            <p>Azaz Mirza Baig</p>
                            <p>Development Operations Coordinator</p>
                            <p>Phone: +91 - 8341510032</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="p-6 lg:p-14">
                <h2 className="text-4xl lg:text-5xl font-black text-red-600 font-lato">Planned & Estate Gifts</h2>
                <div className="pt-3 lg:pt-6 text-lg lg:text-2xl">
                    <p className="text-white">
                        To leave a gift to GHYF in your will or trust, please use the following language:
                    </p>
                    <div className="pb-10">
                        <p className="text-yellow-300">For a specific bequest:</p>
                        <div className="pl-10 text-white">
                            <p>
                                I give and bequeath unto the Global health Youth Foundation, PAN No : AADTG6539P, the sum of ₹_____ to be used for general charitable purposes.
                            </p>
                        </div>
                    </div>

                    <div className="pb-10">
                        <p className="text-yellow-300">For a residuary bequest:</p>
                        <div className="pl-10 text-white">
                            <p>
                            I give and bequeath ___% of my residuary estate to the World Resources Institute, PAN No : AADTG6539P, to be used for its general charitable
                            purposes.
                            </p>
                        </div>
                    </div>

                    <div className="pb-10">
                        <p className="text-yellow-300">For a designated or endowed bequest:</p>
                        <div className="pl-10 text-white">
                            <p>
                            I give and bequeath unto the Global Health Youth Foundation, PAN No : AADTG6539P, (the sum of ₹)/(% of my residuary estate) to be used by it for
                            [state designation or purpose]. In the event the purpose for which this bequest has been designated or restricted can no longer be accomplished, I
                            direct that it be used by the Global Health Youth Foundation for such similar charitable purposes as it shall determine.
                            </p>
                        </div>
                    </div>

                    <div className="pb-10 text-lg lg:text-xl text-white font-black">Please contact Aishwarya for additional information about GHYF's Planned Giving program or to make a legacy gift.</div>

                </div>
            </div>

        </div>
    </div>
)

export default Donate;