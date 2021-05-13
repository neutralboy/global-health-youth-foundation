const TeamMember = ({ name, image, description, role }) => (
    <div className="p-8 lg:p-16 bg-black">
        <div className="lg:inline flex flex-col">
            <div className=" inline ">
                <h2 className="text-4xl lg:text-6xl text-red-600 font-extrabold underline">{name}</h2>
            </div>
        </div>
        <div className="lg:grid lg:grid-cols-12 pt-6 lg:pt-16">
            <div className="lg:col-span-4 flex flex-wrap flex-col">
                <div className="mx-auto">
                    <img className="rounded-full h-80" alt={name} src={image} />
                </div>
                <div className="p-4 mx-auto text-center">
                    <h3 className="text-xl lg:text-3xl text-white p-3 bg-red-600">{role}</h3>
                </div>
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