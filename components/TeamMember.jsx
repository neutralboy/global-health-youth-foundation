const TeamMember = ({ name, image, description, role }) => (
    <div className="p-8 lg:p-16 bg-black">
        <div className="lg:inline flex flex-col">
            <div className=" inline ">
                <h2 className="text-4xl lg:text-6xl text-red-600 font-extrabold underline">{name}</h2>
            </div>
            <div className="mt-2 lg:mt-0 lg:float-right lg:inline lg:ml-6 ">
                <h3 className="text-xl lg:text-3xl text-white p-3 bg-red-600">{role}</h3>
            </div>
        </div>
        <div className="lg:grid lg:grid-cols-12 pt-6 lg:pt-16">
            <div className="lg:col-span-4 flex flex-wrap">
                <img className="mx-auto rounded-full h-80" alt={name} src={image} />
            </div>
            <div className="lg:col-span-8 flex flex-wrap mt-4 ">
                <div>
                    <p className="text-white text-xl lg:text-3xl">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default TeamMember;