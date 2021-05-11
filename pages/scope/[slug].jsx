import Head from "next/head";

import ScopePaths from "./../api/scope-paths";
import Scope from "./../api/scope";

const ScopeSlug = ({data}) => {
    return(
        <div>
        <Head>
            <title>{data.title} | GHYF</title>
        </Head>
        <div className="grid grid-cols-12">
            <div className="col-span-9 bg-red-600 p-12 flex justify-center items-center lg:pb-28 lg:pt-32">
                <h1 className="text-4xl lg:text-6xl text-center font-extrabold text-white font-lato">{data.title}</h1>
            </div>
            <div className="col-span-3 p-2 bg-black lg:p-12 flex flex-wrap justify-center items-center">
                <img className="m-auto" alt="" src="https://res.cloudinary.com/poorna/image/upload/v1619951526/ghyf/streamline-icon-task-list-to-do_200x200.png" />
            </div>
        </div>
        <div className="img-div flex flex-wrap p-10">
            <img className="m-auto" src={data.image} alt={data.title} />
        </div>
        <div className="content p-12">
            <p className="text-lg">{data.desc}</p>
        </div>

        </div>
    )
}

export async function getStaticProps({ params }){
    const data = Scope(params.slug);
    return {
        props: { data }
    }

}

export async function getStaticPaths(){
    const spj = ScopePaths();
    const paths = [];

    for (let index = 0; index < spj.length; index++) {
        const element = spj[index];
        paths.push( { params:{ slug: element } } );
    };

    return{
        paths: paths,
        fallback: false
    }
}

export default ScopeSlug;