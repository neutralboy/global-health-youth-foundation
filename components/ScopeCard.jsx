import Link from "next/link";

const ScopeCard = ({ title, desc, slug }) => {
    if(desc){
        if(desc.length > 200){
            desc = desc.slice(0, 200) + "..."
        }
    }else{
        desc = ""
    };
    return (
    <Link href={slug ? "/scope/"+slug : "" }>
        <a>
            <div className="shadow-md bg-white rounded-md">
                <div className="p-8">
                    <h3 className="text-4xl font-black underline">{title}</h3>
                    <p className="pt-4 text-red-600">
                        {desc}
                    </p>
                </div>
            </div>
        </a>
    </Link>
)
}

export default ScopeCard;