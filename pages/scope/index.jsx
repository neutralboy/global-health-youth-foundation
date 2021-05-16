import Head from "next/head";

import ScopeCard from "./../../components/ScopeCard";
import ScopeAll from "./../api/scope-all";

const Scope = ({ data }) => (
    <div>
        <Head>
            <title>Scope of Work | GHYF</title>
        </Head>
        <div className="grid grid-cols-12">
            <div className="col-span-9 bg-red-600 p-12 flex justify-center items-center lg:pb-28 lg:pt-32">
                <h1 className="text-5xl lg:text-9xl text-center font-extrabold text-white font-lato">Scope of Work</h1>
            </div>
            <div className="col-span-3 p-2 bg-black lg:p-12 flex flex-wrap justify-center items-center">
                <img src="inline-block m-auto" alt="" src="https://res.cloudinary.com/poorna/image/upload/v1619951526/ghyf/streamline-icon-task-list-to-do_200x200.png" />
            </div>
        </div>
        <div className="bg-black">
            <div className="p-6 lg:p-12 lg:pl-24 lg:pr-24">
                <div className="flex flex-col lg:grid lg:grid-cols-12">
                    {
                        data.map(e => 
                            <div key={Math.random()} className="lg:col-span-4 p-2">
                                <ScopeCard {...e} />
                            </div>
                            )
                    }
                </div>
            </div>
        </div>

    </div>
);

export async function getStaticProps(){
    const data = ScopeAll();
    return{
        props: { data }
    }
}

export default Scope;