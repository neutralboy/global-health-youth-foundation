const TeamMember = ({ name, image, description, role }) => (
    <div className="p-16 bg-black">
        <div>
            <h2 className="text-6xl text-red-600 font-extrabold inline">{name}</h2>
            <h3 className="text-3xl text-white inline p-3 ml-6 bg-red-600 float-right">{role}</h3>
        </div>
        <div className="grid grid-cols-12 pt-16">
            <div className="col-span-4 flex flex-wrap">
                <img className="mx-auto rounded-full h-80" alt={name} src={image} />
            </div>
            <div className="col-span-8 flex flex-wrap">
                <div>
                    <p className="text-white text-3xl">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default TeamMember;