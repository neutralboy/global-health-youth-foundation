import Head from "next/head";

import ScopeCard from "./../../components/ScopeCard";
import ScopeAll from "./../api/scope-all";

const Scope = ({ data }) => (
    <div>
        <Head>
            <title>Scope of Work | GHYF</title>
        </Head>
        <div className="grid grid-cols-12">
            <div className="col-span-9 bg-red-600 pt-32 p-12 flex justify-center items-center pb-28">
                <h1 className="text-9xl text-center font-extrabold text-white">Scope of Work</h1>
            </div>
            <div className="col-span-3 bg-black p-12 flex flex-wrap justify-center items-center">
                <img src="inline-block m-auto" alt="" src="https://res.cloudinary.com/poorna/image/upload/v1619951526/ghyf/streamline-icon-task-list-to-do_200x200.png" />
            </div>
        </div>
        <div className="bg-black">
            <div className="p-12 pl-24 pr-24">
                <div className="grid grid-cols-12">
                    {
                        data.map(e => 
                            <div key={Math.random()} className="col-span-4 p-2">
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