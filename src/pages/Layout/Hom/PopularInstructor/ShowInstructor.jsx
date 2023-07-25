

const ShowInstructor = ({ singleInstructor }) => {

    const { image, name } = singleInstructor;

    return (
        <div className="border shadow-xl relative group overflow-hidden"  data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <div className="">
                <img className="w-full h-80" src={image} alt="" />
            </div>

            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 duration-200">
                <div className="relative p-8 bg-gradient-to-b from-transparent to-black w-full space-y-1">
                    
                    <p className="title-info text-sm text-center text-lime-400 tracking-wider title-font">Name: {name}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowInstructor;