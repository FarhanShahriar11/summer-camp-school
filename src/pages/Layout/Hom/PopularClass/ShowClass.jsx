

const ShowClass = ({ singleClass }) => {

    const { imageURL, seat } = singleClass;

    return (
        <div data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <div className="border shadow-2xl relative group overflow-hidden" >
                <div className="">
                    <img className="w-full h-60" src={imageURL} alt="" />
                </div>

                <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 duration-200">
                    <div className="relative p-8 bg-gradient-to-b from-transparent to-black w-full">
                        <p className="text-xl text-center text-lime-400 font-semibold pt-16 tracking-wider title-font">Students: {seat}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowClass;