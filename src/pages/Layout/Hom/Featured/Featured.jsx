import { Link } from 'react-router-dom';
import './Featured.css'

const Featured = () => {
    return (
        <div className='my-16 featured-banner'>
            <div className='h-full w-10/12 mx-auto flex items-center'>
                <div className='text-white space-y-6' data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="1000"
                    data-aos-duration="1000">
                        
                    <p className='text-xl font-semibold title-info'>Services</p>

                    <h2 className='title-font uppercase tracking-wider text-3xl md:text-4xl font-semibold'>
                        Join us <span className='text-lime-400'>now & get</span> free training
                    </h2>

                    <p className='w-7/12 md:w-5/12 pb-2 text-gray-400 title-info text-sm'>World class academy coaches and player development team. World class / elite competition. World class match, training and learning experiences.</p>

                    <Link to='/login'><button className='bg-lime-400 hover:bg-lime-300 text-lg duration-200 px-10 py-3 title-font tracking-wider text-black font-semibold uppercase rounded-full'>Join Us</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;